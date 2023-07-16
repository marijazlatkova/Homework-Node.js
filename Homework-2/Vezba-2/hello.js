//* 2. Make a hello world function and require it => local module
const helloWorld = () => {
  console.log('Hello World!');
}

module.exports = {
  helloWorld,
};