/**
 * Created by Administrator on 2016/3/17.
 */
    //轮播图
window.onload = function(){
    var win = $(".inner_img")[0];
    //console.log(win)
    var imgs = $("a", win);
    var lins = $("li", win);
    var num = 0;
    var btnL = $(".btn_left")[0];
    var btnR = $(".btn_right")[0];
    var t = setInterval(move, 3000);
    var flag = true;

    //当鼠标移动到轮播图上时 图片停止
    win.onmouseover = function () {
        clearInterval(t);
    }
    //当鼠标离开轮播图时 图片开始轮播
    win.onmouseout = function () {
        clearInterval(t);
        t = setInterval(move, 3000);
    }
    //图片随小红点的点击而切换
    for (var i = 0; i < lins.length; i++) {
        lins[i].index = i;
        lins[i].onmouseover = function () {
            num = this.index;
            for (var i = 0; i < imgs.length; i++) {
                animate(imgs[i], {opacity: 0}, 500);
                lins[i].className = "";
            }
            animate(imgs[this.index], {opacity: 1}, 500);
            lins[this.index].className = "xydhot";

        }
    }


    //btnR
    btnR.onclick = function () {
        move();
    }
    //btnL
    btnL.onclick = function () {
        num--;
        if (num < 0) {
            num = imgs.length - 1;
        }
        for (var i = 0; i < imgs.length; i++) {
            animate(imgs[i], {opacity: 0}, 500);
            lins[i].className = "";
        }
        animate(imgs[num], {opacity: 1}, 500);
        lins[num].className = "xydhot";
    }


    //自动轮播
    function move() {
        if (!flag) {
            return;
        }
        flag = false;
        //改变当前下标
        num++;
        //限定范围
        if (num == imgs.length) {
            num = 0;
        }
        //所有层级都降低
        for (var i = 0; i < imgs.length; i++) {
            animate(imgs[i], {opacity: 0}, 500, function () {
                flag = true;
            });
            lins[i].className = "";
        }
        //当前的层级调高
        animate(imgs[num], {opacity: 1}, 500, function () {
            flag = true;
        });
        lins[num].className = "xydhot";
    }
}
