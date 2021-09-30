$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#btn-login").click(function () {
        $("#loginModal").modal('show');
    });

    $("#btn-reserve").click(function () {
        $("#reserveModel").modal('show');
    });
    $("#btn-dismiss-login").click(function () {
        $("#loginModal").modal('hide');
    });
    $("#btn-dismiss-login2").click(function () {
        $("#loginModal").modal('hide');
    });
    $("#btn-dismiss-reserve").click(function () {
        $("#reserveModel").modal('hide');
    });
    $("#btn-dismiss-reserve2").click(function () {
        $("#reserveModel").modal('hide');
    });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});