﻿var big_image, navbar_initialized, nowuiKit, $navbar, scroll_distance, oVal, transparent = !0,
    transparentDemo = !0,
    fixedTop = !1,
    backgroundOrange = !1,
    toggle_initialized = !1;

function debounce(n, e, t) {
    var r;
    return function () {
        var a = this,
            o = arguments;
        clearTimeout(r), r = setTimeout(function () {
            r = null, t || n.apply(a, o)
        }, e), t && !r && n.apply(a, o)
    }
}

function debounce(n, e, t) {
    var r;
    return function () {
        var a = this,
            o = arguments;
        clearTimeout(r), r = setTimeout(function () {
            r = null, t || n.apply(a, o)
        }, e), t && !r && n.apply(a, o)
    }
}
$(document).ready(function () {
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(), $('[data-toggle="popover"]').each(function () {
        color_class = $(this).data("color"), $(this).popover({
            template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    }), nowuiKit.initNavbarImage(), $navbar = $(".navbar[color-on-scroll]"), scroll_distance = $navbar.attr("color-on-scroll") || 500, 0 != $(".navbar[color-on-scroll]").length && (nowuiKit.checkScrollForTransparentNavbar(), $(window).on("scroll", nowuiKit.checkScrollForTransparentNavbar)), $(".form-control").on("focus", function () {
        $(this).parent(".input-group").addClass("input-group-focus")
    }).on("blur", function () {
        $(this).parent(".input-group").removeClass("input-group-focus")
    }), $(".bootstrap-switch").each(function () {
        $this = $(this), data_on_label = $this.data("on-label") || "", data_off_label = $this.data("off-label") || "", $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
        })
    }), 992 <= $(window).width() && (big_image = $('.page-header-image[data-parallax="true"]'), $(window).on("scroll", nowuiKitDemo.checkScrollForParallax)), $(".carousel").carousel({
        interval: 4e3
    }), $(".date-picker").each(function () {
        $(this).datepicker({
            templates: {
                leftArrow: '<i class="now-ui-icons arrows-1_minimal-left"></i>',
                rightArrow: '<i class="now-ui-icons arrows-1_minimal-right"></i>'
            }
        }).on("show", function () {
            $(".datepicker").addClass("open"), datepicker_color = $(this).data("datepicker-color"), 0 != datepicker_color.length && $(".datepicker").addClass("datepicker-" + datepicker_color)
        }).on("hide", function () {
            $(".datepicker").removeClass("open")
        })
    })
}), nowuiKitDemo = {
    checkScrollForParallax: debounce(function () {
        $(this).scrollTop();
        oVal = $(window).scrollTop() / 3, big_image.css({
            transform: "translate3d(0," + oVal + "px,0)",
            "-webkit-transform": "translate3d(0," + oVal + "px,0)",
            "-ms-transform": "translate3d(0," + oVal + "px,0)",
            "-o-transform": "translate3d(0," + oVal + "px,0)"
        })
    }, 6)
}, $(window).on("resize", function () {
    nowuiKit.initNavbarImage()
}), $(document).on("click", ".navbar-toggler", function () {
    $toggle = $(this), 1 == nowuiKit.misc.navbar_menu_visible ? ($("html").removeClass("nav-open"), nowuiKit.misc.navbar_menu_visible = 0, $("#bodyClick").remove(), setTimeout(function () {
        $toggle.removeClass("toggled")
    }, 550)) : (setTimeout(function () {
        $toggle.addClass("toggled")
    }, 580), div = '<div id="bodyClick"></div>', $(div).appendTo("body").click(function () {
        $("html").removeClass("nav-open"), nowuiKit.misc.navbar_menu_visible = 0, setTimeout(function () {
            $toggle.removeClass("toggled"), $("#bodyClick").remove()
        }, 550)
    }), $("html").addClass("nav-open"), nowuiKit.misc.navbar_menu_visible = 1)
}), nowuiKit = {
    misc: {
        navbar_menu_visible: 0
    },
    checkScrollForTransparentNavbar: debounce(function () {
        $(document).scrollTop() > scroll_distance ? transparent && (transparent = !1, $(".navbar[color-on-scroll]").removeClass("navbar-transparent")) : transparent || (transparent = !0, $(".navbar[color-on-scroll]").addClass("navbar-transparent"))
    }, 17),
    initNavbarImage: function () {
        var a = $(".navbar").find(".navbar-translate").siblings(".navbar-collapse"),
            o = a.data("nav-image");
        null != o && ($(window).width() < 991 || $("body").hasClass("burger-menu") ? a.css("background", "url('" + o + "')").removeAttr("data-nav-image").css("background-size", "cover").addClass("has-image") : a.css("background", "").attr("data-nav-image", "" + o).css("background-size", "").removeClass("has-image"))
    },
    initSliders: function () {
        var a = document.getElementById("sliderRegular");
        noUiSlider.create(a, {
            start: 40,
            connect: [!0, !1],
            range: {
                min: 0,
                max: 100
            }
        });
        var o = document.getElementById("sliderDouble");
        noUiSlider.create(o, {
            start: [20, 60],
            connect: !0,
            range: {
                min: 0,
                max: 100
            }
        })
    }
}, nowuiKitDemo = {
    checkScrollForParallax: debounce(function () {
        $(this).scrollTop();
        oVal = $(window).scrollTop() / 3, big_image.css({
            transform: "translate3d(0," + oVal + "px,0)",
            "-webkit-transform": "translate3d(0," + oVal + "px,0)",
            "-ms-transform": "translate3d(0," + oVal + "px,0)",
            "-o-transform": "translate3d(0," + oVal + "px,0)"
        })
    }, 6)
};
//# sourceMappingURL=_site_kit_free/assets/js/kit-free.js.map