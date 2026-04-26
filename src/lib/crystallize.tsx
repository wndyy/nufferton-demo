const CRYSTALLIZE_API_URL =
  "https://api.crystallize.com/test-95-146/catalogue";

// The shape of a single product after we've cleaned up the Crystallize response
export type Product = {
  id: string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
};

// The GraphQL query — same one you ran in the playground
const PRODUCTS_QUERY = `
  {
    catalogue(path: "/") {
      children {
        name
        path
        ... on Product {
          components {
            id
            content {
              ... on SingleLineContent { text }
              ... on RichTextContent { plainText }
              ... on ImageContent { images { url altText } }
              ... on NumericContent { number }
              ... on SelectionContent { options { key value } }
            }
          }
        }
      }
    }
  }
`;

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(CRYSTALLIZE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: PRODUCTS_QUERY }),
  });

  const json = await response.json();
  const children = json.data?.catalogue?.children ?? [];

  // Transform Crystallize's verbose response into the simple shape ProductList expects
  return children.map((item: any, index: number) => {
    const getComponent = (id: string) =>
      item.components?.find((c: any) => c.id === id)?.content;

    const title = getComponent("title")?.text ?? item.name;
    const price = getComponent("price")?.number ?? 0;
    const color = getComponent("colour")?.options?.[0]?.value ?? "";
    const imageSrc =
      getComponent("images")?.images?.[0]?.url ?? "";
    const imageAlt =
      getComponent("images")?.images?.[0]?.altText ?? title;

    return {
      id: item.path ?? String(index),
      name: title,
      href: item.path ?? "#",
      imageSrc,
      imageAlt,
      price: `$${price}`,
      color,
    };
  });
}