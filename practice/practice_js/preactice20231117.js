function printValue() {
    const member = document.getElementsByTagName("input")[0].value
    const products = document.getElementById("pname").value;
    const prices = document.getElementsByName("price")[0].value;
    console.dir(prices, typeof prices);
    const area = document.getElementById("area");

    area.innerText +=
    `구입자 : ${member}
    구입상품 : ${products}
    구매가격 : ${prices}만원
    `;
}