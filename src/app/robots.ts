import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://demopilates.jariel.com.ar";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/reservar", "/cancelar", "/info", "/calendario"],
        disallow: [
          "/api/",
          "/turnos",
          "/clientes",
          "/planes",
          "/reservas",
          "/instructores",
          "/estadisticas",
          "/simulador-emails",
          "/login",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
