import { motion } from "framer-motion";
import { Crown, Linkedin, Github, Mail, MessageSquare } from "lucide-react";
import Ballpit from "@/components/ui/Ballpit";
import ElectricBorder from "@/components/ui/ElectricBorder";

export default function Creators() {
  return (
    <motion.div
      className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Feedback Button */}
      <motion.a
        href="mailto:prateekdas5255@gmail.com?subject=NUCLEUS%20Feedback"
        className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <MessageSquare className="w-4 h-4 text-[#00c8ff]" />
        <span className="text-xs font-semibold text-white/80">Feedback</span>
      </motion.a>

      {/* Full-screen Ballpit overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Ballpit
          count={250}
          gravity={0.4}
          friction={0.99}
          wallBounce={0.8}
          followCursor={true}
          colors={["#00c8ff", "#cc44ff", "#44ff88", "#5227FF", "#ff4488", "#ff8844"]}
        />
      </div>

      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(204,68,255,0.04) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="text-5xl md:text-6xl font-black tracking-tight text-white mb-2"
            style={{ textShadow: "0 0 40px rgba(0,200,255,0.2)" }}
          >
            MEET THE CREATOR
            <motion.span
              style={{ color: "#00c8ff" }}
              animate={{ textShadow: ["0 0 10px rgba(0,200,255,0.5)", "0 0 30px rgba(0,200,255,0.8)", "0 0 10px rgba(0,200,255,0.5)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >.</motion.span>
          </h1>
          <p className="text-sm text-muted-foreground/50 max-w-2xl mx-auto leading-relaxed">
            Architecting the definitive engine for spatial chemistry and computational intelligence.
          </p>
        </motion.div>

        {/* Single lead card */}
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <ElectricBorder color="#00c8ff" thickness={2} speed={1.5} chaos={0.1}>
            <div
              className="relative p-8 rounded-2xl overflow-hidden group cursor-default"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                boxShadow: "0 0 40px hsl(200 100% 50% / 0.3)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "inset 0 0 30px #00c8ff10, 0 0 30px #00c8ff20" }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00c8ff] to-[#0060ff]"
                style={{ boxShadow: "0 0 12px #00c8ff60" }}
              />

              {/* Card content — centred */}
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                {/* Icon badge */}
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00c8ff] to-[#0060ff] shrink-0"
                  style={{ boxShadow: "0 4px 25px hsl(200 100% 50% / 0.3), 0 0 15px #00c8ff30" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Crown className="w-7 h-7 text-white" />
                </motion.div>

                {/* Name + badge */}
                <div>
                  <div className="flex items-center justify-center gap-3 mb-1">
                    <h3
                      className="text-3xl font-black tracking-tight"
                      style={{ color: "#00c8ff", textShadow: "0 0 20px #00c8ff70" }}
                    >
                      Prateek Das
                    </h3>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-[0.15em] uppercase shrink-0"
                      style={{
                        background: "#00c8ff15",
                        border: "1px solid #00c8ff30",
                        color: "#00c8ff",
                        boxShadow: "0 0 10px #00c8ff20",
                      }}
                    >
                      LEAD
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">System Architect &amp; Full-Stack Developer</p>
                  <p className="text-[10px] text-muted-foreground/30 font-mono mt-1.5 tracking-wider">
                    25BCE10599
                  </p>
                </div>

                {/* Socials */}
                <div className="flex items-center justify-center gap-4">
                  <a href="https://www.linkedin.com/in/prateek-das-a45215252/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#00c8ff] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/Amazingdude1525" target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#00c8ff] transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="mailto:prateekdas5255@gmail.com" className="text-white/40 hover:text-[#00c8ff] transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ElectricBorder>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div
            className="inline-block px-6 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p className="text-[10px] text-muted-foreground/40 tracking-[0.3em] uppercase font-light">
              NUCLEUS • QUANTUM SPATIAL ENGINE • FORGING THE FUTURE AT THE ATOMIC LEVEL
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
