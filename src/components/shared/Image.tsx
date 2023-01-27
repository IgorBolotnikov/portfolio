/** @jsx h */
import { VNode, h } from 'preact';
import { memo, useCallback, useLayoutEffect, useState } from 'preact/compat';

export type ImageDecoding = 'sync' | 'async';
export type ImageLoading = 'eager' | 'lazy';

export interface IAsyncImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
  decoding?: ImageDecoding
  loading?: ImageLoading
  className?: string
  placeholder?: VNode
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

export const Image = memo<IAsyncImageProps>(
  ({
    src,
    width,
    height,
    alt = 'Ooops...',
    placeholder,
    decoding = 'async',
    loading = 'lazy',
    className = 'async-image'
  }: IAsyncImageProps): VNode => {
    const [fetching, error, onLoad, onError] = useStatus(src);

    if (error && (placeholder != null)) {
      return placeholder;
    }
    const props = { alt, src, width, height, decoding, loading, onLoad, onError };

    return <img {...props} className={classNames(className, fetching)} />;
  }
);
