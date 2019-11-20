import { argv } from './config';
import { sendEmail } from './email';
import { readJson } from './file';

interface WebScrapingResult {
  name: string;
  price: string;
  detailLink: string;
}

function buildHtmlFromWebscrapingResult(json: string) {
  const results = JSON.parse(json) as WebScrapingResult[];

  let html = '';

  results.forEach(result => {
    html = html + `
      <p>
        <div><a href="${result.detailLink}">${result.name}</a></div>
        <div>${result.price}</div>
      </p>
    `;
  });

  return html;
}

readJson(argv.file)
  .then(data => {
    sendEmail(argv, buildHtmlFromWebscrapingResult(data));
  })
  .catch(err => console.error(err));