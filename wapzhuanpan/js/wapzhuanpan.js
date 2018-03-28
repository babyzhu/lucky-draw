$(function () {
    //抽奖 公告
    function AutoScroll() {
        var ul = $("#ul_prizes_list");
        var li;
        var len = $("li", ul).length;
        if (len == 1) {
            li = 0;
            return
        } else {
            li = -($("li", ul).eq(0).height());
            ul.animate({ marginTop: li }, 500, function () { $(this).css({ marginTop: "0" }).find("li").eq(0).appendTo(this); });
        }

    }
    scroll_timer = setInterval(AutoScroll, 2000);

    // 转盘抽奖
    rotateGame("#rotate", "#rotatebtn");
    function rotateGame(wrap, btn) {
        var wrap = $(wrap);
        var btn = $(btn);
        //a：旋转角度,t：中奖文案
        var result_angle = [
            { a: 0, t: '小米圈铁耳机' },
            { a: 30, t: '高达模型' },
            { a: 60, t: '京东卡50元' },
            { a: 90, t: '星星礼盒' },
            { a: 120, t: '皮肤体验卡1天' },
            { a: 150, t: '1袋迷你豆' },
            { a: 180, t: '谢谢参与' },
            { a: 210, t: '星星礼盒' },
            { a: 240, t: '开心烟花' },
            { a: 270, t: '1袋迷你豆' },
            { a: 300, t: '小米蓝牙游戏手柄' },
            { a: 330, t: 'ipad mini1 16g' },
        ];
        var rotate_angle = 0;
        var flag_click = true;
        var result_index = 0; // 最终要旋转到哪一块，对应result_angle的下标
        var rand_circle = Math.ceil(Math.random() * 5) + 1;
        function rotate_result(result_index, during_time) { 
            flag_click = false;
            // rotate_angle 旋转角度
            rotate_angle = rotate_angle - rand_circle * 360 - rotate_angle % 360 - result_angle[result_index].a;
            wrap.css({
                'transform': 'rotate(' + rotate_angle + 'deg)',
                '-webkit-transform': 'rotate(' + rotate_angle + 'deg)',
                'transition': 'transform ease-in-out ' + during_time + 's',
                '-webkit-transition': '-webkit-transform ease-in-out ' + during_time + 's'
            });
        }
        btn.click(function () {
            if (flag_click) {

                // 点击抽奖。然后得出了抽奖结果 比如返回了 txt 或者其他的参数进行对比
                // ajax success 
                var txt = "高达模型";


                // 得出结果之后，我就要计算到底把指针指向哪了。。
                for (var i = 0; i < result_angle.length; i++) {
                    if (result_angle[i].t == txt) {
                        result_index = i;
                        break;
                    }
                }
                rotate_result(result_index, 1.5);
                // 
                setTimeout(function () {
                    flag_click = true;
                    // php交互的中奖弹窗在这里
                    alert(txt);

                }, 1520);

            }
        });
    }

})