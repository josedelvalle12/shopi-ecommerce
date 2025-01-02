import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusCircleIcon, CheckIcon} from "@heroicons/react/16/solid"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()

        console.log('CART: ', context.cartProducts)
    }

    const renderIcon= (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return(
                <button 
                className="absolute top-0 right-0 flex justify-center items-center w-7 h-7 m-2 p-1">
                    <CheckIcon color="#fff"></CheckIcon>
                </button>
            )
        } else {
            return(
                <button 
                className="absolute top-0 right-0 flex justify-center items-center w-7 h-7 m-2 p-1" 
                onClick={(event) => addProductsToCart(event, data.data)}>
                    <PlusCircleIcon color="#fff"></PlusCircleIcon>
                </button>
            )
        }
    }

    return (
        <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        onClick={() => showProduct(data.data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.images} alt={data.data.title}></img>
            {renderIcon(data.data.id)}
            </figure>
            
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-semibold">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card