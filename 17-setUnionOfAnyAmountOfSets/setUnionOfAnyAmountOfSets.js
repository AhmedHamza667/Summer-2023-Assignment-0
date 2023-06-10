function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
    const unionSet = new Set();

    for (const set of args) {
        for (const value of set) {
            unionSet.add(value);
        }
    }

    return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;