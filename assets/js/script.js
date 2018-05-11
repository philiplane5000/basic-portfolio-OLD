console.log('CONNECTED TO JS FILE');

$('.img-overlay').on('mouseover', function(){
    this.classList.add('pop-effect');
});

$('.img-overlay').on('mouseout', function(){
    this.classList.remove('pop-effect');
});
