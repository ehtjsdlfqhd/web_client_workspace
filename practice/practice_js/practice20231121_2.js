const test = () => {
    const member_data = `김지영,25,010-1234-5678
박준호,32,010-9876-5432
이민지,28,010-5555-5555
정승훈,45,010-1111-2222
최현우,19,010-7777-8888
장수민,37,010-4444-3333
송지원,31,010-8888-9999
이도현,26,010-2222-1111
신영주,42,010-6666-7777
강현우,23,010-3333-4444
김지현,29,010-9999-8888
이승희,35,010-4444-5555
박동진,41,010-2222-3333
최진우,20,010-7777-6666
장윤서,27,010-5555-4444`;
    const arr1 = member_data.split('\n');
    console.log(arr1);
    const tableSet = document.querySelector('#contact');
    console.log(tableSet);
    arr1.forEach(function(text){
        const member_info = text.split(',');
        const member_name = member_info[0];
        const member_age = member_info[1];
        const member_tel = member_info[2];
        const tgs = `
        <tr>
            <td>${member_name}</td>
            <td>${member_age}</td>
            <td>${member_tel}</td>
        </tr>
        `;
        tableSet.innerHTML += tgs;
    })
}

function sortContactByAge(type) {
    const trs = Array.from(document.querySelectorAll("table#contact tbody tr"));
    console.log(trs);
    const compareFunction = type === 'asc' ?
        function(tr1, tr2) {
            const age1 = tr1.querySelector("td:nth-child(2)").innerText;
            const age2 = tr2.querySelector("td:nth-child(2)").innerText;
            return age1 - age2;
        } :
        function(tr1, tr2) {
            const age1 = tr1.querySelector("td:nth-child(2)").innerText;
            const age2 = tr2.querySelector("td:nth-child(2)").innerText;
            return age2 - age1;
        };
    trs.sort(compareFunction);
    trs.forEach(function(tr) {
        document.querySelector('table#contact tbody').append(tr);
    });
}

function sortContactByName(type) {
    const trs = Array.from(document.querySelectorAll("table#contact tbody tr"));
    console.log(trs);
    let compareFunction;
    if (type === 'asc') {
        compareFunction = function(tr1, tr2){
            const name1 = tr1.querySelector("td:first-child").innerText;
            const name2 = tr2.querySelector("td:first-child").innerText;
            if(name1 > name2) return 1;
            if(name1 < name2) return -1;
            return 0;
        };
    }
    else {
        compareFunction = function(tr1, tr2){
            const name1 = tr1.querySelector("td:first-child").innerText;
            const name2 = tr2.querySelector("td:first-child").innerText;
            if(name1 > name2) return -1;
            if(name1 < name2) return 1;
            return 0;
        };
    }
    trs.sort(compareFunction);

    trs.forEach(function(tr){
        document.querySelector('table#contact tbody').append(tr);
    });
}


