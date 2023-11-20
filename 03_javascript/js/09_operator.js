/**
 * 짧은 조건식
 * - (조건식) && (실행문) true일때만 실행
 * - (조건식) || (실행문) false일때만 실행
 * - 실행문에는 return문 작성불가(if무 네덱)
 */
function test1() {
const num = prompt("정수입력 : 10")
console.log(num);

// true && true -> 우항검사
// true && false -> 우항검사                                                                                                                                    
// false && true ->;
// false && false

// num % 2 == 0 && alert("짝수임돠");
(num % 2 == -0) || alert("홀수");

document.querySelector("#foo") 
    document.querySelector("#foo")
    || (document.body.innerHTML += '<div id="foo">😎😎</div>');
}


/**
 * ||
 */
function test2() {
    const a = 10;
    const b = 3;
    //a가 존재해서 true로 평가되면 a를 대입
    //a가 존재하지 않아서 false로 평가되면 b를대입
    const c = a || b;
    console.log(c);

    //#foo객체 또는 #bar객체를 변수 some에 대입
    const some = document.querySelector("#foo") || document.querySelector("#bar");
    console.log(some);
}
