import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12 bg-primary-dark">
      <video
      className="object-cover h-24 w-96 bg-primary-dark"
      autoPlay
      muted
      >
      <source
        src="/logo.webm"
        type="video/webm"
      />
      Your browser does not support the video tag.
      </video>
      <h1 className="md:m-12 text-primary-light text-3xl md:text-6xl font-bold">
        Portfolio and blog
      </h1>
    </section>
  )
}

export default Intro
