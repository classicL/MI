/**
 * Created by xiaohu on 2016/1/14.
 */

function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}

function startMove(obj,json){
    clearInterval(obj.timer);

    obj.timer = setInterval(function(){
        var flag = true;
        for(var attr in json){
            var cur = 0,
                speed = 0,
                target = json[attr];


            if(attr == 'opacity'){
                cur = parseInt(parseFloat(getStyle(obj,attr))*100);
            }else{
                cur = parseInt(getStyle(obj,attr));
            }


            speed = ( target - cur ) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if(cur != target){
                flag = false;

                if(attr == 'opacity'){
                    obj.style[attr] = ( cur + speed )/ 100;
                    obj.style.filter = 'alpha(opacity='+ (cur + speed) +')'
                }else{
                    obj.style[attr] = cur + speed + 'px';
                }
            }else{}
        }

        if(flag == true){
            clearInterval(obj.timer);
        }
    },30);

}
