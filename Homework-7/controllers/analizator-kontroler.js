const fs = require('fs');
const path = require('path');

const getAnalizator = (req, res) => {
  const filePath = path.join(__dirname, '..', 'views', 'analiza.html');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Serverska Greska');
    } else {
      res.send(data);
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

  const htmlResponse = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Резултати од анализата</title>
    </head>
    <body>
      <h2 style="color: salmon">Резултати од анализата:</h2>
      <p>Вкупен број на карактери: ${vkupnoKarakteri}</p>
      <p>Вкупен број на зборови помали од 5 карактери: ${zboroviPod5Karakteri}</p>
      <p>Вкупен број на зборови поголеми од 5 карактери: ${zboroviNad5Karakteri}</p>
      <p>Вкупен број на зборови со 5 карактери: ${zboroviSo5Karakteri}</p>
      <p>Број на реченици: ${recenici}</p>
      <p>Број на зборови: ${zborovi}</p>
      <p>Број на зборови кои почнуваат на една од следните букви: а, о, у, и, е: ${zboroviSoPocetnaBukva}</p>
    </body>
  </html>
`;

res.send(htmlResponse);
};

module.exports = {
  getAnalizator,
  postAnalizator,
};
