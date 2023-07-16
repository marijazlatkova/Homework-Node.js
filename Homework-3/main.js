const fs = require('fs').promises;

const myInfo = {
  fullname: 'Marija Zlatkova',
  age: 26,
  profession: 'Software Engineer',
};

const data = `
fullname: ${myInfo.fullname}, 
age: ${myInfo.age}, 
profession: ${myInfo.profession}
`;

const newInfo = {
  hometown: 'Probishtip, North Macedonia',
  email: 'marijazlatkova44@yahoo.com',
  favoriteActivities: [
    'Watching Movies',
    ' Listening to Music',
    ' Travelling',
    ' Reading Books',
    ' Coding.',
  ],
};

const newData = `
hometown: ${newInfo.hometown}, 
email: ${newInfo.email}, 
favorite-activities: ${newInfo.favoriteActivities}`;

const fileName = 'myInfo.txt';

const files = async () => {
  try {
    await fs.writeFile(fileName, data);
    console.log('Data is written successfully.');

    const initialData = await fs.readFile(fileName, 'utf8');
    console.log('Read initial data from file:');
    console.log(initialData);

    await fs.appendFile(fileName, newData);
    console.log('Data is appended successfully.');

    const newDataWithAppend = await fs.readFile(fileName, 'utf8');
    console.log('Read data with append from file:');
    console.log(newDataWithAppend);
  } catch (error) {
    console.error('An error has occurred:', error);
  }
};

files();