function wordLengths(arr) {
	const lengths = []
	for(i = 0; i < arr.length; i ++){
		lengths.push(arr[i].length)
	}
	return lengths
}

Test.assertSimilar(wordLengths(["hello", "world"]), [5, 5], "Example #1")
Test.assertSimilar(wordLengths(["Halloween", "Thanksgiving", "Christmas"]), [9, 12, 9], "Example #2")
Test.assertSimilar(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]), [3, 5, 9, 4, 2, 3, 8], "Example #3")
Test.assertSimilar(wordLengths(["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"]), [7, 5, 3, 3, 6, 2, 4])
Test.assertSimilar(wordLengths(["Programming", "is", "fun"]), [11, 2, 3])