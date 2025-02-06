import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AudioVisualizer } from "./AudioVisualizer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";

export const InterviewCard = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-card p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Interview Session</h2>
          <Button
            variant={isRecording ? "destructive" : "default"}
            size="icon"
            onClick={() => setIsRecording(!isRecording)}
            className="hover-scale"
          >
            {isRecording ? <FaStop /> : <FaMicrophone />}
          </Button>
        </div>

        {isRecording && <AudioVisualizer />}

        <div className="space-y-2">
          <div className="p-4 bg-secondary/50 rounded-lg">
            <p className="text-sm font-medium">Latest Question:</p>
            <p className="text-muted-foreground">
              {isRecording
                ? "Listening..."
                : "Start recording to capture interview questions"}
            </p>
          </div>

          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm font-medium">AI Response:</p>
            <p className="text-muted-foreground">
              {isRecording
                ? "Generating response..."
                : "AI assistant will provide real-time suggestions"}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
