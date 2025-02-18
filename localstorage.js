
/**
 * 
 * @typedef {string | number | boolean | object | any[]} localstorageData
 */



/**
 * 
 * @param {string} key localstorage key
 * @param {string | number | boolean | object | any[]} value
 * @returns {string}
 */

function saveToLocalStorage(key, value){

    localStorage.setItem(key, JSON.stringify(value))
    return "data was saved with the key" + key
}
console.log(localStorage)

/**
 * 
 * @param {string} key 
 * @returns {string | number | boolean | object | any[]}
 */
function readFromLocalStoarge(key){
    return JSON.parse(localStorage.getItem(key));

}


function deleteFromLocalStorage(key){
localStorage.removeItem(key)
return "The element with key" + key + "was deleted"
}


saveToLocalStorage()

