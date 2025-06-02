// console.log('Hello, World!');

// let btn = document.querySelector('button');
// btn.onclick=() => {
//     console.log('Button clicked!');
//     }
// let btn2 = document.querySelector('button 2');
// btn2.ondb1click=() => {
// console.log('Button 2 clicked!');
//     }

console.log('Hello, World!');

let btn = document.querySelector('#btn');
btn.onclick = () => {
    document.body.style.backgroundColor = 'lightblue'; 
}
let btn2 = document.querySelector('#btn2');
btn2.ondb1click = () => { //double click
    document.body.style.backgroundColor = 'lightgreen';
};
let div = document.querySelector('div');
div.onmouseover = () => {
    console.log('Mouse is over the div!');
}

// Change background color on mouse over
let btn3 = document.querySelector('#btn3');
let a ='light';
btn3.onclick = () => {
    if (a === 'light') {
        console.log('Dark mode activated');
        document.body.style.backgroundColor = 'black';
        a = 'dark';
    } else {
        console.log('Light mode activated');
        document.body.style.backgroundColor = 'white';
        a = 'light';
    }
};

let handler = ()=> {
    console.log('Event is getting handled');
}
btn3.addEventListener('click', handler);
btn3.removeEventListener('click', handler); // Remove the event listener

// Simulating asynchronous data fetching with callbacks

function getData(dataid, getnextdata) {
    setTimeout(() => {
        console.log('Data',dataid);
        if (getnextdata) {
            getnextdata();
        }
    },2000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5,()=>{
                    console.log('All data fetched');
                });
            });
        });
    });
}
);

/*________________________________________________________________________________________________ */

// let promise = new Promise((resolve, reject) => {}

    function getData(dataid, getnextdata) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('data', dataid);
                resolve('Success');
                if (getnextdata) {
                    getnextdata();
                }
            }, 5000);
        });
    }
    