const test = require("tape");
const { sumOfArrays, typeOfArray, concatOfArrays } = require("./Arrays");

test("-----sumOfArrays Test-----", (assert) => {
  assert.deepEqual(
    sumOfArrays([1, 2, 3], [2, 6, 2]),
    [[6], [10]],
    "[1,2,3] and [2,6,2], should return [6] and [10]"
  );
  assert.deepEqual(
    sumOfArrays([1, 2, 3], [2, 6, 2], [2, 6, 2], [2, 6, 2]),
    [[6], [10], [10], [10]],
    "[1,2,3] ,[2,6,2], [2,6,2] and [2,6,2] should return [6],[10],[10],[10]"
  );
  assert.deepEqual(sumOfArrays([0], [0]), 0, "[0] and [0], should return 0");

  assert.end();
});

test("-----sumOfArrays Test-----", (assert) => {
  assert.deepEqual(
    typeOfArray([1, "asdfg", 2]),
    "number",
    `[1,"asdfg",2] should equal "number"`
  );

  assert.deepEqual(
    typeOfArray(["asdfg", "asdfg", 2]),
    "string",
    `["asdfg","asdfg",2] should equal "string"`
  );

  assert.deepEqual(
    typeOfArray([true, "asdfg", false]),
    "boolean",
    `[true,"asdfg",false] should equal "boolean"`
  );

  assert.deepEqual(
    typeOfArray([true, "asdfg", false, "asdfg"]),
    undefined,
    `[true,"asdfg",false, "asdfg"] should equal undefined`
  );

  assert.end();
});

test("-----concatOfArrays Test-----", (assert) => {
  assert.deepEqual(
    concatOfArrays([1, 2, 3], [2, 6, 2]),
    [1, 2, 3, 2, 6, 2],
    `[1, 2, 3], [2, 6, 2] should equal [1, 2, 3, 2, 6, 2]`
  );

  assert.deepEqual(
    concatOfArrays(["a", "b", "c"], [1, 2, 3], [2, 6, 2]),
    ["a", "b", "c", 1, 2, 3, 2, 6, 2],
    `["a", "b", "c"], [1, 2, 3], [2, 6, 2] should equal ["a", "b", "c", 1, 2, 3, 2, 6, 2]`
  );

  assert.end();
});
