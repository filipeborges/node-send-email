import fs from 'fs';

function isJsonFile(jsonPath: string) {
  return jsonPath.toLocaleLowerCase().match(new RegExp('.+\.json$'));
}

export function readJson(jsonPath: string) {
  return new Promise((resolve, reject) => {
    if (!isJsonFile(jsonPath)) {
      return reject('File is not JSON');
    }
    fs.readFile(jsonPath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    })
  }) as Promise<string>;
}