import React from 'react'
import { inquiryUrl } from './inquiry.js'

const phone = '2069196886'
const listingsUrl = 'https://www.realtor.com/realestateandhomes-search/Pahrump_NV'
const officeMapUrl = 'https://www.google.com/maps/place/The+Lally+Realty+Team/@36.1814476,-115.9624726,14.79z/data=!4m6!3m5!1s0x80c6399c2c4d07df:0xecb13a12e7fe66d3!8m2!3d36.1842494!4d-115.9552532!16s%2Fg%2F11s34pt8z3?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D'
const officeMapEmbed = 'https://maps.google.com/maps?ll=36.1842494,-115.9552532&z=16&output=embed'

const services = [
  {
    number: '01',
    title: 'Real Estate Done Right',
    image: '/images/service-home.jpg',
    alt: 'Bright living room with a coffee table',
    description: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },
  {
    number: '02',
    title: 'Commercial & Residential',
    image: '/images/service-property.jpg',
    alt: 'Modern home surrounded by a green lawn',
    description: 'Large or small, condo or mansion, we can find it at the price that’s right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.',
  },
  {
    number: '03',
    title: 'Rely on Expertise',
    image: '/images/service-advice.jpg',
    alt: 'People discussing a property purchase',
    description: 'If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.',
  },
]

const gallery = [
  { image: '/images/pond.jpg', alt: 'Mountain Falls pond and mountains in Pahrump', label: 'Pahrump living' },
  { image: '/images/buying.jpg', alt: 'Southwestern home beside a pool', label: 'Space to settle in' },
  { image: '/images/selling.jpg', alt: 'Open-plan home interior', label: 'Spaces to love' },
  { image: '/images/search.jpg', alt: 'House key resting on a wooden surface', label: 'The keys to what’s next' },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-1">{diagonal ? '↗' : '→'}</span>
}

function submitEmail(event, subject) {
  event.preventDefault()
  window.location.href = inquiryUrl(subject, Object.fromEntries(new FormData(event.currentTarget)))
}

