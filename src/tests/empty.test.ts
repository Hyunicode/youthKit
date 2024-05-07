import { expect, test, describe } from 'vitest';
import { YkEmpty } from '../components/empty';
import { mount } from '@vue/test-utils';

/**
 * @vitest-environment jsdom
 */
describe('TEST for Component Empty', () => {
  test('render initialization', () => {
    expect(YkEmpty).toBeTruthy();
    const wrapper = mount(YkEmpty, {
      props: {},
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.unmount();
  });
});
