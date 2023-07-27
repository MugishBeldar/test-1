const tableData = [
    { productName: 'a', category: 'a1', price: 2 },
    { productName: 'b', category: 'a1', price: 2 },
    { productName: 'c', category: 'a2', price: 2 },
    { productName: 'd', category: 'a3', price: 2 },
    { productName: 'e', category: 'a3', price: 2 },
];
class BaseClass {
    constructor(id) {
        this.element = document.getElementById(id);
    }
    render(renderFun) {
        const childElement = renderFun()
        this.element.innerHTML = '';
        this.element.append(childElement);
    }
    // let customEvent = new  CustomEvent()
    listenEvent() {
        document.addEventListener('data',()=>{
            this.render();
        });
    }

}

function addData()
{
    let productName = document.getElementById('productName').value;
    let category = document.getElementById('category').value;
    let price = document.getElementById('price').value;
    let data = {}
    data['productName'] = productName;
    data['category'] = category;
    data['price'] = price;
    tableData.push(data);
    document.dispatchEvent(myEvent);
    // console.log(check);
}








