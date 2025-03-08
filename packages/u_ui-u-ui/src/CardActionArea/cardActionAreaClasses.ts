import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface CardActionAreaClasses {
  /** Styles applied to the root element. */
  root: string;
  /** State class applied to the ButtonBase root element if the action area is keyboard focused. */
  focusVisible: string;
  /** Styles applied to the overlay that covers the action area when it is keyboard focused. */
  focusHighlight: string;
}

export type CardActionAreaClassKey = keyof CardActionAreaClasses;

export function getCardActionAreaUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiCardActionArea', slot);
}

const cardActionAreaClasses: CardActionAreaClasses = generateUtilityClasses('UshiiCardActionArea', [
  'root',
  'focusVisible',
  'focusHighlight',
]);

export default cardActionAreaClasses;
