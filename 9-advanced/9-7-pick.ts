{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  // Pick: 기존의 type에서 내가 원하는 것들만 골라서 사용하고 싶을 때
  type VideoMetaData = Pick<Video, "id" | "title">;

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
