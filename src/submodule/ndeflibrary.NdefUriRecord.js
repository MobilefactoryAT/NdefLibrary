/****************************************************************************
**
** Copyright (C) 2012-2014 Sebastian Höbarth, http://www.mobilefactory.at/
** Original version copyright (C) 2012 Nokia Corporation and/or its subsidiary(-ies).
** All rights reserved.
**
** This file is based on the respective class of the Connectivity module
** of Qt Mobility (http://qt.gitorious.org/qt-mobility).
**
** Ported to Javascript by Sebastian Höbarth (2014)
** More information: http://ndef.codeplex.com/
**
** GNU Lesser General Public License Usage
** This file may be used under the terms of the GNU Lesser General Public
** License version 2.1 as published by the Free Software Foundation and
** appearing in the file LICENSE.LGPL included in the packaging of this
** file. Please review the following information to ensure the GNU Lesser
** General Public License version 2.1 requirements will be met:
** http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html.
**
** GNU General Public License Usage
** Alternatively, this file may be used under the terms of the GNU General
** Public License version 3.0 as published by the Free Software Foundation
** and appearing in the file LICENSE.GPL included in the packaging of this
** file. Please review the following information to ensure the GNU General
** Public License version 3.0 requirements will be met:
** http://www.gnu.org/copyleft/gpl.html.
**
****************************************************************************/

