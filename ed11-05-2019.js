function isInRange(num, range) {
	if(num > range.max || num <range.min){
		return false
	}
	else{
		return true
	}
}

Test.assertEquals(isInRange(4, { min: 0, max: 5 }), true)
Test.assertEquals(isInRange(4, { min: 4, max: 5 }), true)
Test.assertEquals(isInRange(4, { min: 0, max: 4 }), true)
Test.assertEquals(isInRange(4, { min: 6, max: 10 }), false)
Test.assertEquals(isInRange(11, { min: 6, max: 10 }), false)
Test.assertEquals(isInRange(5, { min: 5, max: 5 }), true)
Test.assertEquals(isInRange(1.5, { min: 1.25, max: 1.75 }), true)
Test.assertEquals(isInRange(1.1, { min: 1.25, max: 1.75 }), false)
Test.assertEquals(isInRange(1.8, { min: 1.25, max: 1.75 }), false)
Test.assertEquals(isInRange(-1, { min: -1, max: 1 }), true)