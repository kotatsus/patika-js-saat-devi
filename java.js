let userName = prompt("Adınız Nedir?")
let myName = document.querySelector("#myName")  // username bilgisi alınır

myName.innerHTML = `${userName}` // username bilgisi yazdırılır
 
function zaman() {               // saat 
    const date = new Date().toLocaleString(); 
    document.getElementById(`myClock`).innerHTML = date;
}
setInterval(zaman, 1000)