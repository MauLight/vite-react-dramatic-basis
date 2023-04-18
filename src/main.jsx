import React from 'react'
import ReactDOM from 'react-dom/client'
import { createContext, useReducer } from "react"
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

export const AppContext = createContext();

const initialState = {
  theme: "",
  truth: "truth",
  lie: "lie",
  contrapositive: "contrapositive",
  wound: "Wound",
  ghost: "ghost",
  ch_logline: "",
  desire: "desire",
  goal: "goal",
  plan: [],
  antagonist: "",
  allies: "",
  gatekeepers: "",
}

const reducer = (state, action) => {
  if (action.type === 'theme') return { ...state, theme: action.payload }
  if (action.type === 'truth') return { ...state, truth: action.payload }
  if (action.type === 'contrapositive') return { ...state, contrapositive: action.payload }
  if (action.type === 'lie') return { ...state, lie: action.payload }
  if (action.type === 'need') return { ...state, need: action.payload }
  if (action.type === 'wound') return { ...state, wound: action.payload }
  if (action.type === 'ghost') return { ...state, ghost: action.payload }
  if (action.type === 'ch_logline') return { ...state, ch_logline: action.payload }
  if (action.type === 'desire') return { ...state, desire: action.payload }
  if (action.type === 'goal') return { ...state, goal: action.payload }
  if (action.type === 'antagonism') return { ...state, antagonism: action.payload }
  if (action.type === 'plan') return { ...state, plan: [...state.plan, action.payload] }
  if (action.type === 'antagonist') return { ...state, antagonist: action.payload }
  if (action.type === 'allies') return { ...state, allies: action.payload }
  if (action.type === 'gatekeepers') return { ...state, gatekeepers: action.payload }
  if (action.type === 'defeat') return { ...state, defeat: action.payload }
  if (action.type === 'half_truth') return { ...state, half_truth: action.payload }
  if (action.type === 'battle') return { ...state, battle: action.payload }
  if (action.type === 'resurrection') return { ...state, resurrection: action.payload }
  if (action.type === 'psychological') return { ...state, psychological: action.payload }
  if (action.type === 'moral') return { ...state, moral: action.payload }
  if (action.type === 'f_logline') return { ...state, f_logline: action.payload }
}

const Main = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <App />
    </AppContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  </React.StrictMode>,
)
