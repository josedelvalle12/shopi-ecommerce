import { XCircleIcon } from "@heroicons/react/16/solid"

const OrderCard = ({id, title, imageUrl, price, handleDelete }) => {
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XCircleIcon className='size-5' onClick={() => handleDelete(id)}></XCircleIcon>
    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title}></img>
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>    
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export default OrderCard