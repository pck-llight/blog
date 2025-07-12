export default function VideoBlock({ src, title }: { src: string; title?: string }) {
  return (
    <video controls>
      <source src={src} type="video/mp4" />
      {title && <track kind="captions" src={title} />}
      Your browser does not support the video tag.
    </video>
  );
}
