/**
 * Created by xiaohu on 2016/1/28.
 */

(function(){

    var shopcar = document.querySelector('.shopcar'),
        shopcarBox = document.querySelector('.shopcar-box');
    shopcar.onmouseover = function(){
        this.style.backgroundColor = '#fff';
        shopcarBox.style.display = 'block';
        shopcarBox.style.height = 0;
        startMove(shopcarBox,{"height":100})
    };
    shopcar.onmouseout = function(){
        this.style.backgroundColor = '';
        shopcarBox.style.display = 'none';
    };

    var sidenavItems = document.querySelectorAll('.sidenav-item'),
        sidenavSub = document.querySelectorAll('.sidenav-sub');
    for(var i = 0, len = sidenavItems.length; i < len; i++){
        sidenavItems[i].index = i;
        sidenavItems[i].onmouseover = function(){
            var curIndex = this.index;
            sidenavSub[curIndex].style.display = "block";
            sidenavItems[curIndex].onmouseout = function(){
                sidenavSub[curIndex].style.display = 'none';
                sidenavSub[curIndex].onmouseover =function(){
                    this.style.display = 'block';
                };
                sidenavSub[curIndex].onmouseout =function(){
                    this.style.display = 'none';
                }
            }
        }
    }

    var slides = document.querySelectorAll('.slide'),
        prev = document.querySelector('.arrow-prev'),
        next = document.querySelector('.arrow-next'),
        controllerDot = document.querySelectorAll('.controller-dot'),
        banner = document.querySelector('.banner'),
        pos = 0;

    slides[0].style.opacity = 1;
    controllerDot[0].style.backgroundColor = "rgba(255,255,255,0.4)";

    for (var i = controllerDot.length - 1; i >= 0; i--) {
        controllerDot[i].index = i;
        controllerDot[i].onclick = function(){
            bannerTo(this.index);
        }
    }
    next.onclick = function(){
        autoBanner();
    };
    prev.onclick = function(){
        var index = pos - 1;
        index === -1 ? index = 4 : null;
        bannerTo(index);
        pos = index;
    };
    var bannerTimer = setInterval(function(){
        autoBanner();
    },4000);
    banner.onmouseover = function(){
        clearInterval(bannerTimer);
    };
    banner.onmouseout = function(){
        bannerTimer = setInterval(function(){
            autoBanner();
        },4000)
    };
    function autoBanner(){
        var index = pos + 1;
        index === 5 ? index = 0 : null;
        bannerTo(index);
        pos = index;
    }
    function bannerTo(index){
        startMove(slides[pos],{"opacity":0});
        startMove(slides[index],{"opacity":100});
        controllerDot[pos].style.backgroundColor = "rgba(0,0,0,0.4)";
        controllerDot[index].style.backgroundColor = "rgba(255,255,255,0.4)";
        pos = index;
    }

    var starPrev = document.querySelector('.star-prev'),
        starNext = document.querySelector('.star-next'),
        starItemList = document.querySelector(".star-item-list"),
        star = document.querySelector('.star'),
        flag = true;
    starPrev.onclick = function(){
        if(!flag){
            startMove(starItemList,{"left":0});
            flag = !flag;
            this.style.opacity = 0.5;
            starNext.style.opacity = 1;
            this.style.cursor = 'auto';
            starNext.style.cursor = 'pointer';
        }
    };
    starNext.onclick = function(){
        if(flag){
            startMove(starItemList,{"left":-1240});
            flag = !flag;
            this.style.opacity = 0.5;
            starPrev.style.opacity = 1;
            this.style.cursor = 'auto';
            starPrev.style.cursor = 'pointer';
        }
    };

    star.onmouseover = function(){
        clearInterval(starTimer);
    };
    star.onmouseout = function(){
        starTimer = setInterval(function(){
            starAuto();
        },5000);
    };
    var starTimer = setInterval(function(){
        starAuto()
    },5000);

    function starAuto(){
        if(flag){
            startMove(starItemList,{"left":-1240});
            flag = !flag;
            starNext.style.opacity = 0.5;
            starPrev.style.opacity = 1;
            starNext.style.cursor = 'auto';
            starPrev.style.cursor = 'pointer';
        }else{
            startMove(starItemList,{"left":0});
            flag = !flag;
            starPrev.style.opacity = 0.5;
            starNext.style.opacity = 1;
            starPrev.style.cursor = 'auto';
            starNext.style.cursor = 'pointer';
        }
    }

    var mainRightBig = document.querySelectorAll('.main-right-big'),
        mainRightSmall = document.querySelectorAll('.main-right-small'),
        mainContentItem = document.querySelectorAll('.main-content-item');
    //for(var i = 0, len = mainRightBig.length; i<len; i++){
    //    mainRightBig[i].onmouseover = function(){
    //        this.style.boxShadow = "0 15px 30px #ccc";
    //        startMove(this,{"top":-2})
    //    };
    //    mainRightBig[i].onmouseout = function(){
    //        this.style.boxShadow = "none";
    //        startMove(this,{"top":0})
    //    };
    //}
    //for(var i = 0, len = mainRightSmall.length; i<len; i++){
    //    mainRightSmall[i].onmouseover = function(){
    //        this.style.boxShadow = "0 15px 30px #ccc";
    //        startMove(this,{"top":-2})
    //    };
    //    mainRightSmall[i].onmouseout = function(){
    //        this.style.boxShadow = "none";
    //        startMove(this,{"top":0})
    //    };
    //}
    //for(var i = 0, len = mainContentItem.length; i < len; i++){
    //    mainContentItem[i].onmouseover = function(){
    //        this.style.boxShadow = "0 15px 30px #ccc";
    //        startMove(this,{"top":-2})
    //    };
    //    mainContentItem[i].onmouseout = function(){
    //        this.style.boxShadow = "none";
    //        startMove(this,{"top":0})
    //    };
    //}

    mouseinUp(mainContentItem);
    mouseinUp(mainRightBig);
    mouseinUp(mainRightSmall);
    function mouseinUp(obj){
        if(obj.length){
            for(var i = 0, len = obj.length; i < len; i++){
                if(obj[i].addEventListener){
                    obj[i].addEventListener('mouseover',function(){
                        this.style.boxShadow = "0 15px 30px #ccc";
                        startMove(this,{"top":-2})
                    });
                    obj[i].addEventListener('mouseout',function(){
                        this.style.boxShadow = "none";
                        startMove(this,{"top":0})
                    });
                }else{
                    obj[i].attachEvent('onmouseover',function(){
                        this.style.boxShadow = "0 15px 30px #ccc";
                        startMove(this,{"top":-2})
                    });
                    obj[i].attachEvent('onmouseout',function(){
                        this.style.boxShadow = "none";
                        startMove(this,{"top":0})
                    });
                }
            }
        }else{
            if(obj.addEventListener){
                obj.addEventListener('mouseover',function(){
                    this.style.boxShadow = "0 15px 30px #ccc";
                    startMove(this,{"top":-2})
                });
                obj.addEventListener('mouseout',function(){
                    this.style.boxShadow = "none";
                    startMove(this,{"top":0})
                });
            }else{
                obj.attachEvent('onmouseover',function(){
                    this.style.boxShadow = "0 15px 30px #ccc";
                    startMove(this,{"top":-2})
                });
                obj.attachEvent('onmouseout',function(){
                    this.style.boxShadow = "none";
                    startMove(this,{"top":0})
                });
            }
        }
    }

    for(var i = 0; i < mainContentItem.length; i++){
        contentBanner(mainContentItem[i].querySelectorAll('.dot'),mainContentItem[i].querySelector('.item-list'));
        (function(){
            mainContentItem[i].addEventListener('mouseover',function(){
                this.querySelector('.pager-np').style.display = 'block';
            });
            mainContentItem[i].addEventListener('mouseout',function(){
                this.querySelector('.pager-np').style.display = 'none';
            });

        })();
    }

    function contentBanner(ctr,con){
        var cur = 0;
        for(var i = 0; i < ctr.length; i++){
            ctr[i].index = i;
            ctr[i].parentNode.onclick = function(){
                if(cur !== this.querySelector('.dot').index){
                    contentBannerTo(this.querySelector('.dot').index);
                }
            };
            ctr[i].parentNode.onmouseover = function(){
                if(cur !== this.querySelector('.dot').index){
                    this.querySelector('.dot').style.backgroundColor = '#ff6700';
                }
            };
            ctr[i].parentNode.onmouseout= function(){
                if(cur !== this.querySelector('.dot').index){
                    this.querySelector('.dot').style.backgroundColor = '#b0b0b0';
                }
            }
        }
        con.parentNode.querySelector('.pager-next').addEventListener('click',function(){
            if(cur < 3){
                contentBannerTo(cur+1);
            }
        });
        con.parentNode.querySelector('.pager-prev').addEventListener('click',function(){
            if(cur > 0){
                contentBannerTo(cur-1);
            }
        });
        function contentBannerTo(index){
            var left = -296 * index;
            startMove(con,{"left":left});
            ctr[cur].style.borderColor = '#fff';
            ctr[cur].style.backgroundColor = '#b0b0b0';
            ctr[cur].style.cursor = 'pointer';
            ctr[index].style.borderColor = '#ff6700';
            ctr[index].style.backgroundColor = '#fff';
            cur = index;
        }
    }


    var onlineService = document.querySelector('.online-service');
    onlineService.onmouseover = function(){
        this.style.backgroundColor = "#ff6700";
        this.style.color = "#fff"
    };
    onlineService.onmouseout = function(){
        this.style.backgroundColor = "#fff";
        this.style.color = "#ff6700";
    }


})();
