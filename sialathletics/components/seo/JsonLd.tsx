// Renders schema.org structured data as an inline JSON-LD script tag.
// `<` is escaped to < so page content can never break out of the script.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
