import axios from "axios";
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from "@env";
import { CardData } from "../components/Card";

export const searchYouTubeVideos = async (
  query: string,
  maxResults: number
): Promise<CardData[]> => {
  try {
    const response = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: "snippet",
        maxResults,
        q: query,
        type: "video",
        key: YOUTUBE_API_KEY,
      },
    });

    const data: CardData[] = response.data.items.map((item: any) => ({
      title: item.snippet.title,
      image: item.snippet.thumbnails.medium.url,
      description: item.snippet.description,
      link: item.id.videoId,
    }));

    return data;
  } catch (error) {
    console.error("Search failed", error);
    return [];
  }
};
