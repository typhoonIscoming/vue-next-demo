const judgePoint24 = (nums) => {
    const len = nums.length;
    if (len == 1) {                // 递归的出口
        return Math.abs(nums[0] - 24) < 1e-9;
    }
    let isValid = false;           // 用于控制是否进入递归

    for (let i = 0; i < len; i++) { // 两层循环，枚举出所有的两数组合
        for (let j = i + 1; j < len; j++) {
            const n1 = nums[i];
            const n2 = nums[j];     // 选出的两个数 n1 n2
            const newNums = [];     // 存放剩下的两个数
            for (let k = 0; k < len; k++) {
                if (k != i && k != j) {  // 剔除掉选出的两个数
                    newNums.push(nums[k]);
                }
            }
            // 加
            isValid = isValid || judgePoint24([...newNums, n1 + n2]);
            // 减与被减
            isValid = isValid || judgePoint24([...newNums, n1 - n2]);
            isValid = isValid || judgePoint24([...newNums, n2 - n1]);
            // 乘
            isValid = isValid || judgePoint24([...newNums, n1 * n2]);
            if (n2 !== 0) { // 除
                isValid = isValid || judgePoint24([...newNums, n1 / n2]);
            }
            if (n1 !== 0) { // 被除
                isValid = isValid || judgePoint24([...newNums, n2 / n1]);
            }
            if (isValid) {
                return true;
            }
        }
    }
    return false; // 遍历结束，始终没有返回真，则返回false
};
console.log(judgePoint24([1,2,3,4]));
