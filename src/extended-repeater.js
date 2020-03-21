module.exports = function repeater(str, options) {

    const addition = options && options.hasOwnProperty('addition') ? Array.from({
            length: options.additionRepeatTimes || 1
        },
        () => `${options.addition}` || '',
    ).join(options.additionSeparator || '') || '': '';
    const res = Array.from({
            length: options.repeatTimes || 1
        },
        () => `${str}${addition}`,
    ).join(options.separator || '+');
    return res;
};
