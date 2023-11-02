'use strict'
import {removeItems} from "./script.js";
import {data} from "./script.js"
import {createRowProd} from "./addElement.js";

export const renderItems = (elem) => {
    const allRow = data.map(createRowProd);
    let i=0;
    while(i<10){
        elem.append(...allRow);
        i++
    }

    let leftButton = document.querySelector('.left-btn');
    let rightButton = document.querySelector('.right-btn');
    let itemList = document.querySelector("tbody");
    let itemsPage = 1;
    let itemsView = 10;
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
            removeItems('tbody .table__row');
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
};

