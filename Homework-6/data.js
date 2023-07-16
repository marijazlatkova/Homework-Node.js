const fs = require("fs");
const filename = "data.json";

const read = async () => {
  return new Promise ((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        return fail(err);
      } else {
        data = JSON.parse(data);
        return success(data)
      }
    });
  });
};

const write = async (data) => {
  return new Promise ((success, fail) => {
    data = JSON.stringify(data, null, 2);
    fs.writeFile(filename, data, (err) => {
      if (err) {
        return fail(err);
      } else {
        return success();
      }
    });
  });
};

module.exports = {
  read,
  write,
};