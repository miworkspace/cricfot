'use client';

import React from 'react';
import NextImage from 'next/image';

export const Image = ({
  src,
  alt = '',
  width,
  height,
  fill,
  className = '',
  priority,
  ...props
}) => {
  if (!src) return null;

  if (fill || (width && height)) {
    return (
      <NextImage
        src={src}
        alt={alt || 'Image'}
        width={fill ? undefined : Number(width)}
        height={fill ? undefined : Number(height)}
        fill={fill}
        priority={priority}
        className={className}
        unoptimized
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
};

export default Image;
