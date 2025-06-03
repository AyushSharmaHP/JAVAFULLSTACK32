    let pro = new Promise((resolve,reject)=>{
        console.log("I am a Promise")
        resolve("success")
        reject("")
    })

/*When this code runs:

It logs "I am a Promise" immediately.

Then resolve("success") is called, which marks the promise as fulfilled.

reject("") is ignored, because only the first call (resolve/reject) takes effect.
 */




// function getData(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("success");
//         }, 2000);
//     });
// }

// getData(1)
//     .then(() => getData(2))
//     .then(() => getData(3))
//     .then(() => getData(4));


function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am a Promise");
            resolve("200");
        }, 2000);
    });
}


async function getapi(){
    await api();
    await api();
}
getapi();

