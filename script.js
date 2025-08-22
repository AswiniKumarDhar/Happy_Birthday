const fotostiker = document.getElementById("fotostiker");
const kadoIn = document.getElementById("kadoIn");
const wallpaper = document.getElementById("wallpaper");
const bodyblur = document.getElementById("bodyblur");
const ket = document.getElementById("ket");
const Content = document.getElementById("Content");
const Tombol = document.getElementById("Tombol");
const kalimat = document.getElementById("kalimat");
const opsL = document.getElementById("opsL");
const kolombaru = document.getElementById("kolombaru");

const body = document.querySelector("body"); const swalst = Swal.mixin({ timer: 2300, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90, }); 
let audio = new Audio("song/Butterfly-chosic.com_.mp3");
audio.loop = true;   // keeps playing in loop
audio.volume = 0.7;  // 70% volume
ftganti = 0; 
fungsi = 0; 
fungsiAwal = 0; 
deffotostiker = fotostiker.src; 

function berjatuhan() {
    const heart = document.createElement("div");
    heart.className = "fas fa-snowflake";
    heart.style.position = "absolute";
    heart.style.top = "-10vh";
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px"; // random size
    heart.style.color = "#fff"; // or any color you want
    heart.style.pointerEvents = "none";

    // animation
    heart.style.animationName = "heartMove";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.animationTimingFunction = "linear";
    heart.style.animationFillMode = "forwards";

    // remove element after animation
    heart.addEventListener("animationend", () => heart.remove());

    document.body.appendChild(heart);
}



