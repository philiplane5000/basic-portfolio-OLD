console.log('CONNECTED TO SCRIPT');

$('.img-overlay').on('mouseover', function(){
    this.classList.add('pop-effect');
});

$('.img-overlay').on('mouseout', function(){
    this.classList.remove('pop-effect');
});

//FOOTER: (BORROWED, BUT TINKERED WITH!)
//STARTING POINT: https://j.eremy.net/set-element-height-to-viewport/

$(document).ready(function() {
    function setFoot() {
        windowHeight = $(window).innerHeight();
        headHeight = $('header').innerHeight();
        mainHeight = $('main').innerHeight();
        totalHeight = headHeight+mainHeight;
        if(totalHeight > windowHeight) {
            $('.foot').addClass('margin-top');
        } else {
            $('.foot').css('position', 'absolute');
            $('.foot').css('top', windowHeight);
        }
    };
    setFoot();
    
    $(window).resize(function() {
      setFoot();
    });
  });
