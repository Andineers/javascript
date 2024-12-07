import assert from "node:assert";
import test from "node:test";
import { sum } from "./index.js";


test("Mengembalikan hasil penjumlahan dua angka positif", () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 15), 25);
});


test("Mengembalikan hasil penjumlahan jika salah satu parameter adalah 0", () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(10, 0), 10);
  assert.strictEqual(sum(0, 0), 0);
});


test("Mengembalikan NaN jika salah satu parameter bukan angka", () => {
  assert.ok(isNaN(sum("3", 5)));
  assert.ok(isNaN(sum(10, "20")));
  assert.ok(isNaN(sum(true, null)));
  assert.ok(isNaN(sum(undefined, [])));
});

// Pengujian untuk bilangan negatif
test("Mengembalikan hasil penjumlahan jika parameter negatif", () => {
  assert.strictEqual(sum(-1, -5), -6);
  assert.strictEqual(sum(-10, 5), -5);
  assert.strictEqual(sum(10, -20), -10);
});
