import { ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
}
export const Header: React.FC<HeaderProps> = () => {
  return <header className="text-3xl font-bold">Header</header>
}

export const Header2: React.FC<HeaderProps> = () => {
  return <header className="text-3xl font-bold">Header</header>
}

export default Header
