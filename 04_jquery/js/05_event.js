/**
 * mouseover/ mouseout
 *  - 자식요소 접근 시 이벤트 발생
 * mouseenter / mouseleave
 *  - 자식요소 접근해도 이벤트 발생 안함
 */

$(".outer")
    // .mouseover(() => {
    //     console.log('mouseover');
    // })
    // .mouseout(() => {
    //     console.log('mouseout');
    // })
    // .mouseenter(() => {
    //     console.log('mouseover');
    // })
    // .mouseleave(() => {
    //     console.log('mouseout');
    // })

    //hover이벤트는 존재하지 않는다
    .hover (() => {
        console.log('mouseenter');
    }, () => {
        console.log('mouseleave');
    });

$(title).hover((e) => {
    $(e.target).addClass('reverse');
}, (e) => {
    $(e.target).removeClass('reverse');

});

$(counter).on('click', (e) => {
    let n = $(e.target).html(); // innerHTML
    $(e.target).html(--n);

    if(n == 0) {
        $(e.target).off('click'); // 이벤트 핸들러 제거
    };
});

// 1회용
$(one).one('click', (e) => {
    console.log('🍜');
    $(e.target).html('🍜');
});

// trigger event
$(trg).on('click', (e) => {
    $(counter).trigger('click'); // 클릭 이벤트 발생
});

/**
 * 입력 시 글자 수 추가
 */
$(memo).keyup((e) => {
    console.log(e.target.value);
    const len = e.target.value.length;
    const color = len > 30 ? 'red' : 'initial';//초기값
    const fontWeight = len > 30 ? 'bold' : 'initial';
    $('#len')
    .html(len)
    .css('color', color)
    .css('font-weight', fontWeight);
});
// 위 예제 유효성 검사
$(document.memoFrm).submit((e) => {
    const $memo = $(e.target.memo);
    if($memo.val().length > 30) {
        e.preventDefault(); //return false;
    }
    // 초기화
    // jquery객체에는 reset이 없으므로 js객체를 꺼내서 사용해야함
    $(e.target)[0].reset(); // $(e.target).get(0).reset();
});
