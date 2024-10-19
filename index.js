
function myEach(collection, callback){
    let values = Object.values(collection)
    values.forEach(callback)
    return collection
}

function myMap(collection,callback){
    let values = Object.values(collection)
    let newarr = []
   values.forEach(function(value) {
    newarr.push(callback(value));
})
    return newarr
    
}

function myReduce(collection, callback, acc){
    let values = Object.values(collection)
    if (!acc) {
        acc = values[0];
        values = values.slice(1);
      }
    
      const len = values.length;
    
      for (let i = 0; i < len; i++) {
        acc = callback(acc, values[i], values);
      }
      return acc;
}


// function myFind(collection, predicate){
//     let values = Object.values(collection)
//  values.forEach(predicate(element))
 
// }
function myFind(collection,callback){
    for(let element of typeof collection==="object"?Object.values(collection):collection){
        if(callback(element))return element
    }
}

// function myFilter(collection, predicate){
//     let values = Object.values(collection)
//     let newArray = []
//     for(i=0;i<values.length;i++){
//         if(predicate(values[i])) newArray.push(values[i]);
//    }
//    return newArray
// }
function myFilter(collection,callback){
    const newArray=[]
    for(let element of typeof collection==="object"?Object.values(collection):collection){
        if(callback(element)) newArray.push(element);
    }
    return newArray}


    function mySize(collection){
        let values = Object.values(collection)
        return values.length
    }

    function myFirst(array, n){
        let values = Object.values(array)
        if(n){
            return values.slice(0,(n))
        }
        else{
            return values[0]
        }
    }

    // function myLast(array, n){
    
    //     if(n){
    //             return array.slice(n-1,array.length)
    //         }
    //         else{
    //             return array[array.length-1]
    //         }
    // }

    const myLast = function(arr, start=false) {
        return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
      }

    function myKeys(object){
        let keys = [] 
        for (let key in object){
            keys.push(key);
          }
          return keys;
    }

    const myValues = function(object) {
        const values = [];
        for (let value in object){
          values.push(object[value]);
        }
        return values;
      }