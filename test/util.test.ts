/**
 * @file Utility tests.
 */
import {titleToCamel, titleToCamelProperties} from '../src/util';

describe('titleToCamel', () => {
  it('converts title case to camel case', () => {
    expect(titleToCamel('camelCase')).toBe('camelCase');
    expect(titleToCamel('Title')).toBe('title');
    expect(titleToCamel('TitleCase')).toBe('titleCase');
  });
});

describe('titleToCamelProperties', () => {
  it('converts property names of objects to camel case', () => {
    expect(titleToCamelProperties({
      Level1: {
        Level2: 'string',
        level21: {
          Level3: {
            level4: 'wat',
            level41: {
              Level5: 'value5'
            }
          }
        }
      }
    })).toEqual({
      level1: {
        level2: 'string',
        level21: {
          level3: {
            level4: 'wat',
            level41: {
              Level5: 'value5'
            }
          }
        }
      }
    });
  });
});
