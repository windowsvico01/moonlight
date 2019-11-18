export const NUM_COUNT = '/Home/NUM_COUNT';

export function addCount(num) {
    return {
      type: NUM_COUNT,
      num,
    };
  }

