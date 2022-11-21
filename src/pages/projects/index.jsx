import Head from 'next/head'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllProjects } from '@/lib/getAllProjects'
import { formatDate } from '@/lib/formatDate'

function Project({ project }) {
  return (
    <project className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title>
          {project.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={project.date}
          className="md:hidden"
          decorate
        >
          {formatDate(project.date)}
        </Card.Eyebrow>
        <Card.Description>{project.description}</Card.Description>
        <Button className="text-white text-xs font-thin h-6" href={project.deployedLink}>Explore</Button>
        <Card.Cta><a href={"https://github.com/ellieeadington/"+project.github} target="_blank">Checkout on GitHub</a></Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={project.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(project.date)}
      </Card.Eyebrow>
    </project>
  )
}

export default function ProjectsIndex({ projects }) {
  return (
    <>
      <Head>
        <title>Projects - Ellie Eadington</title>
        <meta
          name="description"
          content="Projects completed during my Software Engineering Immersive Course"
        />
      </Head>
      <SimpleLayout
        title="Projects completed during my Software Engineering Immersive Course"
        intro="Each project was carried out over around 1 week, and served as an oppurtunity to put the skills we had learned in the previous couple of weeks of lectures, labs and homeworks into practice."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {projects.map((project) => (
              <Project key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: (await getAllProjects()).map(({ component, ...meta }) => meta),
    },
  }
}
