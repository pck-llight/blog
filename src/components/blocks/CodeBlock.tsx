export default function CodeBlock({ code }: { code: string }) {
  return (
    <pre>
      <code>{code}</code>
    </pre>
  );
}
