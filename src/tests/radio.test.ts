import { expect, test, describe } from 'vitest';
import { YkRadio, YkRadioGroup } from '../components/radio';
import { mount } from '@vue/test-utils';
import { ref } from 'vue';

/**
 * @vitest-environment jsdom
 */
describe('TEST for Component Radio', () => {
  test('render initialization with props(Radio Group)', () => {
    const radio = ref('1');
    const radios = mount({
      components: { YkRadio, YkRadioGroup },
      template: `
        <yk-radio-group v-model="radio" @change="handleChange">
          <yk-radio label="1">OPTION 1</yk-radio>
          <yk-radio label="2" disabled border>OPTION 2</yk-radio>
          <yk-radio label="3" border>OPTION 3</yk-radio>
        </yk-radio-group>
      `,
      setup() {
        return { radio };
      },
      methods: {
        handleChange(val: string) {
          radio.value = val;
        },
      },
    });

    const radioGroup = radios.findComponent(YkRadioGroup);
    const radioGroupElement = radioGroup.element;

    expect(radioGroupElement.tagName).toBe('DIV');
    expect(radioGroupElement.classList.contains('yk-radio')).toBe(true);
    expect(radioGroupElement.children.length).toBe(3);

    const radiosElement = radioGroupElement.children;

    expect(radiosElement[0].classList.contains('is-checked')).toBe(true);
    expect(radiosElement[1].classList.contains('is-disabled')).toBe(true);
    expect(radiosElement[1].classList.contains('is-bordered')).toBe(true);
  });

  test('render initialization with props(Single Radio)', async () => {
    const radio = ref('');
    const radios = mount({
      components: { YkRadio },
      template: `
        <yk-radio v-model="radio" label="1">OPTION 1</yk-radio>
      `,
      setup() {
        return { radio };
      },
    });
    const singleRadio = radios.findComponent(YkRadio);

    const singleRadioInput = singleRadio.find('input[type="radio"]');
    await singleRadioInput.trigger('change');
    expect(radio.value).toBe('1');
  });

  test('render with events', async () => {
    const radio = ref('2');
    const currentRadio = ref('');
    const radios = mount({
      components: { YkRadio, YkRadioGroup },
      template: `
        <yk-radio-group v-model="radio" @change="handleChange">
          <yk-radio label="1">OPTION 1</yk-radio>
          <yk-radio label="2" disabled border>OPTION 2</yk-radio>
          <yk-radio label="3" border>OPTION 3</yk-radio>
        </yk-radio-group>
      `,
      setup() {
        return { radio };
      },
      methods: {
        handleChange(val: string) {
          currentRadio.value = val;
        },
      },
    });

    const radioGroup = radios.findComponent(YkRadioGroup);

    const radioInput = radioGroup.findAll('input[type="radio"]')[2];
    await radioInput.trigger('change');
    expect(currentRadio.value).toBe('3');
  });
});
