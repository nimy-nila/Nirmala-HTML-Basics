words = ["one", "two", "three"];

function getShortestWord(wordsArray) {
	return wordsArray.sort((a, b) => a.length - b.length)[0];
}

console.log(getShortestWord(words));