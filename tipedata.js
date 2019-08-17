function tipedata(){
    var data = '2';
    console.log(typeof(data))

    // kalo === beda hsil apabila tipedata beda
    // kalo == akan sama hasilnya apabila tipe data beda tapi nilainya harus sama
    // diusahakan pake === biar spesifik

    // if(data === 2){
    //     return 'sukses'
    // }
    // else{
    //     return 'gagal'
    // }

    if(data === 2){
        return 'oke benar'
    }
    else if(data == 2){
        return 'bener juga ko'
    }
    else{
        return 'salah'
    }

}

console.log(tipedata())
