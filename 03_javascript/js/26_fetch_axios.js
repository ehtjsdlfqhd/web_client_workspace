
/**
 * fetch api
 * - promise기반의 비동기통신 객체
 * - fetch-비동기작업(네트워크상의 요청) - then-콜백
 * - json 응답에 대한 처리
 *  - json이란? javascript object notation, 프로그램간의 데이터 교환언어(약속)
 *  - {"id":"shqkel","company":"KH정보교육원","classroom":"352","cnt":79}
 *  - 속성명은 반드시 쌍따옴표로 감싼다. ''금지
 *  - 문자열 역시 반드시 쌍따옴표로 감싼다.
 *  - 숫자/boolean/null은 그대로 작성
 *  - 객체/배열 사용가능
 */
document.querySelector("#btn1").addEventListener('click', () => {
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
  
    fetch(url)
      .then((response) => {
        // fetch의 첫번째 콜백함수는 응답이 시작되는 순간 호출 -> 응답데이터 확인불가
        console.log(response); 
        return response.json(); // 응답데이터중 json 추출
      })
      // .then((text) => {
      //   console.log(text, JSON.parse(text)); // string -> js object
      // })
      .then((student) => {
        console.log(student);
        const {id, company, classroom, cnt} = student;
        document.querySelector("#id").innerHTML = id;
        document.querySelector("#company").innerHTML = company;
        document.querySelector("#classroom").innerHTML = classroom;
        document.querySelector("#cnt").innerHTML = cnt;
      });
  });

document.querySelector('#btn2').addEventListener('click', () => {
    const url = 'https://api.github.com/users/ehtjsdlfqhd';
    fetch(url)
    .then((response) => response.json())
    .then((user) => {
        const {avatar_url} = user;
        console.log(avatar_url);
        const img = document.createElement('img');
        img.src = avatar_url;
        img.style = 'width: 200px; border-radius: 50%;';
        document.querySelector('.img-wrapper').append(img);
    });
});


/**
 * axios
 * - 내부적으로 XMLHttpRequest객체를 promise기반으로 사용하도록 하는 js라이브러리
 * - fetch대비 응답데이터를 추출하기 간단.
 * - 그 외 편의기능 제공
 */
document.querySelector('#btn3').addEventListener('click', () => {
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
    axios(url)
        .then((response) => {
            console.log(response);
            const {data : {id, company, classroom, cnt}} = response;
            document.querySelector("#id").innerHTML = id;
            document.querySelector("#company").innerHTML = company;
            document.querySelector("#classroom").innerHTML = classroom;
            document.querySelector("#cnt").innerHTML = cnt;
        });
});

/**
 * 1. .img-wrapper>img 추가
 * 2. load 된 지 3초 후 제거
 */
document.querySelector('#btn4').addEventListener('click', () => {
    const url = 'https://api.github.com/users/ehtjsdlfqhd';
    axios(url)
        .then((response) => {
            console.log(response)
            const { avatar_url } = response.data;
            console.log(avatar_url);
            
            const img = document.createElement('img');
            img.src = avatar_url;
            img.width = 100;
            img.height = 100;
            document.querySelector('.img-wrapper').append(img);
        });
        
});


/**
 * API KEY와 함께 전송하기
 * - 보통 API는 전송량 제한을 위해 key값을 가지고 요청하게 된다.
 * - http요청 헤더부분에 지정한 헤더명으로 등록해야 한다.
 */
document.querySelector('#btn5').addEventListener('click', () => {
    const url = 'https://api.thecatapi.com/v1/images/search';

    // axios(url, options)
    axios(url, {
        headers : {
            'x-api-key' : 'live_ueMgvhuuhcBv4EmErlQjBT8XRO0dcy4z2SavjPtzvEFPilsfihkBiZTShB3MTerI'
        },
        params : {
            limit : 1, // 기본값
        }
    })
    .then((response) => {
        console.log(response);
        // response > data > [{url}]
        // .cat-wrapper > img
        const {data:[{url}]} = response;
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        img.style = 'width:200px;';
        const wrapper = document.querySelector(".cat-wrapper");
        wrapper.innerHTML = '';
        wrapper.append(img);
    })
});