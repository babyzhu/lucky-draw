$(function () {
    // 抽奖点击
    rotateGame("#luck", "li","#luckbtn")
    function rotateGame(wrap, wrapchild,btn) {
        //id：第几个li,t：中奖文案
        var result_angle = [
            { id: 0, t: '初音未来立牌小夜灯' },
            { id: 1, t: '刀剑乱舞立牌' },
            { id: 2, t: '5个Q币' },
            { id: 3, t: 'wacom手绘板' },
            { id: 4, t: '夏目友人帐猫咪挂件' },
            { id: 5, t: '20积分' },
            { id: 6, t: '继续努力' },
            { id: 7, t: '50积分' },
            { id: 8, t: '百变小樱魔法阵夜灯' },
            { id: 9, t: '一次抽奖机会' },
            { id: 10, t: '银魄伊丽莎白小背包' },
            { id: 11, t: '5积分' },
        ];
        var iNow = 0,
            timer = null,
            flag_click = true;
        result_index = 0; // 最终要旋转到哪一块，对应result_angle的下标
        var li = $(wrapchild, wrap),
            len = li.length;
        var rand_circle = Math.ceil(Math.random() * 3) + 1;
        function rotate_result(result_index,txt) {
            var step = parseInt(rand_circle * len) + (result_index + 1);
            flag_click = false;

            // 走马观灯的路程
            timer = setInterval(function () {
                li.removeClass("on");
                li.eq(iNow).addClass("on");
                iNow++;
                step--;
                if (step == 0) {
                    clearInterval(timer);
                    flag_click = true;
                    // 注意。。这里是抽奖结束得到结果的弹窗

                    // php 弹窗
                    alert(txt);    
                }
                if (iNow == len) {
                    iNow = 0;
                }
            }, 50);

        }
        // 抽奖点击按钮
        $(btn).click(function () {
           
            if (flag_click) {
                // 点击抽奖。然后得出了抽奖结果 比如返回了 txt 或者其他的参数进行对比
                // ajax success 
                 // php ajax 返回 txt
                var txt = "5积分";

                // 得出结果之后，我就要计算到底停留在哪块上。。
                for (var i = 0; i < len; i++) {
                    if (result_angle[i].t == txt) {
                        result_index = i;
                        break;
                    }
                }
                rotate_result(result_index,txt);            
            }
        });
    }

})