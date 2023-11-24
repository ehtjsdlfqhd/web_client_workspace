const test1 = () => {
    const data = "홍길동,남,90,80,70,60|신사임당,여,88,100,50|전봉준,남,55,80,77";
    console.log(data);
    const arr1 = data.split('|');
    console.log(arr1);
    const arr2 = arr1.map((a) => a.split(','));
    console.log(arr2);
    arr2.forEach(info);
}
const info = ([name, gender, ...score]) => {
    const sum = score
    .map((n) => (Number(n))).reduce((sum,score) => sum + score);
    const avg = Math.round((sum / score.length) * 10) / 10;
    console.log(`${name}, ${gender} 의 평균점수는 ${avg}`);
}

const test2 = () => {
    const people = [  
        {
              name : '홍길동',
              family : {
                  father : '홍석천',
                  mother : '홍진경',
                  sister : '홍수아',
              }, 
              age : 35
        },
        {
              name : '신사임당',
              family : {
                  father : '신동엽',
                  mother : '고두심',
                  brother : '신하균',
              }, 
              age : 25
        },
          {
              name : '이순신',
              family : {
                  father : '이경영',
                  mother : '이영자',
                  brother : '이승환',
                  sister : '아이유',
              }, 
              age : 33
        }
      ]
    const members = [];
    members.push()
}