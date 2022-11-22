// alert("good");
// let arr = [];
// function fun1(){
//      op1 = document.getElementById("enter").value;

//     //  let btn1 = document.getElementById("upbtn").value;
//     //  let btn2 = document.getElementById("delbtn").value;
//     //  out1 = document.getElementById("output1");
//     //  out1.innerHTML = op1 ;
//     arr.push(op1);

//     // //document.getElementById("output1").innerHTML = op1;
//     // console.log(arr);
//     disp();
// }
// function disp(){
//     var str='';
//     // for (i=0;i<arr.length;i++) 
//     // { 
//     //     // str += i + ':'+arr[i] + "<br >";
//     //     // document.getElementById('disp').innerHTML=str;
//     //     str =str+` <div  class="button" style="background-color: brown; display: flex;justify-content: space-between;">
//     //     <h4 style="color:#fff;" id="disp" >${i+1} = ${arr[i]}</h4>
//     //     <div style="margin-top:20px;">
//     //     <button type="button" id="upbtn">update</button>
//     //     <button type="button"  id="delbtn" >delete</button>
//     //     </div>
//     // </div><br>`

//     // }

//     // arr.map((x,i)=>console.log(i+1,x));

//     document.getElementById("cls").innerHTML=str;


// }
let arr = ["red","blue","pink","green","yellow"];
let temp = '';
function fun2() {
    arr.map((x, i) => {
    temp = temp + `
    <div style="width: 90px ; height:60px ; background-color: ${x};color: azure; ">${x}</div>`})
    document.getElementById("cls1").innerHTML = temp;
}

function fun3(){
   const result = arr.filter(color);
   arr.filter((x, i) => {
    temp = temp + `
    <div style="width: 90px ; height:60px ; background-color: ${x};color: azure; ">${x}</div>`})
    document.getElementById("cls1").innerHTML = temp;
}