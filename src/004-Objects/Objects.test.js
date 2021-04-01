const test = require("tape");
const { addPhone } = require("./Objects");

test("-----addPhone Test-----", (assert) => {
  const noPhone = { name: "Paco" };
  const noPrefix = { name: "Pepe", phone: "1234456" };
  const validPhone = { name: "Antonio", phone: "+34 1234456" };

  assert.deepEqual(
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
