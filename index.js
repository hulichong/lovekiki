const cWidth = document.body.clientWidth // 屏幕宽度

// 以750为单位，计算字体大小

class LoveInfo{
    constructor() {
        this.nowTime = new Date().valueOf() // 这是现在的时间
        // 初次见面多多关照 8月7号下午见面
        // this.fallInTime = new Date('2018 08 07 14:00').valueOf()
        // 2018 08 11 加微信

        // 2018 08 17 晚上，陈冰，大池，kiki，我 看的是一出好戏电影
        // 2018 08 18 白天会展中心，晚上去南头古城转圈圈
        // 2018 08 19 下午去海雅缤纷城约会，海底捞火锅，星际传奇然后看电影和雨
        // 2018 08 20 9点多才下的班。绕到那答应在一起是10点。答应尝试在一起，晚上的暴雨过后的宁静和幸福，牵手绕路，此时很幸福，还没有波折
        // 2018 08 24 在欢乐颂的幸福角落中长吻
        // 之后和我讲了很多你的故事，接触着爱情的人很容易受伤，所以这些伤我来承受就好，你幸幸福福地，开心着就好
        // 这是我们开始在一起的时候
        this.loveStartTime = new Date('2018 08 20 22:00').valueOf()
        this.loveStartInfo = { day: 0, hour: 0, min: 0, sec: 0 }
        // meetTime 相遇之时
        this.meetTime = new Date('2018 08 07 14:00').valueOf()
        this.meetTimeInfo = { day: 0 }
        // 第一次约会
        this.dateTime = new Date('2018 08 19 12:38').valueOf()
        this.dateTimeInfo = { day: 0 }

        // 第一次唱歌, 加班完后16点到了海雅缤纷城唱歌
        this.singTime = new Date('2018 09 02 16:06').valueOf()
        this.singTimeInfo = { day: 0 }

        // 第一次出门旅游

        this.dynamic = {
            // 第一张图的信息，我们恋爱啦 2018年8月20日
            firstLove: {
                fontStyle: '40px FZSXSLKJWem',
                color: '#58'
            }, // 用以生成多行动态文本，并渲染到 canvas 中
            // 第二张图的信息，第一次KTV之旅 2018年9月2日
            KTVInfo: {
                fontStyle: '80px FZSXSLKJWem',
                color: '#58'
            },
            // 第三张图，我们出去旅游啦，在广西
            northSea: {
                fontStyle: '80px FZSXSLKJWem',
                color: '#58'
            },
            // 第四张图，出发去香港
            HKShopping: {
                fontStyle: '80px FZSXSLKJWem',
                color: '#58'
            },
            // 第五张图，荷兰花卉小镇之我的女朋友
            HelanFlower: {
                fontStyle: '80px FZSXSLKJWem',
                color: '#58'
            },
            // 第六张图，过年回家咯
            happyNewYear: {
                fontStyle: '80px FZSXSLKJWem',
                color: '#58'
            },
            // 第七张图，踏青放风
            kite: {
                fontStyle: '80px FZSXSLKJWem',
                color: '#58'
            },
            // 第八张图，去泰国劳动
            Thailand: {
                fontStyle: '80px FZSXSLKJWem',
                color: '#58'
            },
        }
    }

    /**
     * 获取从startTime开始到现在为止经过的天数小时与分钟信息
     *
     * @params startTime int 开始的时间
     * @return object
     * */
    getDateInfo(startTime) {
        this.nowTime = new Date().valueOf()
        let day = 0
        let hour = 0
        let min = 0
        let sec = 0
        let tempTime = Math.floor((this.nowTime - (+startTime))/1000) // 经过的所有秒数

        day = Math.floor(tempTime / 60 / 60 / 24) // 经过的天数
        tempTime -= day * 24 * 60 * 60
        hour = Math.floor(tempTime / 60 / 60) // 经过的小时数
        tempTime -= hour * 60 * 60
        min = Math.floor(tempTime / 60) // 经过的分钟数
        sec = Math.floor(tempTime - min * 60)

        return {
            day,
            hour,
            min,
            sec,
        }
    }

