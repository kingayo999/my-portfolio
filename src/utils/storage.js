export const safeGetItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const safeSetItem = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Safari private mode and some mobile browsers block storage
  }
};
