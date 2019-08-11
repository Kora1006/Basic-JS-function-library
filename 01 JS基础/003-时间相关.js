
/**
 * 
 * @desc 返回 'YYYY-MM-DD hh:mm:ss 格式时间
 * @name nowTime
 * @return {string} 
 */
function nowTime() {
    // 声明变量调用日期对象
    var now = new Date();
    //声明变量存储日期值       
    var YYYY = now.getFullYear();
    // 月份值从0开始，故需要加1            
    // 三元表达式判断时间值小于10则补0            
    var MM = now.getMonth() + 1 > 10 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
    var DD = now.getDate() > 10 ? now.getDate() : '0' + now.getDate();
    var hh = now.getHours() > 10 ? now.getHours() : '0' + now.getHours();
    var mm = now.getMinutes() > 10 ? now.getMinutes() : '0' + now.getMinutes();
    var ss = now.getSeconds() > 10 ? now.getSeconds() : '0' + now.getSeconds();
    var nowTime = YYYY + '-' + MM + '-' + DD + '  ' + hh + ':' + mm + ':' + ss;
    // 函数值返回外部
    return nowTime;
}



/**
 * 
 * @desc 小于10返回补0的数字字符串
 * @name newNumber
 * @param  {number} num
 * @return {string} 
 */
function newNumber(num) {
    //声明变量存储新字符串
    var newNum = number < 10 ? '0' + String(num) : String(num);
    // 将函数值返回给外部
    return newNum;
}




/**
 * 
 * @desc 闰年返回true，非闰年返回false
 * @specYear
 * @param  {number} year
 * @return {boolean} 
 */
function specYear(year) {
    //声明判断变量假设其为true
    var specYear = true;
    if (year % 4 === 0 && year % 100 !== 0) {
        specYear = specYear;
    } else if (year % 400 === 0) {
        specYear = specYear;
    } else {
        specYear = !specYear;
    }
    //将函数值返回函数外部
    return specYear;
}