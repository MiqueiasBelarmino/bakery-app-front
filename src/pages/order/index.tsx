import ProductCard from "@/components/product/card";

const products = [
  {
    id: 1,
    name: "Pão Francês",
    price: 0.50,
    unity: 'Unitário'
  },
  {
    id: 2,
    name: "Mussarela",
    price: 18.00,
    unity: 'Pacote'
  },
  {
    id: 3,
    name: "Pão caseiro",
    price: 10.00,
    unity: 'Unitário'
  },
  {
    id: 4,
    name: "Sonho",
    price: 3.00,
    unity: 'Unitário'
  }
]

export default function ProductPage() {

  return (
    <>
      <h1>ORDER</h1>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-8">
        {
          products.map((product) => (
            (<ProductCard key={product.id} product={product} />)
          ))}
      </section>
    </>
  )
}