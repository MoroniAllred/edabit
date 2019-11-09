function getSequence(low, high) {
	arr = []
	for(let i = low; i < high + 1; i++){
		arr.push(i)
	}
	return arr
}

Test.assertSimilar(getSequence(1, 5), [1, 2, 3, 4, 5], "Example #1")
Test.assertSimilar(getSequence(98, 100), [98, 99, 100], "Example #2")
Test.assertSimilar(getSequence(1000, 1000), [1000], "Example #3")
Test.assertSimilar(getSequence(1450, 1460), [1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460])
Test.assertSimilar(getSequence(0, 3), [0, 1, 2, 3])
Test.assertSimilar(getSequence(-10, 1), [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0,  1])
Test.assertSimilar(getSequence(-100, -100), [-100])