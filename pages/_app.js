import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { init as initApm } from '@elastic/apm-rum'


import * as ga from "../lib/ga";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const apm = initApm({

    // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
    serviceName: 'test-apm',
  
    // Set custom APM Server URL (default: http://localhost:8200)
    serverUrl: 'https://vercel.com/suchakhri/learn-nextjs',
  
    // Set service version (required for sourcemap feature)
    serviceVersion: ''
  })
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
