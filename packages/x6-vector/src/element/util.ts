import type { Box } from '../struct/box'
import type { VectorElement } from './element'
import { SVGNumber } from '../struct/svg-number'

export namespace Util {
  export function proportionalSize(
    element: VectorElement,
    width?: string | number | null,
    height?: string | number | null,
    box?: Box,
  ) {
    if (width == null || height == null) {
      const bbox = box || element.bbox()

      let w = width
      let h = height
      if (w == null) {
        w = (bbox.width / bbox.height) * SVGNumber.toNumber(h!)
      } else if (h == null) {
        h = (bbox.height / bbox.width) * SVGNumber.toNumber(w)
      }

      return { width: w, height: h! }
    }

    return {
      width,
      height,
    }
  }
}
