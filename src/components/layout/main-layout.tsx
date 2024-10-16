import { ReactNode } from "react"
import Sidebar from "../sidebar"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Sidebar />
      <main className="sm:ml-16 p-4">
        {children}
      </main>
    </>
  )
}
