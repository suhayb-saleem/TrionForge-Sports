'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, Product } from '@/data/products';
import { CatalogueHero } from '@/components/catalogue/CatalogueHero';
import { FilterBar, CategoryFilter, SortOption } from '@/components/catalogue/FilterBar';
import { ProductGrid } from '@/components/catalogue/ProductGrid';
import { ProductModal } from '@/components/catalogue/ProductModal';

function CatalogueContent() {
  const searchParams = useSearchParams();
  
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [sort, setSort] = useState<SortOption>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Sync state from query parameters on mount / search params change
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam && ['all', 'pickleball', 'padel', 'accessories'].includes(filterParam)) {
      setCategory(filterParam as CategoryFilter);
    }

    const productParam = searchParams.get('product');
    if (productParam) {
      const match = products.find((p) => p.id === productParam);
      if (match) {
        setSelectedProduct(match);
        setModalOpen(true);
      }
    }
  }, [searchParams]);

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    if (category === 'all') return true;
    return product.category === category;
  });

  // Sorting logic
  const getMOQVal = (moq = '') => {
    const match = moq.match(/\d+/);
    return match ? parseInt(match[0], 10) : 9999;
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sort === 'moq-asc') {
      return getMOQVal(a.moq) - getMOQVal(b.moq);
    }
    return 0; // featured
  });

  // Open modal handler
  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // B2B Inquiry handler
  const handleInquire = (product: Product) => {
    const subject = `Factory Quote Inquiry: ${product.name}`;
    const body = `Hello SIAL Athletics Team,

I am interested in requesting a wholesale factory quote for the "${product.name}" (MOQ: ${product.moq || 'N/A'}).

Please send over pricing sheets, sample order parameters, and details on OEM/private label logo customization.

My details:
Name:
Company:
Phone:
Country/US State:

Best regards,`;
    
    window.location.href = `mailto:info@sialathletics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handlePageClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (modalOpen && !target.closest('.product-drawer') && !target.closest('.product-card')) {
      setModalOpen(false);
    }
  };

  return (
    <div
      onClick={handlePageClick}
      className="bg-[var(--bg-base)] min-h-screen pb-24 relative overflow-hidden"
    >
      {/* Background texture overlays */}
      <div className="absolute inset-0 texture-steel pointer-events-none opacity-40" />
      <div className="absolute inset-0 texture-noise pointer-events-none opacity-40" />

      {/* Dynamic slide transitions for background cards list when drawer is active */}
      <div
        style={{
          transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), padding-right 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
          transform: modalOpen ? 'translateX(-12vw)' : 'none',
          paddingRight: modalOpen ? '20vw' : '0',
          opacity: modalOpen ? 0.75 : 1,
        }}
      >
        {/* Catalogue Hero header */}
        <CatalogueHero />

        {/* Filter and Sort bar */}
        <FilterBar
          activeCategory={category}
          setActiveCategory={setCategory}
          activeSort={sort}
          setActiveSort={setSort}
        />

        {/* Product list */}
        <div className="container-custom mt-12 md:mt-16">
          <ProductGrid
            products={sortedProducts}
            onViewDetails={handleViewDetails}
            onInquire={handleInquire}
          />
        </div>
      </div>

      {/* Right Drawer detailed product quickview */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onInquire={handleInquire}
      />
    </div>
  );
}

export default function CataloguePage() {
  return (
    <Suspense fallback={
      <div className="bg-[var(--bg-base)] min-h-screen text-white flex items-center justify-center font-body uppercase tracking-widest text-sm">
        Loading Catalogue...
      </div>
    }>
      <CatalogueContent />
    </Suspense>
  );
}
