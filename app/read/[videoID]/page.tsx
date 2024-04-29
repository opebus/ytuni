// Import necessary components
import Shell from "@/components/home/Shell";
import GetVideoData from "./getVideoData";

interface PageProps {
  params: {
    videoID: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { videoID } = params;
  console.log(videoID);

  return (
    <Shell>
      <div>
        <GetVideoData videoID={videoID} />
      </div>
    </Shell>
  );
};

export default Page;
