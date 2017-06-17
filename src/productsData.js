import box from './assets/box.svg';
import arrow from './assets/arrow.svg';
import head from './assets/head.svg';
import redBra from './assets/girl-254708_1280.jpg';
import model from './assets/model-2373325_1920.jpg';
import cleaning from './assets/averie-woodard-114289.jpg'
import dress from './assets/tamara-bellis-256701.jpg'
let data = []

data.push({
    name:"box",
    description:"A box",
    pic: box,
    price:10
})

data.push({
    name:"box",
    description:"A box",
    pic: box,
    price:10
})

data.push({
    name:"arrow",
    description:"A box",
    pic: arrow,
    price:10
})

data.push({
    name:"arrow",
    description:"A box",
    pic: arrow,
    price:10
})

data.push({
    name:"arrow",
    description:"A box",
    pic: arrow,
    price:10
})

data.push({
    name:"head",
    description:"A head",
    pic: head,
    price:10
})

data.push({
    name:"arrow",
    description:"A box",
    pic: arrow,
    price:10
})

data.push({
    name:"arrow",
    description:"A box",
    pic: arrow,
    price:10
})

data.push({
    name:"head",
    description:"A head",
    pic: head,
    price:10
})

let offers = [];

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: dress,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: model,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: redBra,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: cleaning,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: dress,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: model,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: redBra,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: cleaning,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: model,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: redBra,
    price:null
})

offers.push({
    name:"Sale",
    description:"2 for 1 dresses and selected items",
    pic: cleaning,
    price:null
})

export default function getData(){
    return {
        data:data,
        offers:offers
    }
}