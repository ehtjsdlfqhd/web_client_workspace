test01 = () => {
    const drinks = document.getElementsByTagName("li");
    const texts = Array.from(drinks).reduce(function(arr, li){
        arr.push(li.textContent);
        return arr;
    }, []);
    
    const texts2 = texts.map(function(e){
        return e.toUpperCase()
    });
    console.log(texts2);
}