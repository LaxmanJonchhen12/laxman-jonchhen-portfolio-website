export const setThemeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.add('dark');
    }
  })();
`;