import { useEffect, useRef } from "react";

const MapaDunas = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.895947610275066, lng: -109.89015770277597 },
        zoom: 14,
        mapId: 'a99b91bc8336b82a'
      });

      const locations = [
        {
          lat: 22.909056992656467,
          lng: -109.89116981961409,
          title: "Dunas",
          description: "Dunas",
          icon: "/img/dunas/dunas.png",
          width: "50px",
          height: "50px"
        },
        {
          lat: 22.909270946695102,
          lng: -109.89231559471953,
          title: "Restaurante el Huerto",
          description: "Restaurante el Huerto",
          icon: "/img/dunas/rest-el-huerto.png",
          width: "70px",
          height: "70px"
        },
        {
          lat: 22.913047561547117,
          lng: -109.8958425610268,
          title: "Colegio del Mar",
          description: "Colegio del Mar",
          icon: "/img/dunas/colegio-del-mar.png",
          width: "80px",
          height: "80px"
        },
        {
          lat: 22.9114565025473,
          lng: -109.90759063643674,
          title: "Cabo San Lucas Country Club",
          description: "Cabo San Lucas Country Club",
          icon: "/img/dunas/cabo-country-club.png",
          width: "85px",
          height: "85px"
        },
        {
          lat: 22.898812575905684,
          lng: -109.88256630035349,
          title: "Costco",
          description: "Costco",
          icon: "/img/dunas/costco.png",
          width: "70px",
          height: "70px"
        },
        {
          lat: 22.88937601884208,
          lng: -109.89454329504663,
          title: "Playa el Médano",
          description: "Playa el Médano",
          icon: "/img/dunas/playa-el-medano.png",
          width: "100px",
          height: "100px"
        },
        {
          lat: 22.876045485857894,
          lng: -109.89452891246572,
          title: "El Arco",
          description: "El Arco",
          icon: "/img/dunas/el-arco.png",
          width: "60px",
          height: "60px"
        },
        {
          lat: 22.871759356590662,
          lng: -109.90578486026627,
          title: "Marina Cabo San Lucas",
          description: "Marina Cabo San Lucas",
          icon: "/img/dunas/marina.png",
          width: "130px",
          height: "130px"
        },
      ];

      locations.forEach(({ lat, lng, title, description, icon, width, height }) => {
        const content = document.createElement("div");
        content.innerHTML = `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="margin: 0; font-size: 18px; font-weight: 600; color:#AD9873">${title}</h3>
            <p style="margin: 4px 0 0; font-size: 14px;">${description}</p>
          </div>
        `;

        const infowindow = new window.google.maps.InfoWindow({ content });

        const pin = document.createElement("img");
        pin.src = icon;
        pin.style.width = width || "48px";
        pin.style.height = height || "48px";
        pin.style.objectFit = "contain";

        const marker = new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat, lng },
          content: pin,
          title,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      });
    };

    // Cargar script si aún no está
    if (!window.google?.maps?.marker) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return <div ref={mapRef} className="h-full" />;
};

export default MapaDunas;