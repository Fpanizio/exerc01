function getRandomInt(min, max) {
    
    if(min < 0 || max < 0){
        const result = -1
        return result;
    }

    if(min >= max){
        const result = -1
        return result;
    }
    const diff = (max-min) + 1
    const result = Math.floor(Math.random() * diff)+min;
    
    return result;
}

const res = getRandomInt(10,20)
console.log(res)