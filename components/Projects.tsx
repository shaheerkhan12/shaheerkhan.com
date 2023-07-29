const Projects = () => {
    const projects = [
      {
        name: 'Iotascale Website',
        href: 'https://iotascale.io',
        description:
          ' Company website I built on nextjs,fully designed and created by me,I used swiperjs,Animate on Scroll other than that pretty standard design some neat effects on home page for both mobile and webview.Simple yet informative',
      },
      {
        name: 'BLAZE',
        href: 'https://demoblaze.netlify.app',
        description:
          'This platform is the legacy version of URL blocking and filtering,It was built on angular 11, multi themed,multiple chart libraries like apex,amchart,chartjs,threejs customized,custom login design',
      },
      {
        name: 'OCTANE',
        href: 'https://octanedemo.netlify.app',
        description:
          ' This platform is the Newer version of Blaze platform, Its a newer design and implimentation much lighter,cleaner and faster.',
      },
      {
        name: 'Highly available Mean Stack Application Architecture',
        href: 'https://medium.com/@shaheerkhan/creating-a-highly-available-mean-stack-application-architecture-with-a-distributed-mongodb-f7044051080',
        description:
          " Designed a Highly available Mean Stack Application Architecture with a distributed MongoDB Replica-set and Nginx.Focus was on fault tolerance and high availability.",
      },
    ];
  
    return (
      <>
        <h2 data-content="Projects">Projects</h2>
        <p>
          I&apos;ve worked on a variety of projects: some technical, some
          community-focused, and some just for fun. Here are a few of my
          favorites.
        </p>
        <div className="grid grid-cols-1 grid-rows-2 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              href={project.href}
              key={project.href}
              className="bg-gray-100 p-4 no-underline transition hover:scale-105 dark:bg-gray-900"
              target="blank"
            >
              <h3 className="mb-1 font-bold">{project.name}</h3>
              <p className="text-sm dark:text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>
        {/*
        <Link 
          href={'/'}
          className="p-3 text-sm grid place-content-center no-underline hover:scale-105 transition col-span-1 sm:col-span-2"
        >
          <h3 className="">More Projects &rarr;</h3>
        </Link> 
        */}
      </>
    );
  };
  
  export default Projects;