import { Post } from "@/types/app.types";
import { logger } from "@/app/utilities/logger";

const log = logger.child({ module: "useSavePost" });

export function useSavePost(slug: string, postData: Post) {
  let url;
  if (slug === "new") {
    url = "/api/posts/new";
  } else {
    url = "/api/posts/save";
  }
  // Send POST request to the server
  const savePost = async () => {
    log.trace(`Sending POST request to ${url}`);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      log.trace(`Post saved successfully`);
      window.alert("Post saved!");
      window.location.assign("/office/posts");
    } else {
      log.error(`Error saving post - ${response.statusText} - ${response.status} - ${url}`);
      window.alert("There was an error saving your post.");
    }
  };

  return savePost;
}

export function useSaveNewPost() {}
