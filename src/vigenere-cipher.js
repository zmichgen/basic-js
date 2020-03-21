class VigenereCipheringMachine {

    constructor(direct = true) {
        this.isDirect = direct;
    }

    encrypt(message, key) {
        if(!message || !key) {
            throw new Error();
        }
        const K = [...key];
        const M = [...message];
        while (K.length < M.length) {
            K.push(...K);
        }
        const result = M.map((item) => {
            return /[a-z]/i.test(item) ? String.fromCharCode(((item.toUpperCase().charCodeAt() - 65 + K.shift().toUpperCase().charCodeAt() - 65) % 26) + 65) : item;
        });
        return this.isDirect ? result.join('') : result.reverse().join('');
        
    }

    decrypt(message, key) {
        if(!message || !key) {
            throw new Error();
        }
        const K = [...key];
        const M = [...message];
        while (K.length < M.length) {
            K.push(...K);
        }
        const result = M.map(item => {
            
            if (/[a-z]/i.test(item)) {
                const decriptedLetter = (item.toUpperCase().charCodeAt() - 65 - K.shift().toUpperCase().charCodeAt() - 65 ) % 26;
                return String.fromCharCode((decriptedLetter < 0 ? decriptedLetter + 26 : decriptedLetter) +65);
              } else {
                  return item;
              }
        })
        return this.isDirect ? result.join('') : result.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
