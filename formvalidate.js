function Validation() {
  var title = document.getElementById("title").value;
  var desc = document.getElementById("description").value;
  var price = document.getElementById("price").value;

  // Title Validations

  if (title == "") {
    document.getElementById("title-error").innerHTML = "** Title must required";
    return false;
  }
  if (title.length > 30) {
    document.getElementById("title-error").innerHTML =
      "Only 30 character allowed";
      return false;
  }
  if (!isNaN(title)) {
    document.getElementById("title-error").innerHTML =
      "Numbers are not allowed";
      return false;
  }

  // Description Validations

  if (desc == "") {
    document.getElementById("description-error").innerHTML =
      "**Description must required";
    return false;
  }
  if (desc.length > 500) {
    document.getElementById("title-error").innerHTML =
      "Only 500 character allowed";
      return false;
  }

  // Price Validations

  if (price == "") {
    document.getElementById("price-error").innerHTML = "**Price must required";
    return false;
  }
  if (price > 1000|| price <= 0) {
    document.getElementById("price-error").innerHTML =
      "** Enter a value btw 0 to 1000";
    return false;
  }
  Cancel();
  return true;
}


// Symbol validation for title


function Symbolcheck(event) {
  var title = document.getElementById("title").value;
  title = event.which;

  if (
    (title >= 65 && title <= 90) ||(title >= 97 && title <= 122) ||title == 46 ||title == 32) {
    return true;
  } else {
    return false;
  }
}
const array=[];
function Addproduct() {
    var a = document.getElementById("title").value;
    var b = document.getElementById("description").value;
    var c = document.getElementById("price").value;
    let user={
      id:array.length+1,
        title:a,
        desc:b,
        price:c,
        comment:[],
    };
    if(Validation())
    {
      array.push(user);
      // console.log(user)
    }
    // console.log(array)
    let store='';
    array.map((value,index)=>{
      store += `<div class="card1" id="card1${index}">
      <button>
      <i class="fas fa-ellipsis-v" onclick="optioncheck(this.id)" id='${index}'></i>
    </button>
    <div class="select" id="option${index}">
    <span onclick="Edit(this.id)" id="${index}">EDIT</span>
    <span onclick="Deleteuser(this.id)" id="${index}">DELETE</span>
    <span onclick="View(this.id)" id="${index}">VIEW</span>
    </div>
      <p>Product:${value.id}</p>
      <h1 id="title1${index}">Title:${value.title}</h1>
      <p id="des1${index}"><strong>Description:</strong>${value.desc}</p>
      <h2 class="bottom" id="price1${index}">Price:${value.price}</h2>
      <div id=down${index}><i class="fas fa-thumbs-up" onclick="Changestate(this.id)" id="${index}"></i></div>
      <button><i class="fas fa-comments" onclick="Addcomment(this.id)" id='${index}'></i></button></br></br>
      <div class="comment" id="comments${index}">
      <h3>Comments</h3>
      <input type="text" placeholder="Enter comments" id="commentdata${index}">
      <button><i class="fas fa-paper-plane" onclick="Comments(this.id)" id='${index}'></i></i></button>
    </div>
    <div id="comment1${index}" calss="commentsec"></div>
   </div>
   <div class="view" id="view">
   <i class="fas fa-times" onclick="Close(this.id)" id="${index}"></i>
   <h2>Title</h2>
   <h3 id="title2"></h3>
   <h2>Description</h2>
   <p id="desc2"></p>
   <h2>Price</h2>
   <h3 id="price2"></h3>
   <h2>Comments</h2>
   <p id="comment2" class="comm"></p>
   </div>
   `
   
    })
    document.getElementById("box").innerHTML = store;
}
function Changestate(index) {
  const a=document.getElementById('down'+index);
  if(a.style.color==='black')
  {
    a.style.color='white'
  }
  else{
    a.style.color='black'
  }

}
function optioncheck(index){
  var x = document.getElementById('option'+index);
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function Addcomment(index){
  var x = document.getElementById('comments'+index);
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
function Comments(index) {
  var c= document.getElementById('commentdata'+index).value;
  console.log(c)
  if (array[index].comment.length<10) {
    array[index].comment.push(c);
  }
  // console.log(array[index].comment)
  let data=''
  array[index].comment.map((value)=>{
  data += `<p class="border">${value}</p>`
  })
  document.getElementById("comment1"+index).innerHTML = data;
}
function Deleteuser(index) {
  var del= document.getElementById('card1'+index)
  // console.log(index)
  del.remove(index);
  let text = "Do you want to delete this product";
  if (confirm(text) == true) {
    text = "Yes";
  } else {
    text = "No";
  }
  // console.log(array)
}
var check=''
function Edit(index) {
  check=index;
  var t=array[index].title;
  var d=array[index].desc;
  var p=array[index].price;
  document.getElementById('title').value=t;
  document.getElementById('description').value=d;
  document.getElementById('price').value=p;
  document.getElementById('update').style.display='block';
  document.getElementById('add').style.display='none';
}
function Update(){
   var a = document.getElementById("title").value;
   var b = document.getElementById("description").value;
   var c = document.getElementById("price").value;
  document.getElementById("title1"+check).innerHTML=a;
  document.getElementById("des1"+check).innerHTML=b;
  document.getElementById("price1"+check).innerHTML=c;
}
function View(index) {
   document.getElementById('view').style.display='block'
   document.getElementById('form').style.display='none'
   var t=array[index].title;
   var d=array[index].desc;
   var p=array[index].price;
   var c=array[index].comment;
   console.log(c)
   document.getElementById("title2").innerHTML=t;
   document.getElementById("desc2").innerHTML=d;
   document.getElementById("price2").innerHTML=p;
   document.getElementById("comment2").innerHTML=c;
 
}
function Cancel() {
  document.getElementById("title").value=''
  document.getElementById("description").value=''
  document.getElementById("price").value=''
  document.getElementById('title-error').innerHTML='';
  document.getElementById('description-error').innerHTML='';
  document.getElementById('price-error').innerHTML='';
}
function Close(index) {
  document.getElementById('form').style.display='block'
  document.getElementById('view').style.display='none'
}