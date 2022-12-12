export function useSideA() {
  const storage = {
    set(k, v) {
      localStorage.setItem(k, v);
    },
    get(k) {
      localStorage.getItem(k);
    },
  };

  return [storage];
}
