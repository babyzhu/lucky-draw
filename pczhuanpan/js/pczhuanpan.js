$(function () {
    rotateGame();
    function rotateGame() {
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
        var flag_click = true;
        var result_index = 0; // 最终要旋转到哪一块，对应result_angle的下标
        var rand_circle = Math.ceil(Math.random() * 5) + 1;

        // 旋转方法
        function rotate_result(angles, txt) {
            flag_click = false;
            $("#rotate").stopRotate();
            $("#rotate").rotate({
                angle: 0,
                animateTo: -(angles + rand_circle * 360),
                duration: 3000,
                callback: function () {
                    // 旋转玩后的回调

                    // php交互的中奖弹窗在这里
                    alert(txt);
                    flag_click = true;                  
                }
            })
        };

        $("#rotatebtn").click(function () {
            if (flag_click) {

                // 点击抽奖。然后得出了抽奖结果 比如返回了 txt 或者其他的参数进行对比
                // ajax success 
                var txt = "皮肤体验卡1天";


                // 得出结果之后，我就要计算到底把指针指向哪了。。
                for (var i = 0; i < result_angle.length; i++) {
                    if (result_angle[i].t == txt) {
                        result_index = i;
                        break;
                    }
                }
                
                rotate_result(result_angle[result_index].a, txt);
            }
        });
    }

})