import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full text-gray-700">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-semibold text-black max-w-[240px] hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-black hover:text-red-500 transition" />
            </div>
          </div>

          <div className="flex items-center gap-x-2 h-[36px] text-sm">
            {/* quantity control */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border border-gray-300 font-[Poppins] font-semibold text-black">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>

            {/* single price */}
            <div className="flex-1 flex items-center justify-around">
              ${price}
            </div>

            {/* total price */}
            <div className="flex-1 flex items-center justify-end font-[Poppins] font-medium text-black">
              ${parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
