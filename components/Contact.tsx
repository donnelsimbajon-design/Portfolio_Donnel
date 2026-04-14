export default function Contact() {
  return (
    <section id="contact" className="h-screen pt-20 px-6 bg-[#050505] text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Let's Connect.</h2>
        <p className="text-neutral-500 mb-16 max-w-2xl font-light text-lg">
          I'm actively open to new opportunities and ambitious projects. Whether you have an inquiry or a vision to execute, let's talk.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-8 w-full justify-center">
          {/* EDIT HERE - Your Email */}
          <a
            href="mailto:donnelsimbajon@gmail.com"
            className="group flex flex-col items-center justify-center gap-4 p-8 border border-white/10 rounded-3xl bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors duration-500 w-full md:w-64 backdrop-blur-sm"
          >
            <svg className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-neutral-300">Email</span>
          </a>

          {/* EDIT HERE - Your GitHub */}
          <a
            href="https://github.com/donnelsimbajon-design"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 p-8 border border-white/10 rounded-3xl bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors duration-500 w-full md:w-64 backdrop-blur-sm"
          >
            <svg className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span className="font-medium text-neutral-300">GitHub</span>
          </a>

          {/* EDIT HERE - Your LinkedIn */}
          <a
            href="https://www.linkedin.com/in/donnel-simbajon-5877a53a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 p-8 border border-white/10 rounded-3xl bg-neutral-900/30 hover:bg-neutral-800/50 transition-colors duration-500 w-full md:w-64 backdrop-blur-sm"
          >
            <svg className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="font-medium text-neutral-300">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
