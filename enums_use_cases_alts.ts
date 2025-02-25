import { expectType, TypeEqual } from "ts-expect";

expectType<string>('abc')
expectType<number>(2025)

// equality types
type Pair<T> = [T, T]
expectType<TypeEqual<Pair<string>, [string, string]>>(true)

// an enum defines an object