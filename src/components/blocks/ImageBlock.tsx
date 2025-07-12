export default function ImageBlock({ src, alt }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} />;
}
