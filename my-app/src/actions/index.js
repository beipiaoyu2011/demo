// export const addItem = text => {
//   return {
//     type: 'ADD_ITEM',
//     text
//   }
// }

export const action = ID => {
  const action = {}
  const arr = [
    '_setState',
    'addItem'
  ];
  arr.forEach(n=>{
    action[n] = (target)=>{
      return {
        _ID: ID,
        target: target,
        type: n
      }
    }
  })
  return action;
}

