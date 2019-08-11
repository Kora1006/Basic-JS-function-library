
        /**
         * 
         * @desc 返回从小到大排序的数组
         * @name newArray
         * @param  {object} arr
         * @return {object} 
         */
        function newArray(arr) {
            // 外层循环控制比较轮数
            for (var i = 0; i < arr.length - 1; i++) {
                // 内存循环控制每轮比较次数
                for (var j = 0; j < arr.length - 1 - i; j++) {
                    // 使用if语句做判断数组中数值大小
                    if (arr[j] > arr[j + 1]) {
                        // 声明一个变量作为中间变量
                        var item = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = item;
                    }
                }
            }
            // 将结果返回函数外部
            return arr;
        }
