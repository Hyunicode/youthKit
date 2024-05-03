import { expect, test, describe } from 'vitest';
import { YkIcon } from '../components/icon';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { YkIconProps } from '../components/icon';

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
      let randomSize: string | number = Math.floor(Math.random() * 100);
      if (Math.random() > 0.66) randomSize = `${randomSize}px`;
      else if (Math.random() > 0.33) randomSize = `${randomSize}`;
      const expectedSize = String(randomSize).includes('px') ? randomSize : `${randomSize}px`;
      const randomLoading = Math.random() > 0.5;
      const randomProps: YkIconProps = {
        name: 'add',
        color: undefined,
        size: undefined,
        loading: undefined,
      };
      if (Math.random() > 0.5) randomProps.color = randomColor;
      if (Math.random() > 0.5) randomProps.size = randomSize;
      if (Math.random() > 0.5) randomProps.loading = randomLoading;
      const wrapper = mount(YkIcon, {
        props: randomProps,
      });
      await nextTick();
      const iconSpan = wrapper.find('.yk-icon');
      expect(iconSpan.exists()).toBe(true);
      expect(wrapper.find('.is-loading').exists()).toBe(randomProps.loading === true);
      const style = iconSpan.attributes('style');
      const spanStyle = getComputedStyle(iconSpan.element) as CSSStyleDeclaration;
      if (randomProps.color) {
        expect(style).toContain(`--color: ${randomProps.color}`);
        expect(spanStyle.getPropertyValue('--color')).toBe(randomColor);
      }
      if (randomProps.size) {
        expect(style).toContain(`font-size: ${randomProps.size}`);
        expect(spanStyle.getPropertyValue('font-size')).toBe(expectedSize);
      }
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
