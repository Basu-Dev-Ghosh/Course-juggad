"use server";
var getYouTubeID = require("get-youtube-id");
var getYoutubeTitle = require("get-youtube-title");

async function getYoutubeTitleFromId(
  id: string,
  apiKey: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    // Replace this with your actual API call
    getYoutubeTitle(id, apiKey, function (err: any, tl: string) {
      if (err) {
        reject(err);
      } else {
        resolve(tl);
      }
    });
  });
}

export async function getTitle(link: string | null, skillName: string | null) {
  if (!skillName) return "Course juggad course title";
  if (!link) return `Course juggad of ${skillName}`;

  let id = getYouTubeID(link);
  if (!id) return `Course juggad of ${skillName}`;

  try {
    const tl = await getYoutubeTitleFromId(
      id,
      process.env.NEXT_PUBLIC_GOOGLE_YOUTUBE_API_KEY!
    );
    console.log(tl);
    return tl;
  } catch (err) {
    return `Course juggad of ${skillName}`;
  }
}
