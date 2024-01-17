declare module 'dom-to-image-more' {
  // /**
  //  * @param {Object} options - Rendering options
  //  * @param {Function} options.filter - Should return true if passed node should be included in the output
  //  *          (excluding node means excluding it's children as well). Not called on the root node.
  //  * @param {Function} options.onclone - Callback function which is called when the Document has been cloned for
  //  *         rendering, can be used to modify the contents that will be rendered without affecting the original
  //  *         source document.
  //  * @param {String} options.bgcolor - color for the background, any valid CSS color value.
  //  * @param {Number} options.width - width to be applied to node before rendering.
  //  * @param {Number} options.height - height to be applied to node before rendering.
  //  * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
  //  * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
  //             defaults to 1.0.
  //  * @param {Number} options.scale - a Number multiplier to scale up the canvas before rendering to reduce fuzzy images, defaults to 1.0.
  //  * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
  //  * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
  //  * @param {String} options.styleCaching - set to 'strict', 'relaxed' to select style caching rules
  //  * @param {Boolean} options.copyDefaultStyles - set to false to disable use of default styles of elements
  //  * @param {Object} options.corsImg - When the image is restricted by the server from cross-domain requests, the proxy address is passed in to get the image
  //  *         - @param {String} url - eg: https://cors-anywhere.herokuapp.com/
  //  *         - @param {Enumerator} method - get, post
  //  *         - @param {Object} headers - eg: { "Content-Type", "application/json;charset=UTF-8" }
  //  *         - @param {Object} data - post payload
  //  * @return {Promise} - A promise that is fulfilled with a SVG image data URL
  //  * */

  export function toPng(
    element: Element,
    option?: Partial<{
      bgcolor: string
      width: number
      height: number
      style: { [cssProperties: string]: string | number }
      quality: number
      imagePlaceholder: string
      scale: number
      cacheBust: boolean
      styleCaching: 'strict' | 'relaxed'
      copyDefaultStyles: boolean
      corsImg: {
        url: string
        method: 'get' | 'post'
        headers: object
        data: object
      }

      onclone: (node: Element) => Element
      filter: (node: any) => boolean
    }>,
  ): Promise<string>
}
