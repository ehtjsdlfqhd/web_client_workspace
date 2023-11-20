function showVal() {
    const show = document.getElementById("productLevel");
    const val = document.getElementById("productLevel").value;
    const pVal = document.getElementById("pVal");
    console.dir(val, typeof val);
    pVal.innerText = val;
}

function printProduct() {
    const boolean = confirm("구매내용을 전송하시겠습니까?");
    const pSelect = document.getElementById("productName").value;
    console.log(pSelect, typeof pSelect);
    const pName = document.getElementsByTagName("option");
    let choose = "";
    
    for (let i = 0; i<pName.length; i++){
        console.log(pName[i].value, typeof pName[i].value);
        if (pSelect == pName[i].value) {
            choose += pName[i].innerHTML;
        }
    }
    
    const val = document.getElementById("productLevel").value;
    const amount = document.getElementById("productAmount").value;
    const message = document.getElementById("message").value;
    const result = document.getElementById("result");

    
    if(boolean) {
        alert("구매내용 전송완료")
        result.innerText = 
        `상품명 : ${choose}
        납품등급 : ${val}
        납품수량 : ${amount}
        기타사항 : ${message}
        `
    }
    else {
        alert("전송을 취소했습니다.")
    }
}