const shoppingCart = ["milk","coffee","tea","honey"];
shoppingCart.unshift("meat");
console.log(shoppingCart);
shoppingCart.push("sugar");
console.log(shoppingCart);
shoppingCart.splice(4,1);
console.log(shoppingCart);
for(i=0;i<shoppingCart.length;i++){
    if(shoppingCart[i] === "tea"){
        shoppingCart[i] = "green tea";
    }
}
console.log(shoppingCart);