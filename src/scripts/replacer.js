import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';
import Handlebars from 'handlebars';

const tplReplacer = async (META) => {
  // tpls path
  const demoPath = path.resolve(dirname(''), 'src/templates/components/docs/demo.vue.tpl');
  const readmePath = path.resolve(dirname(''), 'src/templates/components/README.md.tpl');
  const implePath = path.resolve(dirname(''), 'src/templates/components/src/imple.vue.tpl');
  const installPath = path.resolve(dirname(''), 'src/templates/components/install.ts.tpl');
  const testPath = path.resolve(dirname(''), 'src/templates/test/index.test.ts.tpl');

  // read tpl
  const demoTpl = fs.readFileSync(demoPath, 'utf-8');
  const readmeTpl = fs.readFileSync(readmePath, 'utf-8');
  const impleTpl = fs.readFileSync(implePath, 'utf-8');
  const installTpl = fs.readFileSync(installPath, 'utf-8');
  const testTpl = fs.readFileSync(testPath, 'utf-8');

  Handlebars.registerHelper('lowercase', (input) => input.toLowerCase());
  Handlebars.registerHelper('mustache', (name) => `{{ ${name.toLowerCase()}Text || text }}`);

  // replace tpls
  const demoRes = Handlebars.compile(demoTpl)(META);
  const readmeRes = Handlebars.compile(readmeTpl)(META);
  const impleRes = Handlebars.compile(impleTpl)(META);
  const installRes = Handlebars.compile(installTpl)(META);
  const testRes = Handlebars.compile(testTpl)(META);

  return { demoRes, readmeRes, impleRes, installRes, testRes };
};

export { tplReplacer };
