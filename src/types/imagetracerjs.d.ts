declare module 'imagetracerjs' {
  interface ImageData {
    width: number;
    height: number;
    data: Uint8ClampedArray | number[];
  }
  function imagedataToSVG(imageData: ImageData, options?: Record<string, any>): string;
  export { imagedataToSVG };
}
