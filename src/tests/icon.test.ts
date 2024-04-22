import { expect, test, describe } from 'vitest';
import { YkIcon } from '../components/icon';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

/**
 * @vitest-environment jsdom
 */
describe('TEST for Component Icon', () => {
  test('render initialization', () => {
    expect(YkIcon).toBeTruthy();
    const wrapper = mount(YkIcon, {
      props: {
        name: 'add',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('.yk-icon').exists()).toBe(true);
    wrapper.unmount();
  });

  test('render with props', async () => {
    const f = async () => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      const randomSize = Math.floor(Math.random() * 100) + (Math.random() > 0.5 ? 'px' : '');
      const expectedSize = randomSize.endsWith('px') ? randomSize : `${randomSize}px`;
      const randomLoading = Math.random() > 0.5;
      const randomProps = {
        name: 'add',
        color: randomColor,
        size: randomSize,
        loading: randomLoading,
      };
      const wrapper = mount(YkIcon, {
        props: randomProps,
      });
      await nextTick();
      const iconSpan = wrapper.find('.yk-icon');
      expect(wrapper.find('.is-loading').exists()).toBe(randomLoading);
      expect(iconSpan.exists()).toBe(true);
      const style = iconSpan.attributes('style');
      expect(style).toContain(`--color: ${randomColor}`);
      expect(style).toContain(`font-size: ${expectedSize}`);
      const spanStyle = getComputedStyle(iconSpan.element) as CSSStyleDeclaration;
      expect(spanStyle.getPropertyValue('font-size')).toBe(expectedSize);
      expect(spanStyle.getPropertyValue('--color')).toBe(randomColor);
      const svg = iconSpan.find('svg');
      expect(svg.exists()).toBe(true);
    };
    for (let i = 0; i < 100; i++) {
      await f();
    }
  });

  test('render with events', async () => {
    let count = 0;
    const wrapper = mount(YkIcon, {
      props: {
        name: 'add',
        onClick: (event: MouseEvent) => {
          count++;
          console.log('click', event);
        },
      },
    });
    await wrapper.trigger('click');
    expect(count).toBe(1);

    wrapper.unmount();
  });
});
