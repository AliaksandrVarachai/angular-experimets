const deepFreeze = (obj) => {
  Object.getOwnPropertyNames(obj).forEach((name) => {
    if (typeof obj[name] === 'object' && obj[name] !== null)
      deepFreeze(obj[name]);
  });
  return Object.freeze(obj);
}

class expect {
  static equal(obj, sampleObj) {
    let eq = true;
    const checkProps = (_obj, _sampleObj) => {
      Object.getOwnPropertyNames(_obj).forEach((name) => {
        if (!eq) return;
        let prop = _obj[name];
        let sampleProp = _sampleObj[name];
        if (typeof prop === 'object' && prop !== null && 
            typeof sampleProp === 'object' && sampleProp !== null) {
          checkProps(prop, sampleProp);
        } else if (typeof prop === 'function' && typeof sampleProp === 'function'){
          eq = prop.toString() === sampleProp.toString()
          console.log(expect.equal.toString())
        } else {
          eq = prop === sampleProp;
        }
      });
    }
    checkProps(obj, sampleObj);
    return eq;
  }
}

let o1 = {a: {b: function(a) {console.log(a)}}};
let o2 = {a: {b: function(a) {console.log(a)}}};
console.log(expect.equal(o1, o2));
deepFreeze(o1);
deepFreeze(o2);
o1.z = 555; // does not have effect because of freezing
console.log(expect.equal(o1, o2))

