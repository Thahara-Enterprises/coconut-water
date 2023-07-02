'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.images}
          alt={product.name}
          className="rounded shadow"
          width={350}
          height={250}
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg text-orange-950">{product.name}</h2>
        </Link>
        <p className="mb-2 text-sm">
          {product.ingredients} - {product.allergeninfo}
        </p>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
