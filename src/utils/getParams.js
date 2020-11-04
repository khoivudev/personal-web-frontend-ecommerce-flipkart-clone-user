export const getParams = (query) => {
  if (query) {
    const params = query.split(/[?&]/gi).filter((e) => e !== null && e !== "");
    const paramsObj = {};
    params.forEach((param) => {
      const keyValue = param.split("=");
      paramsObj[keyValue[0]] = keyValue[1];
    });
    return paramsObj;
  }
  return {};
};
