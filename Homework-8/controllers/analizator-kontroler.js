const fs = require('fs');
const path = require('path');

const getAnalizator = (req, res) => {
  const filePath = path.join(__dirname, '..', 'views', 'analiza.ejs');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Serverska Greska');
    } else {
      res.render('analiza-forma', { data });
    }
  });
};

const postAnalizator = (req, res) => {
  const text = req.body.text;

  const vkupnoKarakteri = text.length;
  const zboroviPod5Karakteri = text.split(' ').filter(word => word.length < 5).length;
  const zboroviNad5Karakteri = text.split(' ').filter(word => word.length > 5).length;
  const zboroviSo5Karakteri = text.split(' ').filter(word => word.length === 5).length;
  const recenici = text.split('.').length;
  const zborovi = text.split(' ').length;
  const zboroviSoPocetnaBukva = text.split(' ').filter(word => /^[аоуие]/i.test(word[0])).length;

  res.render('analiza', {
    vkupnoKarakteri,
    zboroviPod5Karakteri,
    zboroviNad5Karakteri,
    zboroviSo5Karakteri,
    recenici,
    zborovi,
    zboroviSoPocetnaBukva
  });
};

module.exports = {
  getAnalizator,
  postAnalizator,
};
