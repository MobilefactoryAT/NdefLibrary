/*! lib-ndeflibrary - v0.0.1 - 2014-03-15 - Sebastian Höbarth */
;(function (global) {

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


// Compiler directive for UglifyJS.  See library.const.js for more info.
if (typeof DEBUG === 'undefined') {
  DEBUG = true;
}


// LIBRARY-GLOBAL CONSTANTS
//
// These constants are exposed to all library modules.


// GLOBAL is a reference to the global Object.
var Fn = Function, GLOBAL = new Fn('return this')();


// LIBRARY-GLOBAL METHODS
//
// The methods here are exposed to all library modules.  Because all of the
// source files are wrapped within a closure at build time, they are not
// exposed globally in the distributable binaries.


/**
 * A no-op function.  Useful for passing around as a default callback.
 */
function noop () { }


/**
 * Init wrapper for the core module.
 * @param {Object} The Object that the library gets attached to in
 * library.init.js.  If the library was not loaded with an AMD loader such as
 * require.js, this is the global Object.
 */
function initLibraryCore (context) {


  // It is recommended to use strict mode to help make mistakes easier to find.
  'use strict';



  /**
   * This is the constructor for the Library Object.  Please rename it to
   * whatever your library's name is.  Note that the constructor is also being
   * attached to the context that the library was loaded in.
   * @param {Object} opt_config Contains any properties that should be used to
   * configure this instance of the library.
   * @constructor
   */
  var NdefLibrary = context.NdefLibrary = function (opt_config) {

    opt_config = opt_config || {};

    return this;
  };


  // LIBRARY PROTOTYPE METHODS
  //
  // These methods define the public API.


  // DEBUG CODE
  //
  // With compiler directives, you can wrap code in a conditional check to
  // ensure that it does not get included in the compiled binaries.  This is
  // useful for exposing certain properties and methods that are needed during
  // development and testing, but should be private in the compiled binaries.

  if (DEBUG) {
    GLOBAL.corePrivateMethod = corePrivateMethod;
  }

}

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


function initLibraryModule (context) {

  'use strict';

  var NdefLibrary = context.NdefLibrary;


  if (DEBUG) {
  }

}

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

function initLibraryNdefRecord (context) {
	'use strict';

	var NdefLibrary = context.NdefLibrary;
  

	/// <summary>
	/// An NDEF record contains a payload described by a type, a length, and an optional identifier.
	/// </summary>
	/// <remarks>
	/// This class is generic and can hold the data of any kind of record.
	/// It follows the specification from the NFC forum for the data format.
	/// 
	/// Ndef Records should usually be placed within an Ndef Message, which will
	/// make sure that for example the message begin / end flags are set correctly.
	/// 
	/// While the NdefRecord class only offers access to the payload as a byte array,
	/// you should rather use specialized sub classes, which offer convenient ways
	/// to handle data stored in the payload through easy access methods.
	/// Such classes are provided for several standardized types.
	/// </remarks>
	var ndefRecord = NdefLibrary.NdefRecord = function(opt_config) {
  	
		/// <summary>
		/// Indicates the structure of the value of the TYPE field.
		/// </summary>
		this._typeNameFormat = NdefLibrary.NdefRecord.TypeNameFormatType.Empty;
		
		/// <summary>
		/// Byte array storing raw contents of the type.
		/// Use Type property to access it whenever possible.
		/// </summary>
		/// <remarks>Direct byte array access provided as virtual
		/// property can't be accessed from constructor.</remarks>
		this._type = [];
		
		/// <summary>
		/// An identifier in the form of a URI reference.
		/// </summary>
		this._id = [];
		
		/// <summary>
		/// Byte array storing raw contents of the payload.
		/// Use Payload property to access it whenever possible.
		/// </summary>
		/// <remarks>Direct byte array access provided as virtual
		/// property can't be accessed from constructor.</remarks>
		this._payload = [];
		    
    
		///Constructors
		if (arguments.length == 2) {
			/// <summary>
			/// Create a new record with the specified type name format and type.
			/// Doesn't set the payload and ID.
			/// </summary>
			/// <param name="tnf">Type name format to use, based on the tnf's standardized
			/// by the Nfc Forum.</param>
			/// <param name="type">Type string.</param>
		    
			this._typeNameFormat = arguments[0];
			if (arguments[1] != null){
			    this.setType(arguments[1]);
			}
		} else if (arguments.length == 1) {
			/// <summary>
			/// Create a new record, copying the information of the record sent through the parameter.
			/// </summary>
			/// <param name="other">Record to copy.</param>
		  	var other = arguments[0];
			
		  	if(other.getType() != null){
		  		this.setType(other.getType());
		  	}
			
		  	if(other.getId() != null){
		  		this.setId(other.getId());
		  	}
			
		  	if(other.getPayload() != null){
		  		this.setId(other.getPayload());
		  	}
		
		  	this._typeNameFormat = other.getTypeNameFormat();
		} 
		else {
			/// <summary>
			/// Create an empty record, not setting any information.
			/// </summary>
			this._typeNameFormat = NdefLibrary.NdefRecord.TypeNameFormatType.Empty;
		}
	};
  

  /// <summary>
  /// Standardized type name formats, as defined by the NDEF record
  /// specification from the Nfc Forum.
  /// </summary>
  ndefRecord.TypeNameFormatType = {
  	/// Empty indicates that no type or payload is associated with this record.
  	"Empty":0x00, 
  	 /// The NFC Forum well-known type follows the RTD type name format defined in the NFC Forum RTD specification.
  	"NfcRtd":0x01, 
  	/// The media type indicates that the TYPE field contains a value that follows the media-type BNF construct defined by RFC 2046.
  	"Mime":0x02, 
  	/// Absolute-URI indicates that the TYPE field contains a value that follows the absolute-URI BNF construct defined by RFC 3986.
  	"Uri":0x03, 
  	/// NFC Forum external type indicates that the TYPE field contains a value that follows the type name format defined in [NFC RTD] for external type names.
  	"ExternalRtd":0x04, 
  	/// Unknown SHOULD be used to indicate that the type of the payload is unknown. This is similar to the "application/octet-stream" media type defined by MIME.
      /// When used, the TYPE_LENGTH field MUST be zero and thus the TYPE field is omitted from the NDEF record.
  	"Unknown":0x05, 
  	/// Unchanged MUST be used in all middle record chunks and the terminating record chunk used in chunked payloads.
  	"Unchanged":0x06,
  	/// Any other type name format; should be treated as unknown. 
  	"Reserved":0x07 
  };

  /// <summary>
  /// An identifier in the form of a URI reference.
  /// </summary>
  ndefRecord.prototype.getId = function(){
  	return this._id;
  };
 
  /// <summary>
  /// An identifier in the form of a URI reference.
  /// </summary>
  ndefRecord.prototype.setId = function(value){
	if (value == null)
	{
	    this._id = null;
	    return;
	}
	this._id = [];
	arrayCopy(value,this._id, value.length);
  };

  /// <summary>
  /// An identifier describing the type of the payload.
  /// </summary>
  ndefRecord.prototype.getType = function(){
  	return this._type;
  };
 
  /// <summary>
  /// An identifier describing the type of the payload.
  /// </summary>
  ndefRecord.prototype.setType = function(value){
	if (value == null)
	{
	    this._type = null;
	    return;
	}
	this._type = [];
	arrayCopy(value,this._type, value.length);
  };

  /// <summary>
  /// An identifier in the form of a URI reference.
  /// </summary>
  ndefRecord.prototype.getPayload = function(){
  	return this._payload;
  };
 
  /// <summary>
  /// An identifier in the form of a URI reference.
  /// </summary>
  ndefRecord.prototype.setPayload = function(value){
	if (value == null)
	{
	    this._payload = null;
	    return;
	}
	this._payload = [];
	arrayCopy(value,this._payload, value.length);
  };
  
 
  /// <summary>
  /// Indicates the structure of the value of the TYPE field.
  /// </summary>
  ndefRecord.prototype.getTypeNameFormat = function(){
  	return this._typeNameFormat;
  };
 
  /// <summary>
  /// Indicates the structure of the value of the TYPE field.
  /// </summary>
  ndefRecord.prototype.setTypeNameFormat = function(value){
	this._typeNameFormat = value;
  };
   
  /// Checks the type name format and type of this record and returns
  /// the appropriate specialized class, if one is available and known
  /// for this record type.
  /// </summary>
  /// <returns>Type name of the specialized class that can understand
  /// and manipulate the payload through convenience methods.</returns>
  ndefRecord.prototype.checkSpecializedType = function(checkForSubtypes){
	//TODO
  };
  
  
  /// <summary>
  /// Checks if the contents of the record are valid; throws an exception if
  /// a problem is found, containing a textual description of the issue.
  /// </summary>
  /// <exception cref="NdefException">Thrown if no valid NDEF record can be
  /// created based on the record's current contents. The exception message 
  /// contains further details about the issue.</exception>
  /// <returns>True if the record contents are valid, or throws an exception
  /// if an issue is found.</returns>
  ndefRecord.prototype.checkIfValid = function(){
  	  // Check Type (according to TNF)
	  if (this._typeNameFormat == NdefLibrary.NdefRecord.TypeNameFormatType.Unchanged ||
	      this._typeNameFormat == NdefLibrary.NdefRecord.TypeNameFormatType.Unknown){
	      // Unknown and unchanged TNF must have a type length of 0
		  if (!(this._type == null ||this._type.length == 0))
		  {
	      	throw "NdefExceptionMessages.ExRecordUnchangedTypeName";
	      }
	  }
	  else{
		  // All other TNF (except Empty) should have a type set
		  // Proximity APIs unstable in some cases when no Type name is set
		  if (this._typeNameFormat != NdefLibrary.NdefRecord.TypeNameFormatType.Empty && (this._type == null || this._type.length == 0))
		  {
	      	throw "NdefExceptionMessages.ExRecordNoType";
	      }
	  }
	  // Check ID
	  // Middle and terminating record chunks MUST not have an ID field
	  if (this._typeNameFormat == NdefLibrary.NdefRecord.TypeNameFormatType.Unchanged && !(this._id == null || this._id.length == 0))
	      throw "NdefExceptionMessages.ExRecordUnchangedId";
	  return true;
  };
  
}
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

function initLibraryNdefMessage (context) {
	'use strict';

	var NdefLibrary = context.NdefLibrary;
  

	/// <summary>
    /// An NDEF message is composed of one or more NDEF records.
    /// </summary>
    /// <remarks>
    /// This class is essentially just a list of records, and provides
    /// the necessary methods to convert all the records into a single
    /// byte array that can be written to a tag and has the correct
    /// flags set (e.g., message begin / end).
    /// NdefMessage can also parse a byte array into an NDEF message,
    /// separating and creating all the individual records out of the array.
    /// 
    /// From the NFC Forum specification document:
    /// NFC Forum Data Exchange Format is a lightweight binary message 
    /// format designed to encapsulate one or more application-defined 
    /// payloads into a single message construct.
    /// 
    /// An NDEF message contains one or more NDEF records, each carrying 
    /// a payload of arbitrary type and up to (2^32)-1 octets in size. 
    /// Records can be chained together to support larger payloads. 
    /// 
    /// An NDEF record carries three parameters for describing its payload: 
    /// the payload length, the payload type, and an optional payload identifier.
    /// </remarks>
	var ndefMessage = NdefLibrary.NdefMessage = function() {
  		
  		//Holds the NdefRecords added to the NdefMessge
  		this._records = new Array();
  		
  		if (arguments != null && arguments.length > 0) {
  			// console.log("Create NdefMessage with "+ arguments.length+" records");
			arrayCopy(arguments, this._records, arguments.length);
		} 
	};
	
	
	ndefMessage.prototype.length = function(){
		if(this._records == null)
			return 0;
		return this._records.length;
  	};
  	
	ndefMessage.prototype.getRecords = function(){
		return this._records;
 	}; 
  	
	ndefMessage.prototype.push = function(value){
		if(value == null){
			return;
		}
		this._records.push(value);
  	};
  	
  	ndefMessage.prototype.clear = function(){
		this._records = new Array();
  	};
  	
  	
  	/// <summary>
    /// Returns the NDEF message parsed from the contents of <paramref name="message"/>.
    /// </summary>
    /// <remarks>
    /// The <paramref name="message"/> parameter is interpreted as the raw message format 
    /// defined in the NFC Forum specifications.
    /// </remarks>
    /// <param name="message">Raw byte array containing the NDEF message, which consists
    /// of 0 or more NDEF records.</param>
    /// <exception cref="NdefException">Thrown if there is an error parsing the NDEF
    /// message out of the byte array.</exception>
    /// <returns>If parsing was successful, the NDEF message containing 0 or more NDEF
    /// records.</returns>
  	NdefLibrary.NdefMessage.fromByteArray = function(message){
		
		var result = new NdefLibrary.NdefMessage();

        var seenMessageBegin = false;
        var seenMessageEnd = false;

        var partialChunk = new Array();
        var record = new NdefLibrary.NdefRecord();

        var i = 0;
        while (i < message.length)
        {
            // console.log("Parsing byte[] to NDEF message. New record starts at {0}", i);

            // Parse flags out of NDEF message header
            var messageBegin = (message[i] & 0x80) != 0;
            var messageEnd = (message[i] & 0x40) != 0;
            var cf = (message[i] & 0x20) != 0;
            var sr = (message[i] & 0x10) != 0;
            var il = (message[i] & 0x08) != 0;
            
            // var typeNameFormat = (NdefLibrary.NdefRecord.TypeNameFormatType)(message[i] & 0x07);
            var typeNameFormat = (message[i] & 0x07);

            // console.log("TypeNameFormat: " + typeNameFormat+" message[i]:"+message[i]);
            // console.log("ShortRecord: " + (sr ? "yes" : "no"));
            // console.log("Id Length present: " + (il ? "yes" : "no"));

            if (messageBegin && seenMessageBegin)
            {
                throw "NdefExceptionMessages.ExMessageBeginLate";
            }
            else if (!messageBegin && !seenMessageBegin)
            {
                throw "NdefExceptionMessages.ExMessageBeginMissing";
            }
            else if (messageBegin && !seenMessageBegin)
            {
                seenMessageBegin = true;
            }

            if (messageEnd && seenMessageEnd)
            {
                throw "NdefExceptionMessages.ExMessageEndLate";
            }
            else if (messageEnd && !seenMessageEnd)
            {
                seenMessageEnd = true;
            }

            if (cf && (typeNameFormat != NdefLibrary.NdefRecord.TypeNameFormatType.Unchanged) && partialChunk.length > 0)
            {
                throw "NdefExceptionMessages.ExMessagePartialChunk";
            }

            // Header length
            var headerLength = 1;
            headerLength += (sr) ? 1 : 4;
            headerLength += (il) ? 1 : 0;

            if (i + headerLength >= message.length)
            {
                throw "NdefExceptionMessages.ExMessageUnexpectedEnd";
            }

            // Type length
            var typeLength = message[++i];

            if ((typeNameFormat == NdefLibrary.NdefRecord.TypeNameFormatType.Unchanged) && (typeLength != 0))
            {
                throw "NdefExceptionMessages.ExMessageInvalidChunkedType";
            }

            // Payload length (short record?)
            var payloadLength;
            if (sr)
            {
                // Short record - payload length is a single octet
                payloadLength = message[++i];
            }
            else
            {
                // No short record - payload length is four octets representing a 32 bit unsigned integer (MSB-first)
                payloadLength = ((message[++i]) << 24);
                payloadLength |= ((message[++i]) << 16);
                payloadLength |= ((message[++i]) << 8);
                payloadLength |= ((message[++i]) << 0);
            }

            // ID length
            var idLength;
            idLength = (il ? message[++i] : 0);

            // Total length of content (= type + payload + ID)
            var contentLength = typeLength + payloadLength + idLength;
            if (i + contentLength >= message.length)
            {
                throw "NdefExceptionMessages.ExMessageUnexpectedEnd";
            }


            if ((typeNameFormat == NdefLibrary.NdefRecord.TypeNameFormatType.Unchanged) && (idLength != 0))
            {
                throw "NdefExceptionMessages.ExMessageInvalidChunkedId";
            }

            if (typeNameFormat != NdefLibrary.NdefRecord.TypeNameFormatType.Unchanged)
            {
                record.setTypeNameFormat(typeNameFormat);
            }

            // Read type
            if (typeLength > 0)
            {
            	// record.Type = new byte[typeLength];
                // Array.Copy(message, (int)(++i), record.Type, 0, typeLength);
                    
                var type = new Array();
                arrayCopy(message,(++i), type, 0, typeLength);
                record.setType(type);
                
                i += typeLength - 1;
            }

            // Read ID
            if (idLength > 0)
            {
                // record.Id = new byte[idLength];
                // Array.Copy(message, (int)(++i), record.Id, 0, idLength);
                
                var id = new Array();
                arrayCopy(message,(++i), id, 0, idLength);
                record.setId(id);

                i += idLength - 1;
            }

            // Read payload
            if (payloadLength > 0)
            {
                // var payload = new byte[payloadLength];
                // Array.Copy(message, (int)(++i), payload, 0, (int)payloadLength);
                
                var payload = new Array();
                arrayCopy(message,(++i), payload, 0, payloadLength);
                record.setPayload(payload);

                if (cf)
                {
                    // chunked payload, except last
                    addToArray(partialChunk, payload);
                    // partialChunk.Write(payload, 0, payload.Length);
                }
                else if (typeNameFormat == NdefLibrary.NdefRecord.TypeNameFormatType.Unchanged)
                {
                    // last chunk of chunked payload
                    addToArray(partialChunk, payload);
                    record.setPayload(partialChunk);
                    
                    // partialChunk.Write(payload, 0, payload.Length);
                    // record.Payload = partialChunk.ToArray();
                }
                else
                {
                    // non-chunked payload
                    record.setPayload(payload);
                }

                i += payloadLength - 1;
            }

            if (!cf)
            {
                // Add record to the message and create a new record for the next loop iteration
                result.push(record);
                record = new NdefLibrary.NdefRecord();
            }

            if (!cf && seenMessageEnd)
                break;

            // move to start of next record
            ++i;
        }


        if (!seenMessageBegin && !seenMessageEnd)
        {
            throw "NdefExceptionMessages.ExMessageNoBeginOrEnd";
        }

        return result;
		
	};
	
  	
  	/// <summary>
    /// Convert all the NDEF records currently stored in the NDEF message to a byte
    /// array suitable for writing to a tag or sending to another device.
    /// </summary>
    /// <returns>The NDEF record(s) converted to an NDEF message.</returns>
  	ndefMessage.prototype.toByteArray = function(){
  		
  		var Count = this._records.length;
  		
		// Empty message: single empty record
        if (Count == 0)
        {
            var tmpNdefMessage = new NdefLibrary.NdefMessage(new NdefLibrary.NdefRecord());
            return tmpNdefMessage.toByteArray();
        }

        var m = new Array();
        
        for (var i = 0; i < Count; i++)
        {
            var record = this._records[i];

            var flags = record.getTypeNameFormat();

            // Message begin / end flags. If there is only one record in the message,
            // both flags are set.
            if (i == 0)
                flags |= 0x80;      // MB (message begin = first record in the message)
            if (i == Count - 1)
                flags |= 0x40;      // ME (message end = last record in the message)

            // cf (chunked records) not supported yet

            // SR (Short Record)?
            if (record.getPayload() == null || record.getPayload().length < 255)
                flags |= 0x10;

            // ID present?
            if (record.getId() != null && record.getId().length > 0)
                flags |= 0x08;

            m.push(flags);

            // Type length
            if (record.getType() != null) m.push(record.getType().length); else m.push(0);

            // Payload length 1 byte (SR) or 4 bytes
            if (record.getPayload() == null)
                m.push(0);
            else
            {
                if ((flags & 0x10) != 0)
                {
                    // SR
                    m.push(record.getPayload().length);
                }
                else
                {
                    // No SR (Short Record)
                    var payloadLength = record.getPayload().length;
                    
                    m.push((payloadLength >> 24));
                    m.push((payloadLength >> 16));
                    m.push((payloadLength >> 8));
                    m.push((payloadLength & 0x000000ff));
                }
            }

            // ID length
            if (record.getId() != null && (flags & 0x08) != 0)
                m.push(record.getId().length);

            // Type length
            if (record.getType() != null && record.getType().length > 0)
            	addToArray(m, record.getType());
                // m.Write(record.Type, 0, record.Type.Length);

            // ID data
            if (record.getId() != null && record.getId().length > 0)
            	addToArray(m, record.getId());
                // m.Write(record.Id, 0, record.Id.Length);

            // Payload data
            if (record.getPayload() != null && record.getPayload().length > 0)
           		addToArray(m, record.getPayload());
                // m.Write(record.Payload, 0, record.Payload.Length);

        }

        return m;
  	};

  

  
}
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


/*global initLibraryCore initLibraryModule initLibrarySubmodule */
var initNdefLibrary = function (context) {

  //Basic library
  initLibraryCore(context);

  // Add a similar line as above for each module that you have.  If you have a
  // module named "Awesome Module," it should live in the file
  // "src/library.awesome-module.js" with a wrapper function named
  // "initAwesomeModule".  That function should then be invoked here with:
  initLibraryModule(context);
  initLibraryNdefRecord(context);
  initLibraryNdefMessage(context);
  
  return context.NdefLibrary;
};


if (typeof define === 'function' && define.amd) {
  // Expose Library as an AMD module if it's loaded with RequireJS or
  // similar.
  define(function () {
    return initNdefLibrary({});
  });
} else {
  // Load Library normally (creating a Library global) if not using an AMD
  // loader.
  initNdefLibrary(this);
}

} (this));
