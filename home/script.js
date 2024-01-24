// --------------- NAVIGASI ---------------
const navArrow = document.querySelector('.navArrow');
const navigasi = document.getElementsByTagName('nav')[0];

navArrow.addEventListener('click', function(){
    navigasi.classList.toggle('active');
    navArrow.classList.toggle('active');
});


document.addEventListener('click', function(e){
    if(!navigasi.contains(e.target)){
        navigasi.classList.remove('active');
        navArrow.classList.remove('active');
    }
});
// --------------- NAVIGASI ---------------





// --------------- DAFTAR ISI ---------------
const burger = document.querySelector('.daftarIsi');
const aside = document.querySelector('aside');
const overlay = document.querySelector('.overlay');
burger.addEventListener('click', function(){
    aside.classList.toggle('tampil');
    burger.classList.toggle('tampil');
    overlay.classList.toggle('tampil');
    document.body.classList.toggle('tampil');
});
// --------------- DAFTAR ISI ---------------



// --------------- SOAL DAN JAWABAN ---------------
const button = document.querySelectorAll('.soalDanJawaban button');
const jawaban = document.querySelectorAll('.soalDanJawaban .jawaban');


    for(let i=0; i<button.length; i++){
        button[i].addEventListener('click', function(){
            jawaban[i].classList.toggle('terlihat');
            button[i].classList.toggle('terlihat');
            if(button[i].className == 'terlihat'){
                button[i].innerHTML = 'hide';
            }else{
                button[i].innerHTML = 'show';
            }
        });
    }


const abjad_opsiLine = document.querySelectorAll('.soal .opsi .opsiLine input');
const ket_opsiJawaban= document.querySelectorAll('.soal .opsi .opsiLine label');
let k = ket_opsiJawaban.length/4;

    for(let j=0; j<abjad_opsiLine.length; j++){
        abjad_opsiLine[j].setAttribute('id', 'opsi'+j);
        ket_opsiJawaban[j].setAttribute('for', 'opsi'+j);
    }


    for(let b = 1; b<=abjad_opsiLine.length/4; b++){
        for(let a = 0; a<abjad_opsiLine.length; a++){
            if(a>=4*(b-1) && a<(4*b)){
                abjad_opsiLine[a].setAttribute('name','soal'+b);
            }
        }
    }










