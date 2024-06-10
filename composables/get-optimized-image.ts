export const getOpimizedImgae = (imagePath: string, dimensions: string, imageType: string) => {
    let url = `${imagePath}/m/${dimensions}/filters:no_upscale()`;

    if(imageType) {
        url += `:format(${imageType})`;
    }
    return url;
}