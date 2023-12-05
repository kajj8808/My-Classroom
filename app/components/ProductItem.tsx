import Image from "next/image";
import Link from "next/link";
import { getVideoId } from "util/youtube";

interface IItem {
  link: String;
  name: String;
  transcript: String;
}

function ProductItem({ item }: { item: IItem }) {
  return (
    <Link
      href={`/?videoId=${getVideoId(item.link)}&title=${item.name}`}
      className="group overflow-hidden"
    >
      <div className="flex flex-col items-center rounded-md p-1 group-hover:bg-[#2B2B2B]">
        <div className="relative">
          <Image
            src={`https://img.youtube.com/vi/${getVideoId(
              item.link,
            )}/original.jpg`}
            alt=""
            width={500}
            height={300}
            className="h-36 w-full cursor-pointer rounded-lg bg-slate-400"
          />
          <div className="absolute top-0 flex h-36 w-full items-center justify-center group-hover:bg-[rgba(0,0,0,0.2)]">
            <Image
              src={"/polygon.png"}
              alt="play"
              width={45}
              height={45}
              className="relative z-50 h-16 w-16 rounded-full bg-productColor p-4"
            />
          </div>
        </div>
        <p className="mt-1 text-lg font-bold group-hover:text-[#fff]">
          {item.name}
        </p>
        <span className="text-sm text-[#939393]">저장 일자 2023.12.06</span>
      </div>
    </Link>
  );
}

export default ProductItem;
