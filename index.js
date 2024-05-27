window.addEventListener('load', function () {
    if (!window.localStorage.getItem('dark-mode') === null && window.localStorage.getItem('dark-mode').toString() === "true") {
        setTheme();
    }
});
function setTheme() {
    var html = document.getElementsByTagName('html')[0]
    // 检查html元素的theme属性是否为dark-mode
    if (html.getAttribute('theme') == 'dark-mode') {
        console.error("dark-mode")
        // 如果是，移除theme属性
        html.removeAttribute('theme');
        window.localStorage.setItem('dark-mode', false)
    } else {
        console.error("light-mode")
        // 否则，设置theme属性为dark-mode   
        html.setAttribute('theme', 'dark-mode');
        window.localStorage.setItem('dark-mode', true)
    }
};


function getRandomIntExclude(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (min === max && min != '' && max != '') {
        window.confirm("最小值和最大值不能相同")
        return 0;
    } else if (min > max) {
        window.confirm("最小值不能大于最大值")
        return 0;
    }
    var randomNumber;
    var cnt = 0;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        cnt++;
        if(cnt>(max-min)){
            randomNumber = 0;
            excludeSet = new Set(excludeNum)
            break;
        }
    } while (exclude.has(randomNumber));
    return randomNumber;
}

var excludeNum = [19, 31, 35, 36, 40, 44, 46, 49, 61]
var excludeSet = new Set(excludeNum);

function generateRandomNumber() {
    var min = document.getElementById('min').value; //从输入框获取最小值
    var max = document.getElementById('max').value; //从输入框获取最大值
    var number = getRandomIntExclude(min, max, excludeSet);  //生成一个在指定范围内的随机数
    excludeSet.add(number); //将这个随机数添加到排除集合中
    document.getElementById('randomNumber').innerHTML = number; //在网页上显示这个随机数
}


particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
L2Dwidget.init({
    "model": {
        jsonPath: "https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json",
        "scale": 1
    },
    "display": {
        "position": "right", //模型的表现位置
        "width": 150, //模型的宽度
        "height": 300, //模型的高度
        "hOffset": 0,
        "vOffset": -20
    },
    "mobile": {
        "show": true,
        "scale": 0.5
    },
    "react": {
        "opacityDefault": 0.7, //模型默认透明度
        "opacityOnHover": 0.2
    }
});