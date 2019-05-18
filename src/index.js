import Foo, { generateRandom } from './Foo';


const foo = new Foo(generateRandom());
console.log(foo.value);
