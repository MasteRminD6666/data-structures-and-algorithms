// let testArr = [6,2,5,8,10,1,7]
function insertionSort(myArr) {
    if(myArr === null){
        console.log(`cant sort an empty  Array  null`);
    }
    else{
        let n = myArr.length;
        for (let i = 1; i < n; i++) {
            let current = myArr[i];
            let j = i-1; 
            //console.log(current)
            while ((j > -1) && (current < myArr[j])) {
                myArr[j+1] = myArr[j];
                j--;
            }
            myArr[j+1] = current;
        }
    }
   
    return myArr;
}
module.exports = insertionSort