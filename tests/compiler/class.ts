class Animal<T> {
  static ONE: i32 = 1;
  static add(a: i32, b: i32): i32 { return a + b + Animal.ONE; }
  static sub<T>(a: T, b: T): T { return a - b + <T>Animal.ONE; } // tsc does not allow this

  one: i32 = 1; // 4
  two: i16 = 2; // 6
  three: i8 = 3; // 7
  instanceAdd(a: i32, b: i32): i32 { return a + b + Animal.ONE; }
  instanceSub<T>(a: T, b: T): T { return a - b + <T>Animal.ONE; } // tsc does not allow this
}

assert(sizeof<Animal<f64>>() == 7);

Animal.ONE;
Animal.add(1,2);
Animal.sub<f32>(1, 2);

export function test(animal: Animal<f64>): Animal<f64> {
  animal.instanceAdd(1, 2);
  animal.instanceSub<f32>(1, 2);

  var ptr = changetype<usize>(animal);
  var cls = changetype<Animal<f64>>(ptr);
  return cls;
}
