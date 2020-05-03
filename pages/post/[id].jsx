import { useRouter } from "next/router";
import Link from "next/link";

const Post = () => {
  const router = useRouter();
  const { id } = router.query; // image ID for db retrieval

  const { thumb, tags } = {
    thumb:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1280px-Nighthawks_by_Edward_Hopper_1942.jpg",
    tags: [
      "Acrylic",
      "Realism",
      "Impressionism",
      "Modernism",
      "American",
      "Social realism",
    ],
  }; // placeholder data

  const canvasRef = React.useRef(null);

  // scale canvas and load image
  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas.offsetWidth != "300") {
      const image = new Image();
      image.onload = () => {
        // TODO find better ways to resample on low res

        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, image.width, image.height);
      };
      image.src = thumb;
    }
  }, []);

  return (
    <div className="m-auto inline-flex flex-col justify-center text-left p-4 md:px-8">
      <div className="relative text-center align-middle navigation">
        {/* TODO: Add swiping support for mobile https://codesandbox.io/s/qq7759m3lq?module=/src/Carousel.js&file=/src/Carousel.js */}
        <Link href="/">
          <a className="absolute left-0 opacity-75 hover:opacity-50 back">
            <i className="fas fa-arrow-left"></i> Back
          </a>
        </Link>
        <Link href="#">
          <a
            className="block float-left absolute arrow"
            style={{ top: "50%", bottom: "50%" }}
          >
            <i className="fas fa-chevron-left text-4xl"></i>
          </a>
        </Link>
        <canvas
          ref={canvasRef}
          className="inline img shadow-2xl"
          onContextMenu={(e) => e.preventDefault()}
        />
        <Link href="#">
          <a
            className="block float-right absolute right-0 arrow"
            style={{ top: "50%", bottom: "50%" }}
          >
            <i className="fas fa-chevron-right float-right text-4xl"></i>
          </a>
        </Link>
        <style jsx>{`
          .navigation .arrow {
            opacity: 0;
          }

          .navigation:hover .arrow {
            opacity: 1;
          }

          .arrow:hover {
            opacity: 0.75 !important;
          }

          .back {
            top: -1.5em;
          }

          /* .img cannot be resized through tailwind because dep CSS loads too slow for useEffect */
          .img {
            width: 100%;
          }

          @media (min-width: 1024px) {
            .back {
              top: 0;
            }

            .img {
              width: 75%;
            }
          }
        `}</style>
      </div>
      <div className="pt-4 justify-between flex flex-row">
        <div className="flex-col">
          <h1 className="text-2xl italic font-semibold">{id}</h1>
          <span className="opacity-75">by </span>
          <Link href="/profile/ehopper">
            <a className="opacity-100">Edward Hopper</a>
          </Link>
        </div>
        <div
          className="flex-col select-none opacity-75 hover:opacity-100"
          style={{ transition: "all 0.15s ease" }}
        >
          <div className="text-right">
            <div className="md:inline cursor-pointer background-transparent font-semibold px-3 py-1 text-sm outline-none focus:outline-none">
              <i className="far fa-heart"></i> 34
            </div>
            <div className="md:inline cursor-pointer background-transparent font-semibold px-3 py-1 text-sm outline-none focus:outline-none ml-1">
              <i className="far fa-comments"></i> 4
            </div>
            <div className="md:inline cursor-pointer background-transparent font-semibold px-3 py-1 text-sm outline-none focus:outline-none ml-1">
              <i className="far fa-eye"></i> 162
            </div>
          </div>
          <div className="cursor-pointer background-transparent px-3 py-1 text-lg outline-none focus:outline-none text-center w-full">
            <i className="fab fa-creative-commons-pd"></i> Public Domain
          </div>
        </div>
      </div>
      <p className="opacity-75 mt-4">
        "Nighthawks is a 1942 oil on canvas painting by Edward Hopper that
        portrays people in a downtown diner late at night as viewed through the
        diner's large glass window. Also portrayed are the exteriors of the
        urban structures across the street from the diner. It has been described
        as Hopper's best-known work and is one of the most recognizable
        paintings in American art. Within months of its completion, it was sold
        to the Art Institute of Chicago on May 13, 1942, for $3,000" - Wikipedia
      </p>
      <nav className="mt-4">
        <strong>Tags: </strong>
        {tags.map((tag) => (
          <a
            href="#"
            key={tag}
            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-accent uppercase last:mr-0 mr-1"
          >
            {tag}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Post;
