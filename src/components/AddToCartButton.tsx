'use client';

import { Product } from '@/payload-types';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useCart } from '@/hooks/use-cart';

interface AddToCartButtonProps {
  product: Product;
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <Button
      size="lg"
      className="w-full"
      onClick={() => {
        addItem(product);
        setIsSuccess(true);
      }}
      disabled={isSuccess}
    >
      {isSuccess ? 'Adding' : 'Add to cart'}
    </Button>
  );
};
