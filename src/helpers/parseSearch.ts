const parseSearch = <T extends object>(urlSearchParams: URLSearchParams): T => {
  return Object.fromEntries(urlSearchParams) as unknown as T;
};

export default parseSearch;