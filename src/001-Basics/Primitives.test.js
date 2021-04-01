const { sumOfTwo, sumOfAll } = require("./Primitives");
const tape = require("tape");

tape("-----sumOfTwo Test-----", (assert) => {
  assert.deepEqual(sumOfTwo(2, 2), 4, "Sum of 2 + 2 should equal 4");
  assert.deepEqual(sumOfTwo(-1, -6), -7, "Sum of -1 + -6 should equal -7");
  assert.deepEqual(
    sumOfTwo(2021, "random string"),
    "2021random string",
    "Sum of a number and string should return a string"
  );
  assert.end();
});

tape("-----sumOfAll Test-----", (assert) => {
  assert.deepEqual(
    sumOfAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
    55,
    "Sum of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 should return 55"
  );

  assert.end();
});
