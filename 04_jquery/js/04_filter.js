/**
 * filter 관련 메소드
 * - jquery객체안의 요소를 필터링 한 jquery객체 반환
 * 
 * - filter(selector)
 * - first()
 * - last()
 * - eq(n)
 * - not(selector)
 * 
 * - end() : 필터링 전 상태로 돌아가는 메소드
 */
$(btn1).on('click', () => {
    const $h4 = $("h4");
    console.log($h4);

    console.log(
    $h4
        // .filter(".test")
        // .eq(3) // 3번지 요소만 선택
        .not('.test') // test클래스를 갖지 않은 요소만 선택
        .css('color', 'tomato')
        .end()
        .css('text-decoration', 'underline')
    );
});