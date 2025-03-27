import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Nav } from "../components/nav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto overscroll-none p-2 sm:p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full mx-auto space-y-8">
        {/* Navigation */}
        <div className="fixed w-full px-4 sm:px-16 mx-auto top-4 sm:top-8 left-0 right-0 z-50">
          <Nav />
        </div>

        {/* Hero Section */}
        <section
          id="top"
          className="relative w-full h-screen flex items-end justify-start py-12 md:py-16 rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/stephanie.jpeg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 backdrop-blur-[2px]" />
          </div>

          {/* Content Container */}
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 relative z-20">
            <div className="max-w-4xl pb-8 md:pb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-white mb-4">
                Find Clarity,
                <br />
                Embrace Growth
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-6 max-w-2xl">
                Whether you're navigating life's challenges or seeking personal
                growth, I'm here to help you find clarity and healing in a safe,
                non-judgmental environment.
              </p>
              <Button asChild size="lg" className="mt-2 bg-white text-black">
                <a
                  href="https://care.headway.co/providers/stephanie-haywood#cost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Schedule an Appointment
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 lg:p-16 shadow-lg scroll-mt-16"
        >
          <div className="space-y-4">
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              THERAPEUTIC SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white">
              Comprehensive Therapeutic Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
              I offer a range of therapeutic services tailored to support you on
              your journey to healing and personal growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12">
            {[
              {
                title: "Individual Therapy",
                description:
                  "One-on-one sessions focused on personal growth, healing, and self-discovery.",
              },
              {
                title: "Couples Counseling",
                description:
                  "Strengthen your relationship through improved communication and understanding.",
              },
              {
                title: "Family Therapy",
                description:
                  "Navigate family dynamics and build stronger, healthier relationships.",
              },
              {
                title: "Trauma Therapy",
                description:
                  "Specialized support for processing and healing from past traumas.",
              },
              {
                title: "Anxiety & Depression",
                description:
                  "Evidence-based approaches to manage and overcome anxiety and depression.",
              },
              {
                title: "Life Transitions",
                description:
                  "Support during major life changes and personal development.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl md:text-2xl font-serif text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 lg:p-16 shadow-lg scroll-mt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                ABOUT ME
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white">
                Your Partner in Healing and Growth
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                With over 15 years of experience in therapeutic practice, I've
                dedicated my career to helping individuals and families navigate
                life's challenges. My approach combines evidence-based
                techniques with a warm, empathetic presence to create a safe
                space for healing and growth.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                I believe in the power of authentic connection and the
                importance of tailoring therapeutic approaches to each unique
                individual. Together, we'll work towards your goals in a
                supportive, non-judgmental environment.
              </p>
            </div>
            <div className="lg:col-start-2">
              <div className="h-96 bg-gray-100 dark:bg-gray-900 rounded-xl"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 lg:p-16 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-serif text-gray-900 dark:text-white">
                Stephanie
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                Licensed Therapist helping you find clarity and embrace growth.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-serif text-gray-900 dark:text-white">
                Contact
              </h3>
              <div className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                <p>Email: contact@example.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Therapy Street</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-serif text-gray-900 dark:text-white">
                Hours
              </h3>
              <div className="space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm md:text-base text-gray-500 dark:text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Stephanie. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
