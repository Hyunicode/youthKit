const svgs = import.meta.glob('../components/icon/src/svg/*.svg');

const validateIcon = (icon: string) => {
  if (`../components/icon/src/svg/${icon}.svg` in svgs) {
    return icon;
  }
  console.error(`Icon "${icon}" does not exist.`);
  return 'unknown_5';
};

export { validateIcon };
