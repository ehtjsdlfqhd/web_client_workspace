/**
 * Promise
 * - 비동기작업(producing code) + 콜백(consuming code)를 명쾌히 작성하는 문법
 * - Promise 객체는 status/result 상태값을 가진다.
 *  - status : pending(대기) -> fulfiled(정상처리) | rejected(거부)
 *  - result : undefined -> value | error객체
 * - Promise 객체는 두개의 callback함수를 가진다.
 *  - resolve : 정상처리된 경우 호출하는 콜백
 *  - reject : 오류가 발생한 경우 호출하는 콜백
 */
document.querySelector("#btn1").addEventListener('click', () => {
    // Promise에 전달하는 함수 하나
    // 해당 함수의 매개변수는 resolve함수, reject함수
    const promise = new Promise((resolve, reject) => {
        // 난수를 생성, 짝수면 정상처리, 홀수면 오류
        try {
            const n = Math.trunc(Math.random() * 100 + 1);
            console.log('난수가 생성되었습니다. : ', n);
            if (n % 2 == 0)
                resolve(n); // n => Promise#result
            else
                throw new Error('홀수라서 실패!!!');
        } catch (e) {
            reject(e); //넘어온 에러객체 반환
        }
    });

    // callback 작성
    promise.then((value) => {
        // 성공(fulfilled) 시 콜백
        console.log(`🎉 ${value} 🎉`);
    }, (err) => {
        // 실패(rejected) 시 콜백
        console.error(err);
    });

    console.log(promise);
});


document.querySelector('#btn2').addEventListener('click', () => {
    delay(3000).then(() => {
            // 콜백함수
        console.log('🍔🍔🍔');
    });

    // 2초후에 🍙🍙🍙 출력
    delay(2000).then(() => {
        console.log('🍙🍙🍙');
    })
});

const delay = (millis) => {
    return new Promise((resolve) => {
        // 비동기작업
        setTimeout(() => resolve(), millis);
    });
};


document.querySelector('#btn3').addEventListener('click', () => {
    loadScript('js/24_test.js')
    .then(() => {
        test();
    });
});

const loadScript = (src) => new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve; // load이벤트 발생 시 resolve(핸들러) 호출
    document.head.append(script);
});


/**
 * Promise Chain
 * - Promise는 연속적으로 사용가능하다. 콜백지옥을 then 지옥으로 대체
 * - 암묵적으로 Promise 객체 반환(반환한 값이 있다면, 새로운 Promise의 resul값으로 사용된다.)
 * - 명시적으로 Promise객체를 반환할 수도 있다.
 * - then 절의 콜백함수가 반환
 */
document.querySelector("#btn4").addEventListener('click', () => {
    // result값 반환
    // new Promise((resolve) => {
    //     // 비동기작업
    //     resolve(2);
    // }).then((value) => {
    //     // 콜백
    //     console.log(value); // 2
    //     return value * 2;
    // }).then((value) => {
    //     console.log(value); // 4
    // });

    // promise객체 반환
    template(3)
    .then((value) => {
        console.log(value);
        return template(value * 2);
    })
    .then((value) => {
        console.log(value);
        return template(value * 2);
    });

    // 1초 후에 🍖, 그 1초 후에 🍙, 그 1초 후에 🍛
    delay(1000)
    .then(() => {
        console.log('🍖');
        return delay(1000);
    })
    .then(() => {
        console.log('🍙');
        return delay(1000);
    })
    .then(() => {
        console.log('🍛');
        return delay(1000);
    });
    
});

const template = (value) => new Promise((resolve) => {
    resolve(value);
});



/**
 * @실습문제
 * changeBGColor : Promise 객체를 반환하는 함수 (비동기작업)
 * then절 (콜백함수)
 */
document.querySelector("#btn5").addEventListener('click', () => {
changeBGColor('red', 1000)
.then(() => {
    return changeBGColor('orange', 1000)
})
.then(() => {
    return changeBGColor('yellow', 1000)
})
.then(() => {
    return changeBGColor('green', 1000)
})
.then(() => {
    return changeBGColor('blue', 1000)
})
.then(() => {
    return changeBGColor('navy', 1000)
})
.then(() => {
    return changeBGColor('purple', 1000)
});
});

const changeBGColor = (color, millis) => {return new Promise((resolve) => {
    const box = document.querySelector(".box");
    setTimeout(() => {
        resolve();
        box.style.backgroundColor = color;
    }, millis);}
)}