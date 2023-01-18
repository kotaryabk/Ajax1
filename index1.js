let arr1=["Apple","Banana","Grapes","pineapple","Mango"];

arr1.forEach((ele)=>{
    let container = document.getElementById("container")
    let dropdown= document.createElement("option");
    //   console.log(dropdown.innerText=ele);
    dropdown.innerText=ele;
    container.appendChild(dropdown)
})

