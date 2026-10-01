// Simplified, recognizable brand marks — each carries its real brand color.

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-5 w-5">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#FEE411" />
          <stop offset="25%" stopColor="#F9449A" />
          <stop offset="60%" stopColor="#D6249F" />
          <stop offset="100%" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="32" height="32" rx="9" fill="url(#ig-grad)" />
      <rect
        x="12"
        y="12"
        width="16"
        height="16"
        rx="5"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      />
      <circle cx="20" cy="20" r="4.3" fill="none" stroke="#fff" strokeWidth="2" />
      <circle cx="26.3" cy="13.7" r="1.4" fill="#fff" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-5 w-5">
      <circle cx="20" cy="20" r="16" fill="#1877F2" />
      <path
        d="M22.3 26.2v-7.3h2.5l.4-2.9h-2.9v-1.8c0-.8.2-1.4 1.5-1.4h1.6v-2.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2h-2.5v2.9h2.5v7.3h3z"
        fill="#fff"
      />
    </svg>
  );
}

export function WhatsappIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-5 w-5">
      <circle cx="20" cy="20" r="16" fill="#25D366" />
      <path
        d="M26.6 13.4a7.9 7.9 0 0 0-12.9 8.9L12.5 27l4.8-1.2a7.9 7.9 0 0 0 9.3-12.4Z"
        fill="none"
      />
      <path
        d="M20 12.3a7.7 7.7 0 0 0-6.6 11.6l.2.4-.9 3.4 3.5-.9.4.2A7.7 7.7 0 1 0 20 12.3Zm4.5 11c-.2.5-1.1 1-1.5 1.1-.4.1-.9.1-1.4 0-.3-.1-.7-.2-1.3-.5-2.2-1-3.7-3.2-3.8-3.3-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.9c.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .5.4l.7 1.7c.1.2.1.3 0 .5l-.3.4-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.4.1.6-.1l.6-.7c.2-.3.4-.2.6-.1l1.5.7c.2.1.4.2.4.3.1.2.1.8-.1 1.3Z"
        fill="#fff"
      />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-5 w-5">
      <circle cx="20" cy="20" r="16" fill="#181717" />
      <path
        d="M20 10.5c-5.2 0-9.5 4.3-9.5 9.6 0 4.2 2.7 7.8 6.5 9 .5.1.6-.2.6-.5v-1.8c-2.6.6-3.2-1.2-3.2-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.7.3-1.1.6-1.4-2.1-.2-4.3-1.1-4.3-4.6 0-1 .3-1.9 1-2.5-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.5 1 2.5 0 3.5-2.2 4.4-4.3 4.6.3.3.6.9.6 1.8v2.6c0 .3.2.6.6.5 3.8-1.3 6.5-4.8 6.5-9 0-5.3-4.3-9.6-9.5-9.6Z"
        fill="#fff"
      />
    </svg>
  );
}
