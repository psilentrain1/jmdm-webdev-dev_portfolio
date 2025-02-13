import { Post } from "@/types/app.types";

export function useSavePost(slug: string, postData: Post) {
  let url;
  if (slug === "new") {
    url = "/api/posts/new";
  } else {
    url = "/api/posts/save";
  }
  // Send POST request to the server
  const savePost = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      window.alert("Post saved!");
      window.location.assign("/office/posts");
    } else {
      window.alert("There was an error saving your post.");
    }
  };

  return savePost;
}

export function useSaveNewPost() {}
