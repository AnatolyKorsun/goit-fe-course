export const set = value => {
    localStorage.setItem('finder', JSON.stringify(value));
  };
//   меняем тоько имя переменной
  export const get = () => {
    const data = localStorage.getItem('finder');
  
    return data ? JSON.parse(data) : null;
  };