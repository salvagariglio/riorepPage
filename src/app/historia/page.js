import Gallery from "@/components/Gallery";
import Tabs from "@/components/historyTabs";
import VideoSection from "@/components/Video";

export default function HistoriaPage() {
    return (
        <main className="py-16 px-4 min-h-screen">

            <div className="max-w-4xl items-center justify-center mx-auto my-10">
                <Tabs />
            </div>
            <VideoSection
                videoSrc="/images/videos/video3.mp4"
                posterSrc="/images/video-poster.jpg"
            />
            <div>
                <Gallery />
            </div>
        </main>
    );
}
