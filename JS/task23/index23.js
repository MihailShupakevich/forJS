// 23 
// найти и исправить как можно больше ошибок, функция должна создавать полную копию объекта

function createCopy (data){
  if(typeof data !== 'object'){
    throw new Error('data must be is object')
  } //мы должны удостовериться что на вход нам приходит объект
  const copy = {
    meta: data.meta, 
    age : data.age,
    setting : data.setting ? { ...data.setting } : {} //для безопасного доступа к свойству объекта ставим "?"
  }
  if(copy.setting && copy.setting.title){ //проверяем- существует ли такое свойство
  const title = `new copy ${data.setting.title}`
  }
  else {
    copy.setting.title = 'Default value title'
      }
  return copy;
}