function show(page) {
    $("[id^=bar-]").removeClass("active");
    $("[id^=page]").hide();
    $("#bar-" + page).addClass("active");
    $("[id$=" + page + "]").show();
}

function getv(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

$(function() {
    var data = getv('p');
    if (data === null) {
        show("home");
    }
    else {
        show(data);
    }
});
