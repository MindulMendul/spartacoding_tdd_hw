export const trincateString: (str: string) => string = (str: string) => {
  return str.length > 10 ? str.substring(0, 10) + '...' : str;
};
