export const NUM_COUNT = '/Hi/NUM_COUNT';

export function addCount(num) {
    return {
      type: NUM_COUNT,
      num,
    };
  }

