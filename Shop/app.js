const product = [
    {
        id: 0,
        name: 'Pancakes',
        price: 30,
        img: "pancakes.jfif"
    }

    ,
    {
        id: 1,
        name: 'Ice Cream',
        price: 120,
        img: "IceCream.jfif"
    }

    ,
    {
        id: 2,
        name: 'Croissant',
        price: 240,
        img: "Croissant.jfif"
    }

    ,
    {
        id: 3,
        name: 'Chick-a-Flick',
        price: 270,
        img: "Chick-a-Flick.jfif"
    }

    ,
    {
        id: 4,
        name: 'Jollof',
        price: 500,
        img: "Jollof.jfif"
    }

    ,
    {
        id: 5,
        name: 'Latte',
        price: 820,
        img: "Lattte.jfif"
    }

    ,
    {
        id: 6,
        name: 'Waffles',
        price: 220,
        img: "Waffles.jfif"
    }

    ,
    {
        id: 7,
        name: 'Keros',
        price: 620,
        img: "Keros.jfif"
    }

    ,
    {
        id: 8,
        name: 'Cake',
        price: 420,
        img: "Cake.jfif"
    }

    ,
    {
        id: 9,
        name: 'MilkShakes',
        price: 720,
        img: "Milk.jfif"
    }

    ,
    {
        id: 10,
        name: 'Pizza',
        price: 520,
        img: "pizza.jfif"
    }

    ,


]

let basket = []

const productSection = document.querySelector("#productSection");


productSection.innerHTML = 'm'

productSection.innerHTML = product.map(x => {
    let {id, name, price, img} = x
    return (`
      <div class="item">
                    <div class="item-img">
                        <img src="products/${img}" alt="">
                    </div>
                    <div class="item-dets">
                        <h1 class="item-name">${name}</h1>
                        <p class="item-price">$${price}</p>
            
                        <button onclick="addMe(${id})" class="add_to_cart">+</button>
                    </div>
                </div>
    `)
}).join("")
    

const sumTxtVal = document.getElementById('sumTxtVal');
const noTxtVal = document.getElementById('no-of-items-value');


let sumVal = 0
let noVal = 0

function control(){
sumTxtVal.innerText = sumVal
noTxtVal.innerText = noVal;
}

control();

const innerFooter = document.getElementById('inner-footer');

innerFooter.innerHTML =''

function addMe(id) {
       // First searches the shop
    let search1 = product.find((x) => x.id == id)
    // Then the basket searches the shop
    let search2 = basket.find((x) => x.id == id)
    
    if (search2 === undefined) {
        basket.push(search1);
        console.log(basket);
        
        sumVal += search1.price
        noVal += 1
        control();
        
        
        innerFooter.innerHTML = basket.map((x) => {
            let {id , name, price, img} = x
            return (`
                <div class="addedItem">
                
                <div>
                <img src="products/${img}" alt="">  <p class="added-name">${name}</p>
                </div>
                <button onclick="removeMe(${id})" class="removeMe">Remove</button>

                </div>
                `)
            
        })
             
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
        
        sumVal -= search2.price
        noVal -= 1
        control();

        console.log(basket);
        newBasket = newBasket.filter((x) => x.id !== altsearch2)
        basket = newBasket;
        console.log(newBasket);
         innerFooter.innerHTML = newBasket.map((x) => {
            let { id, name, price, img } = x
            
            
                  return (`
                <div class="addedItem">
                
                <div>
                <img src="products/${img}" alt="">  <p class="added-name">${name}</p>
                </div>
                <button onclick="removeMe(${id})" class="removeMe">Remove</button>

                </div>
                
                `)
            
                
                
            }).join('')
    }
    

}    