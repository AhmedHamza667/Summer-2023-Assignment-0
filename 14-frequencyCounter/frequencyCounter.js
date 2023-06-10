function frequencyCounter(word) {
  // Insert code here;
    var frequency = {};

    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if (frequency[letter]) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    }

    return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;