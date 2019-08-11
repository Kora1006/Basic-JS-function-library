
    /**
     * 
     * @desc 对弹窗获取的一组数据求和。
     * @name calculate
     * @param  {object} arr（数组）
     * @return {number} 
     */
    function calculate(arr) {
        // 弹窗获取的数值为字符串的形式，需要生成数组
        var newArray = arr.split(','); // 此处分隔符可自行定义，将根据分隔符将输入的数据分隔成数组
        // 声明变量存放求和结果
        var sum = 0;
        // 使用for语句求和,定义变量i，i为数组的索引值
        for (var i = 0; i < newArray.length; i++) {
            sum += Number(newArray[i]); // 当前数组为字符串需要转为数值
        }
        // 判断sum的值是否为数值，如不是则提醒用户
        if (isNaN(sum)) {
            alert('您输入的数据有误，无法计算');
        }
        // 如函数外需要获得返回结果，则需使用return，否则默认返回undefined
        // 将sum的值返回，则外部可以获取
        return sum;
    }
    // 通过弹窗获取数值，并规定分隔符，需要与函数中要求的分隔符一致
    var arr = prompt('请输入一组数据并用“,”隔开');


    /**
     * 
     * @desc 对弹窗获取的一组数据求平均值。
     * @name averages
     * @param  {object} arr（数组）
     * @return {number} 
     */

    // 声明函数调用后可求平均值
    function average(arr) {
        // 弹窗获取的数值为字符串形式，需要生成数组
        var newArray = arr.split(','); // 此处分隔符可自行定义，将根据分隔符将输入的数据分隔成数组
        // 声明变量存放求和结果
        var sum = 0;
        // 声明变量存放平均值结果
        var averageNum;
        // 使用for语句求和，定义变量i，i为数组的索引值
        for (var i = 0; i < newArray.length; i++) {
            sum += Number(newArray[i]); // 当前数组为字符串需要转为数值
        }
        // 判断sum的值是否为数值，如不是则提醒用户
        if (isNaN(sum)) {
            alert('您输入的数据有误，无法计算');
        } else {
            // 求平均值
            averageNum = sum / newArray.length;
            // 显示结果
            alert('您输入的数值的平均值为' + averageNum);
            // 如函数外需要获得返回结果，则需使用return，否则默认返回undefined
            // 将averageNum的值返回，则外部可以获取
            return averageNum;
        }

    }
    // 通过弹窗获取数值，并规定分隔符，需要与函数中要求的分隔符一致
    var arr = prompt('请输入一组数据并用“,”隔开');


    /**
     * 
     * @desc 对弹窗获取的一组数据求最大值。
     * @name maxNum
     * @param  {object} arr（数组）
     * @return {number} 
     */

    function maxNum(arr) {
        // 弹窗获取的数据为字符串，需要通过分隔符转为数组，声明变量存放该数组
        var newArray = arr.split(',');
        // 声明变量存放最大值，先默认最大值为数组的第一个值,数值需要转为数值形式
        var max = +newArray[0];
        // 使用for语句遍历数组,声明变量i，i为数组的索引值
        for (var i = 0; i < newArray.length; i++) {
            // 使用if语句求最大值，数组需要转为数值形式
            if (+newArray[i] > max) {
                max = +newArray[i];
            }
        }
        // 如函数外需要获得返回结果，则需使用return，否则默认返回undefined
        // 将max的值返回，则外部可以获取
        return max;
    }
    // 通过弹窗获取数值，并规定分隔符，需要与函数中要求的分隔符一致
    var arr = prompt('请输入一组数据并用“,”隔开');
  






    /**
     * 
     * @desc 对弹窗获取的一组数据求最小值。
     * @name minNum
     * @param  {object} arr（数组）
     * @return {number} 
     */

    function minNum(arr) {
        // 弹窗获取的数据为字符串，需要通过分隔符转为数组，声明变量存放该数组
        var newArray = arr.split(',');
        // 声明变量存放最小值，先默认最大值为数组的第一个值,数值需要转为数值形式
        var min = +newArray[0];
        // 使用for语句遍历数组,声明变量i，i为数组的索引值
        for (var i = 0; i < newArray.length; i++) {
            // 使用if语句求最大值，数组需要转为数值形式
            if (+newArray[i] < min) {
                min = +newArray[i];
            }
        }
        // 如函数外需要获得返回结果，则需使用return，否则默认返回undefined
        // 将min的值返回，则外部可以获取
        return min;
    }
    // 通过弹窗获取数值，并规定分隔符，需要与函数中要求的分隔符一致
    var arr = prompt('请输入一组数据并用“,”隔开');
  
