const xhr = new XMLHttpRequest();


xhr.addEventListener('load',()=>{
    console.log(xhr.response);
})


const myHardData =  xhr.open('GET','https://supersimplebackend.dev/products/first');
xhr.send();

