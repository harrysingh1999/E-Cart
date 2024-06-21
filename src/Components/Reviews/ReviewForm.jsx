import { MdOutlineStarBorder } from "react-icons/md";
export default function ReviewForm() {
  return (
    <>
      <div className="w-full border border-gray-200 p-5">
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="py-2">
            <p>Name</p>
            <input
              className="py-1 px-2 outline-none border border-gray-500 w-full placeholder:text-black md:w-56 lg:w-72 "
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="py-2">
            <p>Email</p>
            <input
              className="py-1 px-2 outline-none border border-gray-500 w-full placeholder:text-black md:w-56 lg:w-72 "
              type="text"
              placeholder="john.smith@example.com"
            />
          </div>
        </div>
        <div className="py-2">
          <p>Rating</p>
          <div className=" flex items-center text-2xl gap-1">
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
            <MdOutlineStarBorder />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="py-2">
            <p>Title of Review</p>
            <input
              className="py-1 px-2 outline-none border border-gray-500 min-w-full placeholder:text-black "
              type="text"
              placeholder="Give your review a title"
            />
          </div>
          <div className="py-2">
            <p>How was your overall experience?</p>
            <textarea
              rows={10}
              className="py-1 px-2 outline-none border border-gray-500 min-w-full placeholder:text-black "
              name=""
              id=""
            ></textarea>
          </div>
        </div>
        <div className="py-2 text-end">
          <button className="bg-black border-0 text-white py-2 px-4">
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
