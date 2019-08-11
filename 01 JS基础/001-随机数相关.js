
    /**
     * 
     * @desc 随机0~n整数。
     * @name getRandomNum
     * @param  {number} num
     * @return {number} 
     */

    function getRandomNum(num) {
        // 获取随机数并通过向下取整获取整数
        // 可生成≥0且≤num的随机整数
        var randomNum = Math.floor(Math.random() * (num + 1));
        // 函数返回值
        return randomNum;
    }






    /**
     * 
     * @desc 返回 n ~ m 随机数
     * @name getRandomNum
     * @param  {number}  n,m 
     * @return {number} 
     */
    function getRandomNum(n, m) {
        return Math.floor(Math.random() * (m + 1) + n);
    }




    /**
     * 
     * @desc 返回rgb(xx,xx,xx)颜色。
     * @name getRandomColor
     * @return {string} 
     */
    function getRandomColor() {
        // 声明变量存储颜色值
        var nums1 = Math.floor(Math.random() * 255);
        var nums2 = Math.floor(Math.random() * 255);
        var nums3 = Math.floor(Math.random() * 255);
        var color = 'rgb(' + nums1 + ',' + nums2 + ',' + nums3 + ')';
        // 函数返回值
        return color;
    }
