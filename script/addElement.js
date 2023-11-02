'use strict'
export const createRowProd = ({id, title, category, price, count, url}) =>{
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
        idCell.dataset.id = id;
    }else{
        idCell.textContent = ' ';
    }
    categCell.textContent = category;
    UoMCell.textContent = 'шт';
    countCell.textContent = count;
    priceCell.textContent = '₽' + price;
    totalPriceCell.textContent = '₽' + count * price ;
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
};