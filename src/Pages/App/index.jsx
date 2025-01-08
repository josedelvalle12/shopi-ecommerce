import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home></Home> : <Navigate replace to={'sign-in'}></Navigate> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home></Home> : <Navigate replace to={'sign-in'}></Navigate> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home></Home> : <Navigate replace to={'sign-in'}></Navigate> },
    { path: '/furnitures', element: hasUserAnAccount && !isUserSignOut ? <Home></Home> : <Navigate replace to={'sign-in'}></Navigate> },
    { path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home></Home> : <Navigate replace to={'sign-in'}></Navigate> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home></Home> : <Navigate replace to={'sign-in'}></Navigate> },
    { path: '/my-account', element: <MyAccount></MyAccount> },
    { path: '/my-order', element: <MyOrder></MyOrder> },
    { path: '/my-orders', element: <MyOrders></MyOrders> },
    { path: '/my-orders/last', element: <MyOrder></MyOrder> },
    { path: '/my-orders/:id', element: <MyOrder></MyOrder> },
    { path: '/sign-in', element: <SignIn></SignIn> },
    { path: '/*', element: <NotFound></NotFound> },
  ])

  return routes
}

function App() {
  initializeLocalStorage()
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
        <Navbar></Navbar>
        <CheckoutSideMenu></CheckoutSideMenu>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App