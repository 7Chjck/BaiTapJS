function createEleHTML(eleName,content, bg, idAppend){
    var ele = document.createElement(eleName);
    ele.innerHTML = content;
    ele.style.background = bg;
    document.getElementById(idAppend).appendChild(ele);
}



// bài 1 : 
document.getElementById('btnthuTu').onclick = function () {
    var numberMot = +document.getElementById('numberMot').value;
    var numberHai = +document.getElementById('numberHai').value;
    var numberBa = +document.getElementById('numberBa').value;
    var sapXep ;
    if(numberMot > numberHai && numberMot > numberBa && numberHai > numberBa){
       sapXep = document.getElementById("thuTu").innerHTML = `
        <p>thứ tự tăng dần ${numberBa} < ${numberHai} < ${numberMot} </p>`;
        // sapXep = numberBa < numberHai < numberMot ;
    }else if (numberMot > numberHai && numberMot > numberBa && numberBa > numberHai){
        sapXep = document.getElementById("thuTu").innerHTML = `
        <p>thứ tự tăng dần ${numberHai} < ${numberBa} < ${numberMot} </p>`;
        // sapXep = numberHai < numberBa < numberMot;
    }else if(numberHai > numberMot && numberHai > numberBa && numberBa > numberMot){
        sapXep = document.getElementById("thuTu").innerHTML = `
        <p>thứ tự tăng dần ${numberMot} < ${numberBa} < ${numberHai} </p>`;
        // sapXep = numberMot < numberBa < numberHai ;
    }else if(numberHai > numberMot && numberHai > numberBa && numberMot > numberBa){
        sapXep = document.getElementById("thuTu").innerHTML = `
        <p>thứ tự tăng dần ${numberBa} < ${numberMot} < ${numberHai} </p>`;
        // sapXep = numberBa < numberMot < numberHai;
    }else if(numberBa > numberMot && numberBa && numberHai && numberMot > numberHai){
        sapXep = document.getElementById("thuTu").innerHTML = `
        <p>thứ tự tăng dần ${numberHai} < ${numberMot} < ${numberBa} </p>`;
        // sapXep = numberHai < numberMot < numberBa;
    }else{
        sapXep = document.getElementById("thuTu").innerHTML = `
        <p>thứ tự tăng dần ${numberMot} < ${numberHai} < ${numberBa} </p>`;
        // sapXep = numberMot < numberHai < numberBa;
    }
    
}


// bài 2 :
document.getElementById('btnChaoHoi').onclick = function(){
    var user = document.getElementById('user').value;
    var html ;
    
    switch(user) {
        case "B": 
        html = " Chào bố ";
        break;
        case "M":
            html = "Chào Mẹ";
            break;
        case "A":
            html = " Chào Anh trai";
            break;
        case "E":
            html = " Chào em gái";
            break;
        default:
            html = " Vui lòng nhập các từ sau : B , M , A , E";
            break;            
    }
    document.getElementById('result').innerHTML = html;

}

// bài 3 : 
document.getElementById('btnLeChan').onclick = function() {
    var soMot = +document.getElementById('soMot').value;
    var soHai = +document.getElementById('soHai').value;
    var soBa = +document.getElementById('soBa').value;
    var tongSoLe ;
    var tongSoChan;
    if(soMot % 2 === 0 && soHai % 2 === 0 && soBa % 2 === 0){
        tongSoChan = 3;
        tongSoLe = 0;
    }else if (soMot % 2 === 0 && soHai % 2 === 0 && soBa % 2 !== 0){
        tongSoChan = 2;
        tongSoLe = 1;
    }else if (soMot % 2 === 0 && soHai % 2 !== 0 && soBa % 2 === 0 ){
        tongSoChan = 2;
        tongSoLe = 1;
    }else if(soMot % 2 !== 0 && soHai % 2 === 0 && soBa % 2 === 0 ){
        tongSoChan = 2;
        tongSoLe = 1;
    }else if(soMot % 2 !== 0 && soHai % 2 !== 0 && soBa % 2 !== 0){
        tongSoChan = 0;
        tongSoLe = 3 ;
    }else if(soMot % 2 !== 0 && soHai % 2 !== 0 && soBa % 2 === 0){
        tongSoChan = 1;
        tongSoLe = 2 ;
    }else if(soMot % 2 !== 0 && soHai % 2 === 0 && soBa % 2 !== 0){
        tongSoChan = 1;
        tongSoLe = 2;
    }else if(soMot % 2 === 0 && soHai % 2 !== 0 && soBa % 2 !== 0){
        tongSoChan = 1;
        tongSoLe = 2 ;
    }else{
        "vui lòng nhập số dương"
    }
    document.getElementById('ketQua').innerHTML= `
    <p>Tổng số chẵn : ${tongSoChan}</p>
    <p>Tổng số lẻ : ${tongSoLe}</p>
    `;
}

// bài 4 
document.getElementById('btnTamGiac').onclick = function(){
    var canhMot = +document.getElementById('canhMot').value;
    var canhHai = +document.getElementById('canhHai').value;
    var canhBa = +document.getElementById('canhBa').value;
   
    if(canhMot === canhHai || canhMot === canhBa || canhHai === canhBa){
        document.getElementById('tamGiac').innerHTML = "Tam Giác Cân";
    }else if (canhMot === canhHai === canhBa){
        document.getElementById('tamGiac').innerHTML = "Tam Giác Đều";
    }else{
        document.getElementById('tamGiac').innerHTML = "Tam Giác Vuông";
    }
}

