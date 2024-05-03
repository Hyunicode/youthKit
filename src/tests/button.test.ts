import { expect, test, describe, vi } from 'vitest';
import { YkButton, YkButtonProps } from '../components/button';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

/**
 * @vitest-environment jsdom
 */
describe('TEST for Component Button', () => {
  test('render initialization', () => {
    const wrapper = mount(YkButton);
    expect(wrapper.html()).toContain('button');
  });

  test('render with props', async () => {
    const consoleError = vi.spyOn(console, 'error');

    // type: ['primary', 'success', 'warning', 'danger', 'info']
    const types: YkButtonProps['type'][] = ['primary', 'success', 'warning', 'danger', 'info'];
    for (const type of types) {
      const wrapper = mount(YkButton, {
        props: {
          type,
        },
      });
      await nextTick();
      expect(wrapper.html()).toContain(`yk-button--${type}`);
    }
    mount(YkButton, {
      props: {
        type: 'errorType' as YkButtonProps['type'],
      },
    });
    await nextTick();
    expect(consoleError).toHaveBeenCalled();

    // size: ['small', 'medium', 'large']
    const sizes: YkButtonProps['size'][] = ['small', 'normal', 'large'];
    for (const size of sizes) {
      const wrapper = mount(YkButton, {
        props: {
          size,
        },
      });
      await nextTick();
      expect(wrapper.html()).toContain(`yk-button--${size}`);
    }
    mount(YkButton, {
      props: {
        size: 'errorSize' as YkButtonProps['size'],
      },
    });
    await nextTick();
    expect(consoleError).toHaveBeenCalled();

    const f = async () => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      const randomTextColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      const randomProps: YkButtonProps = {
        type: 'primary',
        size: 'normal',
        color: undefined,
        textColor: undefined,
      };
      if (Math.random() > 0.5) randomProps.color = randomColor;
      if (Math.random() > 0.5) randomProps.textColor = randomTextColor;
      const wrapper = mount(YkButton, {
        props: randomProps,
      });
      await nextTick();
      const button = wrapper.find('button');
      const style = button.attributes('style');
      const buttonStyle = getComputedStyle(button.element) as CSSStyleDeclaration;
      if (randomProps.color) {
        expect(style).toContain(`--yk-button-bg-color: ${randomProps.color}`);
        expect(buttonStyle.getPropertyValue('--yk-button-bg-color')).toBe(randomColor);
        expect(buttonStyle.getPropertyValue('--yk-button-border-color')).toBe(randomColor);
      }
      if (randomProps.textColor) {
        expect(style).toContain(`--yk-button-text-color: ${randomProps.textColor}`);
        expect(buttonStyle.getPropertyValue('--yk-button-text-color')).toBe(randomTextColor);
      }
    };
    for (let i = 0; i < 100; i++) {
      await f();
    }

    // random loading and icon
    const g = async () => {
      const randomLoading = Math.random() > 0.5;
      const randomIcon = Math.random() > 0.5;
      const wrapper = mount(YkButton, {
        props: {
          loading: randomLoading,
          icon: randomIcon ? 'acute' : undefined,
        },
      });
      await nextTick();
      const button = wrapper.find('button');
      if (randomLoading) {
        const loading = button.find('.yk-button__content');
        expect(loading.html()).toContain('is-loading');
      }
      if (randomIcon) {
        expect(button.html()).toContain('yk-icon');
      }
    };
    for (let i = 0; i < 100; i++) {
      await g();
    }

    const wrapper = mount(YkButton, {
      props: {
        content: 'Click me',
      },
    });
    await nextTick();
    const content = wrapper.find('.yk-button__content');
    const children = content.element.children;
    expect(children.length).toBe(1);
    expect(children[0].textContent).toBe('Click me');
  });

  test('render with events', async () => {
    let count = 0;
    const randomTimes = Math.floor(Math.random() * 100);
    const wrapper = mount(YkButton, {
      props: {
        onClick: () => {
          count++;
        },
      },
      slots: {
        default: 'Click me',
      },
    });
    await nextTick();
    expect(count).toBe(0);
    await wrapper.trigger('click');
    expect(count).toBe(1);
    for (let i = 0; i < randomTimes; i++) {
      await wrapper.trigger('click');
    }
    expect(count).toBe(randomTimes + 1);
  });
});
