function lampStatus() {
	if(lamp === "off"){
		return false
	}else{
		return true
	}
}

Test.assertEquals((lamp = `off`, lampStatus()), false)
Test.assertEquals(lampStatus(), false)
Test.assertEquals((lamp = `on`, lampStatus()), true)
Test.assertEquals((lamp = `off`, lampStatus()), false)
Test.assertEquals((lamp = `on`, lampStatus()), true)
Test.assertEquals(lampStatus(), true)
Test.assertEquals((lamp = `off`, lampStatus()), false)
Test.assertEquals((lamp = `on`, lampStatus()), true)
Test.assertEquals(lampStatus(), true)
Test.assertEquals((lamp = `off`, lampStatus()), false)
Test.assertEquals((lamp = `on`, lampStatus()), true)