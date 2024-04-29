import Shell from "@/components/home/Shell";
import { GetVideos } from "./getVideos";

const Page = ({ params }: any) => {
  const { category } = params;

  return (
    <Shell>
      <GetVideos category={category} />
    </Shell>
  );
};

export default Page;
