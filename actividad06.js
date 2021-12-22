function save(obj){
  let c1 = document.getElementById("c1").value;
  let c2 = document.getElementById("c2").value;
  let c3 = document.getElementById("c3").value;
  let c4 = document.getElementById("c4").value;
  let xmlHttp = new XMLHttpRequest()
  xmlHttp.open("POST","r1.php",true)
  xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlHttp.onreadystatechange = function(){
    if(this.readyState===4 && this.status===200){
      document.getElementById(obj.id).nextElementSibling.innerHTML=this.responseText
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

function inputFetch(num, obj){
  let configFetch	=	{
    method:	"POST",
    headers:	{	'Content-Type':	'application/x-www-form-urlencoded' },
    body:	"q="+num+"&id="+obj.id
  }
  let promesa = fetch("r3.php",configFetch);
  promesa.then(
    function(response){
      response.text().then(
        function (texto){
          let bro = document.getElementById(obj.id).nextElementSibling;
          if (num.length===0){
            bro.innerHTML = "";
          }else{
            bro.innerHTML=texto;
          }
        }
      )
  }
  )
}

function check(obj){
  let c5 = document.getElementById("c5").value;
  let c6 = document.getElementById("c6").value;
  let c7 = document.getElementById("c7").value;
  let c8 = document.getElementById("c8").value;
  let configFetch	=	{
    method:	"POST",
    headers:	{	'Content-Type':	'application/x-www-form-urlencoded' },
    body:	"c5="+c5+"&c6="+c6+"&c7="+c7+"&c8="+c8
  }
  let promesa = fetch("r4.php",configFetch);
  promesa.then(
    function(response){
      response.text().then(
        function (texto){
          let bro = document.getElementById(obj.id).nextElementSibling;
            bro.innerHTML=texto;
        }
      )
    }
  )
}








/*document.querySelectorAll("input").forEach(item =>{
 item.addEventListener("keyup", event =>{
     validateThisInput(this.value, this)
   }
   )
 }
)*/
