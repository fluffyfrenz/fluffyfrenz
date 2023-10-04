// components/Features.tsx
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Feature 1 */}
        <div>
          <div className="mb-4 bg-blue-500 p-6 rounded-full">
            {/* Icon */}
          </div>
          <h2 className="text-2xl font-bold">Connect</h2>
          <p>Connect with other pet lovers and make new furry friends along the way.</p>
        </div>
        {/* Feature 2 */}
        <div>
          <div className="mb-4 bg-blue-500 p-6 rounded-full">
            {/* Icon */}
          </div>
          <h2 className="text-2xl font-bold">Discover</h2>
          <p>Discover pet-friendly places, events, and services around you.</p>
        </div>
        {/* Feature 3 */}
        <div>
          <div className="mb-4 bg-blue-500 p-6 rounded-full">
            {/* Icon */}
          </div>
          <h2 className="text-2xl font-bold">Share</h2>
          <p>Share your moments, experiences, and the joy of having a pet.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
