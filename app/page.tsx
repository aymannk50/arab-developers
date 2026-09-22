"use client";

import { useMemo, useState } from "react";

const developers = [
  {
    name: "Ayman Naeem",
    title: "Web Developer & Designer",
    country: "Egypt",
    skills: ["WordPress", "Frontend", "SEO"],
    portfolio: "https://ayman.de5.net/index-en.html",
    initials: "AN",
  },
  {
    name: "Sara Ahmed",
    title: "UI/UX Designer",
    country: "Egypt",
    skills: ["Figma", "UI Design", "Prototyping"],
    portfolio: "#",
    initials: "SA",
  },
  {
    name: "Omar Khaled",
    title: "Frontend Developer",
    country: "UAE",
    skills: ["React", "Next.js", "TypeScript"],
    portfolio: "#",
    initials: "OK",
  },
];

const countries = ["All Countries", "Egypt", "UAE", "Saudi Arabia"];
const specialties = [
  "All Specialties",
  "Web Developer",
  "Frontend Developer",
  "UI/UX Designer",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All Countries");
  const [specialty, setSpecialty] = useState("All Specialties");

  const filteredDevelopers = useMemo(() => {
    return developers.filter((developer) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        developer.name.toLowerCase().includes(searchText) ||
        developer.title.toLowerCase().includes(searchText) ||
        developer.skills.join(" ").toLowerCase().includes(searchText);

      const matchesCountry =
        country === "All Countries" || developer.country === country;

      const matchesSpecialty =
        specialty === "All Specialties" ||
        developer.title.includes(specialty);

      return matchesSearch && matchesCountry && matchesSpecialty;
    });
  }, [search, country, specialty]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            Arab<span className="text-cyan-400">Dev</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#developers" className="hover:text-white">
              Developers
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a
              href="#join"
              className="rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Join Directory
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Discover Arab technology talent
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Find talented developers
            <span className="block text-cyan-400">
              across the Arab world
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Explore developers, designers and technology professionals from
            across the MENA region.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur md:grid-cols-3">
            <input
              type="search"
              placeholder="Search by name or skill..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />

            <select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
            >
              {countries.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={specialty}
              onChange={(event) => setSpecialty(event.target.value)}
              className="rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
            >
              {specialties.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section id="developers" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Community
            </p>
            <h2 className="mt-2 text-3xl font-bold">Featured developers</h2>
          </div>

          <p className="text-sm text-slate-400">
            {filteredDevelopers.length} profiles found
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDevelopers.map((developer) => (
            <article
              key={developer.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
                  {developer.initials}
                </div>

                <div>
                  <h3 className="text-xl font-bold">{developer.name}</h3>
                  <p className="text-sm text-slate-400">{developer.country}</p>
                </div>
              </div>

              <p className="mt-5 font-medium text-cyan-300">
                {developer.title}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {developer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={developer.portfolio}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold hover:border-cyan-400 hover:text-cyan-300"
              >
                View Portfolio
              </a>
            </article>
          ))}
        </div>

        {filteredDevelopers.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center text-slate-400">
            No developers match your search.
          </div>
        )}
      </section>

      <section id="join" className="border-y border-white/10 bg-cyan-400 px-6 py-16 text-center text-slate-950">
        <h2 className="text-3xl font-bold">Are you an Arab tech professional?</h2>
        <p className="mx-auto mt-3 max-w-xl">
          Join the directory and make it easier for companies and collaborators
          to discover your work.
        </p>
        <button className="mt-7 rounded-full bg-slate-950 px-7 py-3 font-semibold text-white hover:bg-slate-800">
          Add Your Profile
        </button>
      </section>

      <footer id="about" className="px-6 py-8 text-center text-sm text-slate-500">
        © 2026 ArabDev Directory. Built to connect Arab technology talent.
      </footer>
    </main>
  );
}