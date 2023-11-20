/**
 * 산술 연산 시 주의할 형변환
 * number + string = string
 * number - string = number | NaN
 * number * string = number | NaN
 * number / string = number | NaN
 * number % string = number | NaN
 */
function test1() {
    console.log(3 + '3'); // 문자열 '33'
    console.log(3 - '3'); // 0
    console.log(3 * '3'); // 9
    console.log(3 / '3'); // 1
    console.log(3 % '3'); // 0

    console.log(3 - 'a'); // NaN (Not a Number)
    console.log(3 * 'a'); // NaN (Not a Number)
    console.log(3 / 'a'); // NaN (Not a Number)
    console.log(3 % 'a'); // NaN (Not a Number)
    console.log(typeof NaN); // number타입
}

/**
 * 비교연산자
 * == 타입이 달라도 값(형변환 후)이 같으면 true 반환
 * != 값이 다르면 true반환
 * 
 * 엄격비교연산자
 * === 값/타입이 모두 같아야 true반환
 * !== 값 또는 타입이 달라야 true를 반환
 * JS에서는 의도치 않은 형변환이 일어날 수 있으니 엄격비교연산자 사용권장
 */
function test2() {
    console.log(3 == "3"); // true
    console.log(3 != "3"); // false

    console.log(3 === "3"); // false
    console.log(3 !== "3"); // true

    // 사전등재순 : 먼저 나온 순서가 작다.
    console.log("a" > "b"); //false
    console.log("a" < "b"); //true
    console.log("a" >= "b"); //false
    console.log("a" <= "b"); //true
}

/**
 * 숫자형변환
 * - Number() 숫자로 변환. 변환불가한 문자 존재 시 NaN반환
 * - parseInt() 정수로변환, 변환불가한 문자 발생 전 까지 반환
 * - parseFloat() 실수로 변환 double 없음. 변환불가한 문자 발생 전 까지 반환
 */
function test3() {
    const num1 = '123.456';
    console.log(Number(num1)); // 123.456
    console.log(parseInt(num1)); // 123
    console.log(parseFloat(num1)); // 123.456

    const num2= '123.456원';
    console.log(Number(num2)); // NaN
    console.log(parseInt(num2)); // 123
    console.log(parseFloat(num2)); // 123.456

    const num3 = '$123.456';
    console.log(Number(num3)); // NaN
    console.log(parseInt(num3)); // NaN
    console.log(parseFloat(num3)); // NaN

    // 숫자가 아닌 문자열 제거
    const _num3 = num3.replace(/[^0-9.]/g, '');
    console.log(_num3); // 123.456
    console.log(Number(_num3)); // 123.456
    console.log(parseInt(_num3)); // 123
    console.log(parseFloat(_num3)); // 123.456

}

function callAdd(){
    // 실습문제 : type text,number,range,date,datetime-local,color 모두 string반환
    const number1 = document.getElementById("num1");
    const num1val = number1.value;
    const number2 = document.getElementById("num2");
    const num2val = number2.value;
    addnum = 0;
    if(isNaN(num1val) || isNaN(num2val)){
        alert('잘못된 숫자입력');
        return; // 자바의 조기리턴
    }
    addnum += Number(num1val) + Number(num2val);
    console.log(addnum);
}

/**
 * Infinity 무한수
 * - number 타입
 */
function test4() {
    console.log(10 / 0); // Infinity number
    console.log(10/0 === Infinity); // true
}

/**
 * 논리형으로의 자동형변환
 * - 모든 자료형은 boolean으로 평가될 수 있다.
 * - true (값이 존재) 123, 45.43, -123, "abc", [], {}, Infinity
 * - false (값이 없음) 0, 0.0, "", undifined, null, NaN
 */
function test5() { //모두 true
    console.log(Boolean(123));
    console.log(Boolean(45.67));
    console.log(Boolean(-100));
    console.log(Boolean("abc"));
    console.log(Boolean([]));
    console.log(Boolean({}));
    console.log(Boolean(10/0)); // Infinity

    console.log(Boolean(0));
    console.log(Boolean(0.0));
    console.log(Boolean(""));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean("abcd")); // NaN
}

