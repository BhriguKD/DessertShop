import { useStepStore } from "../store/stepStore"

export default function StepText(){
  const {userMessage, setUserMessage} = useStepStore()


  return ( 
    <div className="flex flex-col items-center gap-6 w-full">
        <h1 className="text-3xl font-bold">Step 6: Name & Save Your Dessert 🎊
    </h1>
    <p className="text-gray-500 text-center max-w-md">
      Add your name or a short message — it’ll be shown on the final dessert preview.
    </p>

    <input
     type="text"
     maxLength={40}
     value={userMessage}
     onChange={(m)=> setUserMessage(m.target.value)}
     placeholder="e.g. Made by Dexter ✨"
     className="mt-4 px-4 py-2 text-xl border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-pink-400 w-80 text-center"
    />

    {userMessage && (
      <div className="text-lg mt-4">
        <strong>Preview:</strong>
        <span className="text-pink-600">{userMessage}</span>
      </div>
    )}
    </div>
  )
}