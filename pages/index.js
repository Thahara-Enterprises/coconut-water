'use client';
import Link from 'next/link';
import { data } from './data/index';
import Layout from './component/Layout';
import ProductItem from './component/ProductItem';
import { Store } from './utils/Store';
import { useContext } from 'react';

export default function Home() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <Layout title="Assafa Delicacy">
      <header>
        <nav className="flex h-12 items-center px-4 justify-between shadow-md">
          <Link href="/" className="text-lg font-bold">
            Assafa Delicacy
          </Link>
          <div>
            <Link className="p-2" href="/cart">
              Cart
              {cart.cartItems.length > 0 && (
                <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              )}
            </Link>
            <Link href="/login" className="p-2">
              Login
            </Link>
          </div>
        </nav>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products?.map(product => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
      <footer className="flex h-10 justify-center items-center shadow-inner">
        <p>Copyright © 2023 Assafa Delicacy</p>
      </footer>
    </Layout>
  );
}
