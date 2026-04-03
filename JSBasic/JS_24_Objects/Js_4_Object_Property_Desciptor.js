const usrealobj= { property :'browser'};
console.log(Object.getOwnPropertyDescriptor(usrealobj,'property'));// it will return the property descriptor of the property 'property' in the usrealobj object, which is { value: 'browser', writable: true, enumerable: true, configurable: true }
  //
//   {
//   value: 'browser',
//   writable: true, ← can change the value
//   enumerable: true, ← shows in for...in / Object.keys()
//   configurable: true ← can delete or redefine


  