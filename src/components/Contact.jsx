import { useState } from 'react'

function ContactLink({ href, emoji, text, isExternal }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s',
        width: '100%',
        maxWidth: '28rem',
      }}
    >
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={{
          backgroundColor: hovered ? '#9ca3af' : '#6b7280',
          transition: 'all 0.3s',
        }}
        className="flex items-center gap-4 px-8 py-4 rounded-2xl w-full"
      >
        <span className="text-2xl">{emoji}</span>
        <span className="text-gray-300">{text}</span>
      </a>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16 text-pink-300">
        Contact
      </h2>
      <div className="flex flex-col gap-6 items-center">
        <ContactLink
          href="mailto:miyatomo.bis@gmail.com"
          emoji="📧"
          text="miyatomo.bis@gmail.com"
          isExternal={false}
        />
        <ContactLink
          href="https://github.com/miya-tomo-1"
          emoji="🐙"
          text="github.com/miya-tomo-1"
          isExternal={true}
        />
      </div>
    </section>
  )
}

export default Contact
