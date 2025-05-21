import { companyInfo } from "../../data/companyInfo";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Products Header */}
        <section className="bg-amber-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">Our Products</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium quality spices available in various packaging options
              to meet your business and household needs.
            </p>
          </div>
        </section>

        {/* Products List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyInfo.products.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-amber-100 flex items-center justify-center">
                    <p className="text-amber-800 font-medium">Product Image Placeholder</p>
                    {/* Add real image when available */}
                    {/* <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    /> */}
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-3">{product.name}</h2>
                    <p className="text-gray-600 mb-5">{product.description}</p>
                    
                    <h3 className="font-medium text-lg mb-3">Available Packages:</h3>
                    <div className="space-y-2">
                      {product.packages.map((pkg, i) => (
                        <div key={i} className="flex justify-between items-center pb-2 border-b border-gray-100">
                          <span className="font-medium">{pkg.size}</span>
                          <span className="text-amber-700">{pkg.price}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <a 
                        href={`https://wa.me/${companyInfo.social.whatsapp.replace(/\+/g, '')}?text=I'm interested in your ${product.name} product.`} 
                        className="block text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Inquire via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="bg-amber-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Contact us today to discuss bulk orders, pricing, and special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${companyInfo.contact.phone}`} 
                className="bg-white text-amber-700 hover:bg-amber-100 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Call Us
              </a>
              <a 
                href={`mailto:${companyInfo.contact.email}`} 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 