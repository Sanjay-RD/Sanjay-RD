import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({
  image,
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="aspect-square relative rounded-lg cursor-pointer group overflow-hidden">
      <div className="h-full w-full">
        <img src={image} className="w-full h-full" />
      </div>
      <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
        <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
          <Link href={link} target="_blank">
            <Image
              src="/images/send-icon.png"
              width={20}
              height={20}
              alt="Link"
              className="w-5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
