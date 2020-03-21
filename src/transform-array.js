module.exports = function transform(arr) {
    const result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next': {
                    if (i < arr.length - 1) {
                        i++;
                        break;
                    }
                    break;
                }
                case '--discard-prev': {
                    if (result.length > 0) {
                        result.pop();
                        break;
                    }
                    break;
                }

                case '--double-prev': {
                    if (i > 0) {
                        result.push(arr[i - 1]);
                        break;
                    }
                    break;
                }

                case '--double-next': {
                    if (i < arr.length - 1) {
                        result.push(arr[i + 1]);
                        break;
                    }
                    break;
                }

                default: {
                    result.push(arr[i]);
                    break;
                }
            }
        }
        return result;
    } else {
        throw new Error('Not an Array!');
    }
};