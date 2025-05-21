import Link from 'next/link';
import { companyInfo } from '../data/companyInfo';

export default function Navigation() {
  return (
    <nav className="bg-amber-700 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold mb-4 md:mb-0">
          <Link href="/" className="hover:text-amber-200">
            {companyInfo.name}
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-amber-200">
            Home
          </Link>
          <Link href="/products" className="hover:text-amber-200">
            Products
          </Link>
          <Link href="/about" className="hover:text-amber-200">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-amber-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 