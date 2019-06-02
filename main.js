var speedButton = $('.speedButton')
var duration = 50
speedButton.each(function(){
    $(this).on('click',function(){
     $(this).addClass('active').siblings('.active').removeClass('active')
     let speed = $(this).attr('data-speed')
     switch(speed){
         case 'slow':
            duration = 100
            break
        case 'normal':
            duration = 50
            break
        case 'fast':
            duration = 10
            break
     }
   })
})

var code = `
/*
*今天我用代码来画一只皮卡丘
*首先我们设置一下背景
*/
.picture{
    background-color:#fee433;
}
/*
*画一个皮卡丘的鼻子
*/
.nose{
    width:0;
    height:0;
    border-radius: 50%;
    border:12px solid ;
    border-color:black transparent transparent transparent;
    border-width:12px;
    position: absolute;
    left:50%;
    top:28px;
    transform: translateX(-50%)
}
/*
*画皮卡丘的眼睛
*/
.eyes{
    background-color: #2e2e2e;
    border-radius:50%;
    border:2px solid black;
}
.eyes.leftEye{
    right:50%;
    margin-right:90px;
}
.eyes.rightEye{
    left:50%;
    margin-left:90px;
}
/*
*画皮卡丘可爱的眼珠子
*/
.eyes::after{
    content:'';
    display:block;
    width:24px;
    height:24px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left:11%;
    top:1%;
    border:1px solid black;
}
/*
*接下来是皮卡丘红红的脸蛋
*/
.face{
    background-color:#fc0d1c ;
    border-radius: 50%;
    border:1.5px solid black;
    position: absolute;
    top:75px;
}
.face.leftFace{
    right:50%;
    margin-right: 120px;
}
.face.rightFace{
    left:50%;
    margin-left: 120px;
}
/*
*现在轮到复杂的上嘴唇了
*/
.upperLip{
    border:2.5px solid black;
    border-top:none;
    position: absolute;
    top:63px;
}
.upperLip.left{
    border-bottom-left-radius:40px 25px;
    border-right:none;
    right:50%;
    transform: rotate(-20deg);
    background-color: #fee433;
}
.upperLip.right{
    border-bottom-right-radius: 40px 25px;
    border-left:none;
    left:50%;
    transform: rotate(20deg);
    background-color: #fee433;
}
/*
*皮卡丘的下嘴唇
*/
.lowerLip{
    height: 500px;
    width: 116px;
    border-radius: 50%;
    background-color: #990513;
    position: absolute;
    transform: translateX(-50%);
    left:50%;
    bottom:0;
    border:2px solid black;
    overflow: hidden;
}
.lowerLip::after{
    content:'';
    display:block;
    width:100px;
    height:100px;
    border-radius: 50%;
    background-color: #fc4a62;
    position: absolute;
    bottom:-20px;;
    left:50%;
    transform: translateX(-50%);
}
/*
*皮卡丘画好了，这只皮卡丘送给你
*/
`
function writeCode(prefix,code,fn){
    let n = 0
    let domCode = document.querySelector('#code')
    let wrapper = document.querySelector('.code-wrapper')
    console.log(domCode)
    setTimeout(function run(){
        n+=1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css')
        styleTag.innerHTML = prefix + code.substring(0,n)
        wrapper.scrollTop = wrapper.scrollHeight
        if(n<code.length){
            setTimeout(run,duration)
        }else{
            fn && fn.call()
        }
    },duration)
}   
writeCode('',code)