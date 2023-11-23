document.querySelector("#btn-generate").onclick = () => {
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
    this.onclick=null;
};

const makebutton = ([siteName, address]) => {
    document.getElementsByClassName('btn-wrapper')[0].innerHTML +=
    `<button onclick="open('${address}','${siteName}','width=500', 'height=500', 'top=400', 'left=400')">
    ${siteName}
    </button>`
};
