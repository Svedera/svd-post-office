// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const enumToString = (enumType: any, enumValue: any): string => {
  for (const enumMember in enumType) {
    if (enumType[enumMember] === enumValue) {
      // Split PascalCase
      const split = enumMember.match(/[A-Z][a-z]+|[0-9]+/g);

      if (split == null) {
        return 'Unknown';
      }

      // Lowercase all, except first word
      return split.reduce(
        (accumulator, current, index) => index === 0 ?
          `${accumulator} ${current}` :
          `${accumulator} ${current.toLowerCase()}`);
    }
  }
  return 'Unknown';
};
