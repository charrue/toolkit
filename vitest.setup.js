import "whatwg-fetch";

/** Encodes a string as base64 format */
global.btoa = (str) => Buffer.from(str, 'binary').toString('base64');

/** Decodes a base64 encoded string */
global.atob = (str) => Buffer.from(str, 'base64').toString('binary');