interface Props {
  textureId: string;
}

export function TextureOverlay({ textureId }: Props) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(/textures/${textureId}.png)`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
      }}
    />
  );
}