function sendMail() {
    var link = "mailto:mchawdhury5360@clintonhs.net"
             + "?cc=mchawdhury5360@clintonhs.net"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('message').value)
    ;
    
    window.location.href = link;
}