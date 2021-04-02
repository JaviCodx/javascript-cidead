const test = require("tape");
const { addPhone, addToObject } = require("./Objects");

test("-----addPhone Test-----", (assert) => {
  const noPhone = { name: "Paco" };
  const noPrefix = { name: "Pepe", phone: "1234456" };
  const validPhone = { name: "Antonio", phone: "+34 1234456" };

  assert.deepEqual(
    addPhone(noPhone) &&
      addPhone(noPhone).hasOwnProperty("phone") &&
      addPhone(noPhone).phone.includes("+34"),
    true,
    `{name: "Paco"} should return {name: "Paco", phone:  "+34 1234456"}`
  );

  assert.deepEqual(
    addPhone(noPrefix),
    { name: "Pepe", phone: "+34 1234456" },
    `{name: "Pepe", phone: "1234456"} should return {name: "Pepe", phone: "+34 1234456"}`
  );

  assert.deepEqual(
    addPhone(validPhone),
    { name: "Antonio", phone: "+34 1234456" },
    `{name: "Antonio", phone: "+34 1234456"} should return {name: "Antonio", phone: "+34 1234456"}`
  );

  assert.end();
});

test("-----addToObject Test-----", (assert) => {
  const test1 = [
    ["name", "Paco"],
    ["phone", "+34 1234456"],
  ];
  const test2 = [
    ["name", "Pepe"],
    ["phone", "+34 1234456"],
    ["age", 50],
  ];

  assert.deepEqual(
    addToObject(test1),
    { name: "Paco", phone: "+34 1234456" },
    `[["name","Paco"],["phone","+34 1234456"]] should return {name: "Paco", phone : "+34 1234456"}`
  );

  assert.deepEqual(
    addToObject(test2),
    { name: "Pepe", phone: "+34 1234456", age: 50 },
    `[["name","Pepe"],["phone","+34 1234456"],["age",50]] should return {name: "Pepe", phone:"+34 1234456", age:50}`
  );

  assert.end();
});
