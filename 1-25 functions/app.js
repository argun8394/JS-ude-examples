function yasHesapla(dogumYili) {
    return 2021 - dogumYili
}

let yasAli = yasHesapla(1990);

let yasBerra = yasHesapla(2019);

let yasBusra = yasHesapla(1996);

console.log(`Ali ${yasAli} yaşında, Büşra ${yasBusra} yaşında ve  Berra ise ${yasBerra} yaşındadır.`);



function emeklilikHesapalama(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if (emeklilik > 0) {
        console.log(`${isim}, emeklilik için ${emeklilik} yılınız var. `)
    } else {
        console.log(`${isim}, emekli olmuşsunuz`)
    }
}

emeklilikHesapalama(2019, "Berra");
emeklilikHesapalama(1950, "Ali");