let openAccount= document.querySelectorAll(".openAccount");
let overlay= document.querySelector(".overlay");

let cancelBtn= document.querySelector(".cancelBtn");
let modal= document.querySelector(".modal")

openAccount.forEach(button=> button.addEventListener("click", function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden")
}))
cancelBtn.addEventListener("click", function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
})


let section1= document.querySelector(".section1");
let header= document.querySelector(".header");


window.addEventListener("scroll", function(){

// console.log(window.scrollY)

let initialCoord= section1.getBoundingClientRect()

if(window.scrollY > initialCoord.top){
    header.classList.add("sticky")
}else{
    header.classList.remove("sticky")  
}

})


// CAROUSEL PART

let testimonials=[
{
head:"The last step to becoming a complete minimalist",
content:"Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.",
name:"Miyah Miles",
location:"London, UK",
image:"image/user-2.jpg"
},
{
head:"Finally free from old-school banks",
content:"Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.",
name:"Francisco Gomes",
location:"Lisbon, Portugal",
image:"image/user-3.jpg"
},
{
    head:"Best financial decision ever!",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
    name:"Aarav Lynn",
    location:"San Francisco, USA",
    image:"image/user-1.jpg"
    }
]

let increase=0



function Carousel(testimonials){
    const start = testimonials[increase]

testimonialh4.textContent= start.head;
testimonialp.textContent=start.content;
testimonialImage.src= start.image;
authorNameaddress.textContent= start.location;
authorNamep.textContent= start.name;



increase++
if(increase >= testimonials.length){
   increase=0
}
}

window.addEventListener("DOMContentLoaded", function(){
    Carousel(testimonials);
    setInterval(() => Carousel(testimonials), 4000)
})
let testimonialh4= document.querySelector(".testimonialh4")
let testimonialp= document.querySelector(".testimonialp");
let testimonialImage= document.querySelector(".image");
let authorNameaddress= document.querySelector(".authorNameaddress")
let authorNamep= document.querySelector(".authorNamep")
let BtnRight =document.querySelector(".testimonial-BtnRight")
let BtnLeft=document.querySelector(".testimonial-BtnLeft");





let btn= document.querySelectorAll(".btn");

btn.forEach(button=> {
    button.addEventListener("click", function(e){
let dataId= e.currentTarget.dataset.id

let contents= document.querySelectorAll(".contentArea");
contents.forEach(content=> {
 let cont= content.dataset.id
 
    if( dataId === cont){
        content.classList.remove('content-hidden');
        content.classList.remove("content-active")
        
    }else{
        content.classList.add('content-hidden');
        content.classList.remove('content-active');
    }


});
    });
});



document.addEventListener('DOMContentLoaded', function() {
    let arrowPlace = document.querySelector(".arrowPlace a");
    let blockingpalace = document.querySelector(".blocking-palace h5"); 

    console.log(arrowPlace)
    console.log(blockingpalace)

    arrowPlace.addEventListener("click", function(e) {
        e.preventDefault();
        blockingpalace.scrollIntoView({ behavior: "smooth" });
    });
});






