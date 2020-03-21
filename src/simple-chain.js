const chainMaker = {
  mas: [],
  getLength() {
    return this.mas.length;
  },
  addLink(value) {

    this.mas.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.getLength() || !Number.isInteger(position)) {
      this.mas = [];
      throw new Error();
    } else {
      this.mas.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.mas.reverse()
    return this;
  },
  finishChain() {
    const res = this.mas.join('~~');
    this.mas = [];
    return res;
  }
};

module.exports = chainMaker;