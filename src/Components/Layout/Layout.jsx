import Navbar from '../Navbar/Navbar'
import Leftsidebar from '../LeftSidebar/Leftsidebar'
import Rightsidebar from '../RightSidebar/Rightsidebar'
import ScrollProgress from '../ScrollProgress/ScrollProgress'
import GraphicField from '../GraphicField/GraphicField'
import PageTransition from '../PageTransition/PageTransition'
import CursorFollower from '../CursorFollower/CursorFollower'
import { HireProvider, useHire } from '../HireModal/HireContext'
import Main from '../Main/Main'

function Shell() {
  const { open } = useHire()

  return (
    <div className="studio-bg studio-grain relative min-h-screen text-ink">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <GraphicField />
      {!open && <ScrollProgress />}
      <PageTransition />
      <CursorFollower />
      {!open && <Navbar />}
      {!open && <Leftsidebar />}
      {!open && <Rightsidebar />}

      <main className="relative z-10 w-full px-5 pb-16 pt-20 sm:px-8 md:px-16 lg:px-24 xl:px-28">
        <Main />
      </main>
    </div>
  )
}

function Layout() {
  return (
    <HireProvider>
      <Shell />
    </HireProvider>
  )
}

export default Layout
