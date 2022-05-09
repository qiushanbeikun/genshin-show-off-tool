// export function getCroppedImg(imageBlob, pixelCrop) {
//     const canvas = document.createElement('canvas');
//     canvas.width = pixelCrop.width;
//     canvas.height = pixelCrop.height;
//     const ctx = canvas.getContext('2d');
//
//     let image = new Image();
//     return new Promise((res, rej) => {
//         image.onload = () => {
//             ctx.drawImage(
//                 image,
//                 pixelCrop.x,
//                 pixelCrop.y,
//                 pixelCrop.width,
//                 pixelCrop.height,
//                 0,
//                 0,
//                 pixelCrop.width,
//                 pixelCrop.height
//             );
//             res();
//         };
//
//         image.src = imageBlob;
//     })
//         .then(() => {
//         return new Promise((resolve, reject) => {
//             canvas.toBlob(blob => {
//                 resolve(blob);
//             }, 'image/jpeg');
//         });
//     });
// }

let previewUrl = ''

async function toBlob(canvas) {
    return new Promise((resolve) => {
        canvas.toBlob(resolve)
    })
}

export async function getCroppedImg(image, crop) {
    console.log(image, crop);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = Math.floor(crop.width);
    canvas.height = Math.floor(crop.height);
    const cropX = crop.x;
    const cropY = crop.y;
    const centerX = image.naturalWidth / 2
    const centerY = image.naturalHeight / 2
    console.log(cropX, cropY, centerX, centerY)
    ctx.save();
    ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height,
    )
    // ctx.drawImage(
    //     image,
    //     0,
    //     0,
    //     image.naturalWidth,
    //     image.naturalHeight,
    //     0,
    //     0,
    //     image.naturalWidth,
    //     image.naturalHeight,
    // )
    ctx.restore();

    const blob = await toBlob(canvas)

    if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
    }

    previewUrl = URL.createObjectURL(blob)
    return previewUrl
}