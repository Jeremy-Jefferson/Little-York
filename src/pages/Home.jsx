import { Header, Footer } from '../components/layout';
import {
  Hero,
  WhyChooseUs,
  FeaturedDeals,
  WhatWeCarry,
  ProductSearch,
  StoreExperience,
  VisitUs,
  Newsletter,
  ContactForm
} from '../components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <main id="main-content">
        <Hero />
        <WhyChooseUs />
        <FeaturedDeals />
        <WhatWeCarry />
        <ProductSearch />
        <StoreExperience />
        <VisitUs />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
