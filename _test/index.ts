// 柯里化

// 假设有一个curry函数可以做到柯里化 var _ = {}; // 占位符 var fn = curry(function(a, b, c, d, e)  console.log([a, b, c, d, e]);

// 验证 输出全部都是 [1, 2, 3, 4, 5] fn(1, 2, 3, 4, 5); fn(_, 2, 3, 4, 5)(1); fn(1, _, 3, 4, 5)(2); fn(1, _, 3)(_, 4)(2)(5); fn(1, _, _, 4)(_, 3)(2)(5); fn(_, 2)(_, _, 4)(1)(3)(5);
