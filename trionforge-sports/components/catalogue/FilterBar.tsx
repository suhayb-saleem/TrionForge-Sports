'use client';

import React from 'react';

export type CategoryFilter = 'all' | 'pickleball' | 'padel' | 'accessories';
export type SortOption = 'featured' | 'name-asc' | 'moq-asc';

interface FilterBarProps {
  activeCategory: CategoryFilter;
  setActiveCategory: (category: CategoryFilter) => void;
  activeSort: SortOption;
  setActiveSort: (sort: SortOption) => void;
}

export function FilterBar({
  activeCategory,
  setActiveCategory,
  activeSort,
  setActiveSort,
}: FilterBarProps) {
  const tabs: { label: string; value: CategoryFilter }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Pickleball Paddles', value: 'pickleball' },
    { label: 'Padel Rackets', value: 'padel' },
    { label: 'Accessories', value: 'accessories' },
  ];

  return (
    <div className="sticky top-[64px] md:top-[72px] z-30 bg-[#0f0f0f] border-b border-white/8 font-body select-none">
      <div className="container-custom flex items-center justify-between h-14">
        {/* Filter Tabs Container */}
        {/* Supports horizontal scroll on mobile */}
        <div className="flex items-center gap-6 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-none h-full scroll-smooth mask-fade-edges">
          {tabs.map((tab) => {
            const active = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`h-full text-[12px] md:text-[13px] font-semibold uppercase tracking-widest transition-all duration-200 border-b-2 cursor-pointer flex items-center justify-center relative ${
                  active
                    ? 'border-brand-red text-white'
                    : 'border-transparent text-[#8A8A8A] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 pl-4 shrink-0">
          <label htmlFor="sort" className="text-xs text-[#8A8A8A]">
            Sort:
          </label>
          <select
            id="sort"
            className="bg-transparent border-none text-[#8A8A8A] hover:text-white text-xs font-semibold uppercase tracking-wider focus:outline-none cursor-pointer h-8"
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value as SortOption)}
          >
            <option value="featured" className="bg-[#0f0f0f] text-white">
              Featured
            </option>
            <option value="name-asc" className="bg-[#0f0f0f] text-white">
              Name A-Z
            </option>
            <option value="moq-asc" className="bg-[#0f0f0f] text-white">
              Lowest MOQ
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
