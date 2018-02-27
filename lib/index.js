// helper function to use styled-jsx to style 3rd party libraries
// https://github.com/zeit/styled-jsx#styling-third-parties--child-components-from-the-parent
export const resolveScopedStyles = scope => ({
  className: scope.props.className,
  styles: scope.props.children,
});
