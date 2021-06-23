
// Variable types

let message: string = 'hello mars!!!'
let numberOfDogs: number = 35
let isOnline: boolean = true

message = 35

// =====================================

// Multiple Types

let example: boolean | number = true

example = 35

example = 'true'

// =======================================

// Recall that in some places, TypeScript 
// doesn’t try to infer any types for us and 
// instead falls back to the most lenient 
// type: any. This isn’t the worst thing that 
// can happen - after all, falling back to any 
// is just the plain JavaScript experience anyway.


let id: any = 710559077

id = '710559077'

let NewMessage = 'hello'

NewMessage = 12



































