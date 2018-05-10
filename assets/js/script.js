console.log('CONNECTED TO JS FILE');

$('.img-overlay').on('mouseover', function(){
    this.classList.add('opaque');
});

$('.img-overlay').on('mouseout', function(){
    this.classList.remove('opaque');
});

$('.nav-link').on('mouseover', function(){
    this.classList.add('pop');
});

$('.nav-link').on('mouseout', function(){
    this.classList.remove('pop');
})


// var link1 = document.querySelectorAll(".img-overlay");
// console.log(links);

// links.addEventListener("mouseover", function(){
//     this.classList.add("opaque");
// });

// links.addEventListener("mouseout", function(){
//     this.classList.remove("opaque");
// });