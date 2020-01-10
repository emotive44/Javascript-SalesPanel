function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', load);
    document.getElementsByTagName('button')[1].addEventListener('click', buy);
    document.getElementsByTagName('button')[2].addEventListener('click', endDay);
}

let arrayWithObjects;
function load() {
    let loadProducts = document.querySelectorAll('textarea')[0].value;
    let textareaLog = document.getElementsByTagName('textarea')[2];
    arrayWithObjects = JSON.parse(loadProducts);
    for(let i = 0; i < arrayWithObjects.length; i++) {
        textareaLog.textContent += `Successfully added ${arrayWithObjects[i]
            .quantity} ${arrayWithObjects[i]
            .name}. Price: ${arrayWithObjects[i]
            .price}\n`;
    }
}

let profit = 0;
function buy() {
    let BuyProducts = document.querySelectorAll('textarea')[1].value;
    let textareaLog = document.getElementsByTagName('textarea')[2];
    let ObjectOfProduct = JSON.parse(BuyProducts);

    arrayWithObjects.filter(a => {
        if(a.name === ObjectOfProduct.name){
            if(a.quantity >= ObjectOfProduct.quantity) {
                textareaLog.textContent += `${ObjectOfProduct.quantity} ${ObjectOfProduct.name} sold for ${ObjectOfProduct.quantity * a.price}\n`;
                a.quantity = a.quantity - ObjectOfProduct.quantity;
                profit += ObjectOfProduct.quantity * a.price;
            }
            
            else if(a.quantity < ObjectOfProduct.quantity) {
                textareaLog.textContent += `Don't have more quantity of ${ObjectOfProduct.name}\n`;
            }
        }
    });
}

function endDay() {
    let textareaLog = document.getElementsByTagName('textarea')[2];
    textareaLog.textContent += `Profit: ${profit}\n`;
}
