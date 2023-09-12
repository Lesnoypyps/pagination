'use strict'
import {loadPage} from "./getData.js";

const row =  document.createElement('tr');
const cell = document.createElement('td');

const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const tFooter = document.querySelector('.table__footer');

const spanPrice = document.querySelector('.price--text--span');

const PriceModal = document.querySelector('.priceAdd');
const CountModal = document.querySelector('.countAdd');
const fullPriceModal = document.querySelector('.price--text--span--modal');
let itemsPage = 1;
let itemsView = 10;


const data = await loadPage();
console.log(data)


// let prod = [
//     {
//         id:1,
//         category:'Аудиосистемы',
//         name:'Звуковая система SoundMax ',
//         UoM:1,
//         count:2,
//         price:200,
//         description:'',
//         imgUrl:'../img/chamelion.jpg',
//     },
//     {
//         id:2,
//         category:'Звук',
//         name:'Сабуфер для автомобиля Pioneer',
//         UoM:1,
//         count:2,
//         price:500,
//         description:'',
//         imgUrl:'../img/chamelion.jpg',
//     },
//     {
//         id:3,
//         category:1,
//         name:'Звуковая система',
//         UoM:1,
//         count:2,
//         price:200,
//         description:'',
//         imgUrl:'../img/chamelion.jpg',
//     }
// ]

// const getStorage = (key) => {
//     const storageItem = localStorage.getItem(key);
//     if(!storageItem){
//         return [];
//     }
//     else{
//         return JSON.parse(storageItem);
//     }
// };

// const setStorage = (key, object) => {
//     localStorage.setItem(key, JSON.stringify(object));
// };
// setStorage('products', prod);
function createRowProd({id, title, category, price, count, url}){
    const row =  document.createElement('tr');
    row.classList.add('table__row');
    const idCell = document.createElement('td');
    idCell.classList.add('idCell');
    idCell.classList.add('cell');
    const nameCell = document.createElement('td');
    nameCell.classList.add('nameCell');
    nameCell.classList.add('cell');
    const categCell = document.createElement('td');
    categCell.classList.add('categoryCell');
    categCell.classList.add('cell');
    const UoMCell = document.createElement('td');
    UoMCell.classList.add('UoMCell');
    UoMCell.classList.add('cell');
    const countCell = document.createElement('td');
    countCell.classList.add('countCell');
    countCell.classList.add('cell');
    const priceCell = document.createElement('td');
    priceCell.classList.add('priceCell');
    priceCell.classList.add('cell');
    const totalPriceCell = document.createElement('td');
    totalPriceCell.classList.add('totalPriceCell');
    totalPriceCell.classList.add('cell');
    const tdDel = document.createElement('td');
    const tdEdit = document.createElement('td');
    const tdNoImage = document.createElement('td');
    const buttonNoImage = document.createElement('button');    
    tdNoImage.classList.add('noImage');
    tdEdit.classList.add('edit');

    tdDel.classList.add('delete');
    const buttonDel = document.createElement('button');
    const buttonEdit = document.createElement('button');
    buttonDel.classList.add('del-icon');
    buttonEdit.classList.add('edit-icon');
    buttonNoImage.classList.add('image-icon');
    buttonNoImage.setAttribute('dataset-url', url);
    buttonEdit.style.cursor = 'pointer';
    buttonDel.style.cursor = 'pointer';
    buttonNoImage.style.cursor = 'pointer';
    tdDel.append(buttonDel);
    tdEdit.append(buttonEdit);
    tdNoImage.append(buttonNoImage);
    nameCell.textContent = title;
    if(id!=undefined){
        idCell.textContent = id;
    }else{
        idCell.textContent = ' '; 
    }
    categCell.textContent = category; 
    UoMCell.textContent = 'шт';
    countCell.textContent = count;
    priceCell.textContent = '$' + price;
    totalPriceCell.textContent = '$' + count * price ;
    const iconGroup = document.createElement('td');
    iconGroup.classList.add('iconsGroup');
    iconGroup.append(buttonDel);
    iconGroup.append(buttonEdit);
    iconGroup.append(buttonNoImage);
    idCell.style.width = '100px';
    idCell.style.marginRight = '10px'
    nameCell.style.width = '300px';
    categCell.style.width = '187px';
    UoMCell.style.width = '90px';
    countCell.style.width = '100px';
    priceCell.style.width = '37px';
    priceCell.style.marginRight = '50px';
    totalPriceCell.style.width = '80px';
    totalPriceCell.style.marginRight = '10px'
    row.style.padding = '15px';
    row.style.border = '1px solid #C6C2DE';
    row.style.maxWidth = '100%'

    row.append(idCell, nameCell, categCell, UoMCell, countCell, priceCell, totalPriceCell,iconGroup);
    return row
    // tbody.append(row);
    // table.append(tbody);
};
const renderContacts = (elem, data) => {
    const allRow = data.map(createRowProd);
    elem.append(...allRow);
    return allRow;
};
const removeStorage = (tel) => {
    localStorage.removeItem(tel)
}



