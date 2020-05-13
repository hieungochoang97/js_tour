// Polyfill


//code search tren google :D
// if (typeof Object.create !== "function") {
//     Object.create = function (proto, propertiesObject) {
//         if (typeof proto !== 'object' && typeof proto !== 'function') {
//             throw new TypeError('Object prototype may only be an Object: ' + proto);
//         } else if (proto === null) {
//             throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
//         }

//         if (typeof propertiesObject != 'undefined') {
//             throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
//         }

//         function F() {}
//         F.prototype = proto;

//         return new F();
//     };
// }

if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) { start = 0;}
        return this.indexOf(search,start) !== -1;
    };
}