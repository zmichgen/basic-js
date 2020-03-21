module.exports =
    class DepthCalculator {

        calculateDepth = (arr, _depth = 1) => {
            let depth = _depth;
            for (let i = 0; i < arr.length; ++i) {
                if (Array.isArray(arr[i])) {
                    const Depth = this.calculateDepth(arr[i], _depth + 1);
                    if (Depth > depth) {
                        depth = Depth;
                    }
                }
            }
            return depth;
        }
    };