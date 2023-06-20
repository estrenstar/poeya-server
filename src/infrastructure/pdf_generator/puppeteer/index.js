const puppeteer = require('puppeteer');
const uuid = require('uuid');
const fs = require('fs-extra');
const report = require('puppeteer-report');
const path = require('path');

/**
 * Generate pdf file file from html content
 * @param {Object} templates
 * @param {Object} options
 * @param {Boolean} options.deleteExportedFile
 * @param {Function} onSuccessCallback
 * @param {Function} onFailureCallback
 * @returns
 */
async function generatePDFFromHTMLTemplate(templates = {}, options = {}, onSuccessCallback, onFailureCallback) {
  const { bodyTemplate } = templates;
  const { deleteExportedFile = true } = options;
  const exportedFilename = generateFilename();
  const options = {};
  if (process.env.NODE_ENV !== 'development') {
    options.executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || '/app/.apt/usr/bin/google-chrome';
  }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-dev-shm-usage', '--no-sandbox', '--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
      ...options,
    });
    const page = await browser.newPage();
    await page.goto('data:text/html,'.concat(bodyTemplate), { waitUntil: 'networkidle2', timeout: 0 });
    await page.setContent(bodyTemplate);
    await page.emulateMediaType('screen');

    const options = {
      path: exportedFilename,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.65cm',
        right: '0.85cm',
        bottom: '0.65cm',
        left: '0.85cm',
      },
    };
    await report.pdfPage(page, options);

    if (onSuccessCallback) await onSuccessCallback(exportedFilename);
  } catch (error) {
    if (onFailureCallback) onFailureCallback(error);
  } finally {
    if (deleteExportedFile) fs.unlink(exportedFilename, onFailureCallback);
  }
}

function generateFilename() {
  return path.join(__dirname, uuid.v1().concat('.pdf'));
}

module.exports = { generatePDFFromHTMLTemplate };
