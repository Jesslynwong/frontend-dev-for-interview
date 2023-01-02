//不固定参数curry
function add(x) {
  let sum = x;
  let temp = function (y) {
    sum += y;
    return temp;
  };
  // 添加新方法
  temp.toString = function () {
    return sum;
  };
  return temp;
}
let a = add(1)(2)(4);
console.log(a.toString());
