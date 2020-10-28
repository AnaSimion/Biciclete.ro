function schimba_culoarea(id){

    document.body.style.background=document.getElementById(id).innerHTML;
    document.getElementById('header').style.backgroundColor =
    "yellow";
}

setInterval(() => {
    console.log("Hi!");
}, 1000);

setTimeout(()=>{
    alert('Timeout');


}, 2000);