    /**
     * 给canvas加上文字
     * */
    canvasext(params) {
        params = Object.assign({
            fontStyle: '80px FZSXSLKJWem',
            color: '#58',
            align: 'center'
        }, params)
        const { canvas, textArr, fontStyle, color, align } = params
        const top = 100
        // 设置字体属性
        // context.font= 'font-style font-variant font-weight font-size font-family'

        // ctx.fillStyle = 'rgb(200, 0, 0)'
        // ctx.fillRect(dWidth/2, dHeight/2, 100, 100)
        // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
        // ctx.fillRect(dWidth/2 + 100, dHeight/2 + 100, 400, 400)
        canvas.textAlign = align // 对齐方式
        canvas.font = fontStyle // 字体样式
        canvas.fillStyle = color // 字体颜色
        textArr.forEach((value, index) => {
            canvas.fillText(value,40,(index + 1) * 100)
        })
    }

    init() {
        // 我们已经相爱${this.loveStartInfo.day}天${this.loveStartInfo.hour}小时${this.loveStartInfo.min}分钟${this.loveStartInfo.sec}秒啦
        this.loveStartInfo = this.getDateInfo(this.loveStartTime)
        // 距离我们的第一次邂逅已经有${this.meetTimeInfo.day}天啦
        this.meetTimeInfo = this.getDateInfo((this.meetTime))
        // ${this.dateTimeInfo.day}天前，我们第一次约会了，虽然吃饭很晚，但是和宝宝一起玩的很开心
        this.dateTimeInfo = this.getDateInfo((this.dateTime))

        this.dynamic.firstLove.textArr = [
            `我们已经相爱${this.loveStartInfo.day}天${this.loveStartInfo.hour}小时${this.loveStartInfo.min}分钟${this.loveStartInfo.sec}秒啦`,
            `距离我们的第一次邂逅已经有${this.meetTimeInfo.day}天啦`,
            `在${this.dateTimeInfo.day}天前，我们第一次约会了，虽然历经波折，但是和宝宝一起就很开心`,
        ]

        // 第一次唱歌
        this.singTimeInfo = this.getDateInfo(((this.singTime)))
        this.dynamic.KTVInfo.textArr = [
            `${this.singTimeInfo.day}天前的9月2号，我们一起加完班，一起去唱K`,
            '青涩的感情在深情的情歌中发酵',
            '听你讲过去爱唱的歌，静静看现在深爱的你'
        ]
        // 北海之旅
        this.dynamic.northSea.textArr = [
            '早早地就约好了国庆一起旅游',
            '在举国同庆的日子里我们庆祝着二人世界的旅行',
            ''
        ]

        // 香港shopping & 毕业
        this.dynamic.HKShopping.textArr = [
            '起床后直奔HK，去宝宝学校转一转',
            '听听宝宝以前的生活',
        ]

        // 一起去荷兰花卉小镇
        this.dynamic.HelanFlower.textArr = [
            '这明明是我的女朋友',
        ]

        // 过年啦
        this.dynamic.happyNewYear.textArr = [
            '过年啦，和宝宝过的第一个春节，想她'
        ]

        // 一起和宝宝放风筝
        this.dynamic.kite.textArr = [
            '今天天气很好',
            '一起和宝宝放风筝'
        ]

        // 劳动节去泰国劳动
        this.dynamic.Thailand.textArr = [
            '在泰国劳动'
        ]
    }
}

const loveInfo = new LoveInfo()
loveInfo.init()

