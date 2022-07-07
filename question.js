/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    const newArr =[];
    arr.forEach(function(obj){
        obj[key] = value;
        newArr.push(obj);
     
        // return obj[key] = cpvalue;
    })
    return newArr;
  
}

///Springboard Solution : why don't we need empty array?

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    const filter = arr.filter(function(value){
        return value===searchValue;
    })
    if(filter[0]===undefined){
        return undefined;
    } else {
        return filter[0];
    }
}
//I couldn't show undefined. empty [] array was showing up for the second example.

  //Springboard solution : what's [0]

  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }

  //
/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}
// lastIndexOf and indexof why do we use it like this?
// is there better way to do it?


/////====reduce ======///
// my ansewr 
function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(array, val){
        val[key] = value;
        array.push(val);
        return array;
    }, [])
}

//springboard answer
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}

//why would you even set up ''next''?



/** remove a random element in the items array
and return a new array without that item. */
const removeKey = ({...obj}, key) => { 
    delete obj[key]
    return obj;
}
//above code seems to work, but should I do like the solution below?

//springboard
const removeKey = (obj, key) => {

    // OPTION 1
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // ({ [key]: undefined, ...obj } = obj);
    // return obj;
  }



  /** Return a new object with a modified key and value. */

const update = ({...obj}, key, val) => {
    obj[key] =val;
    return obj;
}

//above code seems to work but should I use below solution provided by springboard?
// 

const update = (obj, key, val) => {

    // OPTION 1
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 this uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }



