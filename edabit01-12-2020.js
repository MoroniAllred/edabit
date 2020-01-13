function limitNumber(num, rangeLow, rangeHigh) {
	if(num >= rangeLow & num <= rangeHigh){
		return num
	}else if(num > rangeHigh){
		return rangeHigh
	}else{
		return rangeLow
	}
}

Test.assertEquals(limitNumber(5, 1, 10), 5)
Test.assertEquals(limitNumber(-3, 1, 10), 1)
Test.assertEquals(limitNumber(14, 1, 10), 10)
Test.assertEquals(limitNumber(4.6, 1, 10), 4.6)
Test.assertEquals(limitNumber(-100, -73, -70), -73)
Test.assertEquals(limitNumber(2, -73, -70), -70)
Test.assertEquals(limitNumber(-71.5, -73, -70), -71.5)
Test.assertEquals(limitNumber(7, 8, 8.1), 8)
Test.assertEquals(limitNumber(9, 8, 8.1), 8.1)
Test.assertEquals(limitNumber(8.05, 8, 8.1), 8.05)
Test.assertEquals(limitNumber(16, 16, 16), 16)
Test.assertEquals(limitNumber(-1, 16, 16), 16)
Test.assertEquals(limitNumber(800, 16, 16), 16)