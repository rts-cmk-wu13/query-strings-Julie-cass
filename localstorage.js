function saveToLocalStorage(key, value){

    localStorage.setItem(key, JSON.stringify( value))
    return "data was saved with the key" + key
}


function readFromLocalStoarge(key){
    return JSON.parse(localStorage.getItem(key))


}


function deleteFromLocalStorage(key){
localStorage.removeItem(key)
console.log(value);
return "The element with key" + key + "was deleted"
}

let myFav = readFromLocalStoarge("favorites")
