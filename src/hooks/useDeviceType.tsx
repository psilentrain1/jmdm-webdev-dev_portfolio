import { useEffect, useState } from "react";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const resolution = window.innerWidth;
      const isMobile = resolution < 1080;
      const isDesktop = !isMobile;

      setDeviceType({ isMobile, isDesktop });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
}
