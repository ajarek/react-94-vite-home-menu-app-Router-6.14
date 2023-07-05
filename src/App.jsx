import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import Main from './layouts/Main/Main'
import Menu from './pages/Menu/Menu'
import MenuEdit from './pages/MenuEdit/MenuEdit'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Menu />,
        errorElement: <Error />,
      },
      {
        path: '/menu-edit',
        element: <MenuEdit />,
        errorElement: <Error />,
      },
      
    
    ],
  },
])
function App() {
  const [breakfasts,setBreakfasts]=useState(['zupa mleczna','jajka z majonezem',' kanapki z serem','zupa mleczna','parówki','jajecznica','zupa mleczna'])
  const [lunches,setLunches]=useState(['stek wieprzowy w sosie','spaghetti bolognese',' naleśniki z serem','zupa pomiod.','pulpety w sosie pomid.','grilowany filet w sosie śmiet.','panierowany filet drobiowy, frytki '])
  const [dinners,setDinners]=useState(['kanapki z wędliną i serem, kiełbaski','kanapki z wędliną i serem, parówki',' kanapki z serem','kanapki z wędliną i serem, białe kiełbaski ','kanapki z wędliną i serem, parówki','burgery wołowe z pomidorem , ogórkiem i sosem ','kanapki z wędliną i serem, parówki'])
  return (
    <div className='App'>
      <AppContext.Provider
        value={{breakfasts,setBreakfasts,lunches,setLunches,dinners,setDinners}}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
