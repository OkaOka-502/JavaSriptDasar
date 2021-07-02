var jmlmesin = 20;
var mesinbr = 17;
var mesinjk = 19;
var mp = 1;

// br = beroperasi
// bk = beroerasi kembali

for(mp;mp <= jmlmesin;mp++){
    
    if(mp <= mesinbr){
        console.log ("Mesin No. "+ mp +" beroperasi seharian menghasilkan 1000 produk");
    }else if(mp === mesinjk){
        console.log ("Mesin No. "+ mp +" beroperasi kembali setengah hari menghasilkan 458 produk");
    }else{
        console.log ("Mesin No. "+ mp +" tidak beroperasi sama sekali");
    }

}