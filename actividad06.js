 /*document.querySelectorAll("input").forEach(item =>{
  item.addEventListener("keyup", event =>{
      validateThisInput(this.value, this)
    }
    )
  }
)*/

function enviaPeticionGetXMLHttp(){
  let c1 = document.getElementById("c1").value;
  let c2 = document.getElementById("c2").value;
  let c3 = document.getElementById("c3").value;
  let c4 = document.getElementById("c4").value;
  let xmlHttp = new XMLHttpRequest()
  xmlHttp.open("POST","r1.php",true)
  xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlHttp.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
        console.log("El recurso SI existe")
        let JSONansw = JSON.stringify(xmlHttp.responseText);
        console.log(JSONansw)
        let error1 = JSONansw.substr(73, 22);
        if (error1 === "value is required"){
          document.getElementById("s1").innerHTML = error1;
        }
        if (error1 === "value is required"){
          document.getElementById("s1").innerHTML = error1;
        }
        if (error1 === "value is required"){
          document.getElementById("s1").innerHTML = error1;
        }


    }else{
      //console.log("El recurso no existe")
    }
  }
  xmlHttp.send("c1="+c1+"&c2="+c2+"&c3="+c3+"&c4="+c4);
}

function validateThisInput(num, obj){
  let bro = document.getElementById(obj.id).nextElementSibling;
  if (num.length===0){
    bro.innerHTML = "";
    return;
  }
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
      bro.innerHTML=this.responseText
    }
  }
  xmlhttp.open("POST","r2.php",true);
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send("q="+num);
}
