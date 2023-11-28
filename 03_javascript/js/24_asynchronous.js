/**
 * 
 * 동기 Synchronous : 짝을 맞춘다. (함수호출-리턴과 그 다음 실행의 짝을 맞춘다.)
 * 비동기 Asynchronous : 짝을 맞추지 않는다. (함수호출-리턴과 그 다음 실행의 짝을 맞추지 않는다.)
 * 
 * - js runtime은 싱글스레드로 작동한다. (페이지 당 하나)
 * - 시간이 오래 걸리는 작업(timer api, dom, event처리)은 백그라운드로 치워뒀다가 이후에 실행. (비동기처리)
 */
document.querySelector("#btn1").addEventListener('click', () => {
    // 동기처리
    const value = foo();
    console.log(value);

    // 비동기처리
    let value2;
    setTimeout(() => {
        value2 = 200;
        console.log(value2); // 200출력을 위해 묶어서 사용
    }, 0);
    //console.log(value2); //1초를 기다리지 않고 바로 console출력, undefined
});
const foo = () => 100;


/**
 * DOM에 요소를 추가/삭제하는 작업은 비동기처리된다.
 */
document.querySelector("#btn2").addEventListener("click", () => {
    loadScript('js/24_test.js', () => {
        test();
    });
    // test(); // Uncaught ReferenceError: test is not defined
});

const loadScript = (src, callback) => {
    // js/24test.js를 동적으로 로드, 그 안의 함수 test를 호출
    const script = document.createElement('script'); // <script></script>
    script.src = src;
    script.onload = callback; // onload는 dom에 load가 완료되면 호출되는 핸들러
    document.head.append(script); // 해당 부분 비동기처리
};

/**
 * 1초간격으로 배경색이 빨->주->노->초->파->남->보
 * - setTimeout 연속 사용
 * - callback hell (콜백지옥, 연속으로 계속되면 지옥이 펼쳐짐)
 */
document.querySelector("#btn3").addEventListener('click', () => {
    const box = document.querySelector('.box');
    box.style.backgroundColor = 'red';
    setTimeout(() => {
        box.style.backgroundColor = 'orange';
        setTimeout(() => {
            box.style.backgroundColor = 'yellow';
            setTimeout(() => {
                box.style.backgroundColor = 'green';
                setTimeout(() => {
                    box.style.backgroundColor = 'blue';
                    setTimeout(() => {
                        box.style.backgroundColor = 'darkblue';
                        setTimeout(() => {
                            box.style.backgroundColor = 'purple';
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
});