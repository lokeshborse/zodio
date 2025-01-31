/*--------------------------- Page Loader --------------------------------*/
$(function () {
    setTimeout(() => {
        $('.page-loader').fadeOut('slow');
    }, 800);
});
/*---------------------------- Onboarding Screen ----------------------------*/
$(".skip_btn_1").click(function () {

    $("#first").removeClass("active");
    $(".first_slide").removeClass("active");

    $("#second").addClass("active");
    $(".second_slide").addClass("active");

});

$(".skip_btn_2").click(function () {
    $("#second").removeClass("active");
    $(".second_slide").removeClass("active");

    $("#third").addClass("active");
    $(".third_slide").addClass("active");
});

/*------------------------- New Password hide show button --------------------------*/
$(".eye-off").click(function () {
    const input = $(this).siblings("input"); // Select the sibling input field

    if (input.attr("type") === "password") {
        input.attr("type", "text"); // Change input type to text
        $(this).attr("src", "assets/images/svg/eye.svg"); // Change the image to eye.svg
    } else {
        input.attr("type", "password"); // Change input type back to password
        $(this).attr("src", "assets/images/svg/eye-off.svg"); // Change the image back to eye-off.svg
    }
});

/*------------------------------ Sticky Header -----------------------------*/
$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 20) {
        $('#top-header, #top-navbar').addClass('fixed');
        $('.Amigo_img_main').css('padding-top', '70px');
    } else {
        $('#top-header, #top-navbar').removeClass('fixed');
        $('.Amigo_img_main').css('padding-top', '0');
    }
});

/*---------------------------- Confirm OTP Input filed  ------------------------------*/
function validateInput(input) {
    // Ensure only numbers are allowed
    input.value = input.value.replace(/\D/g, '');

    // Limit the input to a single character
    if (input.value.length > 1) {
        input.value = input.value[0];
    }

    // Add or remove the 'filled' class based on the input value
    if (input.value) {
        input.classList.add('filled'); // Add 'filled' when input has a value

        // Move to the next input if available
        const nextInput = input.nextElementSibling;
        if (nextInput && nextInput.tagName === 'INPUT') {
            nextInput.focus();
        }
    } else {
        input.classList.remove('filled'); // Remove 'filled' when input is empty
    }
}

/*-----------------------------  Personal Info Photo Upload -------------------------*/
$(document).ready(function () {
    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file-upload").on('change', function () {
        readURL(this);
    });
    $(".upload-button").on('click', function () {
        $(".file-upload").click();
    });
});

/*------------------------  Personal Info Tab Buttons --------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn-per-info");
    const sections = document.querySelectorAll("section");
    const arrowButtons = document.querySelectorAll(".per-arrow-btn");

    function toggleSection(targetSection) {
        buttons.forEach((btn) => btn.classList.remove("active"));
        sections.forEach((section) => section.classList.remove("active"));

        document.querySelector(`.${targetSection}`).classList.add("active");
        document.querySelector(`.toggle-btn-per-info[data-section="${targetSection}"]`).classList.add("active");
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetSection = button.dataset.section;
            toggleSection(targetSection);
        });
    });

    arrowButtons.forEach((arrow) => {
        arrow.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = arrow.dataset.section;
            toggleSection(targetSection);
        });
    });
});

/*------------- Personal info open Pop-Up page redirect ---------------------*/
$(".print-continue-btn").on("click", function () {
    $('.loader2').fadeIn();
    $('.loader2').fadeOut(3000);
    setTimeout(function () {
        window.location = "create-new-password.html";
    }, 2000);
});



// Slider 

/*------------- Shop Slider Home Screen ---------------------*/
$(document).ready(function () {
    $('.shop-card').slick({
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 1000,
    });
});
/*------------- Categories Slider Home Screen ---------------------*/
$('.categories-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,
    dots: false,
    speed: 1000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: false,
                arrows: false,
                variableWidth: true,
            }
        }
    ]
});
/*------------- Featured Slider Home Screen ---------------------*/
$('.featured-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,
    dots: false,
    speed: 1000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
})

/*------------- Brand logo Slider Home Screen ---------------------*/
$('.brand-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,
    dots: false,
    speed: 1000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: false,
                arrows: false,
                variableWidth: true,
            }
        }
    ]
})

/*------------- Best Sellers Home Screen ---------------------*/
$('.best-sellers-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,
    dots: false,
    speed: 1000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: false,
                arrows: false,
                variableWidth: true,
            }
        }
    ]
})
/*------------- Like Heart ---------------------*/
const heartIcons = document.querySelectorAll('.heart-icon');

heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('filled');
    });
});

/*------------------------------------- Tabs -------------------------------------*/
$(function () {
    $(document).on('click', '.tab-btn-main a', function (e) {
        e.preventDefault();
        const tabId = $(this).data('tab');
        $('.tab-btn-main a, .Tabcondent').removeClass('tab-active');
        $(this).addClass('tab-active');
        $('#' + tabId).addClass('tab-active');
    });
});


/*---------------------------------Click On Search PAge Redirct -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('click', function () {
            window.location.href = 'search.html';
        });
    }
});