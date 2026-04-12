import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-slate-50 py-16 px-5 md:px-10 md:mt-15">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 items-center">

        <div className="space-y-8">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Discover India with confidence
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Travel beyond boundaries, explore with heart.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              We create unforgettable journeys across India—mountain escapes, adventure tours, and immersive cultural experiences delivered with comfort, safety, and local expertise.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-slate-900">Custom itineraries</h2>
              <p className="mt-2 text-sm text-slate-500">Tailored routes for every traveler, from families to adventure seekers.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-slate-900">Local expertise</h2>
              <p className="mt-2 text-sm text-slate-500">Travel with trusted guides who know every destination inside out.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-slate-900">Safe travel</h2>
              <p className="mt-2 text-sm text-slate-500">Enjoy well-planned routes, vetted stays, and 24/7 support.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-slate-900">Amazing value</h2>
              <p className="mt-2 text-sm text-slate-500">Premium experiences at prices designed for smart travelers.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href={"/contact"} className="inline-flex items-center justify-center rounded-full bg-blue-700 px-8 py-3 text-white shadow-lg shadow-blue-200/50 transition hover:bg-blue-800">
              Book Your Trip
            </Link>
            <span className="text-sm text-slate-500">Call us at <strong>+91 98765 43210</strong> for custom plans.</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
              <p className="text-3xl font-bold text-blue-700">50+</p>
              <p className="mt-2 text-sm text-slate-500">Trips Completed</p>
            </div>
            <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
              <p className="text-3xl font-bold text-blue-700">10K+</p>
              <p className="mt-2 text-sm text-slate-500">Happy Travelers</p>
            </div>
            <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
              <p className="text-3xl font-bold text-blue-700">4.9★</p>
              <p className="mt-2 text-sm text-slate-500">Average Rating</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-transparent" />
          <div className="relative h-[520px] w-full">
            <Image
              // src="https://images.unsplash.com/photo-1543248939-1facf7ea0f55?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
              src="https://images.unsplash.com/photo-1569092122680-4a491077bab3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel India"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 rounded-b-[2rem] border-t border-white/10 bg-white/10 p-8 backdrop-blur-xl text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Trusted travel partners</p>
            <h3 className="mt-3 text-3xl font-bold">Handpicked journeys across India</h3>
            <p className="mt-2 max-w-xl text-sm text-blue-100">From Himalayan peaks to coastal escapes, every itinerary is built for memories that last.</p>
          </div>
        </div>
      </div>
    </section>
  );
}