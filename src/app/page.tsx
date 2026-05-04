"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Clock, ShieldCheck, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Why Us",
          id: "why-us",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Pile A Home"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Pile A Home"
      description="Expert underpinning and foundation structural repair in Durban. We restore safety and stability to your most valuable asset."
      buttons={[
        {
          text: "Get a Quote",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/concentrated-plus-size-women-doing-sports-outdoors-focused-chubby-women-different-nationalities-sport-clothes-doing-push-ups-sport-body-positive-concept_74855-21347.jpg",
          imageAlt: "Foundation repair work",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-abandoned-decaying-house-nature_23-2150166565.jpg",
          imageAlt: "Structural support installation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/interior-shot-old-warehouse-with-old-trains-stored-inside_181624-13915.jpg",
          imageAlt: "Engineered underpinning solution",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/construction-workers-are-installing-steel-rods-reinforced-concrete-beam_1150-6196.jpg",
          imageAlt: "Foundation strengthening process",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/saw-industry-machine-cutting-metal_1150-10743.jpg",
          imageAlt: "Subsidence correction team",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-old-abandoned-house-nature_23-2150166529.jpg",
          imageAlt: "Professional structural engineering",
        },
      ]}
    />
  </div>

  <div id="trust-badges" data-section="trust-badges">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Qualified Construction Team",
        "Structural Engineering Excellence",
        "Durban Local Expert",
        "Subsidence Correction Specialists",
        "Safe Building Standards",
        "Reliable Foundation Repair",
        "Verified Structural Support",
      ]}
      title="Trusted by Homeowners"
      description="Providing peace of mind through engineered support systems and professional craftsmanship."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Home Underpinning",
          description: "Strengthening the foundation to prevent further sinking or subsidence.",
          imageSrc: "http://img.b2bpic.net/free-photo/round-saw-hands-builder-work-laying-paving-slabs_1150-10081.jpg",
        },
        {
          title: "Structural Repairs",
          description: "Targeted fixes for wall cracks, floor movement, and structural failure.",
          imageSrc: "http://img.b2bpic.net/free-photo/ruined-home-russian-s-war-ukraine_23-2149437903.jpg",
        },
        {
          title: "Soil Stabilization",
          description: "Engineered solutions to prevent soil movement and foundation settling.",
          imageSrc: "http://img.b2bpic.net/free-photo/structural-glass-ceiling_1112-1176.jpg",
        },
      ]}
      title="Our Specialized Services"
      description="We offer comprehensive structural repairs to stabilize and secure your home's foundation."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Choose Pile A Home"
      metrics={[
        {
          icon: Award,
          label: "Industry Expert",
          value: "Specialized",
        },
        {
          icon: Star,
          label: "Customer Rating",
          value: "4.4/5",
        },
        {
          icon: ShieldCheck,
          label: "Structural Focus",
          value: "Reliable",
        },
        {
          icon: Users,
          label: "Client Retention",
          value: "98%",
        },
        {
          icon: Clock,
          label: "Years Experience",
          value: "15+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Pile A Home handled our foundation cracks with great professionalism. The team is knowledgeable and completed the work on time. Highly recommend for any structural concerns."
      rating={5}
      author="Sarah M."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-hispanic-woman-architect-doing-ok-gesture-with-thumbs-up-street_839833-29290.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-architect-man-showing-thumb-up-gesture-looking-camera_23-2148203957.jpg",
          alt: "James",
        },
        {
          src: "http://img.b2bpic.net/free-photo/two-people-working-warehouse_329181-12854.jpg",
          alt: "Anna",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-architect-holding-tablet-with-copy-space_23-2148243005.jpg",
          alt: "Robert",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-looking-into-solid-fuel-boiler-working-with-biofuels-economical-heating-top-view_169016-14806.jpg",
          alt: "Mike",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Call us at 081 374 9497 or request a consultation to assess your foundation damage. We are based in Durban North and ready to assist."
      buttons={[
        {
          text: "Request Inspection",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Don't ignore structural damage. Ensure your home's stability today."
      buttons={[
        {
          text: "Contact Us Now",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/special-modern-equipment-highquality-floor-installation_651396-2364.jpg"
      logoText="Pile A Home"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Underpinning",
              href: "#services",
            },
            {
              label: "Structural Repair",
              href: "#services",
            },
            {
              label: "Soil Stabilization",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#why-us",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Reviews",
              href: "#reviews",
            },
          ],
        },
        {
          title: "Location",
          items: [
            {
              label: "23 Hendon Rd, Durban",
              href: "#",
            },
            {
              label: "081 374 9497",
              href: "tel:0813749497",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Pile A Home Underpinning Specialist"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
