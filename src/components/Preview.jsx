import { useStepStore } from "../store/stepStore";

export default function DessertPreview({ size = "w-72" }) {
  const {
    selectedBase,
    selectedFlavors,
    selectedToppings,
    selectedDecoration,
    selectedScene,
    userMessage,
  } = useStepStore();

  const renderImage = (folder, name) =>
    name
      ? `/ingredients/${folder}/${name.toLowerCase().replace(/ /g, "_")}.png`
      : null;

  const scene = selectedScene
    ? `/ingredients/backgrounds/${selectedScene.toLowerCase().replace(/ /g, "_")}.png`
    : "/backgrounds/table.png";

  return (
    <div className={`relative aspect-square ${size}`}>
      {/* Background */}
      <img
        src={scene}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl"
      />

      {/* Base */}
      {selectedBase && (
        <img
          src={renderImage("base", selectedBase)}
          alt={selectedBase}
          className="absolute inset-0 m-auto w-40 z-10"
        />
      )}

      {/* Flavors */}
      {selectedFlavors.map((flavor, index) => (
        <img
          key={index}
          src={renderImage("flavors", flavor)}
          alt={flavor}
          className="absolute inset-0 m-auto w-36 z-20"
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
          className="absolute inset-0 m-auto w-28 z-40"
        />
      )}

      {/* Message */}
      {userMessage && (
        <div className="absolute bottom-2 w-full text-center z-50 text-white font-semibold drop-shadow text-md bg-black/30 px-2 py-1 rounded">
          {userMessage}
        </div>
      )}
    </div>
  );
}