function initLibraryNdefUriRecord (context) {
	'use strict';

	var NdefLibrary = context.NdefLibrary;
  

	/// <summary>
    /// The URI record as specified by the NFC Forum URI record type definition.
    /// </summary>
    /// <remarks>
    /// The record stores a URI and can be stored on a tag or sent to another device.
    /// Several of the most common URI headers are automatically abbreviated in order
    /// to keep the record as small as possible. URIs will be encoded using UTF-8.
    /// 
    /// This record can either be used stand alone, or as part of another record
    /// like the Smart Poster (<see cref="NdefSpRecord"/>).
    /// </remarks>
	var ndefUriRecord = NdefLibrary.NdefUriRecord = function(opt_config) {
		
		/// <summary>
        /// Get the raw URI as stored in this record, excluding any abbreviations.
        /// </summary>
        /// <remarks>Gets the raw contents of the URI, exclusive the first byte of the
        /// record's payload that would contain the abbreviation code.
        /// If the URI has been abbreviated, this method returns retuns the actual URI
        /// text as stored on the tag. To get the full URI that has been expanded with
        /// the abbreviated URI scheme, use the normal Uri accessor.</remarks>
		this.RawUri = new Array();
		
		/// <summary>
        /// URI stored in this record.
        /// The abbreviation will be handled behind the scenes - getting and 
        /// setting this property will always work on the full URI.
        /// </summary>
        /// <remarks>
        /// Note that this property / class does not escape the URI data
        /// string to avoid double-escaping and to allow storing unescaped
        /// URIs if allowed by the protocol.
        /// For generic URLs, it's recommended to escape the URL string when
        /// sending it to this class, e.g., with System.Uri.EscapeUriString().
        /// </remarks>
		this.Uri = "";
  		
  		
  		///Constructors
		if (arguments.length == 1) {
			NdefLibrary.NdefRecord.call(this, arguments[0]);
		} 
		else {
	  		/// <summary>
	        /// Create an empty URI record.
	        /// </summary>
	        NdefLibrary.NdefRecord.call(this, NdefLibrary.NdefRecord.TypeNameFormatType.NfcRtd, NdefLibrary.NdefUriRecord.UriType);
		}
	};
	
	
  	// <summary>
    /// Type of the NDEF Text record (well-known, type 'U').
    /// </summary>
  	NdefLibrary.NdefUriRecord.UriType = "U".getBytes(); // U

	/// <summary>
    /// URI abbreviations, as defined in NDEF URI record specifications.
    /// </summary>
  	NdefLibrary.NdefUriRecord.Abbreviations = [
		"",
		"http://www.",
		"https://www.",
		"http://",
		"https://",
		"tel:",
		"mailto:",
		"ftp://anonymous:anonymous@",
		"ftp://ftp.",
		"ftps://",
		"sftp://",
		"smb://",
		"nfs://",
		"ftp://",
		"dav://",
		"news:",
		"telnet://",
		"imap:",
		"rtsp://",
		"urn:",
		"pop:",
		"sip:",
		"sips:",
		"tftp:",
		"btspp://",
		"btl2cap://",
		"btgoep://",
		"tcpobex://",
		"irdaobex://",
		"file://",
		"urn:epc:id:",
		"urn:epc:tag:",
		"urn:epc:pat:",
		"urn:epc:raw:",
		"urn:epc:",
		"urn:nfc:"
	];
	
	
	/// <summary>
    /// Checks if the record sent via the parameter is indeed a URI record.
    /// Only checks the type and type name format, doesn't analyze if the
    /// payload is valid.
    /// </summary>
    /// <param name="record">Record to check.</param>
    /// <returns>True if the record has the correct type and type name format
    /// to be a URI record, false if it's a different record.</returns>
    NdefLibrary.NdefUriRecord.isRecordType = function(record){
        if (record.getType() == null || record.getType().length == 0) return false;
        return (record.getTypeNameFormat() == NdefLibrary.NdefRecord.TypeNameFormatType.NfcRtd && arraysEqual(record.getType(),NdefLibrary.NdefUriRecord.UriType));
    };

	//Derive from NdefRecord
	ndefUriRecord.prototype = new NdefLibrary.NdefRecord();
	ndefUriRecord.prototype.constructor = NdefLibrary.NdefUriRecord;

	ndefUriRecord.prototype.getRawUri = function(){
		if (this.getPayload() == null || this.getPayload().length == 0)
        	return null;

        var code = this.getPayload()[0];
        if (code != 0)
        {
        	console.log("NdefExceptionMessages.ExRawUriNoAbbreviation");
        }

        var rawUri = new Array(this.getPayload().length - 1);
        var Payload = this.getPayload();
        arrayCopy(Payload, 1, rawUri, 0, Payload.length - 1);
        // Array.Copy(Payload, 1, rawUri, 0, Payload.Length - 1);
        
        return rawUri;
  	};
  	
  	ndefUriRecord.prototype.setRawUri = function(value){
		var payload = new Array(value.length + 1);
        payload[0] = 0;
        arrayCopy(value, 0, payload, 1, value.length);
        // array.Copy(value, 0, Payload, 1, value.Length);
        this.setPayload(payload);
  	};
  	
  	ndefUriRecord.prototype.setUri = function(value){
		var uriString = value;
        // var encoding = Encoding.UTF8;
        var useAbbreviation = 0;

        for (var i = 1; i < NdefLibrary.NdefUriRecord.Abbreviations.length; i++)
        {
            if (uriString.startsWith(NdefLibrary.NdefUriRecord.Abbreviations[i]))
            {
                useAbbreviation = i;
                break;
            }
        }

        // Can abbreviate the URI
        var abbrevLength = NdefLibrary.NdefUriRecord.Abbreviations[useAbbreviation].length;
        
        var plainUri = uriString.replace(NdefLibrary.NdefUriRecord.Abbreviations[useAbbreviation],"");
        var encodedLength = getEncodeURILength(plainUri);
        // var encodedLength = encoding.GetByteCount(uriString.ToCharArray(), abbrevLength,
                              // uriString.Length - abbrevLength);
                              
        var Payload = new Array(encodedLength + 1);
        Payload[0] = useAbbreviation;

		var escapedStr = encodeURI(plainUri);
		var escapedStrBytes = escapedStr.getBytes();
		arrayCopy(escapedStrBytes, 0, Payload, 1, escapedStrBytes.length);
        // encoding.GetBytes(uriString, abbrevLength, uriString.Length - abbrevLength, Payload, 1);
		
		this.setPayload(Payload);
  	};
  	
  	ndefUriRecord.prototype.getUri = function(value){
  		var Payload = this.getPayload();
  		if (Payload == null || Payload.length == 0){
            return "";
        }
        
        // var encoding = Encoding.UTF8;
        var code = Payload[0];
        if (code >= NdefLibrary.NdefUriRecord.Abbreviations.length){
            code = 0;
        }
        
        var uri = new Array(Payload.length - 1);
        
        arrayCopy(Payload, 1, uri, 0, Payload.length - 1);
        // Array.Copy(Payload, 1, uri, 0, Payload.Length - 1);
        
        return NdefLibrary.NdefUriRecord.Abbreviations[code].concat( decodeURI( fromArray(uri) ) );
        // return (Abbreviations[code] + encoding.GetString(uri, 0, uri.Length));
  	};
  
}