'use strict'

const getData = async() => {
    const data = await fetch(`https://odd-pineapple-pink.glitch.me/api/goods?}`);
    return data.json()
}



export { getData }
