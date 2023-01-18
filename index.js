var  obj ={
    init:function() {
    var that=this;
        this.load_country();
        document.getElementById("country").addEventListener("change",()=>{
            console.log(this)
           //that.load_state(this.value)
        })
    },

    load_country :  function(){
    var xhr = new XMLHttpRequest();
        xhr.open('GET','https://restcountries.com/v2/all','true');
        xhr.onload=()=>{
             var contries = JSON.parse(xhr.responseText)
             contries.forEach((value,id) => {
                 let op= document.createElement("option");
                 op.innerText= value.name;
                 op.setAttribute('value',id)
                 document.getElementById("country").appendChild(op)
             });
        }
        xhr.send();
    },

    load_state : function(id){
    var xhr = new XMLHttpRequest();
        xhr.open('GET','https://restcountries.com/v2'+id,'true');
        xhr.onload=()=>{
             var contries = JSON.parse(xhr.responseText)
             contries.forEach(value => {
                 let op= document.createElement("option");
                 op.innerText= value.name;
                 op.setAttribute('value',id)
                 document.getElementById("capital").appendChild(op)
             });
        }
        xhr.send();
    },
}
obj.init();

// Dropdown for Country -> on selection of some country, State will display belonging to 
// selected country and State selection -> related Cities will display.