const modal = document.querySelector('.modal');
const modalEdit = document.querySelector('.modalEdit');
const modalWrapper = document.querySelector('.modal__wrapper');
const btnAdd = document.querySelector('.addProd');
const wrapper = document.querySelector('.wrapper');
const form = document.querySelector('.modal__window');
const btnSubmit = document.querySelector('.allAdd');
const btnClose = document.querySelectorAll('.closeCross');
const modalWrapperEdit = document.querySelector('.modal__wrapperEdit');
const formEdit = document.querySelector('.modal__windowEdit');

function openModal() {
    modal.classList.add('visible');
};
function openModalEdit() {
    modalEdit.classList.add('visible');
};
function closeModalEdit() {
    modalEdit.classList.remove('visible');
};

function closeModal() {
    modal.classList.remove('visible');
};
function addProductPage(product, list) {
    createRowProd(product,list);
}
btnAdd.addEventListener('click', ()=>{
    openModal()
    // modal.style.cssText = '.modal::backdrop{filter: blur(10px);}'
    
});
modal.addEventListener('click', e => {
    const target = e.target;
    if(target === modalWrapper){
        closeModal();
    }
});
modalEdit.addEventListener('click', e =>{
    const target = e.target
    if (target === modalWrapperEdit) {
        closeModalEdit();
    }
} )
btnClose.forEach(elem => {
    elem.addEventListener('click', ()=>{
        closeModalEdit()
        closeModal()
    })
});
form.addEventListener('submit', e=>{
    e.preventDefault();
    // const target = e.target;
    // // const name = document.querySelector('.nameAdd').value;
    // // const category = document.querySelector('.categoryAdd').value;
    // // const description = document.querySelector('.descriptionAdd').value;
    // // const count = document.querySelector('.countAdd').value;
    // // const discount = document.querySelector('.discountAdd').value;
    // // const price = document.querySelector('.priceAdd').value;
    // // let prod = getStorage('products');
    // console.log(prod);
    // const formData = new FormData(target);
    // // let newProduct = Object.fromEntries(formData);
    // newProduct.id = prod[prod.length-1].id + 1;
    // fullPriceModal.textContent = '0$';
    // // setStorage('newProduct', newProduct);
    // // prod.push(newProduct);
    // // tbody.append(createRowProd(newProduct))
    // // setStorage('products', prod);
    // form.reset();
    closeModal();
})
const checkbox = document.querySelector('#discount');
if (checkbox.checked) {
    const inputDiscount = document.querySelector('.discountAdd');
    inputDiscount.disabled = false;
    const discount = Number(inputDiscount.value);
    fullPriceModal.textContent = Number(CountModal.value)*Number(PriceModal.value)*(discount/100) + '$';
}

const allRow = renderContacts(tbody, data);
const totalPriceList = document.querySelectorAll('.totalPriceCell');
let fullTotalPrice = 0; 
totalPriceList.forEach(elem => {
    console.log(elem);
    fullTotalPrice+= Number(elem.textContent.substring(1,));
});

fullPriceModal.textContent = '0$';
PriceModal.addEventListener('input', ()=>{
    fullPriceModal.textContent = Number(CountModal.value)*Number(PriceModal.value) + '$';
})

CountModal.addEventListener('input', ()=>{
    fullPriceModal.textContent = Number(CountModal.value)*Number(PriceModal.value) + '$';
})

spanPrice.textContent = fullTotalPrice + '$';

let editedContactData = {};

