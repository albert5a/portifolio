"use client";

import { motion } from "framer-motion";
import { Gamepad2, Mountain, Music, Skateboard } from "lucide-react";

const hobbies = [
  {
    icon: Music,
    title: "Capoeira",
    description:
      "Arte marcial brasileira que combina luta, dança, acrobacia e música. Uma forma de expressão cultural que pratico com dedicação.",
    color: "accent",
  },
  {
    icon: Skateboard,
    title: "Skate",
    description:
      "Liberdade sobre rodas. O skate me ensina persistência, criatividade e a importância de se levantar após cada queda.",
    color: "highlight",
  },
  {
    icon: Gamepad2,
    title: "Video Games",
    description:
      "Jogos são uma forma de relaxar e também uma fonte de inspiração para interfaces e experiências interativas.",
    color: "primary",
  },
  {
    icon: Mountain,
    title: "Trilhas",
    description:
      "Explorar as montanhas de Minas Gerais me conecta com a natureza e renova minhas energias para novos desafios.",
    color: "accent",
  },
];

const colorClasses = {
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "hover:border-accent/30",
  },
  highlight: {
    bg: "bg-highlight/10",
    text: "text-highlight",
    border: "hover:border-highlight/30",
  },
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "hover:border-primary/30",
  },
};

export function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
            Além do Código
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hobbies & Interesses
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Quando não estou codando, você pode me encontrar praticando
            atividades que alimentam minha criatividade e bem-estar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => {
            const colors =
              colorClasses[hobby.color as keyof typeof colorClasses];
            const Icon = hobby.icon;

            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 bg-card rounded-xl border border-border ${colors.border} transition-all duration-300`}
              >
                <div className={`p-3 ${colors.bg} rounded-lg w-fit mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {hobby.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
