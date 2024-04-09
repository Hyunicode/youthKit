import fs from 'fs';
import path from 'path';
import { exit } from 'node:process';
import { dirname } from 'node:path';
import { infoCollector } from './collector.js';
import { tplReplacer } from './replacer.js';
import { updater } from './updater.js';

const carpenter = async () => {
  let META;
  try {
    META = await infoCollector();
  } catch (error) {
    exit(1);
  }

  const { demoRes, readmeRes, impleRes, installRes, testRes } = await tplReplacer(META);

  // files path
  const lowerName = META.name.toLowerCase();
  const demoPath = path.resolve(dirname(''), `src/components/${lowerName}/docs/demo.vue`);
  const readmePath = path.resolve(dirname(''), `src/components/${lowerName}/README.md`);
  const implePath = path.resolve(dirname(''), `src/components/${lowerName}/src/${lowerName}.vue`);
  const installPath = path.resolve(dirname(''), `src/components/${lowerName}/index.ts`);
  const testPath = path.resolve(dirname(''), `src/tests/${lowerName}.test.ts`);

  // create and write files
  try {
    fs.mkdirSync(path.resolve(dirname(''), `src/components/${lowerName}/docs`), {
      recursive: true,
    });
    fs.mkdirSync(path.resolve(dirname(''), `src/components/${lowerName}/src`), { recursive: true });

    fs.writeFileSync(demoPath, demoRes);
    fs.writeFileSync(readmePath, readmeRes);
    fs.writeFileSync(implePath, impleRes);
    fs.writeFileSync(installPath, installRes);
    fs.writeFileSync(testPath, testRes);
    console.log('Files created successfully!');
  } catch (error) {
    console.error('Error writing files:', error);
    exit(1);
  }

  updater();
};

carpenter();
