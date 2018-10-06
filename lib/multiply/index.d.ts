/// <reference path="../_internal/_types/index.d.ts" />
import * as I from 'nanoutils/_internal/_types/index'


declare function multiply<T1, T2>(): I.CurriedFunction2<T1, T2, number>
declare function multiply<T1, T2>(t1: T1): I.CurriedFunction1<T2, number>
declare function multiply<T1, T2>(t1: T1, t2: T2): number

export default multiply
