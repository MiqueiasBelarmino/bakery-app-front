import ProductCard from "@/components/product/card";

const products = [
  {
    name: "Pão Francês",
    price: 0.50,
    unity: 'Unitário'
  },
  {
    name: "Mussarela",
    price: 18.00,
    unity: 'Pacote'
  },
  {
    name: "Pão caseiro",
    price: 10.00,
    unity: 'Unitário'
  },
  {
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
            (<ProductCard product={product} />)
          ))}
      </section>
    </>
  )
}