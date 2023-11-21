// test1();
// 함수 선언식은 정상작동
// 함수 표현식은 에러발생 : Uncaught ReferenceError: Cannot access 'test1' before initialization

/**
 * 함수 선언식
 *  - hoisting 처리됨.
 *  - <scrpit>태그, js파일을 처리시에 함수가 끌어올려져서 우선 등록됨.
 */

// function test1(){
//     console.log('🎂');
// }


/**
 * 함수 표현식
 *  - hoisting 처리안됨.
 *  - 변수에 함수라는 값을 대입
 *  - 익명함수 전달
 */
const test1 = function(){
    console.log('💕');
};

/**
 * IIFE
 *  - Immediately Invoked Function Expression
 *  - 함수 선언과 호출을 동시에 처리 (1회용)
 *  - 전역변수 노출 대신 지역변수로 처리하기 위해 사용
 */
(function(){
    console.log('😎');
})();

// 매개변수 parameter (선언부) 매개인자가 담길 공간
// 매개인자 argument (호출부) 함수에 전달할 값
(function(text){
    console.log(text);
})('😆');

/**
 * 자바스크립트 매개변수 선언과 다르게 매개인자를 전달해도 오류 없음
 * arguments : 함수의 모든 매개인자를 관리하는 숨은 참조배열
 */
const test2 = function(){
    foo(10, 20);
    foo(10, 20, 30);
    foo();
    foo(10);
};

const foo = function(m, n){
    console.log(m, n);
    console.log(arguments);
};

/**
 * 모든 자바스크립트 함수에는 리턴값이 있다.
 * 명시하지 않은 경우 undefined가 반환
 */
const test3 = function(){
    console.log(bar());
};

const bar = function(){};

/**
 * 화살표함수
 * - 익명함수를 간결하게 작성하는 방법
 * - (매개변수) => {함수실행부}
 * 
 * - 생성자 함수로 사용불가능
 * - 함수자체 this 없음, 부모 this를 가져와 사용
 */
const test4 = function(){
    console.log(koo(1, 2, 3));
};

// const koo = (a, b, c) => {
//     return a + b + c;
// };
// return 구문 한줄만 있을 경우 { return } 생략가능
const koo = (a, b, c) => a + b + c;

// const boo = (b) => {
//     console.log(b);
// }
// 실행구문이 한 줄 뿐일때도 {} 생략가능
const boo = (b) => console.log(b);

// 매개변수가 하나 뿐 일때 () 생략가능
const hoo = (h) => {
    console.log(h);
    console.log(typeof h);
}


/**
 * 나머지파라미터
 *  - 매개인자 여러개를 배열로 처리
 *  - 전개연산자와 동일한 모양이지만, 변수자리에만 사용가능
 */
const test5 = () => {
    // zoo('홍길동', '신사임당', '세종대왕');

    const names = ['홍길동', '신사임당', '세종대왕'];
    zoo(...names); // 전개연산자 (함수호출부)

    zoo('캡틴아메리카', '헐크');
};

// 일반 매개변수와 혼용 시 마지막에 한번만 사용가능
const zoo = (captain, ...names) => { //나머지파라미터 (선언부)
    console.log(captain, names);

}

/**
 * @실습문제 계산기
 */
const test6 = () => {
    console.log(calc('plus', 10, 20)); // 30
    console.log(calc('minus', 30, 20)); // 10
    console.log(calc('multi', 10, 20, 30)); // 60
    console.log(calc('divide', 30, 6)); // 5
    console.log(calc('remain', 10, 3)); // 1

};

// const calc = (type, ...nums) => {
//     switch(type) {
//         case 'plus': 
//             result = nums.reduce((agg, n) => agg + n);
//             break;
//         case 'minus':
//             result = nums.reduce((agg, n) => agg - n);
//             break;
//         case 'multi':
//             result = nums.reduce((agg, n) => agg * n); 
//             break;
//         case 'divide': 
//             result = nums.reduce((agg, n) => agg / n);
//             break;
//         case 'remain': 
//             result = nums.reduce((agg, n) => agg % n);
//             break;
//     }
//     return result;
// };

const calc = (type, ...nums) => 
            nums.reduce((agg, n) => {
                switch(type) {
                    case 'plus': return agg + n;
                    case 'minus': return agg - n;
                    case 'multi': return agg * n;
                    case 'divide': return agg / n;
                    case 'remain': return agg % n;
                }
            });


/**
 * 자바스크립트에서 함수는 1급객체다.
 * - 함수는 값이다.
 * - 변수에 대입/함수호출전달/함수리턴값
 */
const test7 = () => {
    const a = 3;
    const b = a;
    console.log(b); // 3


    const k = () => console.log('🌭');
    k();
    const m = k;
    console.log(m); // () => console.log('🌭');
    m();

    // 함수를 매개인자로 사용
    // runner(k);
    // runner(() => console.log('🍜'));
    runner((n) => console.log(`🍙${n}`));

    // 계산기예제2
    console.log(calc2((a, b) => a + b, 10, 20)); // 30
    console.log(calc2((a, b) => a - b, 10, 20)); // -10
    console.log(calc2((a, b) => a * b, 10, 20)); // 200
    console.log(calc2((a, b) => a / b, 10, 20)); // 0.5
    console.log(calc2((a, b) => a % b, 10, 20)); // 10
};

const calc2 = (f, a, b) => {
    // f에 함수가 들어갔다.
    
    console.log(f, a, b);
    return f(a, b);
};

const runner = (f) => {
    for(let i = 0; i < 10; i++)
        f(i + 1);
};

/**
 * 함수를 리턴값으로 반환하기
 */
const test8 = () => {
    const k = getFunction();
    
    k('길동', '디저트 먹어~');
    const friends = ['길동', '철수', '영희', '헉'];
    friends.forEach((name) => {
        k(name, '디저트 먹어');
    });

    const sayHello = getFunction2('Hello');
    sayHello('길동');
    const sayGoodbye = getFunction2('Goodbye');
    // const sayGoodbye = (name) => console.log(`${greeting}~ ${name}`);
    console.log(sayGoodbye);
    sayGoodbye('길동');

    // 돈 좀 꿔줘 ~ 길동
    const borrowSomeMoney = getFunction2('돈 좀 꿔줘');
    borrowSomeMoney('길동');

};

const getFunction = () => {
    return (name, text) => console.log(`${name}${text} 🥗🥗🥗`);
};

// const getFunction2 = (greeting) => {
//     return (name) => console.log(`${greeting}~ ${name}`);
// };
const getFunction2 = (greating) => (name) => console.log(`${greating}~ ${name}`);


/**
 * tagMaker 함수 작성
 * - 특정태그를 만드는 함수를 반환
 * - 반환된 함수의 태그의 내용을 전달해 호출
 * - div#result에 요소 추가 
 * 
 */
const test9 = () => {
    const writeP = tagMaker('p');
    const writeMark = tagMaker('mark');
    const writeButton = tagMaker('button');

    const result = document.querySelector("#result");
    result.innerHTML = writeP('안녕');
    result.innerHTML += writeMark('밥 먹었니?');
    result.innerHTML += writeButton('클릭');
};

const tagMaker = (tagName) => (content) => `<${tagName}>${content}</${tagName}>`;