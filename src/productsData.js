import box from './assets/box.svg';
import arrow from './assets/arrow.svg';
import head from './assets/head.svg';
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

export default function getData(){
    return {
        data:data
    }
}