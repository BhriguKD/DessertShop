import {create} from 'zustand'
export const useStepStore = create((set) => ({
  //GlobalStep
  stepIndex : 0,
  nextStep : () => set((state) => ({stepIndex: state.stepIndex + 1})),
  prevStep : () => set((state) => ({stepIndex: state.stepIndex - 1})),
  goToStep : (index) => set({ stepIndex: index}),

  //StepBase
  selectedBase: null,
  setBase: (base) => set({selectedBase: base}),


  //StepFlavors
  selectedFlavors: [],
  addFlavor: (flavor) => set((state)=>
    state.selectedFlavors.length < 3 && !state.selectedFlavors.includes(flavor) ? {selectedFlavors: [...state.selectedFlavors, flavor]}
  :state
  ),
  removeFlavor: (flavor) => set((state)=> ({
  selectedFlavors: state.selectedFlavors.filter((f)=> f!==flavor)
  })),

  //StepToppings
  selectedToppings: [],
  toggleTopping: (topping) => 
    set((state)=>({
      selectedToppings: state.selectedToppings.includes(topping)?
      state.selectedToppings.filter((t) => t !==topping)
    : [...state.selectedToppings, topping],
    })),
  
  //StepDecorate
  selectedDecoration: null,
  setDecoration: (name)=> set({selectedDecoration: name}),

  //StepScene
  selectedScene: null,
  setScene: (scene) => set({selectedScene: scene}),

  //StepTExt
  userMessage: '',
  setUserMessage: (text) => set({userMessage: text})

}))