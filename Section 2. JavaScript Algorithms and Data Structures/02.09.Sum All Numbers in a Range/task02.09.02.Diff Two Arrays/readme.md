Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

---

`diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])` should return an array.
* `["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return `["pink wool"]`.
* `res["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return an array with one item.
* `res["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return `["diorite", "pink wool"]`.
* `res["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]` should return an array with two items.
* `res["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` should return `[]`.
* `res["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]` should return an empty array.
* `res[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return `[4]`.
* `res[1, 2, 3, 5], [1, 2, 3, 4, 5]` should return an array with one item.
* `res[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return `["piglet", 4]`.
* `res[1, "calf", 3, "piglet"], [1, "calf", 3, 4]` should return an array with two items.
* `res[], ["snuffleupagus", "cookie monster", "elmo"]` should return `["snuffleupagus", "cookie monster", "elmo"]`.
* `res[], ["snuffleupagus", "cookie monster", "elmo"]` should return an array with three items.
* `res[1, "calf", 3, "piglet"], [7, "filly"]` should return `[1, "calf", 3, "piglet", 7, "filly"]`.
* `res[1, "calf", 3, "piglet"], [7, "filly"]` should return an array with six items.