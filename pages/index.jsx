import Head from "next/head";
import Link from "next/link";

export default function Home() {
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

  const pushCollection = (collection) => {
    console.log(collection);
  };

  return (
    <div className="p-4 flex flex-wrap items-center justify-around leading-relaxed select-none">
      {posts.map((post) => (
        <Link href={`/post/${post.title}`} key={post.title}>
          <div
            className="relative w-auto h-auto text-center mb-8 cursor-pointer"
            onClick={() => pushCollection(posts)}
          >
            <div className="absolute inset-0 w-full h-full block p-1 bg-black opacity-0 hover:opacity-75 transition duration-500 ease pl-0">
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
                Esse ea Lorem elit labore nulla cupidatat commodo. Est commodo
                incididunt occaecat duis deserunt magna proident adipisicing
                est. Id incididunt amet sit pariatur.
              </p>
            </div>
            <img src={post.thumb} alt={post.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}