setInterval(function name(params) { 
        var heartArr = document.querySelectorAll(".fa-snowflake");
        if (heartArr.length > 100) { heartArr[0].remove() } }, 100); Content.style = "opacity:1;margin-top:16vh"; const swals = Swal.mixin({ allowOutsideClick: false, cancelButtonColor: '#FF0040', imageHeight: 80, });

        document.getElementById("kadoIn").onclick = function () { if (fungsiAwal == 0) { audio.play(); fungsiAwal = 1; kadoIn.style = "transition:all .30s ease;transform:scale(10);opacity:0"; wallpaper.style = "transform: scale(1.6);"; ket.style = "display:none"; setTimeout(initengahan, 500); setTimeout(inipesan, 500) } }

        async function inipesan() {
    var { value: nama } = await swals.fire({
        title: 'Your name?',
        input: 'text',
        confirmButtonText: 'Continue',
        showCancelButton: false,
    });

    if (nama && nama.length < 11) {
        window.nama = nama;
        vketikhalo = "Hi, " + nama + " &#10084;";

        // ⬇️ Save to Google Sheets via GET
            fetch(`https://script.google.com/macros/s/AKfycbx9Edeh1LK6Ahw6pDvakxpqapyOK8FHFbrYm6YD8g3POMePsTpmoGPS6qtBrx4BJUZlwA/exec?name=${encodeURIComponent(nama)}&token=Arpita@1998`)
                    .then(res => res.json())
                    .then(data => console.log("Saved:", data))
                    .catch(err => console.error("Error:", err));

        await swals.fire('Hi, ' + nama + ' ツ');
        await swals.fire('It\'s your birthday today!');
        await swals.fire('Happy birthday! 🎉');
        await swals.fire('Wishing you a long and healthy life');
        pilihwarna();
    } else {
        await swals.fire('Oops!', 'Name cannot be empty or more than 10 characters!');
        inipesan();
    }
}


        async function pilihwarna() {
            var { isConfirmed: warna } = await swals.fire({
                title: 'Oh, ' + nama + ', which color do you want to choose?',
                text: 'Come on, don\'t hesitate :v',
                showCancelButton: true,
                confirmButtonText: 'Blue',
                cancelButtonText: 'Red',
            });
            if (warna) {
                await swals.fire('Yeayy!', 'If you choose <b>Blue</b>, you have to treat me! &#129315;');
                var { isConfirmed: warna2 } = await swals.fire({
                    title: nama + ', are you sure you want Blue?',
                    text: 'Or do you want to change the color?', showCancelButton: true,
                    confirmButtonText: 'Sure',
                    cancelButtonText: 'Change',
                });
                if (warna2) {
                    await swals.fire('Okay!', `Now look at this &#10084;&#65039;`);
                    mulainama();
                } else {
                    await swals.fire('Okay, choosing Red!', 'It\'s actually the same, but if you choose Red, you have to treat me more! &#129315;');
                    mulainama();
                }
            } else {
                await swals.fire('Yeayy!', 'If you choose <b>Red</b>, you have to treat me! &#129315;');
                var { isConfirmed: warna2 } = await swals.fire({
                    title: nama + ', are you sure you want Red?',
                    text: 'Or do you want to change the color?', showCancelButton: true,
                    confirmButtonText: 'Change',
                    cancelButtonText: 'Sure',
                });
                if (warna2) {
                    await swals.fire('Okay, choosing Blue!', 'It\'s actually the same, but if you choose Blue, you have to treat me more! &#129315;');
                    mulainama();
                } else {
                    await swals.fire('Okay!', `Now look at this`);
                    mulainama();
                }
            }
        }

        //Variable Pertanyaan Akhir
        var tanya = 'Do you want a gift? ';
        var opstanya = 'Please answer';
        var tompositif = 'Yes';
        var tomnegatif = 'Yes Yes Yes &#10084;';

        async function menuju() { pesanwhatsapp = "Thank you for wishing " + nama + " a happy birthday ><"; await swals.fire('OK!', 'Enjoy your day. And please share your thoughts on my first ever project. Rate this out of 10.', 'hehe!!'); window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp; }

        function initengahan() {
            kadoIn.style = "display:none"; ket.style = "display:none";
            Content.style = "opacity:1;margin-top:0";
            bodyblur.style = "opacity:.7";
            wallpaper.style = "transform: scale(1.5);";
        }

        async function mulainama() {

            bodyblur.style = "opacity:.1";
            wallpaper.style = "transform: scale(1);";
            fotostiker.style = "display:inline-flex;"; setTimeout(ftmuncul, 200);
            setTimeout(kethalo, 500);
        }

        function ftmuncul() {
            if (ftganti == 0) { fotostiker.src = deffotostiker; }
            if (ftganti == 1) { fotostiker.src = fotostiker1.src; }
            if (ftganti == 2) { fotostiker.src = fotostiker2.src; }
            if (ftganti == 3) { fotostiker.src = fotostiker3.src; }
            if (ftganti == 4) { fotostiker.src = fotostiker4.src; }
            if (ftganti == 5) { fotostiker.src = fotostiker5.src; }

            fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
        }
        function fthilang() { fotostiker.style = "display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)"; }
        function jjfoto() { fotostiker.style.animation = "rto .8s infinite alternate"; }

        function bqmuncul() { bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0"; mulaiketik1(); }
        function bqhilang() { wallpaper.style = "transform: scale(2);"; bodyblur.style = "opacity:.3"; bq.style = "position:relative;transition:all .7s ease;"; }
        function kethalo() { new TypeIt("#halo", { strings: ["" + vketikhalo], startDelay: 50, speed: 40, waitUntilVisible: true, afterComplete: function () { halo.innerHTML = vketikhalo; setTimeout(bqmuncul, 200); }, }).go(); }

        function tombol() { wallpaper.style = "transform: scale(1);"; Tombol.style = "opacity:1;transform: scale(1);"; if (fungsi == 2) { By.innerHTML = "&#128140; Send" } }
        document.getElementById("By").onclick = function () { if (fungsi == 1) { Tombol.style = ""; fthilang(); fungsi = 0; pertanyaan(); } if (fungsi == 2) { Tombol.style = ""; menuju(); } }

        const waktuSekarang = new Date().getHours(); let ucapan;
        if (waktuSekarang < 10) { ucapan = "Good Morning, "; }
        else if (waktuSekarang < 16) { ucapan = "Good Afternoon, "; }
        else if (waktuSekarang < 19) { ucapan = "Good Evening, "; }
        else { ucapan = "Good Night, "; }

        vketik1 = kalimat.innerHTML; kalimat.innerHTML = "";
        function mulaiketik1() {
            /*new TypeIt("#kalimat", {
                strings: ["" + vketik1], startDelay: 400, speed: 20, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
                afterComplete: function () {
                    aktiopsL();
                },
            }).go();*/
            setTimeout(function () { opsLcheck += 1; aktipesan1(); /*fthilang(); ftganti = 1; setTimeout(ftmuncul, 300);*/ }, 300);
        }

        opsLclick = 0; opsLcheck = 0; defopsL = opsL.innerHTML;
        document.getElementById("bq").onclick = function () {
            if (opsLclick == 1) {
                //if (opsLcheck == 1) { setTimeout(aktipesan1, 400); fthilang(); ftganti = 1; setTimeout(ftmuncul, 300); }
                if (opsLcheck == 2) { mulaiketik3(); }
                if (opsLcheck == 3) { mulaiketik4(); }
                if (opsLcheck == 4) { mulaiketik5(); }
                if (opsLcheck == 5) { kethalo2(); }
                otomatis(); opsL.style.opacity = "0"; opsLclick = 0;
            }
        }
        function aktiopsL() { opsL.innerHTML = defopsL; opsL.style.opacity = ".8"; opsLclick = 1; opsLcheck += 1; }
        function gantiopsL() { opsL.innerHTML = "[ Klik beberapa LOVE-nya ]"; opsL.style.opacity = ".8"; }
        function otomatis() { pesan3.style = "transition:none"; pesan8.style = "display:none"; kalimat.style = "opacity:0"; if (otoaktipesan == 0) { setTimeout(otolanj, 400) } }
        function otolanj() { kalimat.style = "opacity:1"; }

        function aktipesan1() { kalimat.innerHTML = pesan1.innerHTML; kolombaru.style = "position:relative;opacity:1;transform:scale(1);"; }
        vketik2 = pesan2.innerHTML;
        function aktipesan2() {
            wallpaper.style = "transform: scale(1.5);";
            kolombaru.style = ""; kalimat.innerHTML = "";
            new TypeIt("#kalimat", {
                strings: ["" + vketik2], startDelay: 20, speed: 40, cursor: true, deleteSpeed: 50, breakLines: false, waitUntilVisible: true, lifelike: true,
                afterComplete: function () {
                    setTimeout(aktipesan3, 500);
                },
            }).go();
        }
        vketik3 = pesan3.innerHTML; pesan3.innerHTML = "";
        function aktipesan3() {
            kalimat.style = "display:none";
            pesan3.style = "position:relative;opacity:1;transform: scale(1)";
            wallpaper.style = "transform: scale(1)";
            fthilang(); ftganti = 2; setTimeout(ftmuncul, 300);
            new TypeIt("#pesan3", {
                strings: ["" + vketik3], startDelay: 1, speed: 45, cursor: true, waitUntilVisible: true, lifelike: true,
                afterComplete: function () {
                    pesan3.innerHTML = vketik3; setTimeout(otomatis, 600); setTimeout(aktipesan4, 1100);
                },
            }).go();
        }
        function aktipesan4() {
            wallpaper.style = "transform: scale(1.5);"; kalimat.innerHTML = pesan4.innerHTML + " 🥳"; kalimat.style = "transform:scale(1);font-size:20px;font-family:var(--gaya-font3) !important"; setTimeout(aktipesan5, 1000);
        }
        vketik5 = pesan5.innerHTML; pesan5.innerHTML = "";
        function aktipesan5() {
            fthilang(); ftganti = 3; setTimeout(ftmuncul, 300);
            wallpaper.style = "transform: scale(1);";
            new TypeIt("#pesan5", {
                strings: ["" + vketik5], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
                afterComplete: function () {
                    pesan5.innerHTML = vketik5 + " ><"; setTimeout(aktipesan6, 800);
                },
            }).go();
        }
        vketik6 = pesan6.innerHTML; pesan6.innerHTML = "";
        function aktipesan6() {
            wallpaper.style = "transform: scale(1.5);";
            new TypeIt("#pesan6", {
                strings: ["" + vketik6], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
                afterComplete: function () {
                    pesan6.innerHTML = vketik6; setTimeout(aktipesan7, 800);
                },
            }).go();
        }
        vketik7 = pesan7.innerHTML; pesan7.innerHTML = "";
        function aktipesan7() {
            fthilang(); ftganti = 1; setTimeout(ftmuncul, 300);
            wallpaper.style = "transform: scale(1);";
            new TypeIt("#pesan7", {
                strings: ["" + vketik7], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
                afterComplete: function () {
                    pesan7.innerHTML = vketik7; fungsi = 1; setTimeout(tombol, 400);
                },
            }).go();
        }
        //Pemisah
        vketik81 = pesan8.innerHTML; pesan8.innerHTML = "";
        vketik9 = pesan9.innerHTML; pesan9.innerHTML = "";
        vketik10 = pesan10.innerHTML; pesan10.innerHTML = "";
        function aktipesan8() {
            pesan5.style = "display:none"; pesan6.style = "display:none"; pesan7.style = "display:none"; pesan8.style = "";
            wallpaper.style = "transform: scale(1);";
            ftganti = 4; ftmuncul();
            new TypeIt("#pesan8", {
                strings: ["" + vketik8, "" + vketik9], startDelay: 20, speed: 45, cursor: true, deleteSpeed: 30, breakLines: false, waitUntilVisible: true, lifelike: true,
                afterComplete: function () {
                    pesan8.innerHTML = vketik9; setTimeout(otomatis, 1300); setTimeout(aktipesan10, 1710);
                },
            }).go();
        }
        function aktipesan10() {
            wallpaper.style = "transform: scale(1.5);";
            fthilang(); ftganti = 5; setTimeout(ftmuncul, 300);
            otoaktipesan = 1; otomatis(); setTimeout(toaktipesan, 300);
            setInterval(berjatuhan, 400);
            fungsi = 2; setTimeout(tombol, 2000);
        }
        var otoaktipesan = 0;
        function toaktipesan() { kalimat.innerHTML = vketik10; kalimat.style = "transform:scale(1);font-size:22px;font-family:var(--gaya-font3)"; }

        document.getElementById("lv1").onclick = function () { lv1.style = "opacity:0"; slov += 1; this.onclick = null; checkslov(); }
        document.getElementById("lv2").onclick = function () { lv2.style = "opacity:0"; slov += 1; this.onclick = null; checkslov(); }
        document.getElementById("lv3").onclick = function () { lv3.style = "opacity:0"; slov += 1; this.onclick = null; checkslov(); }
        document.getElementById("lv4").onclick = function () { lv4.style = "opacity:0"; slov += 1; this.onclick = null; checkslov(); }
        var slov = 0; function checkslov() { if (slov == 4) { kolombaru.style = "position:relative;transform:scale(1)"; otomatis(); setTimeout(aktipesan2, 400); } }

        async function pertanyaan() {
            var { isConfirmed: prtanya } = await swals.fire({ title: nama + ' ' + tanya, text: '' + opstanya, imageUrl: '' + fotostiker6.src, showCancelButton: true, confirmButtonText: '' + tompositif, cancelButtonText: '' + tomnegatif, });
            if (prtanya) {
                await swalst.fire({ title: '' + katatambahan.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src, });
                vketik8 = vketik81; aktipesan8();
            } else {
                await swalst.fire({ title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src, });
                vketik8 = ""; aktipesan8();
            }

        }


