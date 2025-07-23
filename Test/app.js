let aside = document.querySelector('aside')
let main = document.querySelector('main')
let shop = [
    {
        id: 0,
        name: 'Bag',
        price: 20,
    },
    {
        id: 1,
        name: 'Shoes',
        price: 20,
    },
    {
        id: 2,
        name: 'Gloves',
        price: 20,
    },
    {
        id: 3,
        name: 'Pizza',
        price: 20,
    }
]

let basket = []


function genHTML(){

    main.innerHTML = shop.map(x => {
    let {id , name , price} = x
    return `
    <h1>${name}</h1>
    <p>${price}</p>
    <button onclick="addMe(${id})" id=${id}>Push</button>
    `}).join("")
    
}

genHTML();

function addMe(id) {
    // First searches the shop
    let search1 = shop.find((x) => x.id == id)
    // Then the basket searches the shop
    let search2 = basket.find((x) => x.id == id)
    
    
    if (search2 === undefined) {
        basket.push(search1)
        // basket.push(search1)
        aside.innerHTML = basket.map((x) => {
            let { id, name, price } = x
            
            return (`
                <h1>${name}</h1>
                <price>${price}</price>
                <button onclick="removeMe(${id})" id=${id}>Remove</button>
                `)
            
                
                
            }).join('')
    }
    else {
        console.log('Already in the basket');
    }
    
}

let newBasket = basket;

function removeMe(id) {
    console.log(id);
    let search2 = basket.find((x) => x.id == id)
    let altsearch2 = search2.id
    
    if (altsearch2 || altsearch2 == 0) {
        console.log(basket);
        newBasket = newBasket.filter((x) => x.id !== altsearch2)
        basket = newBasket;
        console.log(newBasket);
         aside.innerHTML = newBasket.map((x) => {
            let { id, name, price } = x
            
            return (`
                <h1>${name}</h1>
                <price>${price}</price>
                <button onclick="removeMe(${id})" id=${id}>Remove</button>
                `)
            
                
                
            }).join('')
    }
    

}    
    