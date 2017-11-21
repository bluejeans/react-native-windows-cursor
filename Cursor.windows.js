/**
 * Copyright (c) 2017-present, Blue Jeans, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Cursor
 * @flow
 */
'use strict';

const Cursor = require('react-native').NativeModules.Cursor;

var Cursor = {
  setCursor: function(
    cursor: string
  ): void {
    Cursor.setCursor(cursor)
  }
}

module.exports = Cursor;
