const container= document.getElementsByClassName('carousel-container')
const images= document.getElementById('images')


const imageWidth=500;
const imageCount=images.children.length;


images.style.width=`${imageCount*imageWidth}px`;

for (let i =0;i < imageCount;i++){
    const image=images.children[i];
    image.style.left=`${i*imageWidth}px`
}

//creating the buttons
var prevBtn= document.createElement('button')
prevBtn.setAttribute('id','prev')
prevBtn.setAttribute('class','left-arrow')
prevBtn.innerHTML='&#10094;'

var nextBtn= document.createElement('button')
nextBtn.setAttribute('id','next')
nextBtn.setAttribute('class','right-arrow')
nextBtn.innerHTML="&#10095;"

var btnWrapper=document.createElement('div')
btnWrapper.setAttribute('class','btnWrapper')

var btnContainer= document.createElement('div')
btnContainer.setAttribute('class',"btnContainer")
var slideWrap=document.getElementsByClassName('sliderContainer')[0];
slideWrap.append(btnWrapper)
btnWrapper.append(btnContainer)
btnContainer.append(prevBtn);
btnContainer.append(nextBtn)

//creating the dots

var dots=document.createElement('div')
dots.setAttribute('id','dots')
for(var i=0;i<imageCount;i++){
    var dot=document.createElement('span')
    dot.setAttribute('class','dot')
    dot.setAttribute('id','dot')
    dots.appendChild(dot);   
}
var slideWrap=document.getElementsByClassName('sliderContainer')[0];
slideWrap.append(dots)




let currentIndex=0;
let interval;
let slide=0;
let marginPx=0

nextBtn.onclick= function(){next()}
prevBtn.onclick= function(){ previous()}

var autoChange= setInterval(()=>{
    next()
},1000)


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
