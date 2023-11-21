test01 = () => {
    const drinks = document.getElementsByTagName("li");
    const texts = Array.from(drinks).reduce(function(arr, li){
        arr.push(li.textContent);
        return arr;
    }, []);
    
    console.log(texts);
}