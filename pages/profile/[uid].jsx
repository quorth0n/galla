import Link from "next/link";

const Profile = () => {
  const posts = [
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Nash%2C_Paul_-_We_are_Making_a_New_World_-_Google_Art_Project.jpg/307px-Nash%2C_Paul_-_We_are_Making_a_New_World_-_Google_Art_Project.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/320px-Nighthawks_by_Edward_Hopper_1942.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/232px-Les_Demoiselles_d%27Avignon.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/NYC_-_Guggenheim_Museum.jpg/320px-NYC_-_Guggenheim_Museum.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/193px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg/320px-Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Matissedance.jpg/320px-Matissedance.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Picasso_Portrait_of_Daniel-Henry_Kahnweiler_1910.jpg/172px-Picasso_Portrait_of_Daniel-Henry_Kahnweiler_1910.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Franz_Marc_020.jpg/221px-Franz_Marc_020.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Einsteinturm_7443a.jpg/320px-Einsteinturm_7443a.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Redon_spirit-waters.jpg/194px-Redon_spirit-waters.jpg",
    },
    {
      title: "Nighthawks",
      thumb:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg/184px-Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg",
    },
  ];

  return (
    <main className="profile-page">
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Edward_Hopper%2C_New_York_Interior%2C_c._1921_1_15_18_-whitneymuseum_%2840015892594%29.jpg/1261px-Edward_Hopper%2C_New_York_Interior%2C_c._1921_1_15_18_-whitneymuseum_%2840015892594%29.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute left-0 opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-secondary-soft fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-secondary-soft">
        <div className="container mx-auto px-4">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64 border-solid border border-primary bg-secondary shadow-2xl"
            style={{
              backgroundClip: "padding-box",
            }}
          >
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="ehopper"
                    src="https://uploads5.wikiart.org/images/edward-hopper.jpg!Portrait.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                    style={{ maxWidth: "150px" }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 lg:mt-0">
                  <button
                    className="bg-accent uppercase text-white font-bold hover:shadow-lg shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1"
                    type="button"
                  >
                    Follow
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                      22
                    </span>
                    <span className="text-sm text-primary opacity-75">
                      Followers
                    </span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                      89
                    </span>
                    <span className="text-sm text-primary-500 opacity-75">
                      Views/mo
                    </span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                      10
                    </span>
                    <span className="text-sm text-primary opacity-75">
                      Posts
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-primary mb-2 opacity">
                Edward Hopper
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-primary font-bold uppercase opacity">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-primary"></i>{" "}
                Manhattan, New York
              </div>
              <div className="mb-2 text-primary mt-10 opacity-75">
                <i className="fas fa-calendar-alt mr-2 text-lg text-primary"></i>
                Joined May 2020
              </div>
              <div className="mb-2 text-primary opacity-75">
                <i className="fas fa-link mr-2 text-lg text-primary"></i>
                <a
                  className="font-semibold"
                  href="https://www.edwardhopper.net/"
                >
                  edwardhopper.net
                </a>
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-primary text-center bg-secondary-soft">
              <h4 className="text-2xl font-semibold leading-normal mb-8 text-primary mb-2">
                About
              </h4>
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 opacity-75">
                  <p className="mb-4 text-lg leading-relaxed text-primary">
                    "Edward Hopper (July 22, 1882 – May 15, 1967) was an
                    American realist painter and printmaker. While he is widely
                    known for his oil paintings, he was equally proficient as a
                    watercolorist and printmaker in etching. Both in his urban
                    and rural scenes, his spare and finely calculated renderings
                    reflected his personal vision of modern American life" -
                    Wikipedia
                  </p>
                  <a
                    href="#pablo"
                    className="font-semibold text-accent"
                    onClick={(e) => e.preventDefault()}
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
            <div
              id="posts"
              className="py-10 border-t border-primary text-center bg-secondary-soft"
            >
              <h4 className="text-2xl font-semibold leading-normal mb-8 text-primary">
                Top Posts
              </h4>
              <div className="inline-flex flex-row w-full pb-4 px-4 lg:px-8 items-center overflow-x-auto">
                {posts.slice(0, 5).map((post) => (
                  <Link href={`/post/${post.title}`} key={post.title}>
                    <div
                      className="flex flex-none pr-4 lg:pr-8 justify-center align-middle"
                      onClick={() => pushCollection(posts)}
                    >
                      <div className="relative w-auto h-auto text-center cursor-pointer">
                        <div className="absolute inset-0 w-full block p-1 bg-black opacity-0 hover:opacity-75 transition duration-500 ease pl-0">
                          <em className="relative top-0 text-lg font-semibold">
                            Sample Title
                          </em>
                          <p
                            className="absolute bottom-0 w-full whitespace-normal opacity-75 overflow-hidden"
                            style={{
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              display: "-webkit-box",
                            }}
                          >
                            Esse ea Lorem elit labore nulla cupidatat commodo.
                            Est commodo incididunt occaecat duis deserunt magna
                            proident adipisicing est. Id incididunt amet sit
                            pariatur.
                          </p>
                        </div>
                        <img src={post.thumb} alt={post.title} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-center bg-secondary-soft pb-10">
              <a href="#posts" className="font-semibold text-accent">
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
