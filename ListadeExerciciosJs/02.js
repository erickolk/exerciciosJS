function Triangulo(l1,l2,l3){
    if(l1 == l2 && l1== l3) {
        console.log('Equilatero')
    }
    else if(l1 == l2 || l2 == l3 || l1 == l3) {
        console.log('Isóceles')
    }
    else{
        console.log('Escaleno')
    }
}

Triangulo(1,1,1)
Triangulo(1,2,3)
Triangulo(2,2,3)