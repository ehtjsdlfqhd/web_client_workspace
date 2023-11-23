/**
 * window
 * 브라우저 최상위객체
 * 탭 별로 하나 씩 존재
 *  - BOM (Browser Object Model) : navigator, history, screen, ..
 *  - DOM (Document Object Model) : document
 *  - Javascript Object
 *  - ...
 */
const test1 = () => {
    console.log(window);
}

/**
 * open
 *  - 새 창(탭/팝업)을 여는 함수
 *  - 새 창의 window객체를 반환, 해당 창에 대한 제어가능
 */
const test2 = () => {
    // window.open(); window 생략가능
    // open(url, name, spec)
    // const newWindow = open('01_hellojs.html', 'hellojs', '');
    const newWindow = open('01_hellojs.html', 'hellojs', 'width=500, height=300, top=400, left=400');
    // 같은 이름의 window는 하나만 존재할 수 있다.
    // const newWindow = open('01_hellojs.html', '_self', ''); // 현재 탭을 대체

    console.log(newWindow); // 해당 window객체는 새 창의 window 

    setTimeout(() => {
        // newWindow.close();
        newWindow.alert('🙄😶😑');
        newWindow.document.write('<h1>😈</h1>')
    }, 3000);
}

/**
 * Time API - setTimeout
 *  - 설정한 milli초 후에 callback 함수 실행
 *  - js에서의 시간은 스레드 스케쥴링에 의해 늘어질 수 있다.
 */
const test3 = () => {
    const timeoutId = setTimeout(() => {
        alert('🎉🎊🎉');
    }, 1000);
    console.log(timeoutId);
};

// (() => {
//     setTimeout(() => {
//         console.log('회원가입 후 더 많은 혜택을 누리세요!');
//     }, 5000);
// })();

/**
 * setInterval(callbackFunction, millis)
 *  - mills초 후에 callbackFunction을 실행
 *  - mills초 간격으로 callbackFunction을 반복실행
 *  - clearInterval(id) 명령어로 취소하기 전까지 실행
 */
let intervalId;
const test4 = () => {
    let i = 1;
    const intervalId = setInterval(() => {
        console.log(i++);
    }, 1000);
    console.log(intervalId, '번 인터벌이 등록되었습니다.');
}

/**
 * 사용자 타이머
 */
let timeoutId;
const test5 = () => {
    const timer = document.getElementById('sec').value;
    const texts = document.getElementById('message').value;
    //초기화 위한 변수 선언
    const messageVal = message.value;

    //유효성 검사
    if(!message.value || !sec.value) {
        alert('값을 입력해주세요 😥');
        return;
    }

    console.log(timer);
    timeoutId = setTimeout(() => {
        const newWindow = open('','pop','width=400, height= 450, top=300, left=800');
        newWindow.document.write(`<div>${texts}</div>`);
        timeoutId = undefined; // id 제거
    }, timer*1000);
    console.log(timeoutId, '번 타이머가 설정되었습니다.');
    
    //
    message.value = '';
    sec.value = '';
};

const test6 = () => {
    if(timeoutId){
        clearTimeout(timeoutId);
        alert('타이머가 취소 되었습니다.😮');
    }
};

/**
 * 초시계
 */
//한자리 수 표기 함수
const f = (n) => n < 10 ? '0' + n : n;

const clock = () => {
    const d = new Date();
    const hh = f(d.getHours());
    const mm = f(d.getMinutes());
    const ss = f(d.getSeconds());
    console.log(`${hh}:${mm}:${ss}`);
    return `${hh}:${mm}:${ss}`;
};

const displayClock = () => document.querySelector('#clock-display').innerHTML = clock();
displayClock();
setInterval(displayClock, 1000);
