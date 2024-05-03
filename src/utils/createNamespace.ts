type VOID0 = void | null | undefined;
type Class = string | VOID0;
type ReturnBoolean = boolean | VOID0 | (() => boolean | VOID0);
type ReturnClass = Class | [ReturnBoolean, Class, Class?];
const createNamespace = (name: string) => {
  const namespace = `yk-${name}`;

  /**
   * @description BEM 命名规范, 当 suffix 为空时返回 namespace, 否则返回 namespace + suffix,
   * @description 如果 suffix 以 -- 开头, 代表是一个 block 的 modifier, 否则是一个 element
   * @param suffix
   * @returns
   */
  const BEM = (suffix?: string): string => {
    return suffix
      ? suffix.startsWith('--')
        ? `${namespace}${suffix}`
        : `${namespace}__${suffix}`
      : namespace;
  };

  /**
   * @description classes 函数用于处理多个 class 的情况, 支持条件判断, 返回一个 class 数组
   * @param classes
   * @returns
   */
  const classes = (classes: ReturnClass[]): Class[] => {
    return classes.map((className) => {
      if (Array.isArray(className)) {
        const [condition, truthy, falsy = null] = className;
        return condition ? truthy : falsy;
      }
      return className;
    });
  };
  return {
    BEM,
    classes,
  };
};

export { createNamespace };
