/*global describe, it, expect, base64 */
describe('base64', function () {
    'use strict';

    it('encode', function () {
        expect(base64.encode('%u')).toEqual('JXU=');
        expect(base64.encode('123')).toEqual('MTIz');
        expect(base64.encode('試験')).toEqual('6Kmm6aiT');
        expect(base64.encode('ﾌﾟｷﾞｬｰ')).toEqual('776M776f7723776e772s772w');
        expect(base64.encode('<br>')).toEqual('PGJyPg==');
        expect(base64.encode('세계 평화')).toEqual('7IS46rOEIO2Pie2ZlA==');
        expect(base64.encode('✓ à la mode')).toEqual('4pyTIMOgIGxhIG1vZGU=');
        expect(base64.encode('')).toEqual('');
        expect(base64.encode()).toEqual('dW5kZWZpbmVk');
    });

    it('decode', function () {
        expect(base64.decode('JXU=')).toEqual('%u');
        expect(base64.decode('MTIz')).toEqual('123');
        expect(base64.decode('6Kmm6aiT')).toEqual('試験');
        expect(base64.decode('776M776f7723776e772s772w')).toEqual('ﾌﾟｷﾞｬｰ');
        expect(base64.decode('PGJyPg==')).toEqual('<br>');
        expect(base64.decode('7IS46rOEIO2Pie2ZlA==')).toEqual('세계 평화');
        expect(base64.decode('4pyTIMOgIGxhIG1vZGU=')).toEqual('✓ à la mode');
        expect(base64.decode('')).toEqual('');
        expect(base64.decode('dW5kZWZpbmVk')).toEqual('undefined');
    });

    it('encodeSafe', function () {
        expect(base64.encodeSafe('%u')).toEqual('JXU.');
        expect(base64.encodeSafe('123')).toEqual('MTIz');
        expect(base64.encodeSafe('試験')).toEqual('6Kmm6aiT');
        expect(base64.encodeSafe('ﾌﾟｷﾞｬｰ')).toEqual('776M776f7723776e772s772w');
        expect(base64.encodeSafe('<br>')).toEqual('PGJyPg..');
        expect(base64.encodeSafe('세계 평화')).toEqual('7IS46rOEIO2Pie2ZlA..');
        expect(base64.encodeSafe('✓ à la mode')).toEqual('4pyTIMOgIGxhIG1vZGU.');
        expect(base64.encodeSafe('')).toEqual('');
        expect(base64.encodeSafe()).toEqual('dW5kZWZpbmVk');
    });

    it('decodeSafe', function () {
        expect(base64.decodeSafe('JXU.')).toEqual('%u');
        expect(base64.decodeSafe('MTIz')).toEqual('123');
        expect(base64.decodeSafe('6Kmm6aiT')).toEqual('試験');
        expect(base64.decodeSafe('776M776f7723776e772s772w')).toEqual('ﾌﾟｷﾞｬｰ');
        expect(base64.decodeSafe('7IS46rOEIO2Pie2ZlA..')).toEqual('세계 평화');
        expect(base64.decodeSafe('4pyTIMOgIGxhIG1vZGU.')).toEqual('✓ à la mode');
        expect(base64.decodeSafe('PGJyPg..')).toEqual('<br>');
        expect(base64.decodeSafe('')).toEqual('');
        expect(base64.decodeSafe('dW5kZWZpbmVk')).toEqual('undefined');
    });

});
