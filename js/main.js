


document.body.classList.add(localStorage.getItem('colorPage')|| red)

var colors=document.querySelectorAll('.switch_color li');

var colorList=[];

for(var i=0;i<colors.length;i++){

    colorList.push(colors[i].getAttribute('data_color'));

    colors[i].addEventListener('click',function(){

        
        document.body.classList.remove(...colorList);
       
        document.body.classList.add(this.getAttribute("data_color"));
          
   localStorage.setItem("colorPage",this.getAttribute("data_color"))
    })
 
}

// end choocse color and save it in locallstorage

var httpReq = new XMLHttpRequest();

httpReq.open("GET","https://jsonplaceholder.typicode.com/posts");

httpReq.send();

var myData=[];

httpReq.addEventListener("readystatechange",function(){
      
       if(httpReq.readyState==4&&httpReq.status==200)
       {
          myData=JSON.parse(httpReq.response);
          displayPosts();
       }

})

function displayPosts(){
    var  temp=``;

    for(var i=0;i<myData.length;i++){
        temp+=`
        <div class='col-md-4'>
           <div class='post-data '>
           <h4>`+myData[i].title+`</h4>
           <p>`+myData[i].body+`</p>
              
              
           </div>
        </div>
        `
    }

    document.getElementById("postsRow").innerHTML=temp;

}



























