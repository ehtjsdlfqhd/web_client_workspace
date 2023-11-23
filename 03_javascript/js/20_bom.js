/**
 * navigator
 *  - 브라우저(항해사) 정보 제공 객체
 */
const test1 = () => {
    console.log(navigator);
    console.log(navigator.userAgent);
};

/**
 * location
 *  - 주소창과 관련된 기능을 제공
 */
const test2 = () => {
    console.log(location);
    // 페이지 이동
    // location.href = "https://naver.com";

    // 페이지 새로고침 메소드
    location.reload();
};


/**
 * history
 *  - 방문기록 관련 기능제공
 *  - 뒤로가기, 앞으로가기, 새로고침
 */
const test3 = () => {
    console.log(history);
};

/**
 * screem
 *  - 브라우저가 실행중인 모니터에 대한 정보제공
 */
const test4 = () => {
    console.log(screen);
    // width 모니터 너비(px)
    // height 모니터 높이(px)
    // availWidth 가용 너비
    // availHeight 가용 높이
    // availLeft 가용오프셋 (왼쪽) , 듀얼모니터 등에서 필요
    // availTop 가용오프셋 (위)

    const width = 500;
    const height = 300;
    const top = (screen.height - height) / 2 + screen.availLeft; //사용자 환경을 고려
    const left = (screen.width - width) / 2 + screen.availTop; // 사용자 환경을 고려
    const popup = open("", "", `width=${width}, height=${height}, top=${top}, left=${left}`);
};