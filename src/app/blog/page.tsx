import { BlogLink } from "app/components/block-link";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  let allBlogs = [
    {
      name: "Cómo integrar ChatGPT y WhatsApp de Twilio en una Aplicación NestJS 🚀",
      link: "https://medium.com/@p.beltranes/integrando-chatgpt-whatsapp-de-twilio-en-nestjs-a052ef499bc1",
    },
  ];

  return (
    <main className="flex-col px-auto pt-8">
      {" "}
      {/* <h1 className="font-semibold text-2xl mb-8 tracking-tighter"> */}
      <h1 className="font-semibold text-2xl mb-8">Blog</h1>
      <div className="my-8 flex w-full flex-col space-y-4 mv">
        {allBlogs.map((post, key) => (
          <BlogLink key={key} name={post.name} link={post.link} />
        ))}
      </div>
    </main>
  );
}
