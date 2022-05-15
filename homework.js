function myArray() {
    var num = [5, 3, 7, 8, 11];
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
      sum += num[i];
      var avg = sum / 5;
    }
    console.log(sum, avg);
}
myArray()

function myBony() {
    var myNames = ["yoni", "bony", "tony", "sloni", "blony"];
    for (var i = 0; i < myNames.length; i++) {
      console.log(myNames[i]);
    }
}
myBony()



function myNumbers(num,array) {
for(var i = 0;i < array.length;i++){
  if(array[i]==num){
    return true
   }
  }  
  return false

}
console.log(myNumbers(9, [7, 9, 6]))


