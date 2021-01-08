const track=document.querySelector(".container-zara-men-women-kid-contents")
const slides=Array.from(track.children)
const wholeTrack=document.querySelector(".container-men-women-kids-compartment");
const wholeSlides=Array.from(wholeTrack.children)
const dotsNav=document.querySelector(".container-dotted-main")
const dots=Array.from(dotsNav.children)
const bottomButton=document.querySelector(".carousel-button");
const womenNxtbutton=document.querySelector(".woman-section");
const womenNext=document.querySelector(".container-zara-woman-contents");
const slidesWomen=Array.from(womenNext.children)
const kidzTrack=document.querySelector(".container-zara-kid-contents")
const slideKidz=Array.from(kidzTrack.children)
const kidsButton=document.querySelector(".kids-section")
const menBttn=document.querySelector(".man-section");

const slideHeight=slides[0].getBoundingClientRect().height
const setSlidePosition=(slide,index)=>{
  slide.style.top=slideHeight * index + 'px'
}
const slideWidth=wholeSlides[0].getBoundingClientRect().width
const setSlidePositionWomen=(slide,index)=>{
  slide.style.left=slideWidth * index + 'px'
}
wholeSlides.forEach(setSlidePositionWomen)
slides.forEach(setSlidePosition)
slidesWomen.forEach(setSlidePosition)
slideKidz.forEach(setSlidePosition)

womenNxtbutton.addEventListener("click",(e)=>{
  document.getElementById("kidprev-id").style.display="block"
  e.target.closest("button").style.display="none"
  menBttn.style.display="block"
  const currentSlide=wholeTrack.querySelector(".currentslideWhole")
  const amountToMove=womenNext.style.left
  wholeTrack.style.transform='translateX(-'+amountToMove+')';
  currentSlide.classList.remove("currentslideWhole")
  womenNext.classList.add("currentslideWhole")
  
})

menBttn.addEventListener("click",(e)=>{
  document.getElementById("kidprev-id").style.display="none"
  womenNxtbutton.style.display="block"
  womenNxtbutton.style.left="85%"
  menBttn.style.display="none"
  const currentSlide=wholeTrack.querySelector(".currentslideWhole")
  const amountToMove=track.style.left
  wholeTrack.style.transform='translateX(-'+amountToMove+')';
  
  
  currentSlide.classList.remove("currentslideWhole")
  track.classList.add("currentslideWhole")
})

kidsButton.addEventListener("click",()=>{
  menBttn.style.display="none"
  // document.getElementById("womannextdup-id").style.display="block"
  document.getElementById("womannext-id").style.left="4%"
  document.getElementById("womannext-id").style.display="block"
  kidsButton.style="none"
  const currentSlide=wholeTrack.querySelector(".currentslideWhole")
  const amountToMove=kidzTrack.style.left
  wholeTrack.style.transform='translateX(-'+amountToMove+')';
  currentSlide.classList.remove("currentslideWhole")
  kidzTrack.classList.add("currentslideWhole")
})


wholeTrack.addEventListener("click",(e)=>{
  if(!e.target.closest("button"))return
  const currentSlide=track.querySelector(".currentslide")
  const nextSlide=currentSlide.nextElementSibling
   const amountToMove=nextSlide.style.top
   track.style.transform='translateY(-'+amountToMove+')';
       currentSlide.classList.remove("currentslide")
         nextSlide.classList.add("currentslide")  
    //      document.querySelector(".currentClassDot").nextElementSibling.classList.add("currentClassDot")
    // document.querySelector(".currentClassDot").classList.remove("currentClassDot")
})



womenNext.addEventListener("click",(e)=>{
  if(!e.target.closest("button"))return
   const currentSlide=womenNext.querySelector(".currentslideWomen")
   const nextSlide=currentSlide.nextElementSibling
   const amountToMove=nextSlide.style.top
   womenNext.style.transform='translateY(-'+amountToMove+')';
   currentSlide.classList.remove("currentslideWomen")
         nextSlide.classList.add("currentslideWomen")
})

kidzTrack.addEventListener("click",(e)=>{
  if(!e.target.closest("button"))return
   const currentSlide=kidzTrack.querySelector(".currentslideKid")
   const nextSlide=currentSlide.nextElementSibling
   const amountToMove=nextSlide.style.top
   kidzTrack.style.transform='translateY(-'+amountToMove+')';
   currentSlide.classList.remove("currentslideKid")
         nextSlide.classList.add("currentslideKid")
})


dotsNav.addEventListener("click",(e)=>{
  const targetdot=e.target.closest("button")
if(!targetdot) return
  const targetIndex=dots.findIndex(dot=>dot===targetdot)
  const targetSlide= slides[targetIndex]
  const amountToMove=targetSlide.style.top
  track.style.transform='translateY(-'+amountToMove+')';
  document.querySelector(".currentClassDot").nextElementSibling.classList.add("currentClassDot")
    document.querySelector(".currentClassDot").classList.remove("currentClassDot")
  
})




