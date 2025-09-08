import * as React from "react";

type P = React.SVGProps<SVGSVGElement> & { strokeWidth?: number };

const S = ({children, strokeWidth=1.75, ...rest}: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...rest}>{children}</svg>
);

// Receptionist (headset + spark)
export const IReceptionist = (props:P)=>(
  <S {...props}><path d="M6 9a6 6 0 1 1 12 0v4"/><rect x="3" y="12" width="4" height="6" rx="1"/><rect x="17" y="12" width="4" height="6" rx="1"/><path d="M12 16v4"/><circle cx="19" cy="5" r="1.5"/></S>
);

// Scheduler (calendar + check)
export const IScheduler = (props:P)=>(
  <S {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 2v4M16 2v4M3 9h18"/><path d="m9 14 2 2 4-4"/></S>
);

// Intake (document + pen)
export const IIntake = (props:P)=>(
  <S {...props}><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v6h6"/><path d="M9 14h6M9 18h6"/></S>
);

// Follow-ups (arrows loop + msg)
export const IFollow = (props:P)=>(
  <S {...props}><path d="M21 10a7 7 0 0 0-12-4"/><path d="M3 14a7 7 0 0 0 12 4"/><path d="M7 6v4H3"/><path d="M21 14h-4v4"/></S>
);

// Reporting (chart)
export const IReporting = (props:P)=>(
  <S {...props}><path d="M3 20h18"/><rect x="6" y="11" width="3" height="7" rx="1"/><rect x="11" y="8" width="3" height="10" rx="1"/><rect x="16" y="5" width="3" height="13" rx="1"/></S>
);

// Security (shield)
export const ISecurity = (props:P)=>(
  <S {...props}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/></S>
);

// Integrations (nodes)
export const IIntegrations = (props:P)=>(
  <S {...props}><circle cx="12" cy="12" r="3"/><circle cx="4" cy="12" r="2"/><circle cx="20" cy="12" r="2"/><path d="M6 12h4m4 0h4"/></S>
);


