// Monkey('Alan').eat('Banana').sleep(4).eat('Apple')


// monkey.prototype.eat = (fruit) => {
//     console.log(`I eat ${fruit}`);
//     return this
// }
// class monkey {
//     constructor(name){
//         console.log(`I am ${name}`);
//     }
// }
function Monkey(name){
    console.log(`Iam ${name}`);
}

Monkey.prototype.eat = function(fruit) {
    console.log(`I eat ${fruit}`);
    return this
}

Monkey.prototype.sleep = async function(num) {
    setTimeout(()=>{
        return this
    }, num)

}
new Monkey('Alan').eat('Banana').sleep(1000).eat('Apple')
