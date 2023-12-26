import { describe, expect, it } from '@jest/globals';
import { parseFloatOrThrow } from './parse-float';

describe('parse-float', () => {
  describe('parseFloatOrThrow()', () => {
    describe('valid', () => {
      interface Example {
        readonly input: string;
        readonly expected: number;
      }

      const EXAMPLES: readonly Example[] = [
        {
          input: '0',
          expected: 0,
        },
        {
          input: '1',
          expected: 1,
        },
        {
          input: '5',
          expected: 5,
        },
        {
          input: '55',
          expected: 55,
        },
        {
          input: '-1',
          expected: -1,
        },
        {
          input: '-55',
          expected: -55,
        },
        {
          input: '1.0',
          expected: 1,
        },
        {
          input: '1.01',
          expected: 1.01,
        },
        {
          input: '-1.2',
          expected: -1.2,
        },
      ];

      for (const example of EXAMPLES) {
        it(JSON.stringify(example), () => {
          expect(parseFloatOrThrow(example.input)).toEqual(example.expected);
        });
      }
    });

    describe('throws', () => {
      interface Example {
        readonly input: string;
      }

      const EXAMPLES: readonly Example[] = [
        {
          input: '',
        },
        {
          input: ' ',
        },
        {
          input: 'a',
        },
        {
          input: '11a',
        },
        {
          input: '11.',
        },
        {
          input: 'a11',
        },
        {
          input: ' 11',
        },
        {
          input: '+1',
        },
        {
          input: '1.',
        },
        {
          input: '-1.',
        },
        {
          input: '1e5',
        },
        {
          input: '1,2',
        },
        {
          input: '1.2.3',
        },
        {
          input: {} as string,
        },
      ];

      for (const example of EXAMPLES) {
        it(JSON.stringify(example), () => {
          expect(() => parseFloatOrThrow(example.input)).toThrowError();
        });
      }
    });
  });
});
