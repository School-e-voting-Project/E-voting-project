import { img1, img2, img3, img4, img5, img6, img7 } from "@/assets/Images";

export default function Card({ img, name, nickname }) {
  return (
    <article className="w-[300px] rounded-md shadow-md bg-white text-center">
      <div className="pt-4">
        <div className="h-[250px] overflow-hidden">
          <img src={img} alt={name} className="object-cover" />
        </div>
        <div className="py-4">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="font-normal text-lg">{`(${nickname})`}</p>
        </div>
      </div>
    </article>
  );
}
