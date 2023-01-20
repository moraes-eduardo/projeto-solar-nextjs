import { createContext } from "react"

export const ContextSolar = createContext({})

export const SolarProvider = ({ children }) => {

  const potcliente = " "
  const potmodulo = 0
  const qtdemodulo = 0

  return (
      <ContextSolar.Provider value={{ potcliente, potmodulo, qtdemodulo }}>
          {children}
      </ContextSolar.Provider>
  )
}