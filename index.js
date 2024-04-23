
function getRandomIntExclude(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (exclude.includes(randomNumber));
    return randomNumber;
}



function generateRandomNumber() {
    var min = document.getElementById('min').value; //从输入框获取最小值
    var max = document.getElementById('max').value; //从输入框获取最大值
    var number = getRandomIntExclude(min, max, [31, 36]);  //生成一个在指定范围内的随机数
    document.getElementById('randomNumber').innerHTML = number; //在网页上显示这个随机数
}