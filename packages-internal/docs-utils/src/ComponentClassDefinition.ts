/**
 * @deprecated Import if from '@u-shii-internal/api-docs-builder'
 */
export interface ComponentClassDefinition {
  key: string;
  className: string;
  description: string;
  isGlobal: boolean;
  isDeprecated?: boolean;
  deprecationInfo?: string;
}
