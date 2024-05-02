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
    <div className="max-w-[794px] mx-auto text-[#212121]">
      <main className="w-full h-dvh bg-[#F8F6F4]">
        {/* HEADER */}
        <header className="bg-[#C4DFDF] flex flex-row py-4">
          {/* PHOTO */}
          <div className="w-56 flex justify-center">
            <img src={ProfilePhoto} className="w-24 h-24 rounded-full" />
          </div>

          {/* TITLE */}
          <div className="px-4 flex flex-col justify-center">
            <h1 className="text-4xl font-medium">Pratama Dimas</h1>
            <h2 className="text-xl font-light">Front-End Web Developer</h2>
          </div>
        </header>

        {/* MAIN */}
        <div className="flex flex-row">
          {/* SIDEBAR */}
          <aside className="bg-[#E3F4F4] h-[calc(1123px-128px)] w-56">
            {/* DECORATION | ARROW DOWN */}
            <div className="w-full border-l-[112px] border-r-[112px] border-t-[56px] border-l-transparent border-r-transparent border-t-[#C4DFDF] mb-4" />

            {/* CONTENT */}
            <div className="px-4">
              {/* CONTACT DETAIL */}
              <div className="mb-4">
                <h3 className="text-lg font-normal mb-2">Contact Detail</h3>

                <div className="flex flex-row items-center gap-2 mb-1">
                  <div className="p-1 bg-[#212121] rounded-full">
                    <FaEnvelope size={10} color="#F8F6F4" />
                  </div>
                  <a
                    target="_blank"
                    href="mailto:pratamadimas.pw@gmail.com"
                    className="text-xs font-light text-wrap hover:underline"
                  >
                    pratamadimas.pw@gmail.com
                  </a>
                </div>

                <div className="flex flex-row items-center gap-2 mb-1">
                  <div className="p-1 bg-[#212121] rounded-full">
                    <FaPhone size={10} color="#F8F6F4" />
                  </div>
                  <a
                    target="_blank"
                    href="https://wa.me/085102569534"
                    className="text-xs font-light text-wrap hover:underline"
                  >
                    +6285102569534
                  </a>
                </div>

                <div className="flex flex-row items-center gap-2 mb-1">
                  <div className="p-1 bg-[#212121] rounded-full">
                    <FaLocationDot size={10} color="#F8F6F4" />
                  </div>
                  <p className="text-xs font-light text-wrap">
                    Malang, East Java, Indonesia
                  </p>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="mb-4">
                <h3 className="text-lg font-normal mb-2">Education</h3>

                <ul className="relative ml-2 border-s border-[#212121]">
                  <li className="mb-2 ms-4">
                    <div className="absolute mt-1.5 w-3 h-3 bg-[#212121] rounded-full -start-1.5" />

                    <p className="text-base font-normal">
                      Arkademy Tech Platform
                    </p>
                    <p className="text-sm font-light">Fullstack Javascript</p>
                    <time className="text-xs font-light text-[#616161]">
                      2019
                    </time>
                  </li>

                  <li className="ms-4">
                    <div className="absolute mt-1.5 w-3 h-3 bg-[#212121] rounded-full -start-1.5" />

                    <p className="text-base font-normal">SMK Negeri 4 Malang</p>
                    <p className="text-sm font-light">Software Engineering</p>
                    <time className="text-xs font-light text-[#616161]">
                      2016 - 2019
                    </time>
                  </li>
                </ul>
              </div>

              {/* SKILLS */}
              <div className="mb-4">
                <h3 className="text-lg font-normal mb-2">Skills</h3>

                <ol className="space-y-1 list-disc list-inside">
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
              <hr className="mb-4 border-[#212121]" />
              <div className="flex flex-row justify-center gap-2">
                <a
                  href="https://github.com/Sam1Dz"
                  target="_blank"
                  className="p-1.5 bg-[#212121] rounded-full"
                >
                  <FaGithub size={20} color="#F8F6F4" />
                </a>
                <a
                  href="https://gitlab.com/Sam1Dz"
                  target="_blank"
                  className="p-1.5 bg-[#212121] rounded-full"
                >
                  <FaGitlab size={20} color="#F8F6F4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratama-d-59b0ba128/"
                  target="_blank"
                  className="p-1.5 bg-[#212121] rounded-full"
                >
                  <FaLinkedinIn size={20} color="#F8F6F4" />
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="bg-[#F8F6F4] w-full pt-[4.5rem] px-4">
            {/* SUMMARY */}
            <div className="mb-6">
              <h3 className="text-lg font-normal">Summary</h3>
              <hr className="mt-1 mb-2 border-[#212121]" />
              <p className="text-base font-light">My Summary</p>
            </div>

            {/* WORK EXPERIENCE */}
            <h3 className="text-lg font-normal">Work Experience</h3>
            <hr className="mt-1 mb-2 border-[#212121]" />
            <p className="text-base font-light">My Work Experience</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
