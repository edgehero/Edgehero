///made by Rob Boerman Edgehero 1.0 /// Edgehero.com ///
(function (window, $) {

    var EdgeHero = function () {};
    EdgeHero.$ = $;

    EdgeHero.performHeroics = function () {

        ///////////////////////////// WRAPPER //////////////////////////////////////////

        ///////////////// Head Tag ///////////////////

        $('head').append('<link rel="stylesheet" href="edgehero/edgeherostyle.css" type="text/css" />'); // connect css file
        var rotx = 0
        var roty = 0

        ////////////// GENERAL ///////////////


        $("[class^='link_'],[class*=' link_']").each(function () {
            var a = $(this).attr("class");
            var b = 'link_' + a.split("link_")[1].split(" ")[0]
            var c = b
            $(this).attr("href", window[c]);
            $(this).replaceWith('<a id="' + $(this).attr('id') + '"  href="' + $(this).attr('href') + '" class="' + $(this).attr("class") + '" style="' + $(this).attr('style') + '">' + $(this).html() + '</a>')
        }); // link unlimited 



        $(".fullpage").each(function () {
            var a = $(this);
            a.css({
                "min-height": "100%",
                "width": "100%",
                "position": "relative",
                "top": "0px"
            })
        }); /// 


        $("[class^='scroll_'],[class*=' scroll_']").each(function () {
            var a = $(this).attr("class");
            var b = '#Stage_' + a.split("scroll_")[1].split(" ")[0]
            var c = b
            var mystage = $(this).attr('style') + 'display:block;'
            $(this).attr("href", c);
            $(this).replaceWith('<a id="' + $(this).attr('id') + '"  href="' + $(this).attr('href') + '" class="' + $(this).attr("class") + '" style="' + mystage + '">' + $(this).html() + '</a>')

            $('a[href^="#"]').click(function (event) {
                var id = $(this).attr("href");
                var offset = 10;
                var target = $(id).offset().top - offset;
                $('html, body').animate({
                    scrollTop: target
                }, 500);
                event.preventDefault();
            });


            $(function () {
                var pull = $('#pull');
                $(pull).on('click', function (e) {
                    e.preventDefault();

                });
            });
        }); // scroll unlimited 

        $(".newwindow").each(function () {
            $(".newwindow").attr("target", "_blank")
        }); // open new tab when link is clicked

        ///////////// Forms ////////////////

        $("[class^='action_'],[class*=' action_']").each(function () {
            var a = $(this).attr("class");
            var b = 'action_' + a.split("action_")[1].split(" ")[0]
            var c = b
            $(this).attr("method", "post");
            $(this).attr("action", window[c]);
        }); // create from the class that starts with action_, collect the whole class and make it into an variable.


        $(".form").each(function () {
            var thisformstyle = $(this).attr('style');
            $(this).replaceWith('<form id="' + $(this).attr('id') + '"method="' + $(this).attr('method') + '" action="' + $(this).attr('action') + '" class="' + $(this).attr('class') + '" style="' + thisformstyle + '">' + $(this).html() + '</form>')
        }); /// Form class, replaces div with form tag

        $(".input").each(function () {
            var thisinputstyle = $(this).attr('style');
            $(this).replaceWith('<input id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisinputstyle + '">' + $(this).html() + '</input>')
        });
        $(".input-checkbox").each(function () {
            var thisinputcheckstyle = $(this).attr('style');
            $(this).replaceWith('<input type="checkbox" id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisinputcheckstyle + '">' + $(this).html() + '</input>')
        });
        $(".input-email").each(function () {
            var thisinputstyle = $(this).attr('style');
            $(this).replaceWith('<input type="email" id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisinputstyle + '">' + $(this).html() + '</input>')
        });
        $(".input-file").each(function () {
            var thisinputstyle = $(this).attr('style');
            $(this).replaceWith('<input type="file" id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisinputstyle + '">' + $(this).html() + '</input>')
        });
        $(".input-password").each(function () {
            var thisinputstyle = $(this).attr('style');
            $(this).replaceWith('<input type="password" id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisinputstyle + '">' + $(this).html() + '</input>')
        });
        $(".input-submit").each(function () {
            var thisinputstyle = $(this).attr('style');
            $(this).replaceWith('<input type="submit" value="Submit" id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisinputstyle + '">' + $(this).html() + '</input>')
        });
        $(".span").each(function () {
            var thisspanstyle = $(this).attr('style');
            $(this).replaceWith('<span id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisspanstyle + '">' + $(this).html() + '</span>')
        });
        $(".label").each(function () {
            var thislabelstyle = $(this).attr('style');
            $(this).replaceWith('<label id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thislabelstyle + '">' + $(this).html() + '</label>')
        });
        $(".canvas").each(function () {
            var thiscanvasstyle = $(this).attr('style');
            $(this).replaceWith('<canvas id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thiscanvasstyle + '">' + $(this).html() + '</canvas>')
        });
        $(".textarea").each(function () {
            var thisinputstyle = $(this).attr('style');
            $(this).replaceWith('<textarea id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisinputstyle + '">' + $(this).html() + '</textarea>')
        });
        $("[class^='rows_'],[class*=' rows_']").each(function () {
            var myrows = $(this).attr("class");
            var myrowsgoal = myrows.split("rows_")[1].split(" ")[0]
            $(this).attr("rows", myrowsgoal);
        });
        $("[class^='cols_'],[class*=' cols_']").each(function () {
            var mycols = $(this).attr("class");
            var mycolsgoal = mycols.split("cols_")[1].split(" ")[0]
            $(this).attr("cols", mycolsgoal);
        });
        $("[class^='name_'],[class*=' name_']").each(function () {
            var myname = $(this).attr("class");
            var mynamegoal = myname.split("name_")[1].split(" ")[0]
            $(this).attr("name", mynamegoal);
        });

        ///////////// Menus /////////////// 

        $(".ul").each(function () {
            var thisulstyle = $(this).attr('style');
            $(this).replaceWith('<ul id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="' + thisulstyle + '">' + $(this).html() + '</ul>')

        });

        $(".li").each(function () {
            var thisstyle = $(this).attr('style');
            $(this).replaceWith('<li id="' + $(this).attr('id') + '" class="' + $(this).attr('class') + '" style="list-style-type:none;' + thisstyle + '">' + $(this).html() + '</li>')
        });

        //////////// Video ////////////////

        $("[class^='videolink'],[class*=' videolink']").each(function () {

            var a = $(this).attr("class");
            var b = 'videolink_' + a.split("videolink_")[1].split(" ")[0]
            var c = b
            var myd = '.' + c
            var mystyle = $(this).attr('style') + 'display:block;'

            $(this).replaceWith('<video height="auto" id="' + $(this).attr('id') + '" class="' + a + '" style="' + mystyle + '" webkit-playsinline>' + $(this).html() + '</video>')

            var mp4 = '.mp4';
            var ogg = '.ogg';
            var webm = '.webm';

            var video2 = " " + window[c].replace(mp4, ".mp4 ").replace(ogg, ".ogg ").replace(webm, ".webm ");

            var myvideo = video2.split(" ");

            if (typeof myvideo[1] === 'undefined') {
                ////
            } else {
                if (myvideo[1].indexOf(".mp4") >= 1) {
                    $(myd).append('<source src="' + myvideo[1] + '" type="video/mp4">');
                }
                if (myvideo[1].indexOf(".webm") >= 1) {
                    $(myd).append('<source src="' + myvideo[1] + '" type="video/webm">');
                }
                if (myvideo[1].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myvideo[1] + '" type="video/ogg">');
                }
            } ////
            if (typeof myvideo[2] === 'undefined') {
                ////
            } else {
                if (myvideo[2].indexOf(".mp4") >= 1) {
                    $(myd).append('<source src="' + myvideo[2] + '" type="video/mp4">');
                }
                if (myvideo[2].indexOf(".webm") >= 1) {
                    $(myd).append('<source src="' + myvideo[2] + '" type="video/webm">');
                }
                if (myvideo[2].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myvideo[2] + '" type="video/ogg">');
                }
            }
            if (typeof myvideo[3] === 'undefined') {
                ////
            } else {
                if (myvideo[3].indexOf(".mp4") >= 1) {
                    $(myd).append('<source src="' + myvideo[3] + '" type="video/mp4">');
                }
                if (myvideo[3].indexOf(".webm") >= 1) {
                    $(myd).append('<source src="' + myvideo[3] + '" type="video/webm">');
                }
                if (myvideo[3].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myvideo[3] + '" type="video/ogg">');
                }
            }
        }); //// videolink unlimited, works like audiolink


        $("[class^='youtubelink_'],[class*=' youtubelink_']").each(function () {
            var a = $(this).attr("class");
            var b = 'youtubelink_' + a.split("youtubelink_")[1].split(" ")[0]
            var c = b
            var youtubelinking = '//www.youtube.com/embed/' + window[c].split("watch?v=")[1].split(" ")[0] + ''
            $(this).attr("src", youtubelinking);
            $(this).replaceWith('<iframe height="auto" allowfullscreen frameborder="0" id="' + $(this).attr('id') + '"  src="' + $(this).attr('src') + '" class="' + $(this).attr("class") + '" style="' + $(this).attr('style') + '">' + $(this).html() + '</iframe>')
        });
        // youtubelink_ unlimited

        $("[class^='vimeolink_'],[class*=' vimeolink_']").each(function () {
            var a = $(this).attr("class");
            var b = 'vimeolink_' + a.split("vimeolink_")[1].split(" ")[0]
            var c = b
            var vimeolinking = 'http://player.vimeo.com/video/' + window[c].split("vimeo.com/")[1].split(" ")[0] + ''
            $(this).attr("src", vimeolinking);
            $(this).replaceWith('<iframe height="auto" webkitAllowFullScreen mozallowfullscreen allowfullscreen frameborder="0" id="' + $(this).attr('id') + '"  src="' + $(this).attr('src') + '" class="' + $(this).attr("class") + '" style="' + $(this).attr('style') + '">' + $(this).html() + '</iframe>')
        });

        // vimeolink_ unlimited

        $("[class^='backgroundvideo'],[class*=' backgroundvideo']").each(function () {

            var a = $(this).attr("class");
            var b = 'backgroundvideo_' + a.split("backgroundvideo_")[1].split(" ")[0]
            var c = b
            var myd = '.' + c

            $(this).replaceWith('<video height="auto" id="' + $(this).attr('id') + '" class="' + a + '" style="display:block;position: absolute;bottom: 0px; right: 0px; min-width: 100%; min-height: 100%; width: auto; height: auto; overflow: hidden;z-index:-100;" webkit-playsinline>' + $(this).html() + '</video>')

            var mp4 = '.mp4';
            var ogg = '.ogg';
            var webm = '.webm';

            var video2 = " " + window[c].replace(mp4, ".mp4 ").replace(ogg, ".ogg ").replace(webm, ".webm ");

            var myvideo = video2.split(" ");

            if (typeof myvideo[1] === 'undefined') {
                ////
            } else {
                if (myvideo[1].indexOf(".mp4") >= 1) {
                    $(myd).append('<source src="' + myvideo[1] + '" type="video/mp4">');
                }
                if (myvideo[1].indexOf(".webm") >= 1) {
                    $(myd).append('<source src="' + myvideo[1] + '" type="video/webm">');
                }
                if (myvideo[1].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myvideo[1] + '" type="video/ogg">');
                }
            } ///
            if (typeof myvideo[2] === 'undefined') {
                ////
            } else {
                if (myvideo[2].indexOf(".mp4") >= 1) {
                    $(myd).append('<source src="' + myvideo[2] + '" type="video/mp4">');
                }
                if (myvideo[2].indexOf(".webm") >= 1) {
                    $(myd).append('<source src="' + myvideo[2] + '" type="video/webm">');
                }
                if (myvideo[2].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myvideo[2] + '" type="video/ogg">');
                }
            }
            if (typeof myvideo[3] === 'undefined') {
                ////
            } else {
                if (myvideo[3].indexOf(".mp4") >= 1) {
                    $(myd).append('<source src="' + myvideo[3] + '" type="video/mp4">');
                }
                if (myvideo[3].indexOf(".webm") >= 1) {
                    $(myd).append('<source src="' + myvideo[3] + '" type="video/webm">');
                }
                if (myvideo[3].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myvideo[3] + '" type="video/ogg">');
                }
            }
        }); //// backgroundvideo_ unlimited, works like audiolink

        $("[class^='poster_'],[class*=' poster_']").each(function () {
            var a = $(this).attr("class");
            var b = 'poster_' + a.split("poster_")[1].split(" ")[0]
            var c = b
            $(this).attr("poster", window[c]);
        }); // poster unlimited 
        $(".controls").each(function () {
            $(".controls").attr("controls", true);
        });
        $(".autoplay").each(function () {
            $(".autoplay").attr("autoplay", true);
        });
        $(".loop").each(function () {
            $(".loop").attr("loop", true);
        });
        $(".muted").each(function () {
            $(".muted").prop("muted", true);
        });

        //////////// Audio ////////////////

        $("[class^='audiolink'],[class*=' audiolink']").each(function () {

            var a = $(this).attr("class");
            var b = 'audiolink_' + a.split("audiolink_")[1].split(" ")[0]
            var c = b
            var myd = '.' + c

            $(this).replaceWith('<audio height="auto" id="' + $(this).attr('id') + '" class="' + a + '" style="' + $(this).attr('style') + '">' + $(this).html() + '</audio>')

            var mp3 = '.mp3';
            var ogg = '.ogg';
            var wav = '.wav';

            var music2 = " " + window[c].replace(mp3, ".mp3 ").replace(ogg, ".ogg ").replace(wav, ".wav ");

            var myaudio = music2.split(" ");
            if (typeof myaudio[1] === 'undefined') {
                ////
            } else {

                if (myaudio[1].indexOf(".wav") >= 1) {
                    $(myd).append('<source src="' + myaudio[1] + '" type="audio/wav">');
                }
                if (myaudio[1].indexOf(".mp3") >= 1) {
                    $(myd).append('<source src="' + myaudio[1] + '" type="audio/mpeg">');
                }
                if (myaudio[1].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myaudio[1] + '" type="audio/ogg">');
                }
            } ////
            if (typeof myaudio[2] === 'undefined') {
                /////
            } else {
                if (myaudio[2].indexOf(".wav") >= 1) {
                    $(myd).append('<source src="' + myaudio[2] + '" type="audio/wav">');
                }
                if (myaudio[2].indexOf(".mp3") >= 1) {
                    $(myd).append('<source src="' + myaudio[2] + '" type="audio/mpeg">');
                }
                if (myaudio[2].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myaudio[2] + '" type="audio/ogg">');
                }
            } ///

            if (typeof myaudio[3] === 'undefined') {
                ////
            } else {
                if (myaudio[3].indexOf(".wav") >= 1) {
                    $(myd).append('<source src="' + myaudio[3] + '" type="audio/wav">');
                }
                if (myaudio[3].indexOf(".mp3") >= 1) {
                    $(myd).append('<source src="' + myaudio[3] + '" type="audio/mpeg">');
                }
                if (myaudio[3].indexOf(".ogg") >= 1) {
                    $(myd).append('<source src="' + myaudio[3] + '" type="audio/ogg">');
                }
            }
        }); //// audiolink_ it splits the files up in variables and than places it as string 



        //////////// 3D //////////////////
        $("[class^='perspective_'],[class*=' perspective_']").each(function () {
            var perspective3d = $(this).attr("class");
            var perspectivegoal = perspective3d.split("perspective_")[1].split(" ")[0]
            $(this).css({
                "perspective": perspectivegoal,
                "-webkit-perspective": perspectivegoal
            });
        });

        $("[class^='rotate'],[class*=' rotate']").each(function () {
            var a = $(this)
            var rotatex = $(this).attr("class");
            if (!$(this).is('[class*="rotatex_"]')) {
                var rotx = 0
            } else {
                var rotx = rotatex.split("rotatex_")[1].split(" ")[0]
            }
            if (!$(this).is('[class*="rotatey_"]')) {
                var roty = 0
            } else {
                var roty = rotatex.split("rotatey_")[1].split(" ")[0]
            }
            if (!$(this).is('[class*="rotatez_"]')) {
                var rotz = 0
            } else {
                var rotz = rotatex.split("rotatez_")[1].split(" ")[0]
            }
            var rotategoal = 'rotateX(' + rotx + 'deg) ' + 'rotateY(' + roty + 'deg) ' + 'rotateZ(' + rotz + 'deg)'
            a.css({
                "-webkit-transform": rotategoal,
                "-moz-transform": rotategoal,
                "-o-transform": rotategoal,
                "-ms-transform": rotategoal,
                "transform": rotategoal
            });
        });

        // rotatey_ rotatez_ rotatex_

        $(".cube3d").each(function () {
            var firstchild = $(this).find(">:first-child")
            var secondchild = $(this).find("div").eq(1)
            var thirdchild = $(this).find("div").eq(2)
            var fourthchild = $(this).find("div").eq(3)
            var fivechild = $(this).find("div").eq(4)
            var sixthchild = $(this).find("div").eq(5)
            var topwidth = firstchild.height()
            var topheight = firstchild.width()
            var childwidth = firstchild.width() / 2
            var childheight = firstchild.height() / 2
            var childfiveheight = sixthchild.width()
            var childsixthheight = sixthchild.height()
            var hortranslatez = 'translateZ(' + childwidth + 'px)'
            var vertranslatez = 'translateZ(' + childheight + 'px)'
            var special = childwidth - topwidth


            var special2 = Math.abs(special);

            if (childfiveheight == topwidth) {
                var mycubebottom = 'translateZ(' + childheight + 'px)'
            }
            if (childfiveheight > topwidth) {
                var mycubebottom = 'translateZ(-' + special2 + 'px)'

                if (childwidth < topwidth) {
                    var mycubebottom = 'translateZ(' + special2 + 'px)'
                }
            }
            if (childfiveheight < topwidth) {
                var mycubebottom = 'translateZ(' + special2 + 'px)'
            }

            $(this).css({
                "-webkit-transform-style": "preserve-3d",
                "-moz-transform-style": "preserve-3d",
                "-o-transform-style": "preserve-3d",
                "-ms-transform-style": "preserve-3d",
                "transform-style": "preserve-3d"
            });
            sixthchild.addClass("sixth").css({
                "height": topheight,
                "-webkit-transform": "rotateX(90deg)" + hortranslatez,
                "-moz-transform": "rotateX(90deg)" + hortranslatez,
                "-o-transform": "rotateX(90deg)" + hortranslatez,
                "-ms-transform": "rotateX(90deg)" + hortranslatez,
                "transform": "rotateX(90deg)" + hortranslatez,

            });
            fivechild.addClass("five").css({
                "height": topheight,
                "-webkit-transform": "rotateX(-90deg)" + mycubebottom + "rotate(180deg)",
                "-moz-transform": "rotateX(-90deg)" + mycubebottom + "rotate(180deg)",
                "-o-transform": "rotateX(-90deg)" + mycubebottom + "rotate(180deg)",
                "-ms-transform": "rotateX(-90deg)" + mycubebottom + "rotate(180deg)",
                "transform": "rotateX(-90deg)" + mycubebottom + "rotate(180deg)",

            });
            fourthchild.addClass("fourth").css({
                "-webkit-transform": "rotateY(-90deg)" + hortranslatez,
                "-moz-transform": "rotateY(-90deg)" + hortranslatez,
                "-o-transform": "rotateY(-90deg)" + hortranslatez,
                "-ms-transform": "rotateY(-90deg)" + hortranslatez,
                "transform": "rotateY(-90deg)" + hortranslatez
            });
            thirdchild.addClass("third").css({
                "-webkit-transform": "rotateY(180deg)" + hortranslatez,
                "-moz-transform": "rotateY(180deg)" + hortranslatez,
                "-o-transform": "rotateY(180deg)" + hortranslatez,
                "-ms-transform": "rotateY(180deg)" + hortranslatez,
                "transform": "rotateY(180deg)" + hortranslatez
            });
            secondchild.addClass("second").css({
                "-webkit-transform": "rotateY(90deg)" + hortranslatez,
                "-moz-transform": "rotateY(90deg)" + hortranslatez,
                "-o-transform": "rotateY(90deg)" + hortranslatez,
                "-ms-transform": "rotateY(90deg)" + hortranslatez,
                "transform": "rotateY(90deg)" + hortranslatez
            });
            firstchild.addClass("first").css({
                "-webkit-transform": hortranslatez,
                "-moz-transform": hortranslatez,
                "-o-transform": hortranslatez,
                "-ms-transform": hortranslatez,
                "transform": hortranslatez
            });
        });

        // triangle
        $(".triangle").each(function () {
            var firstchild = $(this).find(">:first-child")
            var secondchild = $(this).find("div").eq(1)
            var thirdchild = $(this).find("div").eq(2)

            $(this).css({
                "-webkit-transform-style": "preserve-3d",
                "-moz-transform-style": "preserve-3d",
                "-o-transform-style": "preserve-3d",
                "-ms-transform-style": "preserve-3d",
                "transform-style": "preserve-3d"
            });
            thirdchild.addClass("third").css({
                "-webkit-transform": "rotateY(180deg)",
                "-moz-transform": "rotateY(180deg)",
                "-o-transform": "rotateY(180deg)",
                "-ms-transform": "rotateY(180deg)",
                "transform": "rotateY(180deg)",
                "-webkit-transform-origin": "50% 0%"
            });
            secondchild.addClass("second").css({
                "-webkit-transform": "rotateY(-60deg)",
                "-moz-transform": "rotateY(-60deg)",
                "-o-transform": "rotateY(-60deg)",
                "-ms-transform": "rotateY(-60deg)",
                "transform": "rotateY(-60deg)",
                "-webkit-transform-origin": "0% 50%"
            });
            firstchild.addClass("first").css({
                "-webkit-transform": "rotateY(60deg)",
                "-moz-transform": "rotateY(60deg)",
                "-o-transform": "rotateY(60deg)",
                "-ms-transform": "rotateY(60deg)",
                "transform": "rotateY(60deg)",
                "-webkit-transform-origin": "100% 50%"
            });
        });
        // tragle
        /////////// Other ////////////////

        $("[class^='stop_'],[class*=' stop_']").click(function () {
            var myclass4 = $(this).attr("class");
            var myid3 = '.' + myclass4.split("stop_")[1].split(" ")[0]
            var videoclassid3 = $(myid3).attr('id');
            var myvideo1 = document.getElementById(videoclassid3);
            setTimeout(function () {
                myvideo1.pause();
                myvideo1.currentTime = 0;
            }, 100);


        }); /// stop



        $("[class^='play_'],[class*=' play_']").click(function () {
            var myclass = $(this).attr("class");
            var myid = '.' + myclass.split("play_")[1].split(" ")[0]
            var videoclassid = $(myid).attr('id');
            var myvideo = document.getElementById(videoclassid);
            if (myvideo.paused) {
                myvideo.play();
            } else {
                myvideo.pause();
            }
        }); /// play



        $("[class^='mute_'],[class*=' mute_']").click(function () {
            var myclass = $(this).attr("class");
            var myid = '.' + myclass.split("mute_")[1].split(" ")[0]
            var videoclassid = $(myid).attr('id');
            var myVideo = document.getElementById(videoclassid);
            if (myVideo.muted == false)
                myVideo.muted = true;
            else
                myVideo.muted = false;
        }); // mute

        $("[class^='timebar_'],[class*=' timebar_']").each(function () {
            var myclass = $(this).attr('class');
            var mySeekbar = $(this).attr('id');
            var mystyle = $(this).attr('style') + 'display:block;'
            $(this).replaceWith('<input type="range" id="' + mySeekbar + '" class="' + myclass + '" style="' + mystyle + '" value="0">')
            var myid = '.' + myclass.split("timebar_")[1].split(" ")[0]
            var videoclassid = $(myid).attr('id');
            var myvideo = document.getElementById(videoclassid);
            var seekBar = document.getElementById(mySeekbar);
            seekBar.addEventListener("change", function () {
                var time = myvideo.duration * (seekBar.value / 100);
                myvideo.currentTime = time;
            });
            myvideo.addEventListener("timeupdate", function () {
                var value = (100 / myvideo.duration) * myvideo.currentTime;
                seekBar.value = value;
            });
            seekBar.addEventListener("mousedown", function () {
                myvideo.pause();
            });
            seekBar.addEventListener("mouseup", function () {
                myvideo.play();
            });
        });

        $("[class^='volumebar_'],[class*=' volumebar_']").each(function () {
            var myclass = $(this).attr('class');
            var mySeekbar = $(this).attr('id');
            var mystyle = $(this).attr('style') + 'display:block;'

            $(this).replaceWith('<input type="range" id="' + mySeekbar + '" class="' + myclass + '" style="' + mystyle + '" min="0" max="1" step="0.1" value="1">')
            var myid = '.' + myclass.split(" volumebar_")[1].split(" ")[0]
            var videoclassid = $(myid).attr('id');
            var myvideo = document.getElementById(videoclassid);
            var volumeBar = document.getElementById(mySeekbar);
            volumeBar.addEventListener("change", function () {
                myvideo.volume = volumeBar.value;
            });
        });

        $("[class^='fullscreen_'],[class*='fullscreen_']").click(function () {
            var myclass = $(this).attr("class");
            var myid = '.' + myclass.split("fullscreen_")[1].split(" ")[0]
            var videoclassid = $(myid).attr('id');
            var myVideo = document.getElementById(videoclassid);
            if (myVideo.requestFullscreen) {
                myVideo.requestFullscreen();
            } else if (myVideo.mozRequestFullScreen) {
                myVideo.mozRequestFullScreen();
            } else if (myVideo.webkitRequestFullscreen) {
                myVideo.webkitRequestFullscreen();
            }
        }); // mute



        $("[class^='curtime_'],[class*=' curtime_']").each(function () {
            var myclass = $(this).attr('class');
            var mySeekbar = $(this).attr('id');
            var mystyle = $(this).attr('style') + 'display:block;'
            $(this).replaceWith('<span id="' + mySeekbar + '" class="' + myclass + '" style="' + mystyle + '" >00:00</span>')
            var myid = '.' + myclass.split("curtime_")[1].split(" ")[0]
            var videoclassid = $(myid).attr('id');
            var vid = document.getElementById(videoclassid);
            var curtimetext = document.getElementById(mySeekbar);
            vid.addEventListener("timeupdate", function () {
                var curmins = Math.floor(vid.currentTime / 60);
                var cursecs = Math.floor(vid.currentTime - curmins * 60);
                if (cursecs < 10) {
                    cursecs = "0" + cursecs;
                }
                if (curmins < 10) {
                    curmins = "0" + curmins;
                }
                curtimetext.innerHTML = curmins + ":" + cursecs;

            });
        });

        $("[class^='durtime_'],[class*=' durtime_']").each(function () {
            var myclass = $(this).attr('class');
            var mySeekbar = $(this).attr('id');
            var mystyle = $(this).attr('style') + 'display:block;'
            $(this).replaceWith('<span id="' + mySeekbar + '" class="' + myclass + '" style="' + mystyle + '" >00:00</span>')
            var myid = '.' + myclass.split("durtime_")[1].split(" ")[0]
            var videoclassid = $(myid).attr('id');
            var vid = document.getElementById(videoclassid);
            var durtimetext = document.getElementById(mySeekbar);
            vid.addEventListener("timeupdate", function () {
                var durmins = Math.floor(vid.duration / 60);
                var dursecs = Math.floor(vid.duration - durmins * 60);
                if (dursecs < 10) {
                    dursecs = "0" + dursecs;
                }
                if (durmins < 10) {
                    durmins = "0" + durmins;
                }
                durtimetext.innerHTML = durmins + ":" + dursecs;
            });

        });
        ////



        $(".slideshow").each(function () {
            var mychild = $(this).children();
            var myname = $(this);
            var prev_slideshow = $(".prev_slideshow");
            var next_slideshow = $(".next_slideshow");
            var toc = $(".toc");
            var slide = $(".slide");
            mychild.addClass("slide")
            $(this).find(prev_slideshow).removeClass("slide")
            $(this).find(next_slideshow).removeClass("slide")
            $(this).find(toc).removeClass("slide")

            var count = 0;
            var active; //active slide (div)
            var num; //number of slides
            var unitWidth; //tracks width
            var unitHeight; //tracks height

            var div = $(this).children('.slide');
            var seconddiv = $(this).parent().children('.slide');

            function slideChange() {
                div.each(
                    function (index) {
                        $(this).animate({
                            left: -((unitWidth * (Math.abs(count) - index)))
                        }, {
                            duration: 2000,
                            step: function () {
                                $(this).css({
                                    'background-position-x': (-($(this).position().left) / 5)
                                }); //important to pull from opposite side of animation so the edge of the background isn't showing (thats why I have a '-')
                            }
                        }); //as the slide gets closer to 'left: 0' it's background should start to catch up to the left side
                    });

            }


            function init() {
                div.each(

                    function (index) {

                        $(this).css('left', unitWidth * (index - count));
                    });
            }



            function calculateSize() {
                var windowHeight = myname.height();
                var windowWidth = myname.width();
                unitWidth = windowWidth;


                div.each(
                    function (index) {
                        $(this).css('left', unitWidth * (index - count));
                    });

            }


            $(function () {
                num = div.length;
                calculateSize();

                $(this).find(next_slideshow).on("click", function (event) {

                    if (count < (num - 1)) {

                        count++;

                    } else {
                        count = 0;
                    }

                    slideChange();



                }); ////////// next button
                $(this).find(prev_slideshow).on("click", function (event) {
                    if (count > 0) {
                        count--;

                    } else {
                        count = num - 1;
                    }
                    slideChange();


                }); /////////// prevoice button
                $(window).resize(function () {
                    calculateSize();
                }); ///// resize of scale
                startthisshit(); // start the function to automaticly slide the slider
            });

            var myVar;

            function startthisshit() {
                var myVar = setInterval(function () {
                    myTimer()
                }, 7000);
                $(".prev_slideshow, .next_slideshow").on("click", function (event) {
                    clearInterval(myVar);
                }); /// when the buttons are clicked stop automatic slider

            }

            function myTimer() {
                if (count < (num - 1)) {
                    count++;
                } else {
                    count = 0;
                }
                slideChange();
            }


        });
        ////////////////////////////////

        ////////////////////////////////
        $(".verticalslideshow").each(function () {
            var mychild = $(this).children();
            var myname = $(this);
            var prev_slideshow = $(".prev_slideshow");
            var next_slideshow = $(".next_slideshow");
            var toc = $(".toc");
            var slide = $(".slide");
            mychild.addClass("slide")
            $(this).find(prev_slideshow).removeClass("slide")
            $(this).find(next_slideshow).removeClass("slide")
            $(this).find(toc).removeClass("slide")

            var count = 0;
            var active; //active slide (div)
            var num; //number of slides
            var unitWidth; //tracks width
            var unitHeight; //tracks height

            var div = $(this).children('.slide');
            var seconddiv = $(this).parent().children('.slide');

            function slideChange() {
                div.each(
                    function (index) {
                        $(this).animate({
                            top: -((unitHeight * (Math.abs(count) - index)))
                        }, {
                            duration: 2000,
                            step: function () {
                                $(this).css({
                                    'background-position-x': (-($(this).position().top) / 5)
                                }); //important to pull from opposite side of animation so the edge of the background isn't showing (thats why I have a '-')
                            }
                        }); //as the slide gets closer to 'left: 0' it's background should start to catch up to the left side
                    });

            }


            function init() {
                div.each(

                    function (index) {

                        $(this).css('top', unitHeight * (index - count));
                    });
            }



            function calculateSize() {
                var windowHeight = myname.height();
                var windowWidth = myname.width();
                unitWidth = windowWidth;
                unitHeight = windowHeight;

                div.each(
                    function (index) {
                        $(this).css('top', unitHeight * (index - count));
                    });

            }


            $(function () {
                num = div.length;
                calculateSize();

                $(this).find(next_slideshow).on("click", function (event) {

                    if (count < (num - 1)) {

                        count++;

                    } else {
                        count = 0;
                    }

                    slideChange();



                }); ////////// next button
                $(this).find(prev_slideshow).on("click", function (event) {
                    if (count > 0) {
                        count--;

                    } else {
                        count = num - 1;
                    }
                    slideChange();


                }); /////////// prevoice button
                $(window).resize(function () {
                    calculateSize();
                }); ///// resize of scale
                startthisshit(); // start the function to automaticly slide the slider
            });

            var myVar;

            function startthisshit() {
                var myVar = setInterval(function () {
                    myTimer()
                }, 7000);
                $(".prev_slideshow, .next_slideshow").on("click", function (event) {
                    clearInterval(myVar);
                }); /// when the buttons are clicked stop automatic slider

            }

            function myTimer() {
                if (count < (num - 1)) {
                    count++;
                } else {
                    count = 0;
                }
                slideChange();
            }


        });

        ///////////////////////////////



        $(".text3d").each(function () {
            $(this).css("text-shadow", "rgb(104, 104, 104) 0px 0px 2px, rgb(221, 221, 221) 0px 1px 1px, rgb(214, 214, 214) 0px 2px 1px, rgb(204, 204, 204) 0px 3px 1px, rgb(197, 197, 197) 0px 4px 1px, rgb(193, 193, 193) 0px 5px 1px, rgb(187, 187, 187) 0px 6px 1px, rgb(119, 119, 119) 0px 7px 1px, rgba(100, 100, 100, 0.4) 0px 8px 3px, rgba(100, 100, 100, 0.0980392) 0px 9px 5px, rgba(100, 100, 100, 0.14902) 0px 10px 7px, rgba(100, 100, 100, 0.2) 0px 11px 9px, rgba(100, 100, 100, 0.247059) 0px 12px 11px, rgba(100, 100, 100, 0.298039) 0px 13px 15px");
        });


        $(".center").css({ //// Center location
            "margin": "0px auto",
            "position": "relative",
            "left": "0px"
        });

        $("body").append($(".fixed").css("position", "fixed")); //// Fixed position


        ///////////////////////////// WRAPPER //////////////////////////////////////////
    }

    window.EdgeHero = EdgeHero;

})(window, jQuery);

AdobeEdge.bootstrapCallback(function (compId) {
    setTimeout(function () {
        EdgeHero.performHeroics();
    }, 1);
});