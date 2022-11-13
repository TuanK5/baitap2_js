// // let a = 'Vo van quoc tuan';
// // console.log(a.charAt(0).toUpperCase()+ a.slice(1,5) +a.charAt(5).toUpperCase()+ a.slice(6,10)+ a.charAt(10).toUpperCase()+ a.slice(11));
// //cách 1 trên mạng tuấn hiểu
// function uppercase(str)
// {
// var array1 = str.split(' ');
// var newarray1 = [];
    
// for(var x = 0; x < array1.length; x++){
//     newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
// }
// return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));
// //cach2 trên mạng tuấn hiểu
// function viethoa(string) 
// {
//     let hoa = string.toLowerCase().split(" ");
//     for(var i = 0; i< hoa.length; i++){
//         hoa[i] = hoa[i][0].toUpperCase() + hoa[i].slice(1);
//     }
//     return hoa.join(" ");
// } 
// let ten = viethoa('vo van quoc tuan');
// console.log(ten)
// //bai2 tuấn tự mò ra haha thông minh quá
// let st = ' javascript is cool '
// a = st.replace(/a/g,'4').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0').replace(/s/g,'5').trim()
// console.log(a)
// // bài 3
// // let str='swim'
// // let str='swiming'
let str='swiming'
if (str.length<4)
console.log(str)
else if(str.length>=4 && str.endsWith('ing')) 
// hoặc else if(str.length>=4 && str.includes('ing')) 
console.log(str+'ly')
else 
console.log(str+'ing')

