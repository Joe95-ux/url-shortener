import { redirect } from "next/navigation";
import prisma from "../../lib/db";

interface RedirectPageProps {
  params: { shortcode: string };
}
const RedirectPage = async ({ params }: RedirectPageProps) => {
  const { shortcode } = params;

  const url = await prisma.findUnique({
    where: { shortCode: shortcode },
  });
  if (!url) {
    return <div> 404 - URL not found</div>;
  }
  
  await prisma.url.update({
    where:{id: url.id},
    data: {visits: {increment: 1}}
  })
  redirect(url.originalUrl);
};

export default RedirectPage;
