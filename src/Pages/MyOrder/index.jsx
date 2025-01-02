import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ChevronLeftIcon } from "@heroicons/react/16/solid"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1
    
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-2">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
                </Link>
                <h1>My order</h1>
            </div>
            <div className='flex flex-col w-80'>
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        ></OrderCard>
                    ))
                }
            </div>
        </Layout>
    )
}

export default MyOrder