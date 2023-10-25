function toggleDark() {
    $("p[class!='dm-toggle-text'], h1, h2, h3, h4, h5, h6").toggleClass("dm");
    $("body").toggleClass("dm");
    if ($(".topnav .darkmode .dm-toggle-text, .topnav.responsive .darkmode .dm-toggle-text").text() === "Toggle dark mode") {
        $(".topnav .darkmode .dm-toggle-text, .topnav.responsive .darkmode .dm-toggle-text").text("Toggle light mode");
        $(".dm-icon").removeClass("fa-moon");
        $(".dm-icon").addClass("fa-sun");
    } else {
        $(".topnav .darkmode .dm-toggle-text, .topnav.responsive .darkmode .dm-toggle-text").text("Toggle dark mode");
        $(".dm-icon").addClass("fa-moon");
        $(".dm-icon").removeClass("fa-sun");
    }
}
