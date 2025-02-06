import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const StatsCard = () => {
  const stats = [
    { label: "Questions", value: "0" },
    { label: "Avg. Response Time", value: "0s" },
    { label: "Confidence Score", value: "N/A" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="glass-card p-6">
        <h2 className="text-xl font-semibold mb-4">Session Stats</h2>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
