# TypeScript Type Coercion Leading to Runtime Errors

This repository demonstrates a subtle but common error in TypeScript: type coercion leading to unexpected runtime errors.  TypeScript's flexibility with type coercion can mask potential issues that only manifest during execution.

The `bug.ts` file contains a function that adds two numbers, but due to type coercion, it accepts a string as the second argument. This results in `NaN` being returned.

The `bugSolution.ts` file shows how to mitigate this by using stricter type checking and avoiding implicit type coercion.