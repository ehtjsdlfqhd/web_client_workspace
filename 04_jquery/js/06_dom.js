/**
 * 새로운 태그객체 생성하기
 */
$(btn1).click(() => {
    const $area = $(area1);

    // const $h3 = $("<h3>Helloworld</h3>"); // memory상에 태그객체 생성
    const $h3 = $("<h3></h3>");
    $h3.append("안녕");
    $area.html($h3);
});


let char = 66;

/**
 * 기존요소기준 삽입메소드
 * - append 마지막 자식요소로 추가
 * - prepend 첫번째 자식요소로 추가
 * - after 다음 형제요소로 추가
 * - before 이전 형제요소로 추ㄱ
 */

const $target = $(target);
$(btn2).click(() => {
    const $new = $(`<span>${String.fromCharCode(char++)}</span>`);
    $target.append($new);
});
$(btn3).click(() => {
    const $new = $(`<span>${String.fromCharCode(char++)}</span>`);
    $target.prepend($new);
});
$(btn4).click(() => {
    const $new = $(`<span>${String.fromCharCode(char++)}</span>`);
    $target.after($new);
});
$(btn5).click(() => {
    const $new = $(`<span>${String.fromCharCode(char++)}</span>`);
    $target.before($new);
});


/**
 * 새 요소기준 삽입메소드
 * - appendTo 마지막 자식요소로 추가
 * - prependTo 첫번째 자식요소로 추가
 * - insertAfter 다음 형제요소로 추가
 * - insertBefore 이전 형제요소로 추ㄱ
 */
$(btn6).click(() => {
    const $new = $(`<span>${String.fromCharCode(char++)}</span>`)
    .appendTo($target).css('color','hotpink');
});
$(btn7).click(() => {
    const $new = $(`<span>${String.fromCharCode(char++)}</span>`)
    .prependTo($target).css('color','hotpink');
});
$(btn8).click(() => {
    const $new = $(`<span>${String.fromCharCode(char++)}</span>`)
    .insertAfter($target).css('color','hotpink');
});
$(btn9).click(() => {
    const $new = $(`<span>${String.fromCharCode(char++)}</span>`)
    .insertBefore($target).css('color','hotpink');
});

/**
 * data의 순서대로 맨 첫줄부터 추가하세요.
 * - 샌드위치 5500
 * - 바게뜨 4000
 * - 통밀빵 5000
 */
$(btn10).click(() => {
    const $tbody = $("table#tb-product tbody"); //영역 선언
    const data = '[{"name":"통밀빵","price":5000},{"name":"바게뜨","price":4000},{"name":"샌드위치","price":5500}]';
    const _data = JSON.parse(data);
    console.log(_data); // 객체배열이 반환

    //반복문으로 객체 순회
    _data.forEach(({name, price}) => {
        console.log(name, price); //3번 순회완료
        // tr태그로 변환
        // const $tr = $("<tr></tr>");
        // const $td1 = $("<td></td>").text(name);
        // const $td2 = $("<td></td>").text(price);
        // $tr.append($td1, $td2);

        // // tbody에 추가
        // $tbody.prepend($tr);

        $("<tr></tr>")
            .append($("<td></td>").text(name))
            .append($("<td></td>").text(price))
            .prependTo($tbody);
    });
});

/**
 * 부모방향
 * ([selector]) : 생략가능한 옵션 / (selector) : 필수옵션
 * 
 * - parent([selector]) : 직계부모
 * - parents([selector]) : 모든 조상
 * - parentsUntil(selector) : 특정태그 전 까지 모든 조상
 */

const style = {
    color : 'red',
    border : '2px solid red'
};
$(btn11).click(() => {
    const $src = $("span");

    console.log(
        $src
        // .parent()
        // .parent("li")
        // .parents("div")
        .parentsUntil("div")//div전 까지의 모든 조상
        .css(style)
    );
});

/**
 * 자식방향
 * - children([selector]) 직계 자식
 * - find(selector) 모든 후손
 */
$(btn12).click(() => {
    const $src = $('.wrap');
    console.log(
        $src
        // .children(":has(ul)")
        // .children()
        .find("span")
        .css(style)
    );
});

/**
 * 형제방향
 * - siblings([selector]) 이전,다음의 모든 형제
 * 
 * - next() 다음 형제요소 하나
 * - nextAll([selector]) 다음 형제요소 모두
 * - nextUntil(selector) 특정 태그 이전 형제요소
 * 
 * - prev() 이전 형제요소 하나
 * - prevAll([selector]) 이전 형제요소 모두
 * - prevUntil(selector) 특정 태그 다음 형제요소
 */
$(btn13).click(() => {
    const $src = $(".container h2");
    console.log(
        $src
        // .siblings('p')
        // .nextAll("h3, h4")
        // .nextUntil("p")
        // .prev()
        // .prevAll('span')
        .css(style)
    );
});

/**
 * li2-2찾기
 * - .wrap부터 찾기
 * - span#fromMe 부터 찾기
 */
$(btn14).click(() => {
    // const $src = $(".wrap");
    // console.log(
    //     $src
    //     .find('div:last')
    //     .find('li')
    //     .find('li:nth(1)')
    //     .css(style)
    // );

    const $src2 = $("span#fromMe");
    console.log(
        $src2
        .parent()
        .parent()
        .parent()
        .prev()
        .css(style)
    );
});