export const Phone = (p:any)=>(
  <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
    <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#8ab4ff"/><stop offset="1" stopColor="#87e6c8"/>
    </linearGradient></defs>
    <path d="M6.5 3.5h3l1.5 4.5-2 1.5a12 12 0 005 5l1.5-2 4.5 1.5v3a2 2 0 01-2.2 2A16 16 0 014 8.7 2 2 0 016.5 3.5z"
      fill="none" stroke="url(#g1)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Calendar = (p:any)=>(
  <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
    <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#8ab4ff"/><stop offset="1" stopColor="#ffb07a"/>
    </linearGradient></defs>
    <rect x="3.5" y="4.5" width="17" height="16" rx="3" fill="none" stroke="url(#g2)" strokeWidth="1.75"/>
    <path d="M8 3.5v3M16 3.5v3M3.5 9.5h17" stroke="url(#g2)" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const Target = (p:any)=>(
  <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
    <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#87e6c8"/><stop offset="1" stopColor="#ffb07a"/>
    </linearGradient></defs>
    <circle cx="12" cy="12" r="7.5" fill="none" stroke="url(#g3)" strokeWidth="1.75"/>
    <circle cx="12" cy="12" r="3.5" fill="none" stroke="url(#g3)" strokeWidth="1.75"/>
    <path d="M12 8.5v3.5l2 2" stroke="url(#g3)" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

export const Plug = (p:any)=>(
  <svg width="22" height="22" viewBox="0 0 24 24" {...p}>
    <defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#8ab4ff"/><stop offset="1" stopColor="#87e6c8"/>
    </linearGradient></defs>
    <path d="M8.5 7.5h7v4a5.5 5.5 0 11-7 0v-4z" fill="none" stroke="url(#g4)" strokeWidth="1.75"/>
    <path d="M10 3.5v4M14 3.5v4" stroke="url(#g4)" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);
