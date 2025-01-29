import * as React from 'react';

export default function isYushiiElement(element: any, yushiiNames: readonly string[]): boolean {
  return (
    React.isValidElement(element) &&
    yushiiNames.indexOf(
      // For server components `yushiiName` is avaialble in element.type._payload.value.yushiiName
      // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
      // eslint-disable-next-line no-underscore-dangle
      (element.type as any).yushiiName ?? (element.type as any)?._payload?.value?.yushiiName,
    ) !== -1
  );
}
