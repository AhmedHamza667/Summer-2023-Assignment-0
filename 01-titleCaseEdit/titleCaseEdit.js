function titleCaseEdit(title) {
  // Insert code here;
    var words = title.split(" ");

    // Capitalize
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var firstLetter = word.charAt(0).toUpperCase();
        var restOfWord = word.slice(1).toLowerCase();
        words[i] = firstLetter + restOfWord;
    }

    // Join the words into a string
    var revisedTitle = words.join(" ");

    return revisedTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;