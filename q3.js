const student = {Name:"ram",age:18};
Object.preventExtensions(student);
let ExtensibleStatus = Object.isExtensible(student);
const teacher = {subject:"Math"};
Object.seal(teacher);
const issealed = Object.isSealed();
console.log(ExtensibleStatus);
console.log(issealed);