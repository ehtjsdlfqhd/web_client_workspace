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