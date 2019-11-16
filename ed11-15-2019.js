function firstLast(arr) {
	newArr = [arr[0], arr[arr.length - 1]]
	return newArr
}

Test.assertSimilar(firstLast([5, 10, 15, 20, 25]), [5, 25])
Test.assertSimilar(firstLast(["edabit", 13, null, false, true]), ["edabit", true])
Test.assertSimilar(firstLast([undefined, 4, "6", "hello", null]), [undefined, null])
Test.assertSimilar(firstLast(["hello", "edabit", "dot", "com"]), ["hello", "com"])
Test.assertSimilar(firstLast([3, 2, 1]), [3, 1])
Test.assertSimilar(firstLast(["one", "two"]), ["one", "two"])
Test.assertSimilar(firstLast([false, false, true, false, false, true, false]), [false, false])