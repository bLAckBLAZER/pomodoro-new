export const setLocalStorage = (
  key: string,
  data: any,
  convertToString?: boolean
) => {
  try {
    if (convertToString) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  } catch (error) {
    throw new Error("Error while setting local storage!");
  }
};

export const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch {
    throw new Error("Error while removing item from Local storage!");
  }
};

export const getLocalStorage = (key: string, parseData?: boolean) => {
  try {
    if (parseData) {
      return JSON.parse(localStorage.getItem(key) ?? "{}");
    }

    return localStorage.getItem(key);
  } catch (err) {
    throw new Error("Error while getting item from Local storage!" + err);
  }
};