$(function () {
    const imgCollection = [];
    const nowTime = new Date().valueOf()

    const dWidth = document.body.clientWidth
    const dHeight = document.body.clientHeight

    let ratio = 1;
    let index = 0;
    let anim;
    const musicSrc = document.getElementById('bg-music');


    var musicIcon = $('#music-icon'),
        btn = $('#button'),
        page = $('body'),
        sharePage = $('.share-page'),
        shareBtn = $('.share-btn'),
        calcBtn = $('.calc-btn'),
        cv = $('#myCanvas'),
        timer;

    var imgNext, imgCur, img_oversize, img_minisize;
    var areaRatio;
    // 这里保存的是渲染完毕的canvas结果
    var canvCollection;

    var canvas = document.getElementById("panel");
        canW = canvas.width = document.body.clientWidth;
        canH = canvas.height = document.body.clientHeight;

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
    }

    var imgList = [
        {
            // 第一张图片 使用约会前的照片和封面
            link: "./imgs/1.jpg",
            imgW: "750",
            imgH: "1206",
            dynamic: 'firstLove', // 渲染这个对象中的数据
        },
        {
            // 一起去唱歌吧
            link: "./imgs/1_5.jpg",
            imgW: "1200",
            imgH: "1929",
            areaW: "533", // 前一张图片在这里显示的宽度 需要符合长宽比
            areaH: "859", // 前一张图片在这里显示的高度 需要符合长宽比
            areaL: "537", // 前一张图镶嵌在这里，前一张图距离当前图片左边的距离
            areaT: "433", // 前一张图镶嵌在这里，前一张图距离当前图片顶部的距离

        },
        {
            // 一起去唱歌吧
            link: "./imgs/2.jpg",
            imgW: "1875",
            imgH: "3013",
            areaW: "1095",
            areaH: "1774",
            areaL: "479",
            areaT: "587",
            dynamic: 'KTVInfo',
        },
        {
            // 北海之旅
            link: "./imgs/3.jpg",
            imgW: "1875",
            imgH: "3014",
            areaW: "190",
            areaH: "306.9",
            areaL: "122",
            areaT: "989",
            dynamic: 'northSea',
        },
        {
            // 在HK shopping
            link: "./imgs/4.jpg",
            imgW: "1000",
            imgH: "1609",
            areaW: "234",
            areaH: "374",
            areaL: "229",
            areaT: "944",
            dynamic: 'HKShopping',
        },
        {

            link: "./imgs/4_5.jpg",
            imgW: "1875",
            imgH: "3014",
            areaW: "992",
            areaH: "1594",
            areaL: "163",
            areaT: "733",
        },
        {
            // HelanFlower
            link: "./imgs/5.jpg",
            imgW: "1875",
            imgH: "3015",
            areaW: "339",
            areaH: "544",
            areaL: "663",
            areaT: "301",
            dynamic: 'HelanFlower',
        },
        {
            // 过年啦
            link: "./imgs/6.jpg",
            imgW: "1875",
            imgH: "3015",
            areaW: "278",
            areaH: "449",
            areaL: "1007",
            areaT: "173",
            dynamic: 'happyNewYear'
        },
        {
            // 放风筝
            link: "./imgs/7.jpg",
            imgW: "1875",
            imgH: "3015",
            areaW: "307",
            areaH: "495",
            areaL: "585",
            areaT: "1914",
            dynamic: 'kite',
        }, {
            link: "./imgs/8.jpg",
            imgW: "1875",
            imgH: "3015",
            areaW: "378",
            areaH: "610",
            areaL: "188.5",
            areaT: "940"
        },
        {
            link: "./imgs/9.jpg",

            imgW: "1000",
            imgH: "1608",
            areaW: "256",
            areaH: "412",
            areaL: "206",
            areaT: "410"
        },
        {
            link: "./imgs/10.jpg",
            imgW: "1875",
            imgH: "3015",
            areaW: "1093",
            areaH: "1759",
            areaL: "59",
            areaT: "545"
        },
        {
            link: "./imgs/11.jpg",

            imgW: "1875",
            imgH: "3015",
            areaW: "1057",
            areaH: "1700",
            areaL: "820",
            areaT: "855"
        }];

    function preLoader(images, callback, sequential) {
        sequential = typeof sequential !== 'undefined' ? sequential : false;

        function onEvent(index) {
            return function () {
                next((function () {
                    if (sequential && index < images.length - 1) {
                        return function () {
                            imgCollection[index + 1].src = images[index + 1].link;
                        };
                    } else {
                        return null;
                    }
                })());
            };
        }

        function next(cb) {
            if (cb && 'function' === typeof cb) {
                cb();
            }

            if (++nbLoaded === nbToLoad && 'function' === typeof callback) {
                callback();
            }
        }

        if (images.length) {
            var nbLoaded = 0,
                nbToLoad = images.length,
                ln;

            for (var i = 0, len = images.length; i < len; i++) {

                imgCollection.push(new Image());
                ln = imgCollection.length;
                imgCollection[ln - 1].onload = imgCollection[ln - 1].onerror
                    = imgCollection[ln - 1].onabort = onEvent(ln - 1);

                if (!sequential) {
                    imgCollection[ln - 1].src = images[i].link;
                }
            }

            if (sequential) {
                imgCollection[0].src = images[0].link;
            }
        }
    }

    function preDraw(images) {
        var canv, ctx, canvCollection = [];
        for (var i = 0, len = images.length; i < len; i++) {
            canv = document.createElement('canvas');
            ctx = canv.getContext('2d');
            canv.width = images[i].width;
            canv.height = images[i].height;

            // 改进算法，每次绘制完当前基本 canvas 后，都再次使用 前一个渲染完成的 canvas 来填充区域,以此来达到在所有canvas中都含有动态内容的目的
            ctx.drawImage(images[i], 0, 0, images[i].width, images[i].height);

            // 在canvas中夹杂私货
            if (imgList[i].dynamic) {
                loveInfo.canvasext({
                    canvas: ctx,
                    textArr: loveInfo.dynamic[imgList[i].dynamic].textArr,
                    color: loveInfo.dynamic[imgList[i].dynamic].color,
                    fontStyle: loveInfo.dynamic[imgList[i].dynamic].fontStyle
                })
            }

            if ( i === 1) {
                ctx.drawImage(images[i + 1], 0, images[i].height/2, images[i].width, images[i].height/2, 0, canv.height/2, canv.width, canv.height/2)
            }

            // 改进算法，每次绘制完当前基本 canvas 后，都再次使用 前一个渲染完成的 canvas 来填充区域,以此来达到在所有canvas中都含有动态内容的目的
            if (i > 0) {
                console.log(i)
                // 不是第一张时，在渲染当前图片时，将前一张结果的canvas也渲染进来，来生成含有动态内容的 canvas
                ctx.drawImage(canvCollection[i - 1], 0, 0, canvCollection[i - 1].width, canvCollection[i - 1].height, imgList[i].areaL, imgList[i].areaT, imgList[i].areaW, imgList[i].areaH)
            }


            // 生成的 canvas 入渲染栈 这里的都是要拿去显示的 canvas
            canvCollection.push(canv);
        }
        return canvCollection;
    }

    function draw() {

        areaRatio = imgList[index + 1].areaW / imgList[index + 1].imgW;

        if (index < imgList.length - 2) {

            ratio < areaRatio ? (index++, ratio = 1) : void 0;

            imgNext = imgList[index + 1];
            imgCur = imgList[index];
            img_minisize = canvCollection[index];
            img_oversize = canvCollection[index + 1];
            drawImgOversize(img_oversize, imgNext.imgW, imgNext.imgH, imgNext.areaW, imgNext.areaH, imgNext.areaL, imgNext.areaT, ratio);
            drawImgMinisize(img_minisize, imgCur.imgW, imgCur.imgH, imgNext.imgW, imgNext.imgH, imgNext.areaW, imgNext.areaH, imgNext.areaL, imgNext.areaT, ratio);
            Math.abs(areaRatio - ratio) < .2 ? ratio *= 0.996 : ratio *= 0.993;
        } else {
            //  渲染到最后一张时，考虑循环放大
            ratio < 1 ? ratio = 1 : ratio *= 1.005;
            if (ratio >= 1.52) {
                setTimeout(function () {
                    cutOver();
                }, 1000);
                return;
            }

            imgNext = imgList[index];
            imgCur = imgList[index + 1];
            img_oversize = canvCollection[index];
            drawImgZoomIn(img_oversize, imgNext.imgW, imgNext.imgH, imgCur.areaW, imgCur.areaH, imgCur.areaL, imgCur.areaT, ratio);
        }
        anim = requestAnimFrame(draw);
    }

    function init() {
        var firstImg = imgList[0],
            secondImg = imgList[1];

        drawImgMinisize(canvCollection[0], firstImg.imgW, firstImg.imgH, secondImg.imgW, secondImg.imgH, secondImg.areaW, secondImg.areaH, secondImg.areaL, secondImg.areaT, 1);
    }

    function drawImgMinisize(i, e, t, a, n, m, s, g, r, o) {
        ctx.drawImage(i, 0, 0, e, t, (m / o - m) * (g / (a - m)) * o * canW / m, (s / o - s) * (r / (n - s)) * o * canH / s, canW * o, canH * o);
    }

    function drawImgOversize(imgCanvas, e, t, a, n, m, s, g) {
        ctx.drawImage(imgCanvas, m - (a / g - a) * (m / (e - a)), s - (n / g - n) * (s / (t - n)), a / g, n / g, 0, 0, canW, canH);
    }

    function drawImgZoomIn(i, e, t, a, n, m, s, g) {
        ctx.drawImage(i, (canW * g - canW) / canW * g * (e - a) * (m / (e - a)), (canH * g - canH) / canH * g * (t - n) * (s / (t - n)), e / g, t / g, 0, 0, canW, canH)
    }

    var requestAnimFrame = (function () {
        return window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.oRequestAnimationFrame
            || window.msRequestAnimationFrame;
    })();

    var cancelAnimFrame = (function () {
        return window.cancelAnimationFrame
            || window.webkitCancelAnimationFrame
            || window.mozCancelAnimationFrame
            || window.oCancelAnimationFrame
            || window.msCancelAnimationFrame;
    })();

    function autoplay() {

        musicSrc.play();

        if (musicSrc.paused) {
            musicIcon.removeClass('music-play');
        } else {
            musicIcon.addClass('music-play');
        }
    }

    function autoIOSplay() {
        document.addEventListener('WeixinJSBridgeReady', function () {
            autoplay();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function () {
            autoplay();
        }, false);
    }

    function cancelDefault() { return false;}

    // 最后一屏切换
    function cutOver() {
        btn.hide();
        cv.fadeOut(1500);
        sharePage.fadeIn(2000);

        page.off('touchstart', cancelDefault);
    }

    var loadingImg = new Image();
    loadingImg.onload = function () {
        preLoader(imgList.slice(0, 5), function () {
            // 图片加载完毕显示第一个画面
            // init();
            // $('.load').hide();
            $('#button').show();

            // 图片和音乐均加载完毕后播放音乐
            $('#bg-music')[0].addEventListener('canplaythrough', function () {
                $('#bg-music')[0].play();
            });

            // setTimeout(function () {
                preLoader(imgList.slice(5), function () {
                    canvCollection = preDraw(imgCollection);
                    init();
                    $('.load').hide();
                });
            // }, 0)
        });
    }

    loadingImg.src = './imgs/1.jpg';


    // 绑定一次，播放音乐
    page.one('touchstart', function (e) {
        autoplay();
    });

    // 禁用微信内置长按事件弹出菜单
    page.on('touchstart', cancelDefault);

    autoIOSplay();

    btn.on('touchstart', function (e) {
        e.preventDefault();
        timer = setTimeout(function() {
            clearTimeout(timer);
            timer = void 0;
        }, 1000);
        btn.addClass('small');
        if (canvCollection.length) {
            draw();
        }

    });

    btn.on('touchend', function (e) {
        e.preventDefault();

        btn.removeClass('small');
        cancelAnimFrame(anim);
    });

    musicIcon.on('touchend', function () {
        if (musicSrc.paused) {
            musicSrc.play();
            musicIcon.addClass('music-play');
        } else {
            musicSrc.pause();
            musicIcon.removeClass('music-play');
        }
    });

    // 音乐结束，图标停止旋转
    musicSrc.addEventListener('ended', function () {
        musicIcon.removeClass('music-play');

        var loopTimer = setTimeout(function () {
            musicSrc.play();
        }, 600);

        // 已观看至分享页，停止循环播放
        if (!sharePage.is(':hidden')) {
            clearTimeout(loopTimer);
        }
    });
})