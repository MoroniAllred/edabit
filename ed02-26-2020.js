function isSameNum(num1, num2) {
	return num1 === num2
}

Test.assertEquals(isSameNum(4, 8), false)
Test.assertEquals(isSameNum(2, 2), true)
Test.assertEquals(isSameNum(0, 6), false)
Test.assertEquals(isSameNum(2, "2"), false)