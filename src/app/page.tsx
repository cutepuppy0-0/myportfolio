import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-2xl w-full">
        <Image
          className="dark:invert mb-4"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          priority
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center sm:text-left">Hi, I'm a Full Stack Developer</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center sm:text-left">
          I build robust, scalable, and user-friendly web applications from front-end to back-end. My main idea is to deliver seamless digital experiences using modern technologies.
        </p>

        <section className="mb-8 w-full">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid gap-6">
            <div className="border rounded-lg p-4 bg-white/80 dark:bg-black/40 shadow">
              <h3 className="text-xl font-bold mb-2">Sample Project: DevConnect</h3>
              <p className="mb-2 text-gray-600 dark:text-gray-300">
                A social platform for developers to connect, share projects, and collaborate. Built with Next.js, Node.js, and MongoDB.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-2">
                <li>Authentication & real-time chat</li>
                <li>Responsive UI with Tailwind CSS</li>
                <li>RESTful API & server-side rendering</li>
              </ul>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
            {/* Add more projects here as needed */}
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Experienced in JavaScript, TypeScript, React, Node.js, and cloud platforms. Passionate about building products that make a difference.
          </p>
        </section>
      </main>
    </div>
  );
}
