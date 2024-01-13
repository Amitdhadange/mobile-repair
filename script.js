gsap.from(".page",{
    y:-20,
    opacity:0,
    duration:.9,

})
gsap.from(".nav1>ul>li",{
    y:-100,
    duration:2,
    stagger:.2,
    opacity:0
})
gsap.from(".left>h1,p,.btn",{
    y:-80,
    opacity:0,
    delay:1,
    duration:1,
    // stagger:.4,
    rotate:-45,


})
// gsap.from("button",{
//     rotate:-360,
//     duration:3,
// })