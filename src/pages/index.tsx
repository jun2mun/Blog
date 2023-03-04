
// templates components import
import Sidebar from "@/components/templates/Sidebar"
import Section from "@/components/templates/Section"
import Footer from "@/components/templates/Footer"
// 헤더 필요 없음 import Header from "@/components/templates/Header"

// molecules components import

export default function Home(){
  return (
    <>
      <div style={{borderStyle:"solid",margin:'0', padding:'0'}}>
        <Sidebar/>
        {/* section part */}
        <Section/>
        
        <Footer/>
      </div>

    </>
  )
}
