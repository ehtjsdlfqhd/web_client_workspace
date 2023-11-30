/**
 * jQuery
 *  - javascript 라이브러리(기능구현이 된 채로 제공되는 코드뭉치)
 *  - 브라우저간 호환이슈, DOM제어, 이벤트처리 등을 간결히 사용할 수 있도록 지원
 * 
 * - 사용방법
 *  - 1. jquery.js 다운로드 후 서버에서 함께 제공
 *  - 2. CDN(content Delivery Network) 방법
 *          웹 상의 jquery.js를 클라이언트가 직접 다운로드 받아서 사용
 * 
 * 
 * 
 * jquery방식의 이벤트 핸들러 등록 (addeventlistner와 유사함)
 * $라는 함수가 등록
 */
$("#btn1").on('click', () => {
    console.log('🍖🍗🥩');
});
$("#btn2").on('click', () => {
    console.log('🥬🥦🧅');
});