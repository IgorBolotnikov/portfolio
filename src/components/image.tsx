import React, { memo, useCallback, useLayoutEffect, useState } from 'react';

export type ImageDecoding = 'sync' | 'async';
export type ImageLoading = 'eager' | 'lazy';

export interface IAsyncImageProps {
  src: string
  alt?: string
  decoding?: ImageDecoding
  loading?: ImageLoading
  className?: string
  placeholder?: React.ReactElement
}

const classNames = (className: string, loading: boolean): string => {
  return className
    .split(/\s/)
    .map(name => loading ? `${name} ${name}-loading` : name)
    .join(' ');
};

const useStatus = (src: string): [boolean, boolean, () => void, () => void] => {
  const [loaded, setLoaded] = useState<boolean | null>(null);
  useLayoutEffect(() => () => setLoaded(null), [src]);

  const onLoad = useCallback(() => setLoaded(true), []);
  const onError = useCallback(() => setLoaded(false), []);

  return [loaded === null, loaded === false, onLoad, onError];
};

const Image = memo<IAsyncImageProps>(
  function AsyncImage({
    src,
    alt = '',
    placeholder,
    decoding = 'async',
    loading = 'lazy',
    className = 'async-image'
  }: IAsyncImageProps): React.ReactElement {
    const [fetching, error, onLoad, onError] = useStatus(src);

    if (error && (placeholder != null)) return placeholder;
    const props = { alt, src, decoding, loading, onLoad, onError };

    return <img {...props} className={classNames(className, fetching)} />;
  }
);
export default Image;
