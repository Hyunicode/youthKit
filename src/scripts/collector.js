import input from '@inquirer/input';
import select from '@inquirer/select';
import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';

const infoCollector = async () => {
  const name = await input({
    message: 'Enter component name',
    validate: (input) => {
      if (!input) return 'Component name is required';
      if (!/[a-zA-Z]/.test(input)) return 'Component name should contain at least one letter';
      if (!/^[a-zA-Z]+$/.test(input)) return 'Component name should only contain letters';
      return true;
    },
    transformer: (input) => input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(),
  }).then((input) => input.charAt(0).toUpperCase() + input.slice(1).toLowerCase());
  const name_cn = await input({
    message: 'Enter component Chinese name',
    validate: (input) => {
      if (!input) return 'Component Chinese name is required';
      if (!/[\u4e00-\u9fa5]/.test(input))
        return 'Component Chinese name should contain at least one Chinese character';
      return true;
    },
  });
  const desc = await input({
    message: 'Enter component description\n',
    validate: (input) => !!input || 'Component description is required',
    default: `this is a ${name} component.`,
  });
  const category = await select({
    message: 'Select component category',
    choices: [
      {
        name: 'Basic',
        value: 'basic',
        description: 'Basic components, like Button, Input, etc.',
      },
      {
        name: 'Data',
        value: 'data',
        description: 'Data components, like Table, Chart, etc.',
      },
      {
        name: 'Feedback',
        value: 'feedback',
        description: 'Feedback components, like Message, Notification, etc.',
      },
      {
        name: 'Form',
        value: 'form',
        description: 'Form components, like Checkbox, Radio, etc.',
      },
      {
        name: 'Navigation',
        value: 'navigation',
        description: 'Navigation components, like Menu, Tabs, etc.',
      },
      {
        name: 'Other',
        value: 'other',
        description: 'Other components.',
      },
    ],
    default: 'basic',
  });

  const META = { name, name_cn, desc, category };
  const LISTPATH = path.resolve(dirname(''), 'src/components/components.json');

  if (!fs.existsSync(LISTPATH)) fs.writeFileSync(LISTPATH, '{}');
  const list = JSON.parse(fs.readFileSync(LISTPATH, 'utf-8'));
  if (!list[META.category]) list[META.category] = [];
  const exist = list[META.category].find((item) => item.name === META.name);
  if (exist) {
    console.log('Component already exists');
    throw new Error('Component already exists');
  } else {
    list[META.category].push(META);
    fs.writeFileSync(LISTPATH, JSON.stringify(list, null, 2));
    fs.appendFileSync(LISTPATH, '\n');
    return META;
  }
};

export { infoCollector };
