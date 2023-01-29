function isBoolean(bool) {
    if(bool == true || bool == false){
     if(bool == true) {
        return false
     }else {
        return true
     }
    }

}

function inversoNum(val){
    const inverte = val => val > 0 ? 0 - val: val - (val) -(val)
    typeof val === "number" ? console.log(inverte(val)): console.log("Não é")
}

console.log(inversoNum(9))
console.log(inversoNum(-10000))
console.log(inversoNum("nee"))