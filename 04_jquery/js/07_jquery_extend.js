/**
 * Object.assign (js)
 */
$(btn1).click(() => {
    const obj1 = {
        name : '통밀빵',
        price : 5000
    };
    const obj2 = {
        name : '바게뜨빵',
        color : ['brown', 'choco'],
        createdAt : '2023-12-07'
    };

    const newObj = Object.assign({}, obj1, obj2);
    console.log(newObj, obj1, obj2);

    // 얕은복사 확인
    obj2.color[0] = 'black'; // newObj.color[0]도 변경이 된다.
});

/**
 * $.extend (jquery)
 */
$(btn2).click(() => {
    const obj1 = {
        name : '통밀빵',
        price : 5000
    };
    const obj2 = {
        name : '바게뜨빵',
        color : ['brown', 'choco'],
        createdAt : '2023-12-07'
    };

    // const newObj = $.extend({}, obj1, obj2); //얕은복사, 기존 배열을 같이 참조
    const newObj = $.extend(true, {}, obj1, obj2); //깊은복사, 새로운 배열 생성 후 해당 주소를 참조
    console.log(newObj);

    obj2.color[0] = 'black';
});

/**
 * jquery객체 확장
 * - $.extend - static메소드 추가 $.foo()
 * - $.fn.extend - jQuery객체에 메소드 추가 $(...).foo()
 */
$(btn3).click(() => {
    $.extend({
        colorize(elem, color) {
            elem.style.color = color;
        }
    });

    console.log($.colorize);
    $.colorize(document.querySelector('#title'), 'red');
});

$(btn4).click(() => {
    $.fn.extend({
        colorize(color) {
            // this용법7: jquery.fn확장객체의 메소드 안 this는 현재 jquery객체 
            console.log(this);
            this.css('color', color);
            return this;
        },
        bgColorize(color2) {
            return this.css('background-color', color2);
        }
    });

    $('#title').colorize('blue')
    .bgColorize('purple')
    .css('font-size', '100px');
});

$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 600
});