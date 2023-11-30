const key = document.querySelector("#key");
const value = document.querySelector("#value");


document.querySelector("#btn1").onclick = () => {
    if(!key.value || !value.value) {
        alert("key와 value를 입력해주세요.");
        return;
    };
    
    localStorage.setItem(key.value, value.value);

    key.value = '';
    value.value = '';
};

document.querySelector("#btn2").onclick = () => {
    if(!key.value) {
        alert("key를 작성해주세요");
        return;
    };

    const retrived = localStorage.getItem(key.value);
    if(retrived) {
        value.value = retrived;
        return;
    }
    else {
        alert('조회결과가 없습니다.')
        key.value = '';
    };
};

document.querySelector('#btn3').onclick = () => {
    if(!key.value) {
        alert("key를 작성해주세요");
        return;
    };

    localStorage.removeItem(key.value);
    key.value = '';
    value.value = '';
};

document.querySelector('#btn4').onclick = () => {
    localStorage.clear();
};

document.querySelector('#btn5').onclick = () => {
    const bird = {
        birdname : '참새',
        id : 'nightbird',
        fly : true
    };
    localStorage.setItem('bird', JSON.stringify(bird));
    
    const birds = localStorage.getItem('bird');
    const birds2 = JSON.parse(birds);
    console.log(birds2);
};

const frm = document.guestbookFrm;
const name = frm.name;
const content = frm.content;
const saveGuestbook = () => {
    const guestbooks = JSON.parse(localStorage.getItem('guestbooks')) || [];
    guestbooks.push(new Guestbook(name.value, content.value));
    console.log(guestbooks);

    frm.reset();
    localStorage.setItem('guestbooks', JSON.stringify(guestbooks));
};

class Guestbook {
    constructor(name, content, createdAt = Date.now()) {
        this.name = name;
        this.content = content;
        this.createdAt = createdAt;
    }
};

const renderGuestbooks = () => {
    const guestbooks = JSON.parse(localStorage.getItem('guestbooks')) || [];
    const tbody = document.querySelector('#tb-guestbook tbody');
    tbody.innerHTML = '';
    guestbooks.forEach((guestbook, index) => {
        const {name, content, createdAt} = guestbook;
        console.log(name, content, createdAt);

        const tr = `
        <tr>
            <td>${name}</td>
            <td>${content}</td>
            <td>${convertToDatTime(createdAt)}</td>
        </tr>`;
        tbody.innerHTML += tr;
    });
};

const f = (n) => n < 10 ? '0' + n : n;
const convertToDatTime = (millis) => {
    const d = new Date(millis);
    const mm = f(d.getMonth() + 1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());
    const mi = f(d.getMinutes());
    return `${mm}/${dd} ${hh}:${mi}`;
};

renderGuestbooks();