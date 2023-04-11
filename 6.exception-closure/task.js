function parseCount(arg) {
  let count = Number.parseFloat(arg);
  if (isNaN(count)) {
    throw new Error('Невалидное значение');
  } else {
    return count;
  }
}

function validateCount(arg) {
  try {
    return parseCount(arg);
    
  } catch (error) {  
      return error;
  } 
}

class Triangle {
  constructor(a, b, c) {
    if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter() {
    return (this.a + this.b + this.c);  
  }

  get area() {
    const p = this.perimeter / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(s.toFixed(3));
  }
}

 function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch(error) {
        return {
          get perimeter() { return 'Ошибка! Треугольник не существует'; }, 
          get area() { return 'Ошибка! Треугольник не существует'; }
        }
      }
}