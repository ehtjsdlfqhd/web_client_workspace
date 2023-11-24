/**
 * 모든 태그객체는 Node와 Element를 상속한다.
 * 
 * - Node
 *      - TextNode
 *      - CommentNode (주석)
 *      - Element
 * - Element (태그객체)
 * 
 * - Node#appendChild
 * - Element#append
 * - 요소추가에는 둘 다 사용가능, node 추가시에는 appendchild 사용
 * - append 는 요소 여러 개를 한번에 추가할 수 있어 자주 사용
 */
document.querySelector('#btn1').addEventListener('click', () => {
    const sample = document.querySelector('#sample');
    console.dir(sample);

    console.dir(Node.prototype);
    console.dir(Element.prototype);
});

/**
 * 새로운요소
 * 1. innerHTML
 * 2. Tag객체로 만들어서 DOM Tree에 추가
 */
document.querySelector("#btn2").addEventListener("click", () => {
    const h2 = document.createElement("h2"); // <h2></h2> 생성
    const text = document.createTextNode("HelloWorld"); // 'HelloWorld' 생성
    h2.appendChild(text); // <h2>HelloWorld</h2>
    document.querySelector("#target").appendChild(h2); // <div id='target'><h2>HelloWorld</h2></div>
    // 이벤트핸들러
    h2.addEventListener("mouseover", () => {
        console.log('🍈');
    });
});

/**
 * img 태그 생성
 */
document.querySelector('#btn3').addEventListener('click', () => {
    const img = document.createElement("img"); // <img/>
    img.src = '../../sample/image/hyunta.jpg';
    img.alt = '강아지 사진';
    // img.style = 'width: 200px';
    document.querySelector('#target').appendChild(img);
});

/**
 * 요소제거
 * remove() 스스로 제거
 * removeChild(child) 자식요소 제거
 */
document.querySelector("#btn4").addEventListener('click', () => {
    const foo = document.querySelector("#foo");
    foo.remove();
});

// 부모(list)기준에서 자식(foo)요소 제거
document.querySelector("#btn5").addEventListener('click', () => {
    const list = document.querySelector("#list");
    const foo = document.querySelector("#foo");
    // list.removeChild(foo);

    // 모든 자식요소 제거
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    };
});

/**
 * DOM Traversing
 * - 특정요소에서 DOM Tree를 따라 다음요소를 찾아가는 기술
 * 
 * Node
 *  - 자식 firstChild | lastChild | childNodes
 *  - 부모 parentNode
 *  - 형제 nextSibling | previousSibling
 * 
 * Element (주로 사용)
 *  - 자식 firstElementChild | lastElementChild | children
 *  - 부모 parentElement
 *  - 형제 nextElementSibling | previousElementSibling
 * 
 */
document.querySelector('#btn6').addEventListener('click', () => {
    const src = document.querySelector(".wrapper");
    const p1 = src.firstElementChild;
    const p5 = src.lastElementChild;
    const p = src.children;
    console.log(src, p1, p5, p);

    p1.style.color = 'hotpink';
});

document.querySelector('#btn7').addEventListener('click', () => {
    const src = document.querySelector("#p3");
    const parent = src.parentElement;
    console.log(src, parent);
});

document.querySelector('#btn8').addEventListener('click', () => {
    const src = document.querySelector("#p3");
    const prevSibling = src.previousElementSibling.previousElementSibling; // #p1
    const nextSibling = src.nextElementSibling.nextElementSibling; // #p5
    console.log(src, prevSibling, nextSibling);
});

document.querySelector('#btn9').addEventListener('click', () => {
   const src = document.querySelector(".wrapper");
   Array.from(src.children).forEach((child, index) => {
        console.log(child, index);
        const newText = document.createTextNode(`🥯${index + 1}`);
        child.removeChild(child.firstChild); // Node계열의 속성(text, comment, Element)
        child.appendChild(newText);
   });
});