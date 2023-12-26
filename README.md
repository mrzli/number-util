# Number util

Number utility functions.

## Install

```bash
npm install --save @gmjs/number-util
```

## Usage

```ts
import { clamp } from '@gmjs/number-util';

const output = clamp(15, 10, 12);
console.log(output);
// 12
```

## API

#### `clamp`

Clamps the `value` number to the specified range.

```ts
const output = clamp(15, 10, 12);
console.log(output);
// 12
```

#### `parseFloatOrThrow`

Parses a string to a float, or throws an error if the input is of invalid type or format.

The parsed string must match `^-?\d+(?:\.\d+)?$` regex to be considered valid.

```ts
const output = parseFloatOrThrow('15.123456');
console.log(output);
// 15.123456
```

Here are some examples of invalid inputs:

```ts
parseFloatOrThrow('a'); // throws
parseFloatOrThrow('15.'); // throws
parseFloatOrThrow('+15'); // throws
parseFloatOrThrow('.12'); // throws
parseFloatOrThrow('5e2'); // throws
```

#### `parseIntegerOrThrow`

Parses a string to an integer, or throws an error if the input is of invalid type or format.

The parsed string must match `^-?\d+$` regex to be considered valid.

```ts
const output = parseIntegerOrThrow('15');
console.log(output);
// 15
```

Here are some examples of invalid inputs:

```ts
parseIntegerOrThrow('a'); // throws
parseIntegerOrThrow('15.2'); // throws
parseIntegerOrThrow('+15'); // throws
```

#### `padNonNegativeIntWithZeroes`

Pads a non-negative integer with zeroes to the left, to the specified length.

```ts
const output = padNonNegativeIntWithZeroes(15, 5);
console.log(output);
// '00015'
```

#### `randomInteger`

Returns a random integer in the `[min, max>` range. In other words, the `min` value is inclusive, and the `max` value is exclusive.

For example, `randomInteger(10, 20)` will return a random integer between `10` and `19` inclusive, it will never return `20`.

```ts
const output = randomInteger(10, 20);
console.log(output);
// 15 (for example, but could be any integer between 10 and 19 inclusive)
```

#### `round`

Rounds the `value` number to the specified number of decimal places.

```ts
const output = round(15.123456, 2);
console.log(output);
// 15.12
```

If the `precision` parameter is omitted, the number is rounded to the nearest integer.

```ts
const output = round(15.123456);
console.log(output);
// 15
```
