let numUsuario = Number(prompt("digite um numero de 1 a 10"))
const tabuada = [1,2,3,4,5,6,7,8,9,10]
if(numUsuario <= 10 && numUsuario > 0){ 
    for(let i in tabuada){
        let resp = (Number(i)+1) * numUsuario 
        console.log(`${numUsuario + 1} x ${numUsuario} = ${resp}`)
    }
}else{
    console.log("digite um numero de 1 a 10")
}

// for (let i = 0; i <= 10; i++) {
//     console.log(numUsuario * i)
//     }