//callback
// function hideString(str, done) {
//     process.nextTick(() => {
//         done(str.replace(/[a-zA-z]/g, 'X'));
//     })
// }

// hideString("Hello World", (hidden) => {
//     console.log(hidden);
// });

// console.log('end');


//delays... Callback Hells and Pyramids of Doom
function delay(seconds, callback) {
    setTimeout(callback, seconds*1000);
}

console.log('starting delays');

delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
        console.log('three seconds');
        delay(1, () => {
            console.log('four seconds');
        })
    })
})