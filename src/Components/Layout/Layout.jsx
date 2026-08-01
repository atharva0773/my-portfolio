import Navbar from '../Navbar/Navbar'
import Leftsidebar from '../LeftSidebar/Leftsidebar'
import Rightsidebar from '../RightSidebar/Rightsidebar'
import ScrollProgress from '../ScrollProgress/ScrollProgress'
import GraphicField from '../GraphicField/GraphicField'
import PageTransition from '../PageTransition/PageTransition'
import CursorFollower from '../CursorFollower/CursorFollower'
import Main from '../Main/Main'

function Layout() {
  return (
    <div className="studio-bg studio-grain relative min-h-screen text-ink">
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <GraphicField />
      <ScrollProgress />
      <PageTransition />
      <CursorFollower />
      <Navbar />
      <Leftsidebar />
      <Rightsidebar />

      <main className="relative z-10 w-full px-5 pb-16 pt-20 sm:px-8 md:px-16 lg:px-24 xl:px-28">
        <Main />
      </main>
    </div>
  )
}

export default Layout
