const useLocalStroage = () => {
  function setValue(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function getValue(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  return { setValue, getValue };
};

export default useLocalStroage;
