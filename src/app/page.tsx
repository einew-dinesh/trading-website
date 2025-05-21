import Image from "next/image";
import { companyInfo } from "../data/companyInfo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-amber-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
                  {companyInfo.name}
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  {companyInfo.slogan}
                </p>
                <p className="text-gray-600 mb-8">
                  We provide premium quality spices in various packaging options to meet your business and household needs.
                </p>
                <Link 
                  href="/products" 
                  className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Explore Our Products
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md h-64 md:h-80 bg-amber-200 rounded-lg flex items-center justify-center">
                  <p className="text-amber-800 font-medium">Product Image Placeholder</p>
                  {/* Add a real image here when available */}
                  {/* <Image
                    src="/cumin-hero.jpg"
                    alt="Premium Cumin"
                    fill
                    className="object-cover rounded-lg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyInfo.products.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <p className="text-amber-800 font-medium">Product Image Placeholder</p>
                    {/* Add a real image when available */}
                    {/* <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    /> */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <h4 className="font-medium mb-2">Available in:</h4>
                    <ul className="text-gray-600">
                      {product.packages.map((pkg, i) => (
                        <li key={i}>{pkg.size}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link 
                href="/products" 
                className="inline-block border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="bg-amber-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Interested in our products? Contact us today to discuss your requirements and place an order.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-amber-700 hover:bg-amber-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
