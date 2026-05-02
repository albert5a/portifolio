"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const galleryItems = [
  {
    title: "OdontoGestão",
    category: "Plataforma SaaS",
    image: "/projects/odonto.jpg",
    link: "#",
  },
  {
    title: "Dashboard Financeiro",
    category: "Web App",
    image: "/projects/dashboard.jpg",
    link: "#",
  },
  {
    title: "Portal de Crédito",
    category: "Sistema Bancário",
    image: "/projects/credito.jpg",
    link: "#",
  },
  {
    title: "API Manager",
    category: "DevTools",
    image: "/projects/api.jpg",
    link: "#",
  },
  {
    title: "E-commerce",
    category: "Loja Virtual",
    image: "/projects/ecommerce.jpg",
    link: "#",
  },
  {
    title: "Analytics Platform",
    category: "Data Visualization",
    image: "/projects/analytics.jpg",
    link: "#",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Portfólio Visual
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Confira alguns dos projetos que desenvolvi e comercializei ao longo
            da minha carreira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-card border border-border hover:border-accent/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-highlight/20 opacity-50 group-hover:opacity-70 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center border border-border">
                  <span className="text-2xl font-bold text-accent">
                    {item.title.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-accent uppercase tracking-wider mb-1 block">
                  {item.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 bg-background/80 backdrop-blur-sm rounded-full">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
