import { AuthForm } from "@/components/auth/AuthForm";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-2">Interview Assistant</h1>
          <p className="text-muted-foreground">
            Your AI-powered companion for perfect interview responses
          </p>
        </motion.div>

        <AuthForm />
      </div>
    </div>
  );
};

export default Index;
