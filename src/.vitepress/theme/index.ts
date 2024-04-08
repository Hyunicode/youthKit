import Theme from 'vitepress/theme';
import './theme.css';
import { youthKitPlugin } from '../../components';
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(youthKitPlugin);
  },
};
