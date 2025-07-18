import { useStepStore } from "../store/stepStore"
import OptionCard from "../components/OptionCard"

const flavorOptions = [
  { name: 'Vanilla', image: '/ingredients/flavors/vanilla.png'},
  { name: 'Chocolate', image: '/ingredients/flavors/chocolate.png'},
  { name: 'Stawberry', image: '/ingredients/flavors/strawberry.png'},
  { name: 'Butterscotch', image: '/ingredients/flavors/butterscotch.png'},
  { name: 'Mango', image: '/ingredients/flavors/mango.png'},
]

export default function StepFlavors() {
  const { selectedFlavors, addFlavor, removeFlavor} = useStepStore()

  const toggleFlavor = (flavor) => {
    if(selectedFlavors.includes(flavor)){
      removeFlavor(flavor)
    } else {
      addFlavor(flavor)
    }
  }

  return (
    <div className="w-full max-w-4xl text-center">
      <h1 className="text-3xl font-bold mb-6">Step 2: Choose your Flavors 🍓🍫 </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
        {flavorOptions.map((item)=> (
          <OptionCard
            key={item.name}
            image = {item.image}
            label={item.name}
            isSelected={selectedFlavors.includes(item.name)}
            onClick={()=> toggleFlavor(item.name)}
          />
        ))}
      </div>
      {selectedFlavors.length > 0 && (
        <div className="mt-6 text-xl">
          Selected Flavors: <strong>{selectedFlavors.join(',')}</strong>
        </div>
      )}

    </div>
  )
}