import { Card } from "../ProductCard/Card";
import colorPot from "../../assets/Home/ColorPots.svg";
import lip_Paint from "../../assets/Home/lip_Paint.svg";
import roseHip_Oil from "../../assets/Home/rosehip_Oil.svg";
import strobeLighter from "../../assets/Home/strobelighter.svg";

export default function MostLoved() {
  return (
    <>
      <div className="">
        <div className="mb-10 mt-4 text-center md:text-start">
          <h1 className="text-3xl md:text-4xl mb-3 font-thin italic">
            Shop Most Loved
          </h1>
          <p>CULT BESTSELLERS</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center mt-4">
          <Card
            name="COLOR POTS"
            price="₹ 3,200"
            rating="2"
            url={colorPot}
            url2="https://india.purearth.asia/cdn/shop/files/C-LLP4G_2_900x.jpg?v=1716293148"
          />
          <Card
            name="LAALI-LIP PAINT POT"
            price="₹ 1,800"
            rating="7"
            url={lip_Paint}
            url2="https://india.purearth.asia/cdn/shop/files/Laali2_900x.png?v=1704799135"
          />
          <Card
            name="WILD ROSEHIP SUPERCRITICAL"
            price="₹ 7,000"
            rating="12"
            url={roseHip_Oil}
            url2="https://india.purearth.asia/cdn/shop/files/rosehip_900x.jpg?v=1689922031"
          />
          <Card
            name="SITAR CRÈME STROBELIGHTER"
            price="₹ 1,800"
            rating="40"
            url={strobeLighter}
            url2="https://india.purearth.asia/cdn/shop/files/Sitara1_900x.png?v=1704796412"
          />
        </div>
      </div>
    </>
  );
}
