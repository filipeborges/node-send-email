import { argv } from './config';
import { sendEmail } from './email';
import { readJson } from './file';

readJson(argv.file)
  .then(data => {
    sendEmail(argv, data);
  })
  .catch(err => console.error(err));