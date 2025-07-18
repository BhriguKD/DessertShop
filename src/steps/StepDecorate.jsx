import { useStepStore } from "../store/stepStore"
import OptionCard from "../components/OptionCard"

const decorations = [
  {name: 'Chocolate Art', image: '/ingredients/decorations/chocolate_art.png'},
  {name: 'Frost Swirl', image: '/ingredients/decorations/frost_swirl.png'},
  {name: 'Cute Face', image: '/ingredients/decorations/cute_face.png'},
  {name: 'Mint Leaf', image: '/ingredients/decorations/mint_leaf.png'}
]

export default function StepDecorate() {
  const {selectedDecoration, setDecoration} = useStepStore()

  const handleClick = (name) => {
    if(selectedDecoration === name){
      setDecoration(null);
    } else {
      setDecoration(name);
    }
  }

  return (
  <div className='flex flex-col items-center gap-6'>
    <h1 className="text-3xl font-bold">Step 4: Decorate with Syrup 🎨</h1>
    <p className='text-gray-500 text-center max-w-md'>
      Choose one standout decoration to top off your dessert.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-4 md-grid-cols-6 gap-6">
      {decorations.map((item)=>(
        <OptionCard
        key ={item.name}
        image = {item.image}
        label = {item.name}
        isSelected={selectedDecoration === item.name}
        onClick={()=> handleClick(item.name)}
        />
      ))}
    </div>

    {selectedDecoration && (
      <div className="mt-6 text-center text-lg">
        <strong>Selected Decoration:</strong>{selectedDecoration}
      </div>
    )}
  </div>
  )
}
