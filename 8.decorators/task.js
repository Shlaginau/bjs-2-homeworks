//Задача № 1

const md5 = require('js-md5');

function cachingDecoratorNew(func) {
  let cache = [];
  const maxCacheValuesCount = 5;
  
  return (...args) => {
    const hash = md5(args);
    let objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value); 
      return "Из кеша: " + objectInCache.value;
    }

    const result = func(...args);
    cache.push({hash: hash, value: result});

    if (cache.length > maxCacheValuesCount) { 
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
 };

 module.exports = {
  cachingDecoratorNew
}


//Задача № 2

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0; //количество вызовов декорированной функции
  wrapper.allCount = 0; //количество вызовов декоратора

  function wrapper(...args) {
    wrapper.allCount++;
     
    if (timeoutId === null) { 
      console.log("запускаем func");
      func(...args);
      wrapper.count++;
    }

    if (timeoutId) {
      console.log("удалили текущий таймаут");
      clearTimeout(timeoutId);
    }
    
    console.log("создаем текущий таймаут");
    
    timeoutId = setTimeout(() => {
      
      console.log("запускаем асинхронно func");
      func(...args);  
      wrapper.count++;
    }, delay);  
  }  
    return wrapper;
}
