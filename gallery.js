function upDate(previewPic){
 
    var p=document.getElementById("image");
    p.style.backgroundImage="url('"+previewPic.src+"')";
    p.innerHTML=previewPic.alt;
    
    }
  
function unDo(){
    var p=document.getElementById("image");
    p.style.backgroundImage="url('')";
    p.innerHTML="Hover over an image below to display here.";
          
    }