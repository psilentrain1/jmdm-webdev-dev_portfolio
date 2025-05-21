import { useEffect, useState } from "react";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isDesktop: true,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const resolution = window.innerWidth;
      const isMobile = resolution < 1080;
      const isDesktop = !isMobile;

      setDeviceType({ isMobile, isDesktop });
      setIsLoading(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [deviceType, isLoading] as const;
}
