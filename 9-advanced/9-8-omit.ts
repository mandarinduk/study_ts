{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Omit: 기존의 type에서 내가 원하는 것들만 빼서 사용하고 싶을 때
  type VideoMetaData = Omit<Video, "data" | "url">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id,
      title: "video",
    };
  }
}
