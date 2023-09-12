'use strict'

const imageButtonList = document.querySelectorAll('.noImage-icon');

imageButtonList.forEach((el)=>{
    el.addEventListener('click', e => {
        const currWin = open('', '_blank', 'left=500, top=500, width=600, height=600')
        currWin.document.body.innerHTML = `<img src=${el.dataset.url}>`
    })
})