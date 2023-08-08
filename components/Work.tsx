const Work = () => {
    const work = [
      {
        company: 'UppedEvents',
        companyHref: 'https://UppedEvents.com',
        title: 'Full-stack Developer(FE heavy)',
        time: 'April 2022 - Feb 2023(part-time + full-time)',
        lines: [
          
        ],
      },
      {
        company: 'Iotascale',
        companyHref: 'https://iotascale.io',
        title: 'Full-stack Developer',
        time: 'feb 2022 - december 2022',
        lines: [
          'worked on famous frameworks such as Angular or ReactJS for front-end development.',
          'Experienced  with cloud deployment platforms such as AWS',
          'Experience with database technologies, both SQL (like PostgreSQL or MySQL) and NoSQL (like MongoDB ).',
          'Familiarity with Docker for containerization and orchestration.and Kubernetes still learning',
          'Strong understanding of API development and Microservices Architecture.',
          'Got experience with DevOps and CI/CD tools like Jenkins, GitLab.'
        ],
      },
      {
        company: 'Tech Avenue Pvt Ltd',
        companyHref: 'https://www.techavenue.biz/',
        title: 'Software Engineer',
        time: 'Feb 2021 - Feb 2022',
        lines: [
          ' I was a part of very talented Team of around 9-12 resources. Mytasks included writing code in Angular ,Node.js, Python and exposed myself first time to whole Infrastructure rather than my domain and DevOps. My role included working very close to a great lead and help the team build a product from scratch (working on their Design and Architecture and deployment) and deliver them to production. Moreover, best part of our team was the learning curve and no bounds , I got so much exposure towards different technologies, got me out of my bubble .',
          'Got a Chance to be Resident Engineer at PTA.',
          'I was also a resident engineer at PTA to provide support for Sandvine / DPI and the WMS Solution.',
          ' while I worked here i learned so much some of the tools are as follows: Angular, Python, Clickhouse, Apache Kafka, Elasticsearch, Zookeeper, Nginx, Jenkin'
        ],
      },
      {
        company: 'Asasa real estate company',
        companyHref: '',
        title: 'Software Engineering Intern',
        time: 'Feb 2020 - Feb 2021',
        lines: [
          'Part of team in which i am working on location based real Estate portal as an Angular developer. Technical expert in Angular 2+, Nodejs framework, Ionic 4+ framework and Aws. Main responsibilities includes',
          'Skilled in Angular, Angular2, TypeScript, CSS, JavaScript, NodeJS, Git, Experience working and integrating front end applications with RESTful Middle-Tier Applications',
          'Actively involved in design decisions.',
          'Develop User interfaces for Modern Rich Internet Applications with the latest Front End Technologies',
          'Strong knowledge of CSS, JavaScript, and web design principles',
          'Communicating with external web services.',
          'Ensuring High Performance on both Mobile and Web Applications',
          'Strong understanding of Aws Ec2 instances for Application deployment.'
        ],
      },
    ];
  
    return (
      <>
        <h2 data-content="Work">Work</h2>
        <p>
          If you&#x27;d like to learn more, please
          take a look at my{' '}
          <a href="//www.linkedin.com/in/shaheerkhan69/" target="blank" rel="_noreferrer">
            LinkedIn
          </a>
          .
        </p>
        {work.map((job) => (
          <div
            key={`${job.title}_${job.company}`}
            className="overflow-hidden bg-gray-100 dark:bg-gray-900"
          >
            <div className="p-4">
              <div className="sm:flex sm:items-start sm:justify-between">
                <h3 className="font-bold">
                  <a
                    href={job.companyHref}
                    target="blank"
                    className="no-underline"
                  >
                    {job.company}
                  </a>
                </h3>
  
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {job.time}
                </p>
              </div>
              <div className="text-sm">
                <p>{job.title}</p>
              </div>
            </div>
  
            {job.lines && (
              <details className="bg-gray-200 text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-200">
                <summary className="group cursor-pointer px-4 py-2">
                  See more
                </summary>
                <ul className="ml-5 list-disc px-4 pb-4 pt-1">
                  {job.lines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        ))}
      </>
    );
  };
  
  export default Work;