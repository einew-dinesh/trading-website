import { companyInfo } from '../data/companyInfo';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: {companyInfo.contact.phone}</p>
            <p className="mb-2">Email: {companyInfo.contact.email}</p>
            <p>{companyInfo.contact.address}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-amber-200">Home</a></li>
              <li className="mb-2"><a href="/products" className="hover:text-amber-200">Products</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-amber-200">About Us</a></li>
              <li><a href="/contact" className="hover:text-amber-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href={companyInfo.social.facebook} className="hover:text-amber-200" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={companyInfo.social.instagram} className="hover:text-amber-200" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={`https://wa.me/${companyInfo.social.whatsapp.replace(/\+/g, '')}`} className="hover:text-amber-200" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 