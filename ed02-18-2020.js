function isLastCharacterN(word) {
	if(word[word.length - 1] === "n"){
		return true
	}else{
		return false
	}
}

Test.assertEquals(isLastCharacterN("Aiden"), true)
Test.assertEquals(isLastCharacterN("Roxy"), false)
Test.assertEquals(isLastCharacterN("Bert"), false)
Test.assertEquals(isLastCharacterN("Dean"), true)
Test.assertEquals(isLastCharacterN("Ian"), true)
Test.assertEquals(isLastCharacterN("Brian"), true)
Test.assertEquals(isLastCharacterN("Daniel"), false)