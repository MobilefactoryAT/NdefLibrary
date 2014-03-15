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

const DEBUG = false;

const arrayCopy = function() {
      var src, srcPos = 0,
        dest, destPos = 0,
        length;
        
      if (arguments.length === 2) {
        src = arguments[0];
        dest = arguments[1];
        length = src.length;
      } else if (arguments.length === 3) {
        src = arguments[0];
        dest = arguments[1];
        length = arguments[2];
      } else if (arguments.length === 5) {
        src = arguments[0];
        srcPos = arguments[1];
        dest = arguments[2];
        destPos = arguments[3];
        length = arguments[4];
      }
      for (var i = srcPos, j = destPos; i < length + srcPos; i++, j++) if (dest[j] !== null) dest[j] = src[i];
      else throw "array index out of bounds exception";
};

const addToArray = function(array, content) {
      var src, srcPos = 0,
        dest, destPos = 0,
        length;
        
      src = content;
      srcPos = 0;
      dest = array;
      destPos = array.length;
      length = content.length;
      
      for (var i = srcPos, j = destPos; i < length + srcPos; i++, j++) if (dest[j] !== null) dest[j] = src[i];
      else throw "array index out of bounds exception";
};


