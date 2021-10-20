//rest
//params
//varArgs

let showProducts = function(id,...products){
    console.log(id)
    console.log(products[0])
}
// console.log(typeof showProducts)
showProducts(10,"elma","armut","karpuz")
//spread gelen veriyi ayırmaya yarıyor.
let points= [10,20,30,2,3,4,5]

console.log(...points)
console.log(Math.max())


// DESTRUCTİNG 
let users =["kullanıcı idsi",20,30]

let [id,name,desc] = users

console.log(id)
console.log(desc)


let category = {id:1,name:"içecek"}

console.log(category.id)
console.log(category.name)


let {id,name} = category

console.log(id)