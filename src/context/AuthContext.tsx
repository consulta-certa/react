import { createContext, useContext, useState, useEffect } from 'react'
import type { tipoPaciente } from '../types/tipoPaciente'

type AuthContextType = {
  paciente: tipoPaciente | null
  login: (p: tipoPaciente) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [paciente, setPaciente] = useState<tipoPaciente | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('perfilLogado')
    if (stored) {
      try {
        setPaciente(JSON.parse(stored))
      } catch {
        localStorage.removeItem('perfilLogado')
      }
    }
  }, [])

  const login = (p: tipoPaciente) => {
    setPaciente(p)
    localStorage.setItem('perfilLogado', JSON.stringify(p))
  }

  const logout = () => {
    setPaciente(null)
    localStorage.removeItem('perfilLogado')
  }

  return (
    <AuthContext.Provider value={{ paciente, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth precisa estar dentro de AuthProvider')
  return context
}