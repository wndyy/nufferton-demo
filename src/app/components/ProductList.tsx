import { fetchProducts } from "@/lib/crystallize";

export default async function ProductList() {
  const products = await fetchProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 sm:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 px-4 sm:px-6 lg:px-8">
          Customers also purchased
        </h2>

        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-6 px-4 sm:px-6 lg:px-8 pb-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex-shrink-0 w-64 md:w-72"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}