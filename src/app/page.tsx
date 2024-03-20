import { Banner } from "@/components/molecules/banner";
import { imagesList } from "@/data/tattoo-artist";

export default function Home() {
  return (
    <main>
      <Banner imagesList={imagesList} title='my studio tattoo'/>
    </main>
  );
}
