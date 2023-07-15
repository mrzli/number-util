# Number util

Number utility functions.

## Install

```bash
npm install --save @gmjs/number-util
```

## API

- `parseFloatOrThrow(input: string): number`
  - Description
    - Parses a string to a float, or throws an error if the input is of invalid type or format.
  - Parameters
    - `input: string`
      - Description
        - The string to parse.
        - If anything other than a string is passed, an error is thrown.
        - String must exactly represent an integer or a float value in a specific format.
        - String may start with a `-` sign, or no sign. `+` signs are not allowed.
        - The whole part of the number must be a list of digits only.
        - The string may contain a decimal point, followed by a list of digits only. If there is a decimal point, there must be at least one digit after it.
        - In short, it must satisfy the following regular expression: `^-?\d+(?:\.\d+)?$`
  - Returns
    - `number` - The parsed float value.
- `parseIntegerOrThrow(input: string): number`
  - Description
    - Parses a string to an integer, or throws an error if the input is of invalid type or format.
  - Parameters
    - `input: string`
      - Description
        - The string to parse.
        - If anything other than a string is passed, an error is thrown.
        - String must exactly represent an integer value in a specific format.
        - String may start with a `-` sign, or no sign. `+` signs are not allowed.
        - The number part must be digits only.
        - In short, it must satisfy the following regular expression: `^-?\d+$`
  - Returns
    - `number` - The parsed integer value.
- `padNonNegativeIntWithZeroes(value: number, maxLength: number): string`
  - Description
    - Pads a non-negative integer with zeroes to the left, to the specified length.
  - Parameters
    - `value: number` - The integer to pad. A non-negative integer ie expected, otherwise an error is thrown.
    - `maxLength: number` - The length to pad to. A positive integer is expected, otherwise an error is thrown.
- `getRandomInteger(min: number, max: number): number` - Returns a random integer in the `[min, max>` range.
- `clampNumber(value: number, min: number, max: number): number`
  - Description
    - Clamps the `value` number to the specified range.
