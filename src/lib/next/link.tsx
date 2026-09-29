/**
 * Next.js Link component (next/link)
 */
import React from 'react';
import { Link as InternalLink } from '../../router/Link';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  replace,
  className,
  ...props
}) => {
  return (
    <InternalLink
      href={href}
      className={className}
      replace={replace}
      {...props}
    >
      {children}
    </InternalLink>
  );
};

export default Link;
