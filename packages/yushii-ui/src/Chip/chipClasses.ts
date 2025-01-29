import generateUtilityClasses from '@yushii/utils/generateUtilityClasses';
import generateUtilityClass from '@yushii/utils/generateUtilityClass';

export interface ChipClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: string;
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** Styles applied to the root element if `color="default"`. */
  colorDefault: string;
  /** Styles applied to the root element if `color="error"`. */
  colorError: string;
  /** Styles applied to the root element if `color="info"`. */
  colorInfo: string;
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** Styles applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** Styles applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
  clickable: string;
  /** Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`.
   * @deprecated Combine the [.YushiiChip-clickable](/material-ui/api/chip/#chip-classes-clickable) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  clickableColorPrimary: string;
  /** Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`.
   * @deprecated Combine the [.YushiiChip-clickable](/material-ui/api/chip/#chip-classes-clickable) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  clickableColorSecondary: string;
  /** Styles applied to the root element if `onDelete` is defined. */
  deletable: string;
  /** Styles applied to the root element if `onDelete` and `color="primary"` is defined.
   * @deprecated Combine the [.YushiiChip-deletable](/material-ui/api/chip/#chip-classes-deletable) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deletableColorPrimary: string;
  /** Styles applied to the root element if `onDelete` and `color="secondary"` is defined.
   * @deprecated Combine the [.YushiiChip-deletable](/material-ui/api/chip/#chip-classes-deletable) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deletableColorSecondary: string;
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: string;
  /** Styles applied to the root element if `variant="filled"`. */
  filled: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="primary"`.
   * @deprecated Combine the [.YushiiChip-outlined](/material-ui/api/chip/#chip-classes-outlined) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedPrimary: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="secondary"`.
   * @deprecated Combine the [.YushiiChip-outlined](/material-ui/api/chip/#chip-classes-outlined) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedSecondary: string;
  /** Styles applied to the root element if `variant="filled"` and `color="primary"`.
   * @deprecated Combine the [.YushiiChip-filled](/material-ui/api/chip/#chip-classes-filled) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  filledPrimary: string;
  /** Styles applied to the root element if `variant="filled"` and `color="secondary"`.
   * @deprecated Combine the [.YushiiChip-filled](/material-ui/api/chip/#chip-classes-filled) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  filledSecondary: string;
  /** Styles applied to the avatar element. */
  avatar: string;
  /** Styles applied to the avatar element if `size="small"`.
   * @deprecated Combine the [.YushiiChip-avatar](/material-ui/api/chip/#chip-classes-avatar) and [.YushiiChip-sizeSmall](/material-ui/api/chip/#chip-classes-sizeSmall) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  avatarSmall: string;
  /** Styles applied to the avatar element if `size="medium"`.
   * @deprecated Combine the [.YushiiChip-avatar](/material-ui/api/chip/#chip-classes-avatar) and [.YushiiChip-sizeMedium](/material-ui/api/chip/#chip-classes-sizeMedium) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  avatarMedium: string;
  /** Styles applied to the avatar element if `color="primary"`.
   * @deprecated Combine the [.YushiiChip-avatar](/material-ui/api/chip/#chip-classes-avatar) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  avatarColorPrimary: string;
  /** Styles applied to the avatar element if `color="secondary"`.
   * @deprecated Combine the [.YushiiChip-avatar](/material-ui/api/chip/#chip-classes-avatar) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  avatarColorSecondary: string;
  /** Styles applied to the icon element. */
  icon: string;
  /** Styles applied to the icon element if `size="small"`.
   * @deprecated Combine the [.YushiiChip-icon](/material-ui/api/chip/#chip-classes-icon) and [.YushiiChip-sizeSmall](/material-ui/api/chip/#chip-classes-sizeSmall) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  iconSmall: string;
  /** Styles applied to the icon element if `size="medium"`.
   * @deprecated Combine the [.YushiiChip-icon](/material-ui/api/chip/#chip-classes-icon) and [.YushiiChip-sizeMedium](/material-ui/api/chip/#chip-classes-sizeMedium) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  iconMedium: string;
  /** Styles applied to the icon element if `color="primary"`.
   * @deprecated Combine the [.YushiiChip-icon](/material-ui/api/chip/#chip-classes-icon) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  iconColorPrimary: string;
  /** Styles applied to the icon element if `color="secondary"`.
   * @deprecated Combine the [.YushiiChip-icon](/material-ui/api/chip/#chip-classes-icon) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  iconColorSecondary: string;
  /** Styles applied to the label `span` element. */
  label: string;
  /** Styles applied to the label `span` element if `size="small"`.
   * @deprecated Combine the [.YushiiChip-label](/material-ui/api/chip/#chip-classes-label) and [.YushiiChip-sizeSmall](/material-ui/api/chip/#chip-classes-sizeSmall) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  labelSmall: string;
  /** Styles applied to the label `span` element if `size="medium"`.
   * @deprecated Combine the [.YushiiChip-label](/material-ui/api/chip/#chip-classes-label) and [.YushiiChip-sizeMedium](/material-ui/api/chip/#chip-classes-sizeMedium) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  labelMedium: string;
  /** Styles applied to the deleteIcon element. */
  deleteIcon: string;
  /** Styles applied to the deleteIcon element if `size="small"`.
   * @deprecated Combine the [.YushiiChip-deleteIcon](/material-ui/api/chip/#chip-classes-deleteIcon) and [.YushiiChip-sizeSmall](/material-ui/api/chip/#chip-classes-sizeSmall) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deleteIconSmall: string;
  /** Styles applied to the deleteIcon element if `size="medium"`.
   * @deprecated Combine the [.YushiiChip-deleteIcon](/material-ui/api/chip/#chip-classes-deleteIcon) and [.YushiiChip-sizeMedium](/material-ui/api/chip/#chip-classes-sizeMedium) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deleteIconMedium: string;
  /** Styles applied to the deleteIcon element if `color="primary"`.
   * @deprecated Combine the [.YushiiChip-deleteIcon](/material-ui/api/chip/#chip-classes-deleteIcon) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deleteIconColorPrimary: string;
  /** Styles applied to the deleteIcon element if `color="secondary"`.
   * @deprecated Combine the [.YushiiChip-deleteIcon](/material-ui/api/chip/#chip-classes-deleteIcon) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deleteIconColorSecondary: string;
  /** Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`.
   * @deprecated Combine the [.YushiiChip-deleteIcon](/material-ui/api/chip/#chip-classes-deleteIcon) , [.YushiiChip-outlined](/material-ui/api/chip/#chip-classes-outlined) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deleteIconOutlinedColorPrimary: string;
  /** Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`.
   * @deprecated Combine the [.YushiiChip-deleteIcon](/material-ui/api/chip/#chip-classes-deleteIcon) , [.YushiiChip-outlined](/material-ui/api/chip/#chip-classes-outlined) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deleteIconOutlinedColorSecondary: string;
  /** Styles applied to the deleteIcon element if `color="primary"` and `variant="filled"`.
   * @deprecated Combine the [.YushiiChip-deleteIcon](/material-ui/api/chip/#chip-classes-deleteIcon) , [.YushiiChip-filled](/material-ui/api/chip/#chip-classes-filled) and [.YushiiChip-colorPrimary](/material-ui/api/chip/#chip-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deleteIconFilledColorPrimary: string;
  /** Styles applied to the deleteIcon element if `color="secondary"` and `variant="filled"`.
   * @deprecated Combine the [.YushiiChip-deleteIcon](/material-ui/api/chip/#chip-classes-deleteIcon) , [.YushiiChip-filled](/material-ui/api/chip/#chip-classes-filled) and [.YushiiChip-colorSecondary](/material-ui/api/chip/#chip-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  deleteIconFilledColorSecondary: string;
  /** State class applied to the root element if keyboard focused. */
  focusVisible: string;
}

