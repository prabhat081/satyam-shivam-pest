import services from "@/data/services.json";

export default function sitemap() {
  const baseUrl = "https://satyamshivampestcontrol.in";

  // ✅ Static Pages
  const staticPages = [
    "",
    "/about-us",
    "/services",
    "/gallery",
    "/teams",
    "/contact-us",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // ✅ Dynamic Service Pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}