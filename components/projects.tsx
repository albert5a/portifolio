"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "OdontoGestão",
    description:
      "Plataforma completa para gerenciamento financeiro, atendimento e tratamento de consultórios odontológicos. Sistema integrado com agenda, prontuários e controle financeiro.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    type: "pessoal",
    featured: true,
  },
  {
    title: "Sistema de Crédito Consignado",
    description:
      "Infraestrutura completa para originação de crédito consignado. APIs robustas, processamento de dados e integração com sistemas bancários.",
    tags: ["Node.js", "Express", "AWS", "Docker"],
    type: "comercial",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Painel de visualização de dados em tempo real com gráficos interativos e relatórios personalizados para tomada de decisões.",
    tags: ["React", "TypeScript", "Chart.js", "REST API"],
    type: "comercial",
  },
  {
    title: "API Gateway",
    description:
      "Gateway de APIs com autenticação, rate limiting e monitoramento. Arquitetura escalável para microserviços.",
    tags: ["Node.js", "Docker", "AWS", "Redis"],
    type: "comercial",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
            Projetos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trabalhos Selecionados
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Uma seleção de projetos pessoais e comerciais que demonstram minha
            experiência em desenvolvimento full-stack.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-6 md:p-8 bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300 ${
                project.featured
                  ? "md:col-span-2 bg-gradient-to-br from-card to-accent/5"
                  : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-accent/10 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs text-accent font-medium">
                    Destaque
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span
                    className={`inline-block px-2.5 py-0.5 text-xs rounded-full mb-3 ${
                      project.type === "pessoal"
                        ? "bg-highlight/10 text-highlight"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {project.type === "pessoal"
                      ? "Projeto Pessoal"
                      : "Comercial"}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 md:ml-6">
                  <button
                    className="p-2.5 border border-border rounded-full hover:border-accent/50 hover:text-accent transition-colors"
                    aria-label="Ver código no GitHub"
                  >
                    G
                  </button>
                  <button
                    className="p-2.5 border border-border rounded-full hover:border-accent/50 hover:text-accent transition-colors"
                    aria-label="Ver projeto"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
