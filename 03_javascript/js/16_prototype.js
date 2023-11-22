/**
 * javascript는 prototype기반의 상속모델을 제공
 * JS에서는 부모객체를 만들지 않고 .prototype 객체를 활용
 * object, function, array 등 생성 시 .prototype 기본으로 생성
 * 
 */
const test1 = () => {
    const cars = [];
    cars.push(new Car("그랜져"));
    cars.push(new Car("소나타"));
    cars.push(new Car("카니발"));

    console.log(cars);

    cars.forEach((car) => car.move());
}

function Car(name) {
    this.name = name;
    // this.move = function(){
    //     console.log(`${this.name}가 이동합니다. 🚙`);
    // };
};

// prototype의 constructor move함수를 참조
// .prototype과 constructor는 1:1로 마주하고 있다.
Car.prototype.move = function(){
    console.log(`${this.name}가 이동합니다. 🚙`);
};

/**
 * Car를 상속하는 Truck 만들기
 *  - capacity 적재량
 * 
 * 상속구현
 * 1. 부모생성자 호출 apply
 * 2. 프로토타입 객체 생성 Object.create
 * 3. 프로토타입객체의 생성자함수 연결
 */
const test2 = () => {
    const bongo = new Truck('봉고', 1_000);
    console.log(bongo);
    bongo.move();
};

function Truck(name, capacity) {
    // 부모생성자 함수 호출, Java의 super가 없음
    // apply : 현재 객체 기준으로 Car생성자함수 호출 (super역할)
    Car.apply(this, [name]);
    this.capacity = capacity;
};

// 2. 기존 프로토타입 지우고 새로운 프로토타입객체 생성
// 전달한 객체를 상속하는 객체를 생성
Truck.prototype = Object.create(Car.prototype);
// 3. 프로토타입 객체에 생성자 함수 연결
Truck.prototype.constructor = Truck;


/**
 * this binding 함수 (this에 해당하는 객체가 있어야 함)
 * - apply(this객체, [...params]) 호출
 * - call(this객체, ...params) 호출
 * - bind(this객체) 바인딩 후 함수반환
 */
const test3 = () => {
    const foo = function(a, b){
        // this = window 이므로 id값이 없어서 undefined출력
        console.log(this.id, a + b);
    };
    // foo();

    const obj = {
        // foo의 this 객체가 obj를 참조
        id : 'honggd1234'
    };
    // foo.apply(obj, [10, 20]);
    // foo.call(obj, 10, 20);

    const foo2 = foo.bind(obj);
    foo2(10, 20);
}

/**
 * Book
 * - title 책 제목
 * - author 저자
 * - price 가격
 * - info 메소드 : 책제목/저자/가격 출력
 * 
 * Novel
 * - Book 속성 전부
 * - type : 소설종류 (연애, 추리, SF, 심리 등)
 * - read(이름) 메소드 : 누가 책제목(타입)을 읽는다.
 */


const test4 = () => {
    const books = [
        new Novel('매트릭스', '네오', 35_000, 'SF')
    ];
    
    books.forEach((book) => {
        book.info();
        book.read('홍길동');
    })
}
function Book(title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;
};
Book.prototype.info = function(){
    console.log(`${title},${author},${price}`);
};


function Novel(title, author, price, type){
    Book.call(this, title, author, price);
    this.type = type;
};
Novel.prototype = Object.create(Book.prototype);
Novel.prototype.constructor = Novel;
Novel.prototype.read = function(name){
    console.log(`${name}이 ${this.title}(${this.type})을 읽는다`);
};




/**
 * - 생성자함수
 * - 프로토타입객체
 * - 생성객체 new연산자 호출결과
 */
const test5 = () => {
    // A
    // A.prototype
    // new A()

    const a = new A();
    console.log(a.id); //가나다
    a.hello(); //안녕

    // static
    console.log(A.id);
    A.hello();
}

function A(){
    this.id = '가나다'
    this.hello = function(){
        console.log("안녕");
    }
}

A.prototype.id = 'ABC';
A.prototype.hello = function(){
    console.log("HELLO");
}

// 함수객체에 직접 속성등록 (static)
A.id = 'xxx';
A.hello = function(){
    console.log('xxx');
}