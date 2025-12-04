import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/917011256694?text=Hello%20I%20visited%20your%20website"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          left: "20px",
          top: "85%",
          transform: "translateY(-50%)",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          zIndex: 9999,
          textDecoration: "none",
          animation: "bounce 2s infinite",
        }}
      >
        <WhatsAppIcon sx={{ color: "white", fontSize: 32 }} />

        {/* Animation CSS */}
        <style>
          {`
            @keyframes bounce {
              0%,100%{ transform: translateY(0); }
              50%{ transform: translateY(-6px); }
            }
          `}
        </style>
      </a>

      {/* Tooltip */}
      <div
        style={{
          position: "fixed",
          left: "95px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "#333",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "6px",
          fontSize: "14px",
          opacity: 0,
          transition: "0.3s ease",
          pointerEvents: "none",
        }}
        className="whatsapp-tooltip"
      >
        Chat with us
      </div>

      <style>
        {`
          a:hover + .whatsapp-tooltip {
            opacity: 1;
            left: 90px;
          }
        `}
      </style>
    </>
  );
}
