"use client";

import {  Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-xl font-bold">
              <span className="text-foreground">Albert</span>
              <span className="text-accent">.</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Desenvolvedor Full-Stack | Minas Gerais, Brasil
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contato@albertsoares.dev"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/albert5a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              G
            </a>
            <a
              href="https://linkedin.com/in/albertsoares"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              L
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {currentYear} Albert Soares. Feito com Next.js e muito cafe.
          </p>
        </div>
      </div>
    </footer>
  );
}
