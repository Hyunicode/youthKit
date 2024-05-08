import { expect, test, describe } from 'vitest';
import { YkSelect } from '../components/select';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

/**
 * @vitest-environment jsdom
 */
describe('TEST for Component Select', () => {
  test('render initialization', () => {
    expect(YkSelect).toBeTruthy();
    const wrapper = mount(YkSelect, {
      props: {
        text: '',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.unmount();
  });

  test('render with props', async () => {
    const randomText = Math.random().toString(36).substring(7);
    const wrapper = mount(YkSelect, {
      props: {
        text: randomText,
      },
    });
    await nextTick();
    expect(wrapper.text()).toBe(randomText);
    wrapper.unmount();
  });

  test('render with events', async () => {
    let count = 0;
    const wrapper = mount(YkSelect, {
      props: {
        text: '',
        onClick: (text: MouseEvent) => {
          count++;
          console.log('click', text);
        },
      },
    });
    await wrapper.trigger('click');
    expect(count).toBe(1);

    await wrapper.trigger('dblclick');
    expect(wrapper.text()).toBe('');

    const expectedText = 'hello_youthKit';
    const test_func = async (test: string) => {
      for (let i = 0; i < test.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        expect(wrapper.text()).toBe(test.slice(0, i + 1));
      }
    };
    await test_func(expectedText);
    expect(wrapper.text()).toBe(expectedText);
    await new Promise((resolve) => setTimeout(resolve, 600));
    expect(wrapper.text()).toBe('');

    wrapper.trigger('dblclick');
    await new Promise((resolve) => setTimeout(resolve, 350));
    wrapper.trigger('dblclick');
    expect(wrapper.text()).toBe('hel');

    wrapper.unmount();
  });
});
