import { companyInfo } from "../../data/companyInfo";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* About Header */}
        <section className="bg-amber-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">About Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about {companyInfo.name} and our commitment to quality.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-amber-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  {companyInfo.name} was established with a vision to provide premium quality spices to businesses and households across the region. Our journey began with cumin, one of the most essential spices in Indian cuisine.
                </p>
                <p className="text-gray-600 mb-4">
                  With years of experience in the spice industry, we understand the importance of quality, freshness, and reliable packaging. Our spices are sourced from the best farms and processed with care to preserve their natural aroma and flavor.
                </p>
                <p className="text-gray-600">
                  We take pride in offering our products in various packaging sizes (1kg, 5kg, and 25kg) to cater to different customer needs, from household kitchens to large-scale food businesses.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md h-80 bg-amber-200 rounded-lg flex items-center justify-center">
                  <p className="text-amber-800 font-medium">Company Image Placeholder</p>
                  {/* Add a real image when available */}
                  {/* <Image
                    src="/about-company.jpg"
                    alt="Our company"
                    fill
                    className="object-cover rounded-lg"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-amber-800">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Quality</h3>
                <p className="text-gray-600 text-center">
                  We never compromise on the quality of our products. Each batch is carefully selected to ensure premium standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-amber-800">⟳</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Reliability</h3>
                <p className="text-gray-600 text-center">
                  We are committed to maintaining consistent quality and timely delivery for all our customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-amber-800">♥</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Customer Focus</h3>
                <p className="text-gray-600 text-center">
                  We believe in building long-term relationships with our customers by understanding and meeting their specific needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Contact us today to place your order and experience the quality of our products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/products" 
                className="bg-white text-amber-700 hover:bg-amber-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Products
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 