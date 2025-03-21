import type { UshiiPage } from 'docs/src/u-shiiPage';

export default function findActivePage(
  currentPages: UshiiPage[],
  currentPathname: string,
): { activePage: UshiiPage | null; activePageParents: UshiiPage[] } {
  const map: Record<string, UshiiPage> = {};
  const mapParent: Record<string, UshiiPage> = {};

  const pathname = currentPathname
    .replace('/[docsTab]', '')
    .replace('components-api', '')
    .replace('hooks-api', '');

  const traverse = (parent: UshiiPage) => {
    (parent.children || []).forEach((child) => {
      const childPathname = child.pathname
        .replace('/[docsTab]', '')
        .replace('components-api', '')
        .replace('hooks-api', '');

      map[childPathname] = child;

      const isChildApiPathname =
        child.pathname.includes('components-api') || child.pathname.includes('hooks-api');

      if (!isChildApiPathname && mapParent[childPathname]) {
        throw new Error(`Duplicated pathname ${child.pathname} in pages`);
      }

      if (!isChildApiPathname) {
        mapParent[childPathname] = parent;
      }
      traverse(child);
    });
  };

  traverse({ pathname: '/', children: currentPages });

  const activePage = map[pathname] || null;

  const activePageParents = [];
  let traversePage = activePage;
  while (traversePage && traversePage.pathname !== '/') {
    const parent = mapParent[traversePage.pathname];
    activePageParents.push(parent);
    traversePage = parent;
  }

  return {
    activePage,
    activePageParents,
  };
}
