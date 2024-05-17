/* REACT ICONS */
import {
  FaPhone,
  FaGithub,
  FaGitlab,
  FaEnvelope,
  FaLinkedinIn,
  FaLocationDot,
} from 'react-icons/fa6';

/* IMAGES */
import ProfilePhoto from './assets/images/PhotoProfile.jpg';

function App() {
  return (
    <div className="mx-auto max-w-[794px] text-app-grey-900">
      <main className="h-dvh w-full bg-app-color-4">
        {/* HEADER */}
        <header className="flex flex-row bg-app-color-1 py-4">
          {/* PHOTO */}
          <div className="flex w-56 justify-center">
            <img src={ProfilePhoto} className="size-24 rounded-full" />
          </div>

          {/* TITLE */}
          <div className="flex flex-col justify-center px-4">
            <h1 className="text-4xl font-medium">Pratama Dimas</h1>
            <h2 className="text-xl font-light">Front-End Web Developer</h2>
          </div>
        </header>

        {/* MAIN */}
        <div className="flex flex-row">
          {/* SIDEBAR */}
          <aside className="h-[calc(1123px-128px)] w-56 bg-app-color-3">
            {/* DECORATION | ARROW DOWN */}
            <div className="mb-4 w-full border-l-[112px] border-r-[112px] border-t-[56px] border-l-transparent border-r-transparent border-t-app-color-1" />

            {/* CONTENT */}
            <div className="max-w-full px-4">
              {/* CONTACT DETAIL */}
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-normal">Contact Detail</h3>

                <div className="mb-1 flex flex-row items-center gap-2">
                  <div className="rounded-full bg-app-grey-900 p-1">
                    <FaEnvelope size={10} className="text-app-color-4" />
                  </div>
                  <a
                    target="_blank"
                    href="mailto:pratamadimas.pw@gmail.com"
                    className="text-wrap text-xs font-light hover:underline"
                  >
                    pratamadimas.pw@gmail.com
                  </a>
                </div>

                <div className="mb-1 flex flex-row items-center gap-2">
                  <div className="rounded-full bg-app-grey-900 p-1">
                    <FaPhone size={10} className="text-app-color-4" />
                  </div>
                  <a
                    target="_blank"
                    href="https://wa.me/085102569534"
                    className="text-wrap text-xs font-light hover:underline"
                  >
                    +6285102569534
                  </a>
                </div>

                <div className="mb-1 flex flex-row items-center gap-2">
                  <div className="rounded-full bg-app-grey-900 p-1">
                    <FaLocationDot size={10} className="text-app-color-4" />
                  </div>
                  <p className="text-wrap text-xs font-light">
                    Malang, East Java, Indonesia
                  </p>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-normal">Education</h3>

                <ul className="relative ml-2 border-s border-app-grey-900">
                  <li className="mb-2 ms-4">
                    <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-app-grey-900" />

                    <p className="text-base font-normal">
                      Arkademy Tech Platform
                    </p>
                    <p className="text-sm font-light">Fullstack Javascript</p>
                    <time className="text-xs font-light text-app-grey-A700">
                      2019
                    </time>
                  </li>

                  <li className="ms-4">
                    <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-app-grey-900" />

                    <p className="text-base font-normal">SMK Negeri 4 Malang</p>
                    <p className="text-sm font-light">Software Engineering</p>
                    <time className="text-xs font-light text-app-grey-A700">
                      2016 - 2019
                    </time>
                  </li>
                </ul>
              </div>

              {/* SKILLS */}
              <div className="mb-4">
                <h3 className="mb-2 text-lg font-normal">Skills</h3>

                <ol className="list-inside list-disc space-y-1">
                  <li className="text-sm font-light">JavaScript</li>
                  <li className="text-sm font-light">TypeScript</li>
                  <li className="text-sm font-light">React.js</li>
                  <li className="text-sm font-light">Next.js</li>
                  <li className="text-sm font-light">Tailwind CSS</li>
                  <li className="text-sm font-light">Front-End Development</li>
                  <li className="text-sm font-light">Web Development</li>
                </ol>
              </div>

              {/* SOCIAL */}
              <hr className="mb-4 border-app-grey-900" />
              <div className="flex flex-row justify-center gap-2">
                <a
                  href="https://github.com/Sam1Dz"
                  target="_blank"
                  className="rounded-full bg-app-grey-900 p-1.5"
                >
                  <FaGithub size={20} className="text-app-color-4" />
                </a>
                <a
                  href="https://gitlab.com/Sam1Dz"
                  target="_blank"
                  className="rounded-full bg-app-grey-900 p-1.5"
                >
                  <FaGitlab size={20} className="text-app-color-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratama-d-59b0ba128/"
                  target="_blank"
                  className="rounded-full bg-app-grey-900 p-1.5"
                >
                  <FaLinkedinIn size={20} className="text-app-color-4" />
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="w-full bg-app-color-4 px-4 pt-[4.5rem]">
            {/* SUMMARY */}
            <div className="mb-6">
              <h3 className="text-lg font-normal">Summary</h3>
              <hr className="mb-2 mt-1 border-app-grey-900" />
              <p className="text-base font-light">My Summary</p>
            </div>

            {/* WORK EXPERIENCE */}
            <h3 className="text-lg font-normal">Work Experience</h3>
            <hr className="mb-2 mt-1 border-app-grey-900" />
            <p className="text-base font-light">My Work Experience</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
