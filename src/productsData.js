import box from './assets/box.svg';
import arrow from './assets/arrow.svg';
import head from './assets/head.svg';
import redBra from './assets/girl-254708_1280.jpg';
import model from './assets/model-2373325_1920.jpg';
import cleaning from './assets/averie-woodard-114289.jpg'
import dress from './assets/tamara-bellis-256701.jpg'
let data = []

data.push({
    name:"Shoes",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"Dress",
    description:"A box",
    pic: cleaning,
    price:"£10"
})

data.push({
    name:"accessories",
    description:"A box",
    pic: redBra,
    price:"£10"
})

data.push({
    name:"blouse",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: redBra,
    price:"£10"
})

data.push({
    name:"head",
    description:"A head",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: cleaning,
    price:"£10"
})


data.push({
    name:"box",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"box",
    description:"A box",
    pic: cleaning,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: redBra,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: redBra,
    price:"£10"
})

data.push({
    name:"head",
    description:"A head",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: cleaning,
    price:"£10"
})


data.push({
    name:"box",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"box",
    description:"A box",
    pic: cleaning,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: redBra,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: redBra,
    price:"£10"
})

data.push({
    name:"head",
    description:"A head",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: cleaning,
    price:"£10"
})


data.push({
    name:"box",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"box",
    description:"A box",
    pic: cleaning,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: redBra,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: redBra,
    price:"£10"
})

data.push({
    name:"head",
    description:"A head",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: dress,
    price:"£10"
})

data.push({
    name:"arrow",
    description:"A box",
    pic: cleaning,
    price:"£10"
})



let offers = [];

offers.push({
    name:"",
    description:"2 for 1 dresses and selected items",
    pic: dress,
    price:null
})

offers.push({
    name:"",
    description:"Buy 1 get 1 free",
    pic: model,
    price:null
})

offers.push({
    name:"",
    description:"3 for 2 on something",
    pic: redBra,
    price:null
})

offers.push({
    name:"",
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