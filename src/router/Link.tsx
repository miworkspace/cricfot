import React from 'react';
import { useRouter } from './RouterContext';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
  exact?: boolean;
  replace?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  exact = false,
  replace = false,
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();

  const isActive = exact
    ? currentPath === href
    : currentPath === href || (href !== '/' && currentPath.startsWith(href));

  const combinedClasses = `${className} ${isActive ? activeClassName : ''}`.trim();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If command/ctrl key or middle click, allow default browser behavior (open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    // External link or anchor jump on same page
    if (href.startsWith('http') || href.startsWith('#')) {
      return;
    }

    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    navigate(href, { replace });
  };

  return (
    <a href={href} className={combinedClasses} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
