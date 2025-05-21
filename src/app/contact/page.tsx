import { companyInfo } from "../../data/companyInfo";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Contact Header */}
        <section className="bg-amber-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-amber-800 mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or want to place an order? Reach out to us using any of the methods below.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6 text-amber-800">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Address</h3>
                    <p className="text-gray-600">{companyInfo.contact.address}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <a 
                      href={`tel:${companyInfo.contact.phone}`}
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <a 
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      {companyInfo.contact.email}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
                    <a 
                      href={`https://wa.me/${companyInfo.social.whatsapp.replace(/\+/g, '')}`}
                      className="text-green-600 hover:text-green-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {companyInfo.social.whatsapp}
                    </a>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-3">Social Media</h3>
                  <div className="flex gap-4">
                    <a 
                      href={companyInfo.social.facebook}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                    <a 
                      href={companyInfo.social.instagram}
                      className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6 text-amber-800">Business Hours</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h2 className="text-2xl font-semibold mb-6 text-amber-800">Quick Inquiry</h2>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <a 
                        href={`tel:${companyInfo.contact.phone}`}
                        className="flex-1 bg-amber-700 text-white text-center py-3 rounded-md hover:bg-amber-800 transition-colors"
                      >
                        Call Now
                      </a>
                      <a 
                        href={`https://wa.me/${companyInfo.social.whatsapp.replace(/\+/g, '')}`}
                        className="flex-1 bg-green-600 text-white text-center py-3 rounded-md hover:bg-green-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </div>
                    <a 
                      href={`mailto:${companyInfo.contact.email}`}
                      className="block bg-gray-800 text-white text-center py-3 rounded-md hover:bg-gray-900 transition-colors"
                    >
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">Find Us</h2>
            <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map will be embedded here</p>
              {/* Add an actual Google Maps or similar embed here */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 