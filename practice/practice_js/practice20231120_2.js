function movie() {
    const movies = prompt("영화를 입력하세요");
    if (movies) {
        console.log(movies.split(','));
        for (let i = 0; i<movies.length; i++) {
            console.log(movies[i]);
        }
        alert(movies.split(', ').sort());
    }
    else {
        alert("잘못된 입력입니다.")
    }
}

function color() {
    const rainbow = ['빨', '주', '노', '초', '파', '남', '보'];
    for (let i = 0; i < rainbow.length; i++) {
        console.log(rainbow.toString());
        // shift = 0번지 요소 제거
        // push = 마지막 요소로 추가
        rainbow.push(rainbow.shift());
    }
}

function number() {
    const arr1 = [];
    let count = 1;
    for (let i = 0; arr1.length < 100; i++) {
        arr1.push(count);
        count++;
    }
    const arr2 = arr1.slice().sort(function(a, b){
        return b - a;
    });
    console.log(arr1);
    console.log(arr2);
}