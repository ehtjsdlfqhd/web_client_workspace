/**
 * 객체
 * - 속성(속성명 = 속성값)모음
 * - 속성명 : 모든 타입, 문자열/식별자 등을 추천
 * - 속성값 : 모든 타입
 */
const test1 = () => {
    const obj = {
        id : 'honggd',
        name : '홍길동',
        age : 33,
        marrie : true,
        hobby : ['게임', '독서', '먹방'],
        pet : {
            name : '구리구리'
        },
        123 : 456,
        'user-name' : 'sinsa'
    };
    console.log(obj);

    // new연산자
    const obj2 = new Object();
    obj2.kor = 88;
    obj2.eng = 77;
    obj2.math = 55;
    console.log(obj2);

    // 속성접근
    // 1. dot-notation
    // 2. bracket-notation

    // dot-notation
    console.log(obj.id);
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.hobby);
    console.log(obj.hobby[0]);
    console.log(obj.pet.name);
    // console.log(obj.123);
    // console.log(obj.user-name); 오류

    // 문자열로 속성명 작성 (bracket-notation)
    console.log(obj['id']);
    console.log(obj['name']);
    console.log(obj['age']);
    console.log(obj['hobby']);
    console.log(obj['hobby'][0]);
    console.log(obj['pet']['name']);
    console.log(obj[123]);
    console.log(obj['user-name']);

    // 존재하지 않는 속성을 참조
    console.log(obj.father); // undefined
    // console.log(obj.father.job); // Uncaught TypeError: Cannot read properties of undefined (reading 'job')
    
    // 속성 추가
    obj.father = '홍명보';
    obj.father = '홍금보'; // override 덮어쓰기
    console.log(obj);

    // 속성 값 제거
    obj.hobby = undefined;
    // 속성 제거
    delete obj.hobby;
}

/**
 * function {superset}
 * method {subset} : function이 객체 소속의 함수
 */
const test2 = () => {
    const user = {
        username : '홍길동',
        //메소드 : 객체의 속성 타입이 함수인 경우
        run : function(){
            // this용법2. 객체메소드(일반함수) 안 this는 현재객체를 가리킨다.
            console.log(`${this.username}~달린다~`);
        },
        //메소드 단축문법, 메소드일때만 사용가능
        eat(food){
            console.log(`${this.username}이(가) ${food}를 먹는다.`);
        },
        work : () => {
            // 메소드에 화살표함수 사용 피해야 하는 이유
            console.log(this); // this가 window를 가르키므로 undefined 발생
            console.log(`${this.username}~일해라~`);
        }
    }

    console.log(user.username);
    user.run();
    user.eat('🍖');

    user[`run`]();
    user[`eat`]('🍧');

    user.work();
};

/**
 * 관련된 함수를 전역에 선언하지 않고,
 * 객체안에 선언하면 namespace로 사용할 수 있다.
 */
const test3 = () => {
   const calculator = {
        plus(a, b){
            return a + b;
        },
        plus(a, b){
            return a - b;
        },
        plus(a, b){
            return a * b;
        },
        plus(a, b){
            return a / b;
        },
        plus(a, b){
            return a % b;
        }
    };
    console.log(calculator.plus(10, 20));
    console.log(calculator.plus(10, 20));
    console.log(calculator.plus(10, 20));
    console.log(calculator.plus(10, 20));
    console.log(calculator.plus(10, 20));
};


/**
 * - for..in문
 * - Object.keys()
 * - Object.values() */
const test4 = () => {
    const obj = {
        name : '청국장',
        price : 15_000,
        ingredient : ['청국장', '양파', '마늘', '파'],
    };
    
    // for..in
    for(prop in obj){
        console.log(prop, obj[prop]);
    }

    // Object.keys
    const keys = Object.keys(obj);
    console.log(keys);
    keys.forEach((key) => console.log(key, obj[key]));

    // Object.values
    const values = Object.values(obj);
    values.forEach(value => console.log(value));
    
}