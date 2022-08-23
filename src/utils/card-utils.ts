export const duplicateArray = <T>(array: T[]): T[] => {
  return [...array, ...array];
};

export const sortArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};
