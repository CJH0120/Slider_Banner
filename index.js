
const slides = document.querySelector('.M_Banner_imgs');  //전체 슬라이드 컨테이너
const slideImg = document.getElementsByClassName('banner_img');  //모든 슬라이드들

const slideCount = slideImg.length; // 슬라이드 개수 
const prev = document.querySelector('.left'); //이전 버튼 
const next = document.querySelector('.right'); //다음 버튼


mcurrentIdx = -1;
currentIdx =0;
pcurrentIdx =1;

function set (){
   currentIdx===10?currentIdx=0:"";
   mcurrentIdx===10?mcurrentIdx=0:"";
   pcurrentIdx===10?pcurrentIdx=0:"";
   pcurrentIdx===-1?pcurrentIdx=9:"";
   currentIdx===-1?currentIdx=9:"";
   mcurrentIdx===-1?mcurrentIdx=9:"";
  
   Mslide = slideImg[mcurrentIdx]
   mainslide = slideImg[currentIdx]
   Pslide = slideImg[pcurrentIdx]
   
}
///시작
window.onload=()=>{
removes()
change()
   }


function removes(){
   for(i=0; i< slideCount;i++){
      slideImg[i].classList.remove('addd','leftadd','rightadd')
      
   }

}


next.addEventListener('click',function(){
   mcurrentIdx++
   currentIdx++
   pcurrentIdx++
   
   removes()
   change()
  
})



prev.addEventListener('click',function(){
   mcurrentIdx--;
   currentIdx--;
   pcurrentIdx--;
   set ()
   removes()
   change()
 
})



   function change(){
   set ()
   
   mainslide.classList.add('addd');
   Mslide.classList.add('leftadd')
   Pslide.classList.add('rightadd')
      
   }
   
   


