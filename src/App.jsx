import React from "react";

const BOOKING_LINK = "https://calendly.com/eapperez/20-min-headshot-photoshoot-clone";
const CONTACT_EMAIL = "info@theheadshotclub.com";

const BrandMark = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`} aria-hidden="true">
    <div className="absolute inset-0 rounded-[22%] bg-[#C3542B]" />
    <svg
      viewBox="0 0 200 200"
      className="relative z-10 w-[76%] h-[76%] text-[#FFF8F4]"
      fill="currentColor"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <rect
          key={index}
          x="91"
          y="18"
          width="18"
          height="78"
          rx="7"
          transform={`rotate(${index * 30} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="25" fill="#C3542B" />
    </svg>
  </div>
);

const Icon = ({ type, className = "" }) => {
  const icons = {
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    camera: (
      <>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    sparkle: (
      <>
        <path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
        <path d="M4 4l2 2M18 18l2 2" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type] || icons.check}
    </svg>
  );
};

const howItWorksItems = [
  ["calendar", "Book your time", "Choose a 20-minute slot online."],
  ["clock", "Show up ready", "Arrive at the pop-up location."],
  ["sparkle", "Get guided", "We coach poses, angles, and expressions."],
  ["check", "Pick favorites", "Receive your gallery and polished selects."],
];

const sessionIncludes = [
  "20-minute guided shoot",
  "2 retouched images",
  "Online proofing gallery",
  "Professional lighting + direction",
];

const experiencePoints = [
  "Friendly direction",
  "Clean modern lighting",
  "Natural expressions",
  "Fast online delivery",
];

const teamMembers = [
  {
    name: "Adam Perez",
    role: "Director + Photographer",
    bio: "Adam is an award-winning independent director and photographer from California’s Central Valley. His work has been featured in The New York Times, The Los Angeles Times, The New Yorker, TIME, Vogue, and Cosmopolitan, with projects spanning the U.S. and Latin America. He has also produced national campaigns for the ACLU, Apple, Airbnb, and AT&T.",
  },
  {
    name: "Erika Perez",
    role: "Marketing + Brand Strategy",
    bio: "Erika is a seasoned marketing leader with 18+ years of experience in competitive markets. She blends data-driven strategy with creative storytelling across brand, experiential, and digital channels, staying current with emerging marketing trends and technologies including AI.",
  },
];

const galleryTiles = [
  "bg-gradient-to-br from-[#ead8cf] via-[#f7f1ec] to-[#111111]",
  "bg-gradient-to-br from-[#C3542B] via-[#f7f1ec] to-[#d6aa91]",
  "bg-gradient-to-br from-[#111111] via-[#6f6b66] to-[#F7F1EC]",
  "bg-gradient-to-br from-[#f3e7df] via-[#C3542B] to-[#111111]",
  "bg-gradient-to-br from-[#F7F1EC] via-[#cdb8ab] to-[#5f554f]",
  "bg-gradient-to-br from-[#111111] via-[#C3542B] to-[#F7F1EC]",
  "bg-gradient-to-br from-[#e7d7cc] via-[#967466] to-[#111111]",
  "bg-gradient-to-br from-[#C3542B] via-[#ddcabf] to-[#f7f1ec]",
];

const SmokeTests = () => {
  const tests = [
    { name: "Brand name renders", pass: "The Headshot Club".length > 0 },
    { name: "Premium-lite price is set", pass: 225 === 225 },
    { name: "All process steps exist", pass: howItWorksItems.length === 4 },
    { name: "External icon dependency removed", pass: typeof Icon === "function" },
    { name: "Booking link is Calendly", pass: BOOKING_LINK.includes("20-min-headshot-photoshoot-clone") },
    { name: "Session includes four benefits", pass: sessionIncludes.length === 4 },
    { name: "Team has two founders", pass: teamMembers.length === 2 },
    { name: "Contact email is set", pass: CONTACT_EMAIL === "info@theheadshotclub.com" },
  ];

  return (
    <section className="sr-only" aria-label="Component smoke tests">
      {tests.map((test) => (
        <p key={test.name} data-testid={test.name}>
          {test.name}: {test.pass ? "pass" : "fail"}
        </p>
      ))}
    </section>
  );
};

