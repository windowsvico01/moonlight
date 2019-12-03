export const CONTENT_CHANGE = '/Plugins/Editor/NUM_COUNT';

export function contentChange(content) {
    return {
      type: CONTENT_CHANGE,
      content,
    };
  }
