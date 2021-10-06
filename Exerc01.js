function getRandomInt(min, max) {
    
    if(min < 0 || max < 0){
        const result = -1
        console.log(result)
        return result;
    }

    if(min >= max){
        const result = -1
        console.log(result)
        return result;
    }
    const diff = (max-min) + 1
    const result = Math.floor(Math.random() * diff)+min;
    
    console.log(result)
    return result;
}

getRandomInt(10,20)