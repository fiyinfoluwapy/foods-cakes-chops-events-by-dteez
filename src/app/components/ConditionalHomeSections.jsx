'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './header';
import AboutSection from './about';
import MeetOurBrands from './brands';
import CakeGallery from './CakeGallery';
import FoodGallery from './FoodGallery';

const ConditionalHomeSections = () => {
  const pathname = usePathname();
  const [showCakeGallery, setShowCakeGallery] = useState(false);
  const [showFoodGallery, setShowFoodGallery] = useState(false);

  const handleShowCakeGallery = () => {
    setShowCakeGallery(true);
  };
  const handleShowFoodGallery = () => {
    setShowFoodGallery(true);
  };

  // Render sections only on the homepage or if it's the /cake-page or /food-page route
  if (pathname !== '/' && pathname !== '/cake-page' && pathname !== '/food-page') return null;

  return (
    <>
      <Header />
      <AboutSection />
      <MeetOurBrands 
        onCakeButtonClick={handleShowCakeGallery} 
        onFoodButtonClick={handleShowFoodGallery} 
      />
      {showCakeGallery && <CakeGallery />}
      {showFoodGallery && <FoodGallery />}
    </>
  );
};

export default ConditionalHomeSections;
