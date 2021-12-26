const container= document.getElementsByClassName('carousel-container')
const images= document.getElementById('images')

const imageWidth=500;
const imageCount=images.children.length;
console.log(imageCount)


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

nextBtn.onclick= function(){
    currentIndex++ ;
    // images.style.left=`-${currentIndex*imageWidth}px`;
    interval= setInterval(()=>{
        slide=slide+100;
        images.style.right=`${slide}px`
        if (slide >=currentIndex*500){
        clearInterval(interval);
        }

        
        
},10); 
console.log(`slide${slide}`)
console.log(`currentindex${currentIndex}`)
}
console.log(`slide${slide}`)


prevBtn.onclick= function(){
    currentIndex-- ;
    // images.style.left=`-${currentIndex*imageWidth}px`;
    interval= setInterval(()=>{
        slide=slide-100;
        images.style.right=`${slide}px`
        if (slide <=currentIndex*500){
        clearInterval(interval);
        }
        
},10); 
console.log(`slide${slide}`)
console.log(`currentindex${currentIndex}`)
}
console.log(`slide${slide}`)