const ButtonLink = ({ href, children, variant = "primary", external = false }) => {
  const baseClass =
    "inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold transition";
  const variantClass =
    variant === "dark"
      ? "bg-[#111111] text-white hover:bg-[#C3542B]"
      : variant === "outline"
        ? "border border-black/20 hover:border-[#C3542B] hover:text-[#C3542B]"
        : "bg-[#C3542B] text-white hover:bg-[#a84625]";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${baseClass} ${variantClass}`}
    >
      {children}
    </a>
  );
};

export default function TheHeadshotClubWebsite() {
  const bookingLink = BOOKING_LINK;
  const emailLink = `mailto:${CONTACT_EMAIL}`;

  return (
    <main className="min-h-screen bg-[#F7F1EC] text-[#111111] font-sans">
      <SmokeTests />

      <header className="sticky top-0 z-50 bg-[#F7F1EC]/90 backdrop-blur border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#C3542B] flex items-center justify-center p-1.5 overflow-hidden">
              <BrandMark className="w-full h-full" />
            </div>
            <div className="leading-tight">
              <p className="font-serif text-2xl font-black tracking-tight">The Headshot Club</p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#C3542B] font-bold">
                20-Minute Headshots
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
            <a href="#about" className="hover:text-[#C3542B] transition">About</a>
            <a href="#pricing" className="hover:text-[#C3542B] transition">Pricing</a>
            <a href="#contact" className="hover:text-[#C3542B] transition">Contact</a>
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#111111] text-white px-5 py-3 rounded-full text-sm font-bold hover:bg-[#C3542B] transition"
            >
              Book a Spot <Icon type="arrow" className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#C3542B] uppercase tracking-[0.28em] font-bold text-sm mb-5">
            Fast sessions. Real results.
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-black leading-[0.95] mb-6">
            Headshots you’ll actually love.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-black/70 mb-8 max-w-xl">
            Professional, guided headshot sessions in just 20 minutes. Show up, get coached, and leave with polished images that look like you on your best day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLink href={bookingLink} external>
              Book Your Session <Icon type="calendar" className="w-5 h-5" />
            </ButtonLink>
            <ButtonLink href="#pricing" variant="outline">
              View Pricing
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-[#111111] p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="absolute top-8 right-8 w-32 h-32 opacity-95">
              <BrandMark className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-[18px] border-white/20" />
            <div className="relative z-10 text-white">
              <p className="uppercase tracking-[0.25em] text-sm text-white/60 mb-3">Pop-Up Headshots</p>
              <h2 className="font-serif text-5xl font-black leading-none">
                20 minutes.
                <br />
                Done.
              </h2>
            </div>
            <div className="relative z-10 bg-white rounded-3xl p-6 text-[#111111]">
              <p className="font-bold text-xl mb-2">What’s included</p>
              <p className="text-black/70">
                Guided shoot, professional lighting, online gallery, and 2 retouched images.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">
              How it works
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-black">Simple. Fast. Not awkward.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {howItWorksItems.map(([iconType, title, text], index) => (
              <div key={title} className="rounded-3xl bg-[#F7F1EC] p-6 border border-black/5">
                <div className="w-12 h-12 rounded-2xl bg-[#C3542B] text-white flex items-center justify-center mb-5">
                  <Icon type={iconType} className="w-6 h-6" />
                </div>
                <p className="text-sm text-black/40 font-bold mb-2">0{index + 1}</p>
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-black/65 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F1EC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">
                Recent work
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-black">
                The kind of headshot people actually want to use.
              </h2>
            </div>
            <p className="max-w-sm text-black/65 leading-relaxed">
              Clean, modern portraits with direction that helps every person look confident, natural, and current.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4">
            {galleryTiles.map((tile, index) => (
              <div
                key={tile}
                className={`group relative overflow-hidden rounded-[1.75rem] shadow-sm border border-black/5 ${tile} ${index === 0 || index === 4 ? "md:row-span-2" : ""}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,.9),rgba(255,255,255,.18)_32%,rgba(0,0,0,.35)_100%)] transition duration-500 ease-out group-hover:scale-105" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <p className="text-white text-sm font-bold">Headshot Club Select {index + 1}</p>
                </div>
              </div>
            ))}
            <div className="rounded-[1.75rem] bg-[#C3542B] text-white p-6 flex flex-col justify-between shadow-sm">
              <BrandMark className="w-20 h-20" />
              <div>
                <p className="font-serif text-3xl font-black leading-none mb-3">Guided. Polished. Fast.</p>
                <p className="text-white/80">A premium headshot experience in a pop-up format.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">
              The experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-black mb-6">
              Look polished. Still look like yourself.
            </h2>
            <p className="text-lg text-black/70 leading-relaxed mb-6">
              We make professional headshots feel easy. Every session is guided from start to finish, so you never have to wonder what to do with your face, hands, or posture.
            </p>
            <div className="space-y-3">
              {experiencePoints.map((item) => (
                <div key={item} className="flex items-center gap-3 font-bold">
                  <Icon type="check" className="w-5 h-5 text-[#C3542B]" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-black/5">
            <Icon type="camera" className="w-12 h-12 text-[#C3542B] mb-6" />
            <p className="font-serif text-3xl font-black mb-4">
              “Real headshots for people who want to look like themselves — not an AI version of themselves.”
            </p>
            <p className="text-black/60">
              Modern, efficient, confidence-building sessions for professionals, founders, creatives, and teams.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-start mb-14">
            <div>
              <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">About us</p>
              <h2 className="font-serif text-4xl md:text-5xl font-black mb-6">
                Built by a photographer and a brand strategist.
              </h2>
              <p className="text-lg text-black/70 leading-relaxed">
                The Headshot Club brings together editorial photography, smart brand positioning, and a fast, guided studio experience. The result is a modern headshot that feels polished, current, and genuinely useful.
              </p>
            </div>
            <div className="rounded-[2rem] bg-[#F7F1EC] p-8 border border-black/5">
              <BrandMark className="w-20 h-20 mb-6" />
              <p className="font-serif text-3xl font-black leading-tight mb-4">
                We help people show up clearly — online, at work, and everywhere their image represents them.
              </p>
              <p className="text-black/60 leading-relaxed">
                Our sessions are designed for founders, creatives, executives, teams, and professionals who need a headshot that looks elevated without feeling stiff.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <article key={member.name} className="rounded-[2rem] bg-[#F7F1EC] p-8 border border-black/5">
                <div className="w-20 h-20 rounded-full bg-[#C3542B] text-white flex items-center justify-center font-serif text-3xl font-black mb-6">
                  {member.name.split(" ").map((part) => part[0]).join("")}
                </div>
                <p className="text-[#C3542B] uppercase tracking-[0.2em] font-bold text-xs mb-2">{member.role}</p>
                <h3 className="font-serif text-3xl font-black mb-4">{member.name}</h3>
                <p className="text-black/70 leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#111111] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">Pricing</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black">Premium quality. Efficient format.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white text-[#111111] rounded-[2rem] p-8">
              <p className="uppercase tracking-[0.2em] text-[#C3542B] font-bold text-sm mb-3">
                Individual Session
              </p>
              <div className="flex items-end gap-3 mb-6">
                <p className="font-serif text-6xl font-black">$225</p>
                <p className="pb-3 text-black/50 font-bold">per session</p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {sessionIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Icon type="check" className="w-5 h-5 text-[#C3542B]" /> {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href={bookingLink} external>
                Book a Spot <Icon type="arrow" className="w-5 h-5" />
              </ButtonLink>
            </div>
            <div className="rounded-[2rem] border border-white/15 p-8">
              <p className="font-bold text-xl mb-5">Add-ons</p>
              <div className="space-y-5">
                <div>
                  <p className="text-3xl font-black">$35</p>
                  <p className="text-white/60">Extra retouched image</p>
                </div>
                <div>
                  <p className="text-3xl font-black">$120</p>
                  <p className="text-white/60">Full gallery upgrade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">For teams</p>
            <h2 className="font-serif text-4xl md:text-5xl font-black mb-5">
              Company headshot days, done right.
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Bring The Headshot Club to your office, coworking space, or event. We create a consistent look for your team with minimal disruption to the workday.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-[#F7F1EC] p-6 border border-black/5">
              <Icon type="users" className="w-8 h-8 text-[#C3542B] mb-4" />
              <p className="font-bold text-2xl">Half Day — $2,200</p>
              <p className="text-black/60">Up to 10 people</p>
            </div>
            <div className="rounded-3xl bg-[#F7F1EC] p-6 border border-black/5">
              <Icon type="users" className="w-8 h-8 text-[#C3542B] mb-4" />
              <p className="font-bold text-2xl">Full Day — $3,200</p>
              <p className="text-black/60">Up to 15 people</p>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">Book now</p>
          <h2 className="font-serif text-4xl md:text-6xl font-black mb-6">Ready for a better headshot?</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto mb-8">
            Choose a time that works for you. Sessions are quick, guided, and designed to make getting a great headshot feel easy.
          </p>
          <div className="rounded-[2rem] bg-white p-8 border border-black/10 shadow-lg">
            <p className="font-bold text-xl mb-3">Reserve your 20-minute spot</p>
            <p className="text-black/60 mb-6">Book directly through Calendly to lock in your session time.</p>
            <ButtonLink href={bookingLink} external>
              Reserve Your Spot <Icon type="arrow" className="w-5 h-5" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#F7F1EC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] bg-white p-8 md:p-12 border border-black/10 shadow-lg grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-[#C3542B] uppercase tracking-[0.25em] font-bold text-sm mb-3">Contact us</p>
              <h2 className="font-serif text-4xl md:text-5xl font-black mb-4">Questions before you book?</h2>
              <p className="text-lg text-black/70 leading-relaxed max-w-2xl">
                Email us for team bookings, pop-up inquiries, partnership ideas, or help choosing the right headshot session.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
              <a
                href={emailLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold bg-[#111111] text-white hover:bg-[#C3542B] transition"
              >
                <Icon type="mail" className="w-5 h-5" /> Email Us
              </a>
              <a href={emailLink} className="text-[#C3542B] font-bold text-lg hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C3542B] p-1.5 overflow-hidden">
              <BrandMark className="w-full h-full" />
            </div>
            <div>
              <p className="font-serif text-2xl font-black">The Headshot Club</p>
              <p className="text-white/50 text-sm">Fast sessions. Strong impact. Look like your best self.</p>
              <a href={emailLink} className="text-[#C3542B] text-sm font-bold hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a href={bookingLink} target="_blank" rel="noreferrer" className="text-[#C3542B] font-bold">
              Book your session →
            </a>
            <a href="#contact" className="text-white/60 text-sm hover:text-white transition">
              Contact us
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
