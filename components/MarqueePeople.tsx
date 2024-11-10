import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";


const reviews = [
  {
    name: "Alex",
    username: "@Alex",
    body: <>I want to <span className="font-bold text-emerald-600">mint NFTs</span> not to share my <span className="font-bold text-red-800">tx history</span></>,
    img: "/alex1.webp",
  },
  {
    name: "Mike",
    username: "@Mike02",
    body: <>I want to be <span className="font-bold text-emerald-600">onchain</span> not manage <span className="font-bold text-red-800">private keys</span></>,
    img: "/alex6.webp",
  },
  {
    name: "Bob",
    username: "@bob_1",
    body: <>I want to <span className="font-bold text-emerald-600">vote</span>, not to be <span className="font-bold text-red-800">tracked</span></>,
    img: "/alex3.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: <>I want to claim my <span className="font-bold text-emerald-600">airdrop</span>, not share my <span className="font-bold text-red-800">balance</span></>,
    img: "/alex4.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: <>I want to <span className="font-bold text-emerald-600">bridge assets</span>, not reveal which <span className="font-bold text-red-800">CEX</span> I'm using</>,
    img: "/alex7.png",
  },
];

const firstRow = reviews
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string | React.ReactNode;
}) => {
  return (
    <figure className="relative w-[400px] overflow-hidden p-8 m-4 bg-white/50 backdrop-blur-sm rounded-xl">
      <div className="flex flex-row items-center gap-4">
        <img className="rounded-full w-16 h-16" alt="" src={img} />
        <div className="flex flex-col gap-1">
          <figcaption className="text-xl font-medium text-gray-800">
            {name}
          </figcaption>
          <p className="text-base font-medium text-gray-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-lg leading-relaxed text-gray-600">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-screen w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
 
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#fff9f2]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#fff9f2]"></div>
    </div>
  );
}
