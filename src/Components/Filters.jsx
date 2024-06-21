import { IoSearchSharp } from "react-icons/io5";
export default function Filters() {
  return (
    <>
      <div className="col-span-2 overflow-auto bg-white">
        <div className=" border py-2 ps-6 uppercase font-bold">
          <p className="text-black">Filters</p>
        </div>

        <div className=" border border-t-0 py-2 ps-6 text-sm">
          <p className="uppercase text-black font-bold">Price</p>
          <div className="my-2 flex flex-col gap-1 text-gray-900">
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>Rs. 149 to Rs. 399</p>
              <p className=" text-gray-500">
                <small>(200)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>Rs. 400 to Rs. 699</p>
              <p className=" text-gray-500">
                <small>(300)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>Rs. 700 to Rs. 999</p>
              <p className=" text-gray-500">
                <small>(400)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>Rs. 1000 to Rs. 1499</p>
              <p className=" text-gray-500">
                <small>(700)</small>
              </p>
            </div>
          </div>
        </div>

        <div className=" border border-t-0 py-2 ps-6 text-sm">
          <div className="flex justify-between items-center">
            <p className="uppercase text-black font-bold">Brand</p>
            <div className="w-[30px] bg-[#f5f5f6] h-[30px] rounded-full me-4 grid place-items-center">
              <IoSearchSharp className="text-xl text-gray-500" />
            </div>
          </div>
          <div className="my-2 flex flex-col gap-1 text-gray-900">
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>Comet Busters</p>
              <p className=" text-gray-500">
                <small>(2697)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>PERPAA</p>
              <p className=" text-gray-500">
                <small>(2540)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>MI FASHION</p>
              <p className=" text-gray-500">
                <small>(2290)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>Deve Herbes</p>
              <p className=" text-gray-500">
                <small>(1250)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>ME-ON</p>
              <p className=" text-gray-500">
                <small>(1257)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>Menjewell</p>
              <p className=" text-gray-500">
                <small>(1195)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <p>FORFOR</p>
              <p className=" text-gray-500">
                <small>(1090)</small>
              </p>
            </div>
          </div>
        </div>

        <div className=" border border-t-0 py-2 ps-6 text-sm">
          <div className="flex justify-between items-center">
            <p className="uppercase text-black font-bold">Color</p>
            <div className="w-[30px] bg-[#f5f5f6] h-[30px] rounded-full me-4 grid place-items-center">
              <IoSearchSharp className="text-xl text-gray-500" />
            </div>
          </div>
          <div className="my-2 flex flex-col gap-1 text-gray-900">
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <div className="w-[15px] border bg-[#ff6d86] h-[15px] ms-1 rounded-full grid place-items-center"></div>
              <p>Pink</p>
              <p className=" text-gray-500">
                <small>(2697)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <div className="w-[15px] border bg-[#0000ff] h-[15px] ms-1 rounded-full grid place-items-center"></div>
              <p>Blue</p>
              <p className=" text-gray-500">
                <small>(2540)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <div className="w-[15px] border bg-[#fff] h-[15px] ms-1 rounded-full grid place-items-center"></div>
              <p>White</p>
              <p className=" text-gray-500">
                <small>(2290)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <div className="w-[15px] border bg-[#3c4477] h-[15px] ms-1 rounded-full grid place-items-center"></div>
              <p>Navy Blue</p>
              <p className=" text-gray-500">
                <small>(1250)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <div className="w-[15px] border bg-[#5eb160] h-[15px] ms-1 rounded-full grid place-items-center"></div>
              <p>Green</p>
              <p className=" text-gray-500">
                <small>(1257)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <div className="w-[15px] border bg-[#ff0015] h-[15px] ms-1 rounded-full grid place-items-center"></div>
              <p>Red</p>
              <p className=" text-gray-500">
                <small>(1195)</small>
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="checkbox" />
              <div className="w-[15px] border bg-[#ffff11] h-[15px] ms-1 rounded-full grid place-items-center"></div>
              <p>Yellow</p>
              <p className=" text-gray-500">
                <small>(1090)</small>
              </p>
            </div>
          </div>
        </div>

        <div className=" border border-t-0 py-2 ps-6 text-sm">
          <p className="uppercase text-black font-bold">Discount</p>
          <div className="my-2 flex flex-col gap-1 text-gray-900">
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="radio" name="discount" />
              <p>10% and above</p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="radio" name="discount" />
              <p>20% and above</p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="radio" name="discount" />
              <p>30% and above</p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="radio" name="discount" />
              <p>40% and above</p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="radio" name="discount" />
              <p>50% and above</p>
            </div>
            <div className="flex gap-2 items-center">
              <input className=" scale-125" type="radio" name="discount" />
              <p>60% and above</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
