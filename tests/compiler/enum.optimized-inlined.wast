(module
 (type $i (func (result i32)))
 (type $v (func))
 (global $enum/NonConstant.ZERO (mut i32) (i32.const 0))
 (global $enum/NonConstant.ONE (mut i32) (i32.const 0))
 (memory $0 1)
 (export "memory" (memory $0))
 (start $start)
 (func $start (; 0 ;) (type $v)
  (set_global $enum/NonConstant.ZERO
   (block (result i32)
    (block $__inlined_func$enum/getZero (result i32)
     (i32.const 0)
    )
   )
  )
  (set_global $enum/NonConstant.ONE
   (i32.add
    (get_global $enum/NonConstant.ZERO)
    (i32.const 1)
   )
  )
 )
)
