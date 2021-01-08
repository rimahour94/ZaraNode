const burgurOperation=document.querySelector(".container-categery")
const burgurOperationMain=document.querySelector(".container-menu-content")
const burgurBttn=document.querySelector(".zara__menu-line")
const menuContents=document.querySelector(".container-categery")
const menCollection=document.querySelector(".container-woman")

var bool=true

const burgurOperationMainwidth=burgurOperationMain.getBoundingClientRect().left
burgurOperationMain.style.left=burgurOperationMainwidth+"px"

burgurBttn.addEventListener("mouseover",()=>{
  
  burgurOperationMain.style.transform='translateX(374px)';
})
burgurOperationMain.addEventListener("mouseleave",()=>{
  const amountToMove=burgurOperationMain.style.left
  burgurOperationMain.style.transform='translateX('+amountToMove+')';
})

menuContents.addEventListener("click",(e)=>{
  if(!e.target.closest("h1"))return
  if(e.target.closest("h1").id=="man-id")
  {
   
    if(bool===true)
    {
      menCollection.style.height='100%'
      bool=false
    }  
    else
    {
      menCollection.style.height='0px'
      bool=true
    }
  }
})