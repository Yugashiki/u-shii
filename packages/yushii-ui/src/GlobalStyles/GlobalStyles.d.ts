import { GlobalStylesProps as StyledGlobalStylesProps } from '@yushii/system';
import { Theme } from '../styles';

export interface GlobalStylesProps {
  /**
   * The styles you want to apply globally.
   */
  styles: StyledGlobalStylesProps<Theme>['styles'];
}

export default function GlobalStyles(props: GlobalStylesProps): React.ReactElement<unknown>;
