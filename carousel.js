const container= document.getElementsByClassName('carousel-container')
const images= document.getElementById('images')
const dots=document.getElementById('dots');

const imageWidth=500;
const imageCount=images.children.length;


images.style.width=`${imageCount*imageWidth}px`;

for (let i =0;i < imageCount;i++){
    const image=images.children[i];
    image.style.left=`${i*imageWidth}px`
}

const nextBtn=document.getElementById('next');
const prevBtn= document.getElementById('prev')
let currentIndex=0;
let interval;
let slide=0;
let marginPx=0

nextBtn.onclick= function(){next()}
prevBtn.onclick= function(){ previous()}

function next(){
    
    if (currentIndex==imageCount-1){
        currentIndex=0
        slideToPrev(0,30);
    }
    else{
        currentIndex++;
        marginPx=-(500*currentIndex)
        slideToNext(marginPx,30);
    }
    setActivedots(currentIndex)
}

function previous(){
   if(currentIndex!==0){
       var slidePx=marginPx+500;
       slideToPrev(slidePx,30);
       currentIndex--;
   }
   else{
       currentIndex=imageCount-1;//2
       slidePx=-(500*currentIndex)
       slideToNext(slidePx,30)
       
   }

   setActivedots(currentIndex);
}

function slideToNext(marginPx,slidePx){
    var interval=setInterval(()=>{
        slide-=slidePx
        images.style.left=`${slide}px`;

    },10)
    setInterval(()=>{
        if(slide>marginPx){
            interval
        }
        else{
            clearInterval(interval)
        }

    },10)


}
function slideToPrev(marginPx,slidePx){
    var interval=setInterval(()=>{
        slide+=slidePx
        images.style.left=`${slide}px`;

    },10)
    setInterval(()=>{
        if(slide < marginPx){
            interval
        }
        else{
            clearInterval(interval)
        }

    },10)

}
function setActivedots(currentIndex){
    for(var i=0 ; i<imageCount;i++){
        dots.children[i].classList.remove('active');
    }
    dots.children[currentIndex].setAttribute('class','active'
    )
}

for (let i = 0, len = dots.children.length; i < len; i++)
{
    dots.children[i].onclick = function(){
       
            if (currentIndex === i) {
                clearInterval(interval);
            }
            else if (currentIndex > i) {
               
               previous()

            }
            else {
                
                next()
                }
            
      
    }
}


