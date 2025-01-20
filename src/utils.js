/**
 * Retrieves the full URL of an image based on the provided path.
 * @param {string} path The relative path to the image.
 * @return {string} The full URL of the image.
 */
export const getImageUrl = (path) => {
    // takes relative path passed to it, appending it to base url of our website, and giving back new URL
    // return new URL(`/assets/${path}`, import.meta.url).href;
    return `/assets/main/${path}`
};
