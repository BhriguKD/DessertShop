import { useStepStore } from "../store/stepStore"
import OptionCard from '../components/OptionCard'
import Preview from '../components/Preview'

const baseOptions = [
  {name: 'Board', image: '/ingredients/base/board.png'},
  {name: 'Bowl', image: '/ingredients/base/bowl.png'},
  {name: 'Cracker', image: '/ingredients/base/cracker.png'},
  {name: 'Plate', image: '/ingredients/base/plate.png'}
]

export default function StepBase() {
  const {selectedBase, setBase}= useStepStore()

  return (
    <div className='w-full max-w-4xl text-center'>
      <h1 className="text-3xl font-bold">Step 1: Choose your Base 🍧 </h1>

      <div className="w-full flex flex-col items-center justify-center">
        {/* Live Preview */}
        <Preview size='w-72'/>

        {/* Options */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          {baseOptions.map((item)=>(
            <OptionCard
              key = {item.name}
              image = {item.image}
              label={item.name}
              isSelected={selectedBase === item.name}
              onClick={()=>setBase(item.name)}
            />
          ))}
        </div>
      </div>

      {selectedBase && (
        <div>
          You selected: <strong>{selectedBase}</strong>
        </div>
      )}
    </div>
  )
}