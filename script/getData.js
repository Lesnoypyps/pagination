'use strict'
export const loadPages = async() =>{
    const goods = await fetch('https://lunar-childish-primula.glitch.me/api/goods');
    return goods.json();
}



