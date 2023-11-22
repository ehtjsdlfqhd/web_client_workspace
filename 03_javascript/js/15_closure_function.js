/**
 * 자유변수 Free Variable
 * - 함수 지역범위에서 선언되지 않은 변수
 */
const test1 = () => {
    say('길동');
}

const hello = "안녕하세요";

// name(매개변수), str1, str2 는 지역변수
// 자유변수 : hello
const say = (name) => {
    const str1 = `${hello}~, ${name}`;
    const str2 = "식사는 하셨나요??";
    console.log(str1, str2);
};

/**
 * closure 함수
 * - 닫힘함수. 참조하는 자유변수를 가지고 외부로부터 닫힌 함수
 * - 함수를 반환하는 과정에서 클로저 함수를 만들 수 있다.
 */
const test2 = () => {
    const n = 20;
    const foo2 = foo();
    // const foo2 = () => console.log(n);
    console.log(foo2); // foo함수의 자유변수까지 같이 반환되서 10 출력
    foo2();
}

const foo = () => {
    const n = 10;
    return () => console.log(n);
}

/**
 * 전역카운터
 * 전역변수는 어디서나 참조되기 때문에 보안 및 오염에 취약
 * 자바처럼 private 생성자 같은 것도 없음
 */
let cnt = 0;
const test3 = () => {
    cnt++;
    document.querySelector("#global-counter").innerHTML = cnt;
}

/**
 * 클로저카운터
 */
const counterMaker = () => {
    let cnt = 0; //자유변수 선언
    return () => {
        cnt++;
        document.querySelector("#closure-counter").innerHTML = cnt;
    };
}
//함수표현식이라 선언이 우선되어야 함

const test4 = counterMaker(); //자유변수 cnt까지 함께 받음, 외부접근 불가(열람은가능)