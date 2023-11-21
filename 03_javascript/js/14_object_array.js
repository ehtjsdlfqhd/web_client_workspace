/**
 * 객체배열
 */
const test1 = () => {
    const pets = [];
    pets.push({
        name : '큰애',
        bread : '수컷고양이',
        weight : 5,
        age : 4,
        color : ['blackwhite'],
        bark() {
            return this.weight < 10 ? '야옹' : '우웅';
        }
    });
    pets.push({
        name : '작은애',
        bread : '암컷고양이',
        weight : 3,
        age : 2,
        color : ['brown'],
        bark() {
            return this.weight < 10 ? '야옹' : '우웅';
        }
    });
    pets.push({
        name : '치즈',
        bread : '중성화고양이',
        weight : 6,
        age : 3,
        color : ['yellow'],
        bark() {
            return this.weight < 10 ? '야옹' : '우웅';
        }
    });

    console.log(pets);
}

/**
 * 생성자함수
 * - new연산자와 함께 호출할 함수
 * - 해당타입의 객체가 반환
 * - 관례적으로 대문자로 시작하는 이름을 갖는다.
 * - this용법3. 생성자함수(new연산자로 호출)안 this는 현재객체를 가리킨다.
 */
const test2 = () => {
    const pets = [];
    pets.push(new Pet('큰애', '수컷고양이', 5, 18, 'black'));
    pets.push(new Pet('작은애', '암컷고양이', 3, 9, 'brown'));
    pets.push(new Pet('치즈', '중성화고양이', 4, 12, 'yellow'));
    console.log(pets);

    pets.forEach((pet) => console.log(`${pet.name}가(이) ${pet.bark()} 운다 ~`));
}

function Pet(name, breed, weight, age, ...colors){
    this.name = name;
    this.bread = breed;
    this.weight = weight;
    this.age = age;
    this.colors = colors;
    this.bark = function(){
        return this.weight < 10 ? "야옹" : "우웅";
    };
}

/**
 * this용법 4. 일반함수 안에서 this는 window객체를 가리킨다.
 * - window 브라우저 최상위 객체 (DOM(document), js object, BOM..)
 */
const test3 = function(){
    console.log(this); // window (전역객체)
    console.log(window, globalThis);
}