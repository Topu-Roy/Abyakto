"use client";

interface Props {
  textureId: string;
}

export function TextureOverlay({ textureId }: Props) {
  switch (textureId) {
    case "paper":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-noise)" opacity="0.08"/>
        </svg>
      );
    case "grain":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain-noise">
            <feTurbulence type="turbulence" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-noise)" opacity="0.12"/>
        </svg>
      );
    case "noise":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-filter)" opacity="0.15"/>
        </svg>
      );
    case "canvas":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="canvas-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1"/>
            <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="2">
              <feDistantLight azimuth="45" elevation="60"/>
            </feDiffuseLighting>
          </filter>
          <rect width="100%" height="100%" filter="url(#canvas-filter)" opacity="0.08"/>
        </svg>
      );
    case "marble":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="marble-filter">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="5" seed="5"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#marble-filter)" opacity="0.06"/>
        </svg>
      );
    case "waves":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="waves-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="10"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#waves-filter)" opacity="0.05"/>
        </svg>
      );
    case "vintage":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="vintage-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4"/>
            <feColorMatrix type="hueRotate" values="30"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#vintage-filter)" opacity="0.07"/>
        </svg>
      );
    case "subtle":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="subtle-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#subtle-filter)" opacity="0.04"/>
        </svg>
      );
    case "speckle":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="speckle-filter">
            <feTurbulence type="fractalNoise" baseFrequency="4" numOctaves="3"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#speckle-filter)" opacity="0.06"/>
        </svg>
      );
    case "leaf":
      return (
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid slice">
          <path d="M20 20c10-10 30-5 35 10s-5 30-20 30c-10 5-25 0-30-15s5-25 15-25z" fill="rgba(0,0,0,0.03)"/>
        </svg>
      );
    default:
      return null;
  }
}
