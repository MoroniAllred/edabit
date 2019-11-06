function getContainer(product) {
	let container
  switch (product) {
		case "Bread":
			container = "bag"
			break
		case "Beer":
		case "Milk":
			container = "bottle"
			break
		case "Cerials":
			container = "box"
			break
		case "Eggs":
			container = "carton"
			break
		case "Candy":
			container = "plastic"
			break
		default:
			container = null
	}

	return container
}

Test.assertEquals(getContainer("Bread"), "bag")
Test.assertEquals(getContainer("Milk"), "bottle")
Test.assertEquals(getContainer("Beer"), "bottle")
Test.assertEquals(getContainer("Cerials"), "box")
Test.assertEquals(getContainer("Eggs"), "carton")
Test.assertEquals(getContainer("Candy"), "plastic")
Test.assertEquals(getContainer("Cheese"), null)