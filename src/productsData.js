import pic0 from './assets/girl-254708_1280.jpg';
import pic1 from './assets/model-2373325_1920.jpg';
import pic2 from './assets/averie-woodard-114289.jpg'
import pic3 from './assets/tamara-bellis-256701.jpg'
import pic4 from "./assets/yoann-boyer-285832.jpg";
import pic5 from "./assets/kira-ikonnikova-156668.jpg";
import pic6 from "./assets/zeny-rosalina-202966.jpg";
import pic7 from "./assets/jan-phoenix-269396.jpg";
import pic8 from "./assets/amos-bar-zeev-291110.jpg";
import pic9 from "./assets/mohammad-faruque-197300.jpg";

let data0=[];


data0.push({
    title:"Underwear",
    description:"Bra and pants set",
    pic: pic0,
    price:"£10"
})

data0.push({
    title:"Accesories",
    description:"Necklace",
    pic: pic1,
    price:"£5"
})


let data1=[];



let data2=[];
let data3=[];

data3.push({
    title:"Dress",
    description:"Pink with spots",
    pic: pic3,
    price:"£5"
})





//////////////////////////////////////////////////////Data
let data = [];
data.push({
    title:"Underwear",
    description:"Bra and pants set",
    pic: pic0,
    price:"£10"
})



let offers = [];

offers.push({
    title:null,
    description:"2 for 1 on selected items",
    pic: pic9,
    price:null
})


offers.push({
    title:null,
    description:"Buy 1 get 1 free",
    pic: pic8,
    price:null
})

offers.push({
    title:null,
    description:"50% off shoes",
    pic: pic7,
    price:null
})

offers.push({
    title:"Our Basket",
    description:"A selection of our best products",
    pic: pic2,
    price:"£5"
})


export default function getData(){
    return {
        data0,
        data1,
        data2,
        data3,
        data:data,
        offers:offers
    }
}