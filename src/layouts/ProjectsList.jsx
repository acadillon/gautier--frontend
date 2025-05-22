//src/layouts/ProjectsList.jsx

export default function ProjectsList({ projects }) {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-margin w-full">
      {projects.map((project) => {
        const imageUrl =
          project.media?.[0]?.formats?.medium?.url || project.media?.[0]?.url;

        return (
          <a key={project.id} href={`/${project.slug}`} className="">
            <div className="aspect-[10/7] w-full overflow-hidden">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
}
