/* eslint-disable react/no-danger */
import * as React from 'react';
import { styled, alpha } from '@u_ui/u-ui/styles';
import { useTranslate } from '@u-shii/docs/i18n';
import {
  brandingDarkTheme as darkTheme,
  brandingLightTheme as lightTheme,
} from '@u-shii/docs/branding';
import { PropertyDefinition } from 'docs/src/modules/components/ApiPage/definitions/properties';
import StyledTableContainer from 'docs/src/modules/components/ApiPage/table/StyledTableContainer';
import ApiWarningAlert from 'docs/src/modules/components/ApiPage/ApiWarningAlert';

const StyledTable = styled('table')(
  ({ theme }) => ({
    // Override docs/src/modules/components/MarkdownElement styles
    '&&': {
      display: 'table',
      width: '100%',
    },
    '& .type-column': {
      minWidth: '20%',
    },
    '& .default-column': {
      minWidth: '20%',
    },
    '& .UshiiApi-table-item-title': {
      minWidth: '20%',
      fontFamily: theme.typography.fontFamilyCode,
      fontWeight: theme.typography.fontWeightSemiBold,
      fontSize: theme.typography.pxToRem(13),
      color: `var(--ushiidocs-palette-primary-600, ${lightTheme.palette.primary[600]})`,
    },
    '& .UshiiApi-table-item-type': {
      ...theme.typography.caption,
      fontFamily: theme.typography.fontFamilyCode,
      fontWeight: theme.typography.fontWeightRegular,
      color: `var(--ushiidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
      padding: '1px 4px',
      borderRadius: 6,
      border: '1px solid',
      borderColor: alpha(darkTheme.palette.primary[100], 0.8),
      backgroundColor: `var(--ushiidocs-palette-primary-50, ${lightTheme.palette.primary[50]})`,
    },
    '& .UshiiApi-table-item-default': {
      ...theme.typography.caption,
      fontFamily: theme.typography.fontFamilyCode,
      fontWeight: theme.typography.fontWeightRegular,
      color: `var(--ushiidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
      padding: '1px 4px',
      borderRadius: 6,
      border: '1px solid',
      borderColor: `var(--ushiidocs-palette-grey-200, ${lightTheme.palette.grey[200]})`,
      backgroundColor: `var(--ushiidocs-palette-grey-50, ${lightTheme.palette.grey[50]})`,
    },
    '& .UshiiPropTable-description-column': {
      width: '40%',
      paddingRight: 8,
      '& .prop-table-description': {
        marginBottom: 0,
      },
      '& .prop-table-additional-description': {
        marginTop: 12,
        marginBottom: 0,
      },
      '& .prop-table-alert': {
        '& .UshiiAlert-icon': {
          margin: 0,
        },
      },
    },
    '& .prop-table-signature': {
      marginTop: 12,
      marginBottom: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      '& .prop-table-title': {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  }),
  ({ theme }) => ({
    [`:where(${theme.vars ? '[data-u-shii-color-scheme="dark"]' : '.mode-dark'}) &`]: {
      '& .UshiiApi-table-item-title': {
        color: `var(--ushiidocs-palette-primary-200, ${darkTheme.palette.primary[200]})`,
      },
      '& .UshiiApi-table-item-type': {
        color: `var(--ushiidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        borderColor: `var(--ushiidocs-palette-divider, ${darkTheme.palette.divider})`,
        backgroundColor: alpha(darkTheme.palette.primary[900], 0.3),
      },
      '& .UshiiApi-table-item-default': {
        color: `var(--ushiidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        backgroundColor: `var(--ushiidocs-palette-grey-900, ${darkTheme.palette.grey[900]})`,
        borderColor: `var(--ushiidocs-palette-divider, ${darkTheme.palette.divider})`,
      },
      '& .prop-table-signature': {
        '& .prop-table-title': {
          color: `var(--ushiidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        },
      },
    },
  }),
);

function PropDescription({ description }: { description: string }) {
  const isUlPresent = description.includes('<ul>');

  const ComponentToRender = isUlPresent ? 'div' : 'p';

  return (
    <ComponentToRender
      className="prop-table-description" // This className is used by Algolia
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    />
  );
}

interface PropertiesTableProps {
  properties: PropertyDefinition[];
}

export default function PropertiesTable(props: PropertiesTableProps) {
  const { properties } = props;

  const hasDefaultColumn = properties.some((item) => item.propDefault !== undefined);

  const t = useTranslate();
  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <tr>
            {/* eslint-disable material-ui/no-hardcoded-labels */}
            <th>{'Name'}</th>
            <th>{'Type'}</th>
            {hasDefaultColumn && <th>{'Default'}</th>}
            <th>{'Description'}</th>
            {/* eslint-enable material-ui/no-hardcoded-labels */}
          </tr>
        </thead>
        <tbody>
          {properties.map((params) => {
            const {
              propName,
              description,
              seeMoreDescription,
              requiresRef,
              isOptional,
              isRequired,
              isProPlan,
              isPremiumPlan,
              isDeprecated,
              deprecationInfo,
              typeName,
              propDefault,
              additionalInfo,
              signature,
              signatureArgs,
              signatureReturnDescription,
              hash,
            } = params;

            return (
              <tr key={propName} id={hash}>
                <td className="UshiiApi-table-item-title algolia-lvl3">
                  {propName}
                  {isRequired ? '*' : ''}
                  {isOptional ? '?' : ''}
                  {isProPlan && (
                    // eslint-disable-next-line material-ui/no-hardcoded-labels
                    <a href="/x/introduction/licensing/#pro-plan" aria-label="Pro plan">
                      <span className="plan-pro" />
                    </a>
                  )}
                  {isPremiumPlan && (
                    // eslint-disable-next-line material-ui/no-hardcoded-labels
                    <a href="/x/introduction/licensing/#premium-plan" aria-label="Premium plan">
                      <span className="plan-premium" />
                    </a>
                  )}
                </td>
                <td className="type-column">
                  {
                    <span
                      className="UshiiApi-table-item-type"
                      dangerouslySetInnerHTML={{
                        __html: typeName,
                      }}
                    />
                  }
                </td>
                {hasDefaultColumn && (
                  <td className="default-column">
                    {propDefault ? (
                      <span className="UshiiApi-table-item-default">{propDefault}</span>
                    ) : (
                      '-'
                    )}
                  </td>
                )}
                <td className="UshiiPropTable-description-column algolia-content">
                  {description && <PropDescription description={description} />}
                  {seeMoreDescription && (
                    <p
                      dangerouslySetInnerHTML={{ __html: seeMoreDescription }}
                      className="prop-table-additional-description"
                    />
                  )}
                  {additionalInfo?.map((key) => (
                    <p
                      className="prop-table-additional-description"
                      key={key}
                      dangerouslySetInnerHTML={{
                        __html: t(`api-docs.additional-info.${key}`),
                      }}
                    />
                  ))}
                  {requiresRef && (
                    <ApiWarningAlert className="prop-table-alert">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: t('api-docs.requires-ref'),
                        }}
                      />
                    </ApiWarningAlert>
                  )}
                  {isDeprecated && (
                    <ApiWarningAlert>
                      <b>{t('api-docs.deprecated')}</b>
                      {deprecationInfo && (
                        <React.Fragment>
                          {'－'}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: deprecationInfo,
                            }}
                          />
                        </React.Fragment>
                      )}
                    </ApiWarningAlert>
                  )}
                  {signature && (
                    <div className="prop-table-signature">
                      <span className="prop-table-title">{t('api-docs.signature')}:</span>
                      <code
                        dangerouslySetInnerHTML={{
                          __html: signature,
                        }}
                      />
                      {signatureArgs && (
                        <div>
                          <ul>
                            {signatureArgs.map(({ argName, argDescription }) => (
                              <li
                                className="prop-signature-list"
                                key={argName}
                                dangerouslySetInnerHTML={{
                                  __html: `<code>${argName}</code> ${argDescription}`,
                                }}
                              />
                            ))}
                          </ul>
                        </div>
                      )}
                      {signatureReturnDescription && (
                        <p>
                          {t('api-docs.returns')}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: signatureReturnDescription,
                            }}
                          />
                        </p>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
}
