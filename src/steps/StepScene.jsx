import { useStepStore } from "../store/stepStore"
import OptionCard from "../components/OptionCard"

const scenes = [
  {name: "Pastel Sky", image: '/backgrounds/pastel_sky.png'},
  {name: "Table", image: '/backgrounds/table.png'},
  {name: "Galaxy", image: '/backgrounds/galaxy.png'},
  {name: "Sunny Day", image: '/backgrounds/sunny_day.png'},
  {name: "Clouds", image: '/backgrounds/clouds.png'}
]

export default function StepScene() {
  const {selectedScene, setScene} = useStepStore()

  const handleClick = (scene) => {
    if(selectedScene === scene){
      setScene(null);
    } else {
      setScene(scene);
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Step 5: Choose a Background</h1>
      <p className="text-gray-500 text-center max-w-md">
        Select the vibe that fits your dessert scene.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {scenes.map((scene)=> (
        <OptionCard
        key = {scene.name}
        image = {scene.image}
        label = {scene.name}
        isSelected={selectedScene === scene.name}
        onClick={()=>handleClick(scene.name)}
        />
        ))}
      </div>

      {selectedScene && (
        <div className="mt-6 text-center text-lg">
          <strong>Selected Scene:</strong>{selectedScene}
        </div>
      )}
    </div>
  )
}