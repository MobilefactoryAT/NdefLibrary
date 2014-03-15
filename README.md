# NDEF Library for Proximity APIs (NFC)
Easily parse and create NDEF records with Javascript.

Copyright (C) 2012-2014 Sebastian Höbarth, http://www.mobilefactory.at/
Original version copyright (C) 2012 Nokia Corporation and/or its subsidiary(-ies).
All rights reserved.

This file is based on the respective class of the Connectivity module
of Qt Mobility (http://qt.gitorious.org/qt-mobility).

Ported to Javascript by Sebastian Höbarth (2014)
More information: http://ndef.codeplex.com/

## Overview

The Proximity APIs for NFC (Near Field Communication) are compatible to NDEF (NFC Data Exchange Format) messages, which are used on NFC tags and to send data between two devices.

While the Proximity APIs include basic support for URIs, they lack support for more in-depth control over the NDEF records, as well as additional standardized record types.

This NDEF Library provides a set of classes that enable you to easily work with NDEF records.

Integrate the library into your Javascript project using npm.


## Reusable NDEF classes

- Parse NDEF message & records from raw byte arrays 
- Extract all information from the bits & bytes contained in the record 
- Create standard compliant records just by providing your data 
- Supports fully standardized basic record types:
  - Smart Poster, URI, Text records 
- Smart URI class: automatically represents itself as the smallest possible NDEF type (URI or Smart Poster), depending on supplied data 
- Convenience classes for: 
  - LaunchApp tags - launch a Windows (Phone) app just by tapping a tag
  - Nokia Accessories tags - let the user choose an app to launch on his Nokia Lumia Windows Phone 8 device
  - WpSettings tags - launch a settings page on Windows Phone 8 (e.g., Bluetooth settings, flight mode). Actually modifying these settings is not allowed by the security model of Windows Phone
  - Android Application Record (AAR) tags - launch an Android app by tapping a tag
  - Geo tags - longitude & latitude of a place, using different Geo URI schemes (more details) 
  - Social tags - linking to social networks like Twitter, Facebook, Foursquare or Skype 
  - SMS tags - defining number and body of the message
  - Mailto tags - sending email messages with recipient address and optional subject and body
  - Telephone call tags - defining the number to call
  - NearSpeak tags - store voice messages on NFC tags, using the custom URI scheme as defined by the NearSpeak app: http://www.nearspeak.at/
- Records check their contents for validity according to standards
- Can throw NdefException in case of content validity issues, with translatable messages defined in a resource file
- Fully documented source code, following Doxygen standards

### Usage example

Create a RAW Ndef Message by defined input:

var recrodType = new Array(1,3,1,3,5,6,7);
var recrodPayload = new Array(1,2,1);
var id = new Array(3,3);
var ndefRecord2 = new NdefLibrary.NdefRecord(NdefLibrary.NdefRecord.TypeNameFormatType.NfcRtd, recrodType);
ndefRecord2.setPayload(recrodPayload);
ndefRecord2.setId(id);

var ndefMessage = new NdefLibrary.NdefMessage(ndefRecord2);
var byteArray = ndefMessage.toByteArray();

Create a RAW Ndef Message by byte array from NFC tag:

var ndefMessage = NdefLibrary.NdefMessage.fromByteArray(byteArray);

### Status & Roadmap

The NDEF library is classified as stable release and is in use in several projects, most importantly Nfc Interactor for Windows Phone (http://www.nfcinteractor.com/).

Any open issues as well as planned features are tracked online:
https://ndef.codeplex.com/workitem/list/basic

### Related Information

Parts of this library are based on the respective code of the Connectivity Module of Qt Mobility (NdefMessage, NdefRecord, NdefUriRecord and NdefTextRecord classes. Original source code: http://qt.gitorious.org/qt-mobility).

More information about the library:
http://www.nfcinteractor.com/ndef-library/

Library homepage:
http://ndef.codeplex.com/

### Version History
0.0.1 - March 2014

Initial Version
