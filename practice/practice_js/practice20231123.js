document.querySelector("#btn-generate").onclick = (e) => {
    const sites = `네이버,https://www.naver.com
구글,https://www.google.com
W3C,https://www.w3.org/
MDN Web,https://developer.mozilla.org/en-US/
와삼,https://www.w3schools.com`;
    console.log(sites);
    const sites2 = sites.split('\n');
    console.log(sites2);
    const sites3 = sites2.map((n, u) => n.split(','));
    console.log(sites3);
    sites3.forEach(makebutton);
    this.onclick=null; //화살표함수는 부모 this를 사용한다. window.this와 동일해서 작동하지않음
    e.target.onclick = null; //핸들러를 1회성으로 만듬
};

const makebutton = ([siteName, address]) => {
    document.getElementsByClassName('btn-wrapper')[0].innerHTML +=
    `<button onclick="open('${address}','${siteName}','width=500', 'height=500', 'top=400', 'left=400')">
    ${siteName}
    </button>`
};
