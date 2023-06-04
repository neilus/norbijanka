// Function to set the cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to check if the cookie is set
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to hide the cookie banner
function hideBanner() {
    document.getElementById("cookie-banner").style.display = "none";
}

// Check if the cookie is set
var cookieAccepted = getCookie("cookieAccepted");
if (cookieAccepted) {
    hideBanner();
}

// Add event listener to the "Accept" button
document.getElementById("cookie-accept").addEventListener("click", function () {
    setCookie("cookieAccepted", true, 365);
    hideBanner();
});
