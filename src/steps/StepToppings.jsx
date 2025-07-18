import { useStepStore } from '../store/stepStore'
import OptionCard from '../components/OptionCard'

const toppings = [
  {name: 'Sprinkles', image: '/ingredients/toppings/sprinkles.png'},
  {name: 'Cherries', image: '/ingredients/toppings/cherries.png'},
  {name: 'Choco Chips', image: '/ingredients/toppings/choco_chips.png'},
  {name: 'Gummy Bears', image: '/ingredients/toppings/gummy_bears.png'},
  {name: 'Marshmallows', image: '/ingredients/toppings/marshmallows.png'},
  {name: 'Cookie Crumbs', image: '/ingredients/toppings/cookie_crumbs.png'}
]
export default function StepToppings() {
  const { selectedToppings, toggleTopping } = useStepStore()

  return (
    <div className='flex flex-col items-center gap-6'>
      <h1 className="text-3xl font-bold"> Pick Your Toppings 🍬</h1>
    <p className='text-gray-500 text-center max-w-md'>
      Choose multiple toppings to spice up your dessert! Tap to select or deselect.
    </p>

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
    {toppings.map((item)=>(
      <OptionCard
        key = {item.name}
        image = {item.image}
        label = {item.name}
        isSelected={selectedToppings.includes(item.name)}
        onClick={()=> toggleTopping(item.name)}
      />
    ))}
    </div>

    {selectedToppings.length > 0 && (
      <div className='mt-6 text-xl text-center'>
        Selected Toppings: <strong> {selectedToppings.join(',')}</strong>
      </div>
    )} 

    </div>
  )
}