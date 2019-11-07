function volPizza(radius, height) {
	return Math.round(radius * radius * height * 3.14159)
}

Test.assertEquals(volPizza(1, 1), 3, "Example #1");
Test.assertEquals(volPizza(7, 2), 308, "Example #2");
Test.assertEquals(volPizza(10, 2.5), 785, "Example #3");
Test.assertEquals(volPizza(15, 1.3), 919);
Test.assertEquals(volPizza(20, 1), 1257);
Test.assertEquals(volPizza(13, 2), 1062);