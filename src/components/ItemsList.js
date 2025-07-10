import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../reducer/cartSlice";

const ItemsList = ({ itemData }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className=" bg-gray-50 mx-auto">
      {itemData?.map((item, i) => {
        const resInfo = item?.card?.info;
        return (
          <div
            key={resInfo?.id ?? i}
            className="flex m-4 p-4 border-b-2 border-solid border-gray-200"
          >
            <div className="w-9/12">
              <div>
                {resInfo?.name} - ₹
                {(resInfo?.defaultPrice ?? resInfo?.price) / 100}
              </div>
              <p className="text-sm">{resInfo?.description}</p>
            </div>
            <div className="p-2 w-3/12">
              <button
                className="absolute px-4 mx-14 rounded-md bg-white shadow-lg"
                onClick={() => handleAddClick(item)}
              >
                Add +
              </button>
              {resInfo?.showImage && <img src={CDN_URL + resInfo?.imageId} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
