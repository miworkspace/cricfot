'use client';

import React from 'react';
import NextLink from 'next/link';

export const Link = ({
  href,
  children,
  replace,
  className,
  ...props
}) => {
  return (
    <NextLink
      href={href}
      className={className}
      replace={replace}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
