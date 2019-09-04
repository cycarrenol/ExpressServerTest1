
const items =[// esto es un arreglo de objetos
    {id: 1, name : "Carro"},
    {id: 2, name: 'Casa'},
    {id: 3, name: 'Pelota'} 
];
const index = (req, res) =>{
    res.render('index', {
        title: 'mywebstore'
    });   
}
const products = (req, res, next) =>{
    res.render('products',{
        title:'list of products',
        items: items,
    });
}

const newProduct = (req, res, next)=>{
    const {newItem} = req.body;
    items.push({
        id: items.length +1,
        name: newItem
    })
    res.redirect('/products');
}
module.exports ={
    index,
    products,
    newProduct
}