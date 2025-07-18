import { motion } from "framer-motion"
import { useStepStore } from "../store/stepStore"
import confetti from "canvas-confetti"
import { useEffect } from "react"

export default function StepFinish() {
  const {
    selectedBase,
    selectedFlavors,
    selectedToppings,
    selectedDecoration,
    selectedScene,
    userMessage
  } = useStepStore();

  // Trigger celebration on mount 🎉
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  }, []);

  const renderImage = (folder, name) =>
    name ? `/ingredients/${folder}/${name.toLowerCase().replace(/ /g, "_")}.png` : null;

  const scene = selectedScene
    ? `/backgrounds/${selectedScene.toLowerCase().replace(/ /g, "_")}.png`
    : "/backgrounds/table.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center gap-6 font-[Fredoka]"
    >
      <h1 className="text-4xl font-extrabold text-pink-600 drop-shadow-sm">Final Preview 🍽️</h1>
      <p className="text-gray-500 text-center max-w-md text-lg">Here’s your delicious creation, ready to serve!</p>

      <div className="bg-white/60 backdrop-blur-md border-2 border-white/50 rounded-3xl shadow-2xl p-4 sm:p-6 relative w-[320px] sm:w-[420px]">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">

          {/* Background */}
          <img
            src={scene}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Base */}
          {selectedBase && (
            <img
              src={renderImage("base", selectedBase)}
              alt={selectedBase}
              className="absolute inset-0 m-auto w-48 z-10"
            />
          )}

          {/* Flavors */}
          {selectedFlavors.map((flavor, index) => (
            <img
              key={index}
              src={renderImage("flavors", flavor)}
              alt={flavor}
              className="absolute inset-0 m-auto w-40 z-20"
            />
          ))}

          {/* Toppings */}
          {selectedToppings.map((topping, index) => (
            <img
              key={index}
              src={renderImage("toppings", topping)}
              alt={topping}
              className="absolute inset-0 m-auto w-32 z-30"
            />
          ))}

          {/* Decoration */}
          {selectedDecoration && (
            <img
              src={renderImage("decorations", selectedDecoration)}
              alt={selectedDecoration}
              className="absolute inset-0 m-auto w-36 z-50"
            />
          )}

          {/* Message */}
          {userMessage && (
            <div className="absolute bottom-2 w-full text-center z-60 text-white font-semibold drop-shadow text-lg sm:text-xl bg-black/30 px-2 py-1 rounded">
              {userMessage}
            </div>
          )}
        </div>
      </div>

      <button
        className="px-6 py-3 rounded-full bg-gradient-to-br from-pink-400 to-yellow-300 hover:scale-105 active:scale-95 transition transform text-white font-bold text-lg shadow-lg"
        onClick={() => window.location.reload()}
      >
        Make Another 🍦
      </button>

      <p className="text-gray-600 mt-2">Take a screenshot and share your dessert with friends!</p>
    </motion.div>
  );
}
