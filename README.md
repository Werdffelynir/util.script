# Module util.js

Its static common helpers methods

## Methods

```
Util.objClone (obj)                         // Clone object
Util.objLen (obj)                           // Count object length
Util.objMerge (objectBase, src)             // Merge an object `src` into the object `objectBase`
Util.objMergeNotExists (objectBase, src)    // Merge objects if `objectBase` key not exists
Util.objMergeOnlyExists (objectBase, src)   // Merge objects if `objectBase` key is exists
Util.arrDiff (arr1, arr2)                   // Computes the difference of arrays
Util.isStr (param)                          // Check on typeof is string a param
Util.isArr (param)                          // Check on typeof is array a param
Util.isObj (param)                          // Check on typeof is object a param
Util.isNum (param)                          // Determine param is a number or a numeric string
Util.defined (param)                        // Determine param to undefined type
Util.isEmpty (param)                        // Determine whether a variable is empty
Util.objToJson (data)                       // Javascript object to JSON data
Util.jsonToObj (data)                       // JSON data to Javascript object
Util.cleanArr (src)                         // Cleans the array of empty elements
Util.typeOf (data)                          // Return type of data
Util.formData (form, asObject)              // Convert HTML form to encode URI string
Util.toNode (data)                          // HTML string convert to DOM Elements Object
Util.uniqueArr (arr)                        // Removes duplicate values from an array
Util.fileGetContents (url)                  // Reads entire file into a string, synchronously
Util.getPosition (elem)                     // Calculates the position and size of elements.
Util.getMouseElement (element, event)       // Returns the coordinates of the mouse on any element
Util.getMouseCanvas (canvas, event)         // Returns the coordinates of the mouse on the canvas element
Util.createStyle (selector, property)       // Creator of styles, return style-element or style-text.
Util.createElement (tag, attrs, inner)      // Create new NodeElement
Util.rand (min, max)                        // Returns a random integer between min, max
Util.randColor ()                           // Returns random string color, HEX format
Util.degreesToRadians (deg)                 // Converts degrees to radians
Util.radiansToDegrees (rad)                 // Converts radians to degrees
Util.distanceBetween (point1, point2)       // The calculation of the distance between points
Util.encodeData (data)                      // Encode URI params
Util.parseGet (url)                         // Parse URI Request data into object
Util.parseUrl (url)                         // Parse Url string/location into object 
Util.Storage (name, value)                  // Multi LocalStorage worker (combine Storage.set, Storage.get and Storage.remove)
Util.Storage.set (name, value)              // LocalStorage worker set item to storage
Util.Storage.get (name)                     // LocalStorage worker get item from storage
Util.Storage.kay (name)                     // LocalStorage worker get item from storage by index
Util.Storage.remove (name)                  // LocalStorage worker delete item from storage
```