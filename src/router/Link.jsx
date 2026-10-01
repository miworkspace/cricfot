'use client';

import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export const Link = ({
  href,
  children,
  className = '',
  activeClassName = '',
  exact = false,
  replace = false,
  onClick,
  ...props
}) => {
  const currentPath = usePathname() || '/';

  const isActive = exact
    ? currentPath === href
    : currentPath === href || (href !== '/' && currentPath.startsWith(href));

  const combinedClasses = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <NextLink
      href={href}
      className={combinedClasses}
      replace={replace}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
