var hesapA = {
    ad: 'Sena Turan',
    hesapNo: '12345678',
    bakiye: 2000,
    ekHesap: 1000
}

var hesapB = {
    ad: 'Emel Turan',
    hesapNo: '12356479',
    bakiye: 3000,
    ekHesap: 2000
}


function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad}`);
    var toplam = bakiye + ekhesap;

    if (miktar > toplam) {
        console.log("paranzı çekmek istermisiniz")
    } else if (miktar < toplam) {
        console.log("bakiye yetersiz")
    }


    paraCek(hesapA, 2000);
    paraCek(hesapA, 1100);
    paraCek(hesapB, 2000);