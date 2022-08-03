export interface ListProducts {
    _id:string,
    name:string,
    price:number,
    sale:number,
    image:string,
    descriptionShort:string,
    descriptionLong:string,
    outstanding:string,
    category:{
        id:number,
        name:string
    },
    categoryId:number,
    idHidden:boolean
}