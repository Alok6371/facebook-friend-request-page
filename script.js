var isstar=document.querySelector("h5")

// var addFriend=document.querySelector("#add")
// // var removeFriend=document.querySelector("#remove")
// var check=0;

// addFriend.addEventListener("click",function(){
//     if(check==0){
//         isstar.innerHTML="Friends";
//         isstar.style.color="green";
//         check+=1
//     }
//     else{
//         isstar.innerHTML="Stranger";
//         isstar.style.color="red";
//         check-=1
//     }
// })

// removeFriend.addEventListener("click",function(){
//     isstar.innerHTML="Stranger";
//     isstar.style.color="red";

// })


var btn=document.querySelector("#add")
var check=0

btn.addEventListener("click",function(){
    if(check==0){
        isstar.innerHTML="Friends";
        isstar.style.color="green";
        btn.innerHTML=("Remove")
        check+=1
    }
    else{
        isstar.innerHTML="Stranger";
        isstar.style.color="red";
        btn.innerHTML=("Add friend")
        check-=1
    }
})