# Base64.js
Base64.js provides some functions like "atob" and "btoa".  

## Methods
### base64.encode
  Creates a base64 encoded ASCII string from a string of binary data.  
  In most browsers, calling window.btoa on a Unicode string will cause a Character Out Of Range exception, so it has taken measures to avoid the exception.  
  [Please see here for more details.](https://developer.mozilla.org/en-US/docs/DOM/window.btoa#Unicode_Strings)

### base64.decode
  Decodes a string of data which has been encoded using base64 encoding.

### base64.encodeSafe
  Creates a web safe base64 encoded ASCII string from a string of binary data.

### base64.decodeSafe
  Decodes a string of data which has been encoded using base64.encodeSafe().

## License
Base64.js is available under the terms of the MIT license.
