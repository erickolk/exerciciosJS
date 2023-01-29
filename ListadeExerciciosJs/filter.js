const produtos = [
    {nome:'Notebook', preco:2499,fragil:true},
    {nome:'IPadPro', preco:5499,fragil:true},
    {nome:'Copo de Vidro', preco:24,fragil:true},
    {nome:'Copo de Plástico', preco:12,fragil:false}
]

const fragil = produto => produto.fragil;
const caro = produto => produto.preco >= 500;

const filtro = produtos.filter(caro).filter(fragil);

console.log(filtro)