import projects from "./projects.json";

export async function GET() {
  return Response.json(projects, {
    status: 200,
  });
}