function Header() {
  return (
    <>
      <div className="bg-[#1e352e] px-5 py-2.5 text-center text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase sm:text-xs">
        Locally rooted in Pahrump, Nevada <span className="mx-3 hidden text-[#cda77e] sm:inline">✦</span><a href={`tel:${phone}`} className="hidden text-white hover:underline sm:inline">Call (206) 919-6886</a>
      </div>
      <header className="relative z-20 border-b border-[#e6e0d5] bg-[#f9f7f2]">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-14">
          <a href="#top" className="shrink-0 leading-tight text-[#1e352e]" aria-label="Marci Metzger home">
            <span className="block font-serif text-[28px] tracking-[-0.06em] sm:text-[31px]">Marci Metzger</span>
            <span className="block text-[9px] font-bold tracking-[0.27em] uppercase sm:text-[10px]">The Ridge Realty Group</span>
          </a>
          <nav className="hidden items-center gap-9 text-[12px] font-semibold tracking-[0.13em] text-[#334038] uppercase lg:flex" aria-label="Main navigation">
            <a className="hover:text-[#a86d4d]" href="#about">About</a>
            <a className="hover:text-[#a86d4d]" href="#approach">Buy & sell</a>
            <a className="hover:text-[#a86d4d]" href="#find">Find a home</a>
            <a className="hover:text-[#a86d4d]" href="#gallery">Gallery</a>
            <a className="hover:text-[#a86d4d]" href="#services">Services</a>
          </nav>
          <a href="#contact" className="group hidden border border-[#1e352e] px-5 py-3 text-[11px] font-bold tracking-[0.14em] text-[#1e352e] uppercase transition-colors hover:bg-[#1e352e] hover:text-white sm:inline-flex">Let's connect <Arrow /></a>
          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 border border-[#c9c9bc] px-3 py-2.5 text-xs font-bold tracking-widest text-[#1e352e] uppercase [&::-webkit-details-marker]:hidden">Menu <span aria-hidden="true" className="text-lg leading-none">☰</span></summary>
            <nav onClick={(event) => { event.currentTarget.parentElement.open = false }} className="absolute top-full right-0 mt-2 flex w-52 flex-col border border-[#ddd7cc] bg-[#f9f7f2] p-3 text-sm shadow-xl" aria-label="Mobile navigation">
              <a className="px-3 py-2.5 hover:bg-[#ece8de]" href="#about">About</a>
              <a className="px-3 py-2.5 hover:bg-[#ece8de]" href="#approach">Buy & sell</a>
              <a className="px-3 py-2.5 hover:bg-[#ece8de]" href="#find">Find a home</a>
              <a className="px-3 py-2.5 hover:bg-[#ece8de]" href="#gallery">Gallery</a>
              <a className="px-3 py-2.5 hover:bg-[#ece8de]" href="#services">Services</a>
              <a className="px-3 py-2.5 hover:bg-[#ece8de]" href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>
    </>
  )
}

function Hero() {
  return (
    <section id="top" className="grid min-h-[680px] bg-[#f4f0e7] lg:grid-cols-[44%_56%]">
      <div className="relative flex items-center px-5 py-16 sm:px-8 lg:px-[max(3.5rem,calc((100vw-1380px)/2+3.5rem))] lg:py-20">
        <div className="max-w-xl">
          <p className="eyebrow mb-5">Pahrump Realtor · Southern Nevada</p>
          <h1 className="font-serif text-[clamp(3.4rem,6vw,6.8rem)] leading-[0.98] tracking-[-0.055em] text-[#1e352e]">A place to <em className="font-normal text-[#ad785b]">call home.</em></h1>
          <p className="mt-8 max-w-[470px] text-base leading-7 text-[#505a51] sm:text-lg sm:leading-8">Find your place in Pahrump with the local insight, honest guidance, and personal attention you deserve.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#find" className="group inline-flex items-center justify-center bg-[#1e352e] px-6 py-4 text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#365648]">Find your dream home <Arrow /></a>
            <a href={`tel:${phone}`} className="group inline-flex items-center justify-center border border-[#1e352e] px-6 py-4 text-xs font-bold tracking-[0.14em] text-[#1e352e] uppercase transition-colors hover:bg-[#e9e3d8]">Call now <Arrow /></a>
          </div>
          <div className="mt-14 flex items-center gap-4 border-t border-[#d7d3c7] pt-6 text-[#1e352e]">
            <span className="whitespace-nowrap font-serif text-[clamp(2.3rem,8vw,2.8rem)] leading-none">Nearly 30</span>
            <span className="text-[11px] font-bold leading-5 tracking-[0.15em] uppercase">Years in<br />real estate</span>
          </div>
        </div>
      </div>
      <div className="relative min-h-[390px] overflow-hidden lg:min-h-full">
        <img src="/images/pond.jpg" alt="Mountain Falls pond with the mountains of Pahrump beyond" className="h-full w-full object-cover object-center" fetchPriority="high" />
        <div className="absolute right-0 bottom-0 bg-[#1e352e] px-6 py-4 text-[11px] font-bold tracking-[0.16em] text-white uppercase sm:px-8">Pahrump, Nevada <span aria-hidden="true" className="ml-4 text-[#d1a875]">✦</span></div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-wrap grid items-center gap-12 py-24 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:py-32">
      <div className="relative mx-auto w-full max-w-[460px]">
        <div className="absolute -top-5 -left-5 h-[75%] w-[75%] border border-[#c8ad91]" aria-hidden="true" />
        <img src="/images/portrait.jpg" alt="Marci Metzger" loading="lazy" className="relative aspect-[4/5] w-full object-cover object-[center_24%]" />
        <div className="absolute right-[-12px] bottom-[-18px] bg-[#ad785b] px-6 py-4 font-serif text-2xl text-white sm:right-[-22px]">Marci Metzger</div>
      </div>
      <div className="pt-5 md:pt-0">
        <p className="eyebrow mb-5">Meet your local guide</p>
        <h2 className="section-title">Real estate is personal. <em className="text-[#ad785b]">So are we.</em></h2>
        <p className="mt-7 max-w-[640px] text-[17px] leading-8 text-[#525b52]">Marci Metzger is a Realtor for nearly three decades. Her team knows that a home is more than an address — and that great service begins with listening.</p>
        <p className="mt-5 max-w-[640px] text-[16px] leading-8 text-[#525b52]">Our team works hard every day to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, and we want to make sure our best is better every year.</p>
        <div className="mt-9 grid max-w-[550px] grid-cols-2 gap-6 border-t border-[#d9d9cf] pt-7">
          <div><p className="font-serif text-[clamp(2.3rem,4vw,3.5rem)] leading-none text-[#1e352e]">~90</p><p className="mt-2 text-xs leading-5 tracking-wider text-[#667067] uppercase">Clients helped in 2021</p></div>
          <div><p className="font-serif text-[clamp(2.3rem,4vw,3.5rem)] leading-none text-[#1e352e]">$28.5m</p><p className="mt-2 text-xs leading-5 tracking-wider text-[#667067] uppercase">Closed sales in 2021</p></div>
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approach" className="bg-[#eae7de] py-24 lg:py-30">
      <div className="section-wrap">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
          <div><p className="eyebrow mb-4">Top residential sales last 5 years</p><h2 className="section-title">Good moves start <em className="text-[#ad785b]">here.</em></h2></div>
          <p className="max-w-[330px] text-sm leading-7 text-[#526057]">Practical advice, thoughtful marketing, and someone in your corner from first conversation to closing.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="bg-[#f9f7f2]">
            <img src="/images/selling.jpg" alt="Bright open kitchen and living space" loading="lazy" className="aspect-[1.7] w-full object-cover" />
            <div className="p-7 sm:p-10"><p className="eyebrow mb-3">For sellers</p><h3 className="font-serif text-[2.4rem] leading-tight text-[#1e352e]">Don't just list it. <em>Get it sold.</em></h3><p className="mt-4 text-[15px] leading-7 text-[#59635a]">We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p><a href="#contact" className="group mt-7 inline-flex text-xs font-bold tracking-widest text-[#1e352e] uppercase underline underline-offset-8">Talk about selling <Arrow /></a></div>
          </article>
          <article className="bg-[#f9f7f2]">
            <img src="/images/buying.jpg" alt="Southwestern home with pool" loading="lazy" className="aspect-[1.7] w-full object-cover" />
            <div className="p-7 sm:p-10"><p className="eyebrow mb-3">For buyers</p><h3 className="font-serif text-[2.4rem] leading-tight text-[#1e352e]">A guide at <em>every step.</em></h3><p className="mt-4 text-[15px] leading-7 text-[#59635a]">Nobody knows the market like we do. Enjoy having a pro at your service: market analysis, upgrades lists, contractors on speed dial, and more.</p><a href="#find" className="group mt-7 inline-flex text-xs font-bold tracking-widest text-[#1e352e] uppercase underline underline-offset-8">Start your search <Arrow /></a></div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-2 block text-[11px] font-bold tracking-[0.14em] text-[#526057] uppercase">{label}</span>{children}</label>
}

const fieldClass = 'w-full min-w-0 rounded-none border border-[#d6d6cb] bg-white px-4 py-3.5 text-sm text-[#1e352e] outline-none focus:border-[#a86d4d] focus:ring-2 focus:ring-[#a86d4d]/15'

function FindHome() {
  return (
    <section id="find" className="relative overflow-hidden bg-[#1e352e] py-24 lg:py-30">
      <div className="section-wrap relative z-10 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="text-white"><p className="eyebrow mb-5 text-[#d6b38e]">Search listings</p><h2 className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-[1.05] tracking-[-0.05em]">Find your <em>dream home.</em></h2><p className="mt-6 max-w-[440px] text-base leading-8 text-white/75">Tell us what you're looking for and Marci's team will help narrow the search. Or browse the latest Pahrump listings now.</p><a href={listingsUrl} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex text-xs font-bold tracking-[0.16em] text-white uppercase underline decoration-[#c99d73] underline-offset-8">Browse Pahrump listings <Arrow diagonal /></a></div>
        <form onSubmit={(event) => submitEmail(event, 'Pahrump home search request')} className="bg-[#f9f7f2] p-6 shadow-2xl sm:p-9 lg:p-11">
          <div className="mb-6 flex items-center justify-between gap-3"><h3 className="font-serif text-3xl text-[#1e352e]">Your home wish list</h3><span className="text-xs text-[#758077]">Pahrump, NV</span></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Location"><input name="Location" defaultValue="Pahrump, NV" className={fieldClass} /></Field>
            <Field label="Type"><select name="Type" defaultValue="" className={fieldClass}><option value="">Any property type</option><option>House</option><option>Condo</option><option>Land</option><option>Commercial</option></select></Field>
            <Field label="Sort by"><select name="Sort by" defaultValue="" className={fieldClass}><option value="">No preference</option><option>Newest listings</option><option>Price: low to high</option><option>Price: high to low</option></select></Field>
            <Field label="Bedrooms"><select name="Bedrooms" defaultValue="" className={fieldClass}><option value="">Any bedrooms</option><option>1+</option><option>2+</option><option>3+</option><option>4+</option></select></Field>
            <Field label="Baths"><select name="Baths" defaultValue="" className={fieldClass}><option value="">Any baths</option><option>1+</option><option>2+</option><option>3+</option></select></Field>
            <div className="grid grid-cols-2 gap-3"><Field label="Min price"><input name="Min price" type="number" min="0" step="1000" placeholder="$ Min" className={fieldClass} /></Field><Field label="Max price"><input name="Max price" type="number" min="0" step="1000" placeholder="$ Max" className={fieldClass} /></Field></div>
          </div>
          <button className="group mt-6 flex w-full items-center justify-center bg-[#ad785b] px-6 py-4 text-xs font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#925d40]" type="submit">Email my search <Arrow /></button>
          <p className="mt-3 text-center text-xs leading-5 text-[#69736a]">Opens your email app with your search details ready to send.</p>
        </form>
      </div>
    </section>
  )
}

function Gallery() {
  const track = React.useRef(null)
  const dialog = React.useRef(null)
  const previousOverflow = React.useRef('')
  const [activePhoto, setActivePhoto] = React.useState(null)

  function move(direction) {
    const element = track.current
    element.scrollBy({ left: direction * (element.children[1].offsetLeft - element.children[0].offsetLeft), behavior: 'smooth' })
  }

  function openPhoto(index) {
    previousOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    setActivePhoto(index)
    dialog.current.showModal()
  }

  function closePhoto() {
    document.body.style.overflow = previousOverflow.current
    setActivePhoto(null)
  }

  function photoKeyDown(event) {
    if (event.key === 'ArrowRight') setActivePhoto((index) => (index + 1) % gallery.length)
    if (event.key === 'ArrowLeft') setActivePhoto((index) => (index - 1 + gallery.length) % gallery.length)
  }

  return (
    <section id="gallery" className="section-wrap py-24 lg:py-30">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow mb-4">Around the valley</p><h2 className="section-title">Photo <em className="text-[#ad785b]">gallery.</em></h2></div><p className="max-w-[300px] text-sm leading-7 text-[#606a61]">A glimpse of the places and spaces that make a house feel like home.</p></div>
      <div ref={track} tabIndex={0} role="region" aria-label="Photo gallery. Swipe or use the arrow buttons to browse." className="gallery-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {gallery.map(({ image, alt, label }, index) => <button key={image} type="button" onClick={() => openPhoto(index)} className="group relative block h-[270px] w-[78vw] max-w-[650px] shrink-0 snap-start overflow-hidden bg-[#deded5] text-left sm:h-[350px] sm:w-[64vw] lg:h-[420px] lg:w-[48%]" aria-label={`Open photo: ${label}`}><img src={image} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-6 pt-12 pb-5 text-sm font-semibold text-white">{label} <span aria-hidden="true" className="float-right">↗</span></span></button>)}
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-xs tracking-[0.08em] text-[#68736a]">Swipe to explore the gallery</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label="Previous gallery photo" className="h-11 w-11 border border-[#aeb7aa] text-lg text-[#1e352e] hover:bg-[#eae7de]">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next gallery photo" className="h-11 w-11 border border-[#aeb7aa] text-lg text-[#1e352e] hover:bg-[#eae7de]">→</button>
        </div>
      </div>
      <dialog ref={dialog} onClose={closePhoto} onKeyDown={photoKeyDown} aria-label="Photo viewer" className="gallery-dialog w-[min(96vw,1100px)] max-w-none border-0 bg-[#1e352e] p-0 text-white backdrop:bg-[#0b1711]/90">
        {activePhoto !== null && <>
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6"><p className="text-sm font-semibold">{gallery[activePhoto].label} <span className="ml-2 text-white/55">{activePhoto + 1} / {gallery.length}</span></p><button type="button" onClick={() => dialog.current.close()} aria-label="Close photo viewer" className="flex h-10 w-10 items-center justify-center text-2xl hover:bg-white/15">×</button></div>
          <img src={gallery[activePhoto].image} alt={gallery[activePhoto].alt} className="mx-auto max-h-[75dvh] max-w-full object-contain" />
          <div className="flex justify-between px-4 py-3 sm:px-6"><button type="button" onClick={() => setActivePhoto((index) => (index - 1 + gallery.length) % gallery.length)} aria-label="Previous photo" className="px-3 py-2 text-sm hover:bg-white/15">← Previous</button><button type="button" onClick={() => setActivePhoto((index) => (index + 1) % gallery.length)} aria-label="Next photo" className="px-3 py-2 text-sm hover:bg-white/15">Next →</button></div>
        </>}
      </dialog>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-[#f1eee6] py-24 lg:py-30"><div className="section-wrap"><p className="eyebrow mb-4">How we help</p><h2 className="section-title mb-12">Our <em className="text-[#ad785b]">services.</em></h2><div className="grid gap-5 md:grid-cols-3">{services.map((service) => <article key={service.number} className="bg-[#faf9f5]"><img src={service.image} alt={service.alt} loading="lazy" className="aspect-[1.45] w-full object-cover" /><div className="px-6 pt-6 pb-8 sm:px-8"><p className="mb-4 text-xs font-bold tracking-widest text-[#ad785b]">{service.number} / 03</p><h3 className="font-serif text-[clamp(1.6rem,2.2vw,2.2rem)] leading-tight text-[#1e352e]">{service.title}</h3><p className="mt-4 text-sm leading-7 text-[#5a645b]">{service.description}</p></div></article>)}</div></div></section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-wrap grid gap-12 py-24 lg:grid-cols-2 lg:gap-24 lg:py-30">
      <div><p className="eyebrow mb-4">Call or visit</p><h2 className="section-title">Let's make your <em className="text-[#ad785b]">next move.</em></h2><p className="mt-6 max-w-[480px] text-base leading-8 text-[#5c665d]">Whether you have questions, a property in mind, or just want to explore your options, we'd love to hear from you.</p><a className="mt-9 block font-serif text-[clamp(2rem,3.5vw,3.3rem)] text-[#1e352e] hover:text-[#ad785b]" href={`tel:${phone}`}>(206) 919-6886</a><div className="mt-8 grid gap-8 border-t border-[#d9d9cf] pt-7 sm:grid-cols-2"><div><h3 className="text-xs font-bold tracking-[0.15em] text-[#1e352e] uppercase">Visit the office</h3><p className="mt-3 text-sm leading-7 text-[#5c665d]">Marci Metzger<br />The Ridge Realty Group<br />3190 HW-160, Suite F<br />Pahrump, Nevada 89048</p><a href={officeMapUrl} target="_blank" rel="noopener noreferrer" className="group mt-3 inline-flex text-xs font-bold tracking-widest text-[#1e352e] uppercase underline underline-offset-5">Get directions <Arrow diagonal /></a></div><div><h3 className="text-xs font-bold tracking-[0.15em] text-[#1e352e] uppercase">Office hours</h3><p className="mt-3 text-sm leading-7 text-[#5c665d]">Open daily<br />8:00 am – 7:00 pm<br />Appointments outside office hours available upon request. Just call!</p></div></div><div className="relative mt-8 overflow-hidden border border-[#d9d9cf] bg-[#eae7de]"><iframe title="Map to the office in Pahrump" src={officeMapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" tabIndex={-1} className="pointer-events-none h-56 w-full border-0 grayscale sm:h-64" /><a href={officeMapUrl} target="_blank" rel="noopener noreferrer" aria-label="Open office location in Google Maps" className="absolute inset-0 grid place-items-center focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#1e6b48]"><span className="grid h-12 w-12 -translate-y-3 place-items-center rounded-full bg-white shadow-md"><svg aria-hidden="true" viewBox="0 0 24 32" className="h-9 w-7"><path d="M12 1C5.9 1 1 5.9 1 12c0 8.5 11 19 11 19s11-10.5 11-19C23 5.9 18.1 1 12 1Z" fill="#1e6b48" /><circle cx="12" cy="12" r="4" fill="white" /></svg></span></a></div></div>
      <form onSubmit={(event) => submitEmail(event, 'Message from Marci Metzger website')} className="self-start bg-[#eae7de] p-7 sm:p-10"><h3 className="font-serif text-3xl text-[#1e352e]">Send a message</h3><p className="mt-3 mb-7 text-sm leading-6 text-[#5a645b]">Tell us what's on your mind. Your email app will open with your message ready to send.</p><div className="space-y-4"><Field label="Name"><input name="Name" required autoComplete="name" className={fieldClass} /></Field><Field label="Email"><input name="Email" type="email" required autoComplete="email" className={fieldClass} /></Field><Field label="Message"><textarea name="Message" required rows="5" className={fieldClass} /></Field></div><button type="submit" className="group mt-6 inline-flex items-center whitespace-nowrap bg-[#1e352e] px-7 py-4 text-xs font-bold tracking-[0.14em] text-white uppercase hover:bg-[#365648]">Send message <Arrow /></button></form>
    </section>
  )
}

function Footer() {
  return <footer className="bg-[#1e352e] px-5 py-12 text-white sm:px-8"><div className="mx-auto max-w-[1260px]"><div className="flex flex-col justify-between gap-9 border-b border-white/20 pb-9 md:flex-row md:items-end"><div><img src="/images/logo.png" alt="Marci Metzger" loading="lazy" className="h-14 w-auto max-w-60 bg-white px-2 py-1 object-contain" /><p className="mt-3 text-[11px] font-bold tracking-[0.2em] text-white/65 uppercase">The Ridge Realty Group · Pahrump, Nevada</p><div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold tracking-[0.1em] uppercase"><a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6b38e]">Facebook ↗</a><a href="https://www.instagram.com/marcimetzger_theridge/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6b38e]">Instagram ↗</a><a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6b38e]">LinkedIn ↗</a></div></div><div className="flex flex-wrap items-center gap-4"><img src="/images/circle.png" alt="The Ridge Realty Group" loading="lazy" className="h-14 w-14 rounded-full object-contain" /><img src="/images/equal-housing.png" alt="Equal Housing Opportunity" loading="lazy" className="h-12 w-12 bg-white p-1 object-contain" /><img src="/images/realtor-pin.jpg" alt="Realtor emblem" loading="lazy" className="h-12 w-12 bg-white p-1 object-contain" /><img src="/images/chamber.jpg" alt="Pahrump Valley Chamber of Commerce" loading="lazy" className="h-12 w-12 bg-white p-1 object-contain" /></div></div><div className="flex flex-col gap-3 pt-6 text-xs text-white/55 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Marci Metzger · The Ridge Realty Group</p><a href="#top" className="text-white/75 hover:text-white">Back to top ↑</a></div></div></footer>
}

export default function App() {
  return <><a className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3" href="#main">Skip to content</a><Header /><main id="main"><Hero /><About /><Approach /><FindHome /><Gallery /><Services /><Contact /></main><Footer /></>
}
