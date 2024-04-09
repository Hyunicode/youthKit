import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';
import Handlebars from 'handlebars';

const tplReplacer = async (META) => {
  // tpls path
  const DEMOPATH = path.resolve(dirname(''), 'src/templates/docs/demo.vue.tpl');
  const READMEPATH = path.resolve(dirname(''), 'src/templates/README.md.tpl');
  const IMPLEPATH = path.resolve(dirname(''), 'src/templates/src/imple.vue.tpl');
  const INSTALLPATH = path.resolve(dirname(''), 'src/templates/install.ts.tpl');

  // read tpl
  const demoTpl = fs.readFileSync(DEMOPATH, 'utf-8');
  const readmeTpl = fs.readFileSync(READMEPATH, 'utf-8');
  const impleTpl = fs.readFileSync(IMPLEPATH, 'utf-8');
  const installTpl = fs.readFileSync(INSTALLPATH, 'utf-8');

  Handlebars.registerHelper('lowercase', (input) => input.toLowerCase());

  // replace tpls
  const demoRes = Handlebars.compile(demoTpl)(META);
  const readmeRes = Handlebars.compile(readmeTpl)(META);
  const impleRes = Handlebars.compile(impleTpl)(META);
  const installRes = Handlebars.compile(installTpl)(META);

  return { demoRes, readmeRes, impleRes, installRes };
};

export { tplReplacer };
