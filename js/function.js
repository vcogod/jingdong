/*
 getClass(className) ��ȡ����
 className   ָ��������
 */
function getClass(className, range) {
    var range = range ? range : document;
    if (range.getElementsByClassName) {
        return range.getElementsByClassName(className);
    } else {
        var all = range.getElementsByTagName("*");
        var newarr = [];
        for (var i = 0; i < all.length; i++) {
            if (all[i].className == className) {
                newarr.push(all[i]);
            }
        }
        return newarr;

    }
}


//��ȡԪ���ı�
//getContent��obj,[val]��
//obj ����
//[val]����

function getContent(obj, val) {
    if (obj.textContent) {
        if (val === undefined) {
            return obj.textContent;
        } else {
            obj.textContent = val;

        }
    } else {
        if (val === undefined) {
            return obj.innerText;

        } else {
            obj.innerText = val;
        }
    }
}

//����ʽ�Ĳ���  getStyle��obj��attr�� ��ȡ��ʽ
//              obj  ָ���Ķ���
//              attr ����
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}


/*
��ȡ
#one
.one
div
֮��ı�ǩ����
 */
//function $(selecter){
//    var first = selecter.charAt(0);
//    if(first=="#"){
//        return document.getElementById(selecter.substring(1));
//    }else if(first=="."){
//        return getClass(selecter.substring(1));
//    }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
//        return document.getElementsByTagName(selecter);
//    }
//}

function $(selecter,ranges){
    var ranges=ranges?ranges:document;
    var first=selecter.charAt(0);
    if(first=="#"){
        return ranges.getElementById(selecter.substring(1));
    }
    else if(first=="."){
        return getClass(selecter.substring(1),ranges);
    }
    else if(/^[a-z][a-z1]{0,10}$/.test(selecter)){
        return ranges.getElementsByTagName(selecter);
    }
}



