import axios from 'axios';

import { baseApiUrl } from '../config';

export const api = axios.create({ baseURL: baseApiUrl });

// helper function to use styled-jsx to style 3rd party libraries
// https://github.com/zeit/styled-jsx#styling-third-parties--child-components-from-the-parent
export const resolveScopedStyles = scope => ({
  className: scope.props.className,
  styles: scope.props.children,
});