export type ChipClassKey = keyof ChipClasses;

export function getChipUtilityClass(slot: string): string {
  return generateUtilityClass('YushiiChip', slot);
}

const chipClasses: ChipClasses = generateUtilityClasses('YushiiChip', [
  'root',
  'sizeSmall',
  'sizeMedium',
  'colorDefault',
  'colorError',
  'colorInfo',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorWarning',
  'disabled',
  'clickable',
  'clickableColorPrimary',
  'clickableColorSecondary',
  'deletable',
  'deletableColorPrimary',
  'deletableColorSecondary',
  'outlined',
  'filled',
  'outlinedPrimary',
  'outlinedSecondary',
  'filledPrimary',
  'filledSecondary',
  'avatar',
  'avatarSmall',
  'avatarMedium',
  'avatarColorPrimary',
  'avatarColorSecondary',
  'icon',
  'iconSmall',
  'iconMedium',
  'iconColorPrimary',
  'iconColorSecondary',
  'label',
  'labelSmall',
  'labelMedium',
  'deleteIcon',
  'deleteIconSmall',
  'deleteIconMedium',
  'deleteIconColorPrimary',
  'deleteIconColorSecondary',
  'deleteIconOutlinedColorPrimary',
  'deleteIconOutlinedColorSecondary',
  'deleteIconFilledColorPrimary',
  'deleteIconFilledColorSecondary',
  'focusVisible',
]);

export default chipClasses;
