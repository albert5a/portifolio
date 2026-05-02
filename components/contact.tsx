"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato e vamos conversar!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-8"
        >
          <div className="flex-1 p-8 bg-card rounded-xl border border-border">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="md:w-64 space-y-4">
            <a
              href="mailto:contato@albertsoares.dev"
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="p-3 bg-accent/10 rounded-lg">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  E-mail
                </span>
                <p className="text-sm font-medium group-hover:text-accent transition-colors">
                  Enviar e-mail
                </p>
              </div>
            </a>

            <a
              href="https://github.com/albert5a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="p-3 bg-secondary rounded-lg">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  GitHub
                </span>
                <p className="text-sm font-medium group-hover:text-accent transition-colors">
                  @albert5a
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/albertsoares"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="p-3 bg-[#0077b5]/10 rounded-lg">
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  LinkedIn
                </span>
                <p className="text-sm font-medium group-hover:text-accent transition-colors">
                  Albert Soares
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
