import { expect, test, describe } from 'vitest';
import { YkPagination } from '../components/pagination';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

/**
 * @vitest-environment jsdom
 */
describe('TEST for Component Pagination', () => {
  test('render initialization', () => {
    const wrapper = mount(YkPagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();

    const el = wrapper.find('.yk-pagination');
    expect(el).not.toBeNull();
  });

  test('render with props', async () => {
    const wrapper = mount(YkPagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();

    const el = wrapper.find('.yk-pagination');
    expect(el).not.toBeNull();

    await wrapper.setProps({ total: 200, pageSize: 20, current: 2 });
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.unmount();
  });

  test('render with events', async () => {
    const wrapper = mount(YkPagination, {
      props: {
        total: 100,
        pageSize: 10,
        currentPage: 1,
        showTotal: true,
        showJumper: true,
      },
    });

    const Pagination = wrapper.findComponent(YkPagination);
    const buttons = wrapper.findAll('.yk-pagination__item');
    const len = buttons.length;
    await buttons[len - 2].trigger('click');
    await nextTick();
    expect(Pagination.emitted('change')).toBeTruthy();
    expect(Pagination.emitted('change')?.[0]?.[0]).toEqual({
      page: 10,
      pageSize: 10,
    });

    for (const button of buttons) {
      await button.trigger('click');
      await nextTick();
      expect(Pagination.emitted('change')).toBeTruthy();
    }

    expect(document.onkeydown).not.toBeNull();

    const jumper = wrapper.find('.yk-pagination__input').find('input');
    await jumper.setValue('5');
    await jumper.trigger('keydown.enter');
    await nextTick();
    expect(Pagination.emitted('change')).toBeTruthy();

    const dbArrows = wrapper.findAll('.yk-pagination__dbarrow');
    for (const arrow of dbArrows) {
      await arrow.trigger('click');
      await nextTick();
      expect(Pagination.emitted('change')).toBeTruthy();
    }

    const input = wrapper.find('.yk-pagination__input').find('input');
    await input.setValue('5');
    await input.trigger('keydown.enter');
    await nextTick();
    expect(Pagination.emitted('change')).toBeTruthy();

    await input.setValue('a');
    await input.trigger('keydown.enter');
    await nextTick();

    wrapper.unmount();
  });
});
