import { expect, test, describe } from 'vitest';
import { YkSpin } from '../components/spin';
import { mount } from '@vue/test-utils';

/**
 * @vitest-environment jsdom
 */
describe('TEST for Component Spin', () => {
  test('render initialization', () => {
    expect(YkSpin).toBeTruthy();
    const wrapper = mount(YkSpin, {
      props: {},
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.unmount();
  });
});
