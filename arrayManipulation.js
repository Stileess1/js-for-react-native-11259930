function processArray(arrayNumber){
    return(
        arrayNumber.map(num =>{
            if(num % 2 === 0){
                return(num**2)
            }
            else{
                return(num*3)
            }
        })
    )
}

// Task 2

function formatArrayStrings(arrOfStrings, arrOfNumProcByprocessArray){
    return(
        arrOfStrings.map((string, index) => {
            if(arrOfNumProcByprocessArray[index] % 2 ===0){
                return(string.toUpperCase())
            }
            else{
                return(string.toLowerCase())
            }
        }
    )
    ) 
}