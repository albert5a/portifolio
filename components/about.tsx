"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20"
        >
          <div>
            <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
              Sobre
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformando ideias em código
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sou um desenvolvedor apaixonado por criar soluções que fazem a
              diferença. Com experiência sólida em{" "}
              <strong className="text-foreground">TypeScript</strong> e o
              ecossistema JavaScript, trabalho construindo aplicações robustas e
              escaláveis.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Entusiasta de{" "}
              <strong className="text-foreground">
                Inteligência Artificial
              </strong>
              , utilizo IA para otimizar entregas, acelerar desenvolvimento e
              criar testes unitários com Vitest e Jest. Acredito que a
              tecnologia deve simplificar a vida das pessoas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tenho costume em fazer{" "}
              <strong className="text-foreground">code review</strong>,
              garantindo qualidade e compartilhando conhecimento com a equipe.
            </p>
          </div>

          <div className="space-y-6">
            <motion.div
              className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Atual
                  </span>
                  <h3 className="font-semibold text-lg mt-1">
                    Desenvolvedor Full-Stack
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Atuando em empresa que fornece toda infraestrutura para
                    originação de crédito consignado. Desenvolvimento de
                    soluções robustas para o mercado financeiro.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-highlight/10 rounded-lg">
                  <Sparkles className="w-5 h-5 text-highlight" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Foco
                  </span>
                  <h3 className="font-semibold text-lg mt-1">IA & Automação</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Utilizo inteligência artificial para otimizar entregas,
                    gerar testes automatizados e acelerar o ciclo de
                    desenvolvimento.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Localização
                  </span>
                  <h3 className="font-semibold text-lg mt-1">Minas Gerais</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Das montanhas mineiras para o mundo digital. Inspirado pela
                    natureza, motivado pela tecnologia.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
