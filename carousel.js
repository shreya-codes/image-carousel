const container= document.getElementsByClassName('carousel-container')
const images= document.getElementById('images')
const dots=document.getElementById('dots');

const imageWidth=500;
const imageCount=images.children.length;
console.log(imageCount)
console.log(dots.children[1])

images.style.width=`${imageCount*imageWidth}px`;

for (let i =0;i < imageCount;i++){
    const image=images.children[i];
    image.style.left=`${i*imageWidth}px`
}
console.log(images.children[2])

const nextBtn=document.getElementById('next');
const prevBtn= document.getElementById('prev')
let currentIndex=0;
let interval;
let slide=0;

function next(){
    currentIndex++ ;
    slide=(currentIndex-1 )*500
    // images.style.left=`-${currentIndex*imageWidth}px`;
    interval= setInterval(()=>{
       
            slide=slide+100;
        images.style.right=`${slide}px`
        
        if (slide >=currentIndex*500){
        clearInterval(interval);
        }

        
        
},10);
}
function previous(){
    currentIndex-- ;
    slide=(currentIndex-1)*500
    // images.style.left=`-${currentIndex*imageWidth}px`;
    interval= setInterval(()=>{
        slide=slide-100;
        images.style.right=`${slide}px`
        if (slide <=currentIndex*500){
        clearInterval(interval);
        }
        
},10);
}

dots.addEventListener('click', () => {
    /**
     * Runs every 17 milliseconds until the interval is cleared.
     */
    interval = setInterval(() => {
        /**
         * If clicked indicator dot is same as current pos, it clears the interval.
         */
        if (currentIndex === i) {
            clearInterval(interval);
        } else if (currentIndex > i) {
            /**
             * Runs if clicked indicator dot is before the current position.
             */
            distanceTravelled -= transitionSpeed;
            carouselImageWrapper[0].style.left = -(distanceTravelled) + 'px';

            if (distanceTravelled <= i * IMAGE_WIDTH) {
                clearInterval(interval);
                currentIndex = i;
                setActivedots();
            }
        } else {
            /**
             * Runs if clicked indicator dot is after the current position.
             */
            distanceTravelled += transitionSpeed;
            carouselImageWrapper[0].style.left = -(distanceTravelled) + 'px';
            if (distanceTravelled >= i * IMAGE_WIDTH) {
                clearInterval(interval);
                currentIndex = i;
                setActivedots();
            }
        }
    }, 17);
});


nextBtn.onclick= function(){
  if(currentIndex!=imageCount-1){
      next();
      console.log(`slide111 ${slide} current ${currentIndex}`)
  }
  else{
      previous();
      console.log(`slide ${slide} current ${currentIndex}`)
  }
}
console.log(`slide${slide}`)


prevBtn.onclick= function(){
   if(currentIndex>0){
       previous();
       console.log(`slide ${slide} current ${currentIndex}`)
   }
   else{
       next()
       console.log(`slide ${slide} current ${currentIndex}`)
   }
}
console.log(`slide${slide}`)


