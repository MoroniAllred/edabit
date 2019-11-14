function nextElement(arr) {
	return arr[arr.length -1] + arr[1] - arr[0]
}

Test.assertEquals(nextElement([3, 5, 7, 9]), 11) 
Test.assertEquals(nextElement([-5, -6, -7]), -8) 
Test.assertEquals(nextElement([2, 2, 2, 2, 2]), 2)