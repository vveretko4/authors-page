export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_ID) {
    // @ts-ignore
    window.gtag('config', GA_ID, { page_path: url });
  }
};

export const gtagSendEvent = (url: string) => {
  const callback = function () {
    if (typeof url === 'string') {
      window.location.href = url;
    }
  };
  if (typeof window !== 'undefined' && window.gtag) {
    // @ts-ignore
    window.gtag('event', 'manual_event_OUTBOUND_CLICK', {
      'event_callback': callback,
      'event_timeout': 2000,
    });
  }
  return false;
};