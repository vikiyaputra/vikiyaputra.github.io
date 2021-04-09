
let sudahAdaCicilan = false

function createElementHasil(jumlahCicilan){
    let hasil = document.getElementsByClassName("hasil")

    if(sudahAdaCicilan){
        hasil[0].innerHTML = `
        <h1>
            Cicilan anda perbulan adalah ${jumlahCicilan} Juta
        </h1>
        <h3>
            Tapi jangan senang dulu... pernah terfikirkan berapa denda yang harus dibayar jika kamu telat bayar 1 hari saja?
        </h3>
        <div class="slidecontainer">
            <p>Andaikan kamu telat....</p>
            <h1 id="displayTelat">1 Hari</h1>
            <input type="range" min="1" max="30" value="1" class="slider" id="telat" list="tickmarks" step="1" oninput="tambahEventListener()">
        </div>
        <button onclick="hitungDenda()">Hitung Denda</button>`
        // console.log ("Udah ada cicilan")
    } else {
        // console.log(hasil)
        let heading = document.createElement("h1")
        let hatiHati = document.createElement("h3")
        let button = document.createElement("button")
        button.onclick = hitungDenda
        let text = document.createTextNode(`Cicilan anda perbulan adalah ${jumlahCicilan} Juta`)
        let text2 = document.createTextNode(`Tapi jangan senang dulu... pernah terfikirkan berapa denda yang harus dibayar jika kamu telat bayar 1 hari saja?`)
        let text3 = document.createTextNode(`1 Hari`)
        let addButton = document.createTextNode("Hitung Denda")
    
    
        let divSlider = document.createElement("div")
        let pSlider = document.createElement("p")
        let warningTelat = document.createTextNode("Andaikan kamu telat....")
        let h1Slider = document.createElement("h1")
        let inputSlider = document.createElement("input")
        
        inputSlider.type = "range"
        inputSlider.min = 1
        inputSlider.max = 30
        inputSlider.value = 1
        inputSlider.className = "slider"
        inputSlider.id = "telat"
        inputSlider.list = "tickmarks"
        inputSlider.step = "1"
        inputSlider.oninput = tambahEventListener

        h1Slider.id = "displayTelat"
        h1Slider.appendChild(text3)

        pSlider.appendChild(warningTelat)
        divSlider.appendChild(pSlider)
        divSlider.appendChild(h1Slider)
        divSlider.appendChild(inputSlider)

        heading.appendChild(text)
        hatiHati.appendChild(text2)
        button.appendChild(addButton)
        hasil[0].appendChild(heading)
        hasil[0].appendChild(hatiHati)
        hasil[0].appendChild(divSlider)
        hasil[0].appendChild(button)
        sudahAdaCicilan = true
        console.log("test")
    }
}


// function hitungCicilan(){
//     console.log("ahah")
// }

function hitungDenda(){
    let telat = document.getElementById("telat")
    // console.log("denda terhitung");
    // console.log("pinjaman*(0.1 + (0.02*telat)");
    let output = 0
    output = Math.round((borrow.value * (0.1 + (0.02*telat.value)))*100)/100
    console.log(output);

    let surprise = document.getElementsByClassName("surprise") // bentuk masih array
    let isisurprise = document.createElement("h1")
    let textSurprise = document.createTextNode (`${output} Saja!`)

    isisurprise.appendChild(textSurprise)
    surprise[0].innerHTML = `<h1> Dendanya ${output} Saja (Belum termasuk Cicilan Loh!)</h1>`

}


function cicilanPerBulan(telatBulan, telatHari){
    let borrow = document.getElementById("borrow")
    console.log(borrow.value)
    let lama = document.getElementById("lama")
    console.log(lama.value)

    let jumlahCicilan = Math.round(((borrow.value/lama.value) + (0.06*borrow.value))*1000)/1000
    

    createElementHasil(jumlahCicilan)

    // output = []
    // output[0] = 0.92*pinjaman // Yang diterima
    // output[1] = (pinjaman/lama) + (0.06*pinjaman) // Cicilan Bulanan
    // output[2] = output[1] * lama // Total Cicilan
    // output[3] = output[2]-output[0] // Kamu nyumbang segini
    // if(telat === 1) {
    //     output[4] = (lama+1-telatBulan)/lama*pinjaman*0.1 // Denda tergantung di bulan ke berapa dan berapa hari
    // } else if (telat > 1){
    //     output[4] = (lama+1-telatBulan)/lama*pinjaman*(0.1 + (0.02*telat))
    // }
    // return output
}



borrow.oninput = function(){
    let borrow = document.getElementById("borrow")
    // console.log(borrow.value)
    document.getElementById("displayPinjaman").innerHTML = `${borrow.value} Juta`
}

lama.oninput = function(){
    let lama = document.getElementById("lama")
    // console.log(lama.value)
    document.getElementById("displayLama").innerHTML = `${lama.value} Bulan`
}


function tambahEventListener(){
    let telat = document.getElementById("telat")
    document.getElementById("displayTelat").innerHTML = `${telat.value} Hari`
}

// telat.oninput = function(){    
// }


/*
1. Kok slider nya gak auto update seperti 2 slider pertama? (borrow oninput line 97)


*/