const { trafficLight, sumOfTwoNumbers, divOfTwoNumbers } = require("./Logic");
const tape = require("tape");

tape("-----trafficLight Test-----", (assert) => {
  assert.deepEqual(
    trafficLight("red"),
    "green",
    "Traffic Light after red should be green"
  );

  assert.deepEqual(
    trafficLight("green"),
    "yellow",
    "Traffic Light after green  should be yellow"
  );

  assert.deepEqual(
    trafficLight("yellow"),
    "red",
    "Traffic Light after yellow should be red"
  );

  assert.deepEqual(
    trafficLight("ReD"),
    "green",
    "Traffic Light after ReD should be green"
  );

  assert.deepEqual(
    trafficLight("yeLlOw"),
    "red",
    "Traffic Light after yeLlOw should be red"
  );

  assert.deepEqual(
    trafficLight("pink"),
    "Not a traffic light",
    `If not red,green or yellow it should return "Not a traffic light", `
  );

  assert.end();
});

tape("-----sumOfTwoNumbers Test-----", (assert) => {
  assert.deepEqual(
    sumOfTwoNumbers(4, 20),
    false,
    "Sum of 4 + 20 should return false"
  );
  assert.deepEqual(
    sumOfTwoNumbers(20, 20),
    40,
    "Sum of 20 + 20 should return 40"
  );

  assert.deepEqual(
    sumOfTwoNumbers(35, 35),
    70,
    "Sum of 35 + 35 should return 70"
  );
  assert.deepEqual(
    sumOfTwoNumbers(4, "randomString"),
    false,
    "Sum of number and string should return false"
  );

  assert.deepEqual(
    sumOfTwoNumbers(30, "randomString"),
    false,
    "Sum of number and string should return false"
  );

  assert.end();
});

tape("-----divOfTwoNumbers Test-----", (assert) => {
  assert.deepEqual(divOfTwoNumbers(10, 5), 2, "10/5 should return 2");
  assert.deepEqual(divOfTwoNumbers(2, 0), 4, "2/0 should return 4");
  assert.deepEqual(divOfTwoNumbers(0, 10), 20, "0/10 should return 0");
  assert.deepEqual(divOfTwoNumbers(0, 0), "Error", `0/0 should return "Error"`);

  assert.end();
});
