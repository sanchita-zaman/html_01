//let vals = [4, 8, 1, 2, 9];
//console.log(vals);

//function doubler(x)  {
 //return x * 2
//}

//let doubled = vals.map(doubler);
//console.log(doubled);


//let doubled2 = vals.map(function(x){
//return x * 3
//});

//console.log('gdjs',doubled2);

// https://www.youtube.com/watch?v=i17a2cHGsIg

const newArray = ['Nagative', 'patients','overall','level'];

const newArray2 = [
    {
        name: 'some name',
        address: '12345 jjd',
        fullName: 'full name 222'
    },
    {
        name: 'name',
        address: '12345 ggr',
        fullName: 'full name 33'
    },
    {
        name: 'name',
        address: '12345 gy',
        fullName: 'full name 56'
    }
];

const container  = document.getElementById('container');

newArray.map(function(item, index){
  return console.log(`index is ${index} ${item}`);
});

// newArray2.map(function(ele, mofix){
// console.log(ele.fullName);
// });

newArray2.map((ele, mofix) => console.log(`${ele.fullName} ${ele.address}`));
    




