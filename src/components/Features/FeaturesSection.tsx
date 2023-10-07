// components/Features.tsx
import React from 'react';
import styles from "@/styles/Features.module.css";

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.features}>
      <div>
        {/* Feature 1 */}
        <div>
          <div>
            {/* Icon */}
          </div>
          <h2>Connect</h2>
          <p>Connect with other pet lovers and make new furry friends along the way.</p>
        </div>
        {/* Feature 2 */}
        <div>
          <div>
            {/* Icon */}
          </div>
          <h2>Discover</h2>
          <p>Discover pet-friendly places, events, and services around you.</p>
        </div>
        {/* Feature 3 */}
        <div>
          <div>
            {/* Icon */}
          </div>
          <h2>Share</h2>
          <p>Share your moments, experiences, and the joy of having a pet.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
