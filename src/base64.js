/**
 * @preserve base64.js v0.2.0 (c) 2012 knowledgecode | MIT licensed
 */
/*global atob, btoa, escape, unescape */
/*jslint bitwise: true, browser: true, plusplus: true */
(function () {
    'use strict';

    var id = 'base64',
        m = {},
        b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    /**
     * @name encode
     * @function
     * @param {string} str
     * @return {string} encoded string
     */
    m.encode = (function () {
        if (btoa) {
            return function (str) {
                return btoa(unescape(encodeURIComponent(str)));
            };
        }
        return function (str) {
            var i, j, len, a1, a2, a3, b1, b2, b3, b4, value = [];

            str = unescape(encodeURIComponent(str));
            for (i = 0, j = 0, len = str.length; i < len; i += 3) {
                a1 = str.charCodeAt(i) || 0;
                a2 = str.charCodeAt(i + 1) || 0;
                a3 = str.charCodeAt(i + 2) || 0;

                b1 = (a1 >> 2) & 0x3F;
                b2 = ((a1 & 0x03) << 4) | ((a2 >> 4) & 0x0F);
                b3 = ((a2 & 0x0F) << 2) | ((a3 >> 6) & 0x03);
                b4 = a3 & 0x3F;

                if (!a3) {
                    b4 = 64;
                    if (!a2) {
                        b3 = 64;
                    }
                }
                value[j] = b64.charAt(b1);
                value[j + 1] = b64.charAt(b2);
                value[j + 2] = b64.charAt(b3);
                value[j + 3] = b64.charAt(b4);
                j += 4;
            }
            return value.join('');
        };
    }());

    /**
     * @name decode
     * @function
     * @param {string} str
     * @return {string} decoded string
     */
    m.decode = (function () {
        if (atob) {
            return function (str) {
                return decodeURIComponent(escape(atob(str)));
            };
        }
        return function (str) {
            var i, j, len, b1, b2, b3, b4, a1, a2, a3, value = [];

            str = str.replace(/\=+$/, '');
            for (i = 0, j = -1, len = str.length; i < len; i += 4) {
                b1 = b64.indexOf(str.charAt(i));
                b2 = b64.indexOf(str.charAt(i + 1));
                b3 = b64.indexOf(str.charAt(i + 2));
                b4 = b64.indexOf(str.charAt(i + 3));

                a1 = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x03);
                a2 = ((b2 & 0x0F) << 4) | ((b3 >> 2) & 0x0F);
                a3 = ((b3 & 0x03) << 6) | (b4 & 0x3F);

                value[j++] = String.fromCharCode(a1);
                if (a2) {
                    value[j++] = String.fromCharCode(a2);
                    if (a3) {
                        value[j++] = String.fromCharCode(a3);
                    }
                }
            }
            return decodeURIComponent(escape(value.join('')));
        };
    }());

    /**
     * @name encodeSafe
     * @function
     * @param {string} str
     * @return {string} encoded string (web safe)
     */
    m.encodeSafe = function (str) {
        return m.encode(str).
            replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '.');
    };

    /**
     * @name decodeSafe
     * @function
     * @param {string} str
     * @return {string} decoded string (web safe)
     */
    m.decodeSafe = function (str) {
        return m.decode(
            str.replace(/-/g, '+').replace(/_/g, '/').replace(/\./g, '=')
        );
    };

    // Exposing module
    /*global lego, module */
    if (typeof lego === 'object' && lego.define) {
        // lego.js
        /*jslint unparam: true */
        lego.define(id, [], function (require, exports, module) {
            module.exports = m;
        });
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = m;
    } else {
        // Browser
        window[id] = m;
    }

}());
