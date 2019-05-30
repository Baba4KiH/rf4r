function slowScroll(id) {
    var offset = -1;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1100);
}

