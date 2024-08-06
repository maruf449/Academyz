import Topbar from "@/components/layout/Topbar"
import Footere from "@/components/sections/Footer"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      
      {children}
      <Footere/>

    </>
  )
}

export default HomeLayout