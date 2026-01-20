import React from "react";
import styled, { keyframes, css } from "styled-components";

const shimmerKeyframe = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ShimmerBase = styled.div<{
  width?: string;
  height?: string;
  rounded?: boolean;
}>`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmerKeyframe} 1.5s infinite;
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 8px;
    `}
  ${({ width, height }) => css`
    ${width && `width: ${width};`}
    ${height && `height: ${height};`}
  `}
`;

export const Shimmer: React.FC<{
  width?: string;
  height?: string;
  rounded?: boolean;
  className?: string;
  style?: React.CSSProperties;
}> = ({ width, height, rounded = true, className, style }) => (
  <ShimmerBase
    width={width}
    height={height}
    rounded={rounded}
    className={className}
    style={style}
  />
);

interface ShimmerImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  className?: string;
  style?: React.CSSProperties;
}

export const ShimmerImage: React.FC<ShimmerImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = "lazy",
  className,
  style,
}) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {!loaded && (
        <Shimmer
          width={width ? `${width}px` : "100%"}
          height={height ? `${height}px` : "100%"}
          rounded
          className={className}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        style={{ ...style, display: loaded ? "block" : "none" }}
        className={className}
      />
    </>
  );
};

export const ShimmerText: React.FC<{
  lines?: number;
  width?: string;
  style?: React.CSSProperties;
}> = ({ lines = 1, width = "100%", style }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width,
      ...style,
    }}
  >
    {Array.from({ length: lines }).map((_, i) => (
      <Shimmer key={i} height="16px" width={width} rounded />
    ))}
  </div>
);

export const ShimmerCard: React.FC<{ height?: string; width?: string }> = ({
  height = "200px",
  width = "100%",
}) => <Shimmer width={width} height={height} rounded />;
