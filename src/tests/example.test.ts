import { expect, test, describe } from 'vitest';
import { Example } from '../components/example';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

/**
 * @vitest-environment jsdom
 */
describe('TEST for Component Example', () => {
  test('render initialization', () => {
    expect(Example).toBeTruthy();
    const wrapper = mount(Example, {
      props: {
        text: '',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.unmount();
  });

  test('render with props', async () => {
    const randomText = Math.random().toString(36).substring(7);
    const wrapper = mount(Example, {
      props: {
        text: randomText,
      },
    });
    await nextTick();
    expect(wrapper.text()).toBe(randomText);
    wrapper.unmount();
  });

  test('render with events', async () => {
    const wrapper = mount(Example, {
      props: {
        text: '',
      },
    });
    await wrapper.trigger('click');
    const expectedText = 'hello_youthKit';
    const test_func = async (test: string) => {
      for (let i = 0; i < test.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        expect(wrapper.text()).toBe(test.slice(0, i + 1));
      }
    };
    await test_func(expectedText);
    expect(wrapper.text()).toBe(expectedText);
    await new Promise((resolve) => setTimeout(resolve, 1600));
    expect(wrapper.text()).toBe('');
    wrapper.unmount();
  });
});
