'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
  var newcollection=[];

  newcollection = collectionA.map(a=>a.key);
  result = newcollection.filter(a=>objectB.value.includes(a));

  return result;







  //return 'Implement the practice require, and begin changing code in this row';
}
