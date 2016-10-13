/* 
 * Created on: 13.10.2016
 * Creator: Naieem Mahmud Supto
 * Contact: supto92(skype)
 * Description: Main custom script file for portfolio page
 */
(function () {
    var items = {
        webdesign: [
            {index: '0', image: 'p_image.png'},
            {index: '1', image: 'p_image.png'},
            {index: '2', image: 'p_image.png'},
            {index: '3', image: 'p_image.png'},
            {index: '4', image: 'p_image.png'},
            {index: '5', image: 'p_image.png'},
            {index: '6', image: 'p_image.png'},
            {index: '7', image: 'p_image.png'}
        ],
        webui: [
            {index: '0', image: 'p_image.png'},
            {index: '1', image: 'p_image.png'},
            {index: '2', image: 'p_image.png'},
            {index: '3', image: 'p_image.png'},
            {index: '4', image: 'p_image.png'},
            {index: '5', image: 'p_image.png'},
            {index: '6', image: 'p_image.png'},
            {index: '7', image: 'p_image.png'}
        ],
        mobile: [
            {index: '0', image: 'p_image.png'},
            {index: '1', image: 'p_image.png'},
            {index: '2', image: 'p_image.png'},
            {index: '3', image: 'p_image.png'},
            {index: '4', image: 'p_image.png'},
            {index: '5', image: 'p_image.png'},
            {index: '6', image: 'p_image.png'},
            {index: '7', image: 'p_image.png'}
        ],
        theme: [
            {index: '0', image: 'p_image.png'},
            {index: '1', image: 'p_image.png'},
            {index: '2', image: 'p_image.png'},
            {index: '3', image: 'p_image.png'},
            {index: '4', image: 'p_image.png'},
            {index: '5', image: 'p_image.png'},
            {index: '6', image: 'p_image.png'},
            {index: '7', image: 'p_image.png'}
        ],
    };

    var info = [
        {'name': 'webdesign',
            'item': [
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_bi.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
            ]
        },
        {'name': 'webui',
            'item': [
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']}
            ]
        },
        {'name': 'mobile',
            'item': [
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']}
            ]
        },
        {'name': 'theme',
            'item': [
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial', 'contact'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']},
                {'menu': ['Home', 'About Us', 'Testimonial'], 'image': ['p_image_big1.png'], 'images': ['p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png', 'p_image_big1.png']}
            ]
        }
    ];

    var theTemplateScript = $("#expressions-template").html();
    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);
    var theCompiledHtml = theTemplate(items);
    $('.slider-container').html(theCompiledHtml);

    $(".carousel-bg").hide("fast");
    $(".open").show("fast");
    $(".navbar-nav a").click(function (e) {
        e.preventDefault();
        $(".nav-active").removeClass("nav-active");
        $(this).parent("li").addClass("nav-active");
        var link = $(this).attr("href");
        $(".open").removeClass('open').slideUp("fast");
        $(link).addClass("open").slideDown("fast");
        $(".image-cont").html("");
    });
    $('.owl-carousel2').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        },
        navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
        ]
    });
    $(".item").click(function () {
        //alert(info[0]['item'][0]['menu']);
        var directory = $(this).data("menu");
        //alert(directory);
        var text = '';
        var index = $(this).data('index')
        //alert(index);
        var menu = "<div class='port-container text-center'><ul>";
        for (var i = 0; i < info.length; i++) {
            if (info[i]['name'] == directory) {
                //console.log(info[i]['name']);
                var menu_list = info[i]['item'][index]['menu'];
                var image = info[i]['item'][index]['image'];
                for (var m = 0; m < menu_list.length; m++) {
                    //console.log(menu_list[m]);
                    menu += "<li data-info='" + i + "' data-item='" + index + "'><a href='#'>" + menu_list[m] + "</a></li>";
                }
                menu += "</ul></div><div class='big-image'><img src='images/" + image + "' class='img-responsive'></div>";
                $(".image-container").html(menu);
                break;
            }
        }
        //$(".port-container").append(text);
        //var menu = $(this).data('menu').split(',');
//                    $.each(menu, function (i, l) {
//                        alert("Index #" + i + ": " + l);
//                    });
        //alert(menu[0]);
//                    $(".current").removeClass("current");
//                    $big_image=$(this).attr("data-image");
//                    $(".image-cont").html("<img src='"+$big_image+"' class='image-responsive'>");
//                    $(this).addClass("current");
    });

    $(document).on("click", ".port-container ul li", function (e) {
        e.preventDefault();
        var index = $(this).index();
        var inf = $(this).data("info");
        var item = $(this).data("item");
        //alert(inf);
        var image = "<img src='images/" + info[inf]['item'][item]['images'][index] + "' class='img-responsive'>";
        $(".big-image").html(image);
    });
})();
