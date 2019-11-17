function sameCase(str) {
	if(str.toLowerCase() === str || str.toUpperCase() === str){
		return true
	}else {
		return false
	}
}

Test.assertEquals(sameCase("HELLO"), true)
Test.assertEquals(sameCase("HEllo"), false)
Test.assertEquals(sameCase("mArmALadE"), false)
Test.assertEquals(sameCase("marmalade"), true)
Test.assertEquals(sameCase("MARMALADE"), true)
Test.assertEquals(sameCase("ketchUP"), false)
Test.assertEquals(sameCase("pickle"), true)
Test.assertEquals(sameCase("MUSTARD"), true)