window.addEventListener('click', e => {
    let globStr = {};

    const target = e.target;
    // const products = getStorage('products');
    
    if (target.closest('.edit-icon')) {
        let str = target.closest('.table__row').childNodes[0];
        globStr.str = str.textContent;
        const newNameEdit = target.closest('.table__row').childNodes[1];
        console.log(target.closest('.table__row').childNodes[2]);
        const newCategoryEdit = target.closest('.table__row').childNodes[2];
        const newUoMEdit = target.closest('.table__row').childNodes[3];
        const newCountEdit = target.closest('.table__row').childNodes[4];
        const newPriceEdit = target.closest('.table__row').childNodes[5];
        editedContactData.nameEdit = newNameEdit;
        editedContactData.categoryEdit = newCategoryEdit;
        console.log(editedContactData.categoryEdit.textContent);
        editedContactData.UoMEdit = newUoMEdit;
        editedContactData.CountEdit = newCountEdit;
        editedContactData.priceEdit = newPriceEdit;
        console.log(editedContactData.priceEdit.textContent);
        document.querySelector('.nameEditInput').value = editedContactData.nameEdit.textContent;
        document.querySelector('.categoryEditInput').value = editedContactData.categoryEdit.textContent;
        document.querySelector('.UoMEditInput').value = editedContactData.UoMEdit.textContent;
        document.querySelector('.countEditInput').value = editedContactData.CountEdit.textContent;
        document.querySelector('.priceEditInput').value = Number(editedContactData.priceEdit.textContent.substr(1,3));
        for (const elem of products){
            if(elem.id ==  globStr.str){
                const index = products.findIndex(i => i.id == str.textContent);
                console.log(products[index].description);
                document.querySelector('.descriptionEditInput').value = products[index].description;
            }
        }
        openModalEdit();
    }
})
formEdit.addEventListener('submit', e=>{
    const list = document.querySelector('tbody');
    list.addEventListener('click', e=>{
        const target = e.target;
        let str = target.closest('.table__row').childNodes[0];
        let fullRow = target.closest('.table__row');
        globStr.str = str.textContent;
        globStr.fullRow = fullRow;
    })
    const target = e.target;
    const nameEdit = document.querySelector('.nameEditInput');
    const categoryEdit = document.querySelector('.categoryEditInput');
    const UoMEdit = document.querySelector('.UoMEditInput');
    const countEdit = document.querySelector('.countEditInput');
    const priceEdit = document.querySelector('.priceEditInput');
    let products = getStorage('products');
    for (const elem of products){
        if(elem.id ==  globStr.str){
            const index = products.findIndex(i => i.id == globStr.str);
            products[index].category = categoryEdit.value;
            products[index].UoM = UoMEdit.value;
            products[index].count = countEdit.value;
            products[index].price = priceEdit.value;
            products[index].name = nameEdit.value;
            globStr.fullRow.remove();
            addProductPage(products[index],list);
            formEdit.reset()
            closeModalEdit()
        }
    }

})
tbody.addEventListener('click', e => {
    const target = e.target;
    if(target.closest('.del-icon')){
        let products = getStorage('products');
        for(const elem of products){
            if(elem.id == target.closest('.table__row').firstChild.textContent){
                // phoneBook.delete[findIndex(i => i.phone == target.closest('.contact').lastChild.textContent)]
                const index = products.findIndex(i => i.id == target.closest('.table__row').firstChild.textContent);
                products.splice(index,1);
                setStorage('products', products);
                target.closest('.table__row').remove();
            }
        }
    }
    console.log(target);
    console.log(target.closest('.table__row'));
});


const removeItems = (elem) => {
    const items = document.querySelectorAll(elem);
    for (let i = 0; i < items.length; i++) {
        items[i].remove();
    }
}

let leftButton = document.querySelector('.left-btn');
let rightButton = document.querySelector('.right-btn');
const itemList = document.querySelector("tbody");
console.log(itemList)
rightButton.addEventListener('click', () => {
    removeItems('tbody .table__row');
    itemsPage += 1;
    for (let i = 0; i < itemsView; i++) {
        if (data[itemsPage * itemsView]) {
            itemList.append(createRowProd(data[i]));
        } else {
            if (data[itemsView + 1]) {
                itemList.append(createRowProd(data[itemsView + i]));
            }
        }
    }
});
leftButton.addEventListener('click', () => {
    if (!itemsPage <= 1) {
        removeItems('tbody .item');
        itemsPage -= 1;
        for (let i = 0; i < itemsView; i++) {
            if (data[itemsPage * itemsView]) {
                itemList.append(createRowProd(data[i]));
            } else {
                if (data[itemsView + 1]) {
                    itemList.append(createRowProd(data[itemsView + i]));
                }
            }
        }
    }
});

for (let i = 0; i < itemsView; i++) {
    if (data[itemsPage * itemsView]) {
        itemList.append(createRowProd(data[i]));
    } else {
        if (data[itemsView + 1]) {
            itemList.append(createRowProd(data[itemsView + i]));
        }
    }
}
