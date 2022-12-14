import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPython from '@/images/logos/python.svg'
import logoJavascript from '@/images/logos/javascript.svg'
import logoNodejs from '@/images/logos/nodejs.svg'
import logoExpress from '@/images/logos/express.svg'
import logoMongoDB from '@/images/logos/mongodb.svg'
import logoPostgreSQL from '@/images/logos/postgresql.svg'
import logoREST from '@/images/logos/rest.svg'
import logoDjango from '@/images/logos/django.svg'
import logoReact from '@/images/logos/react.svg'
import logoGit from '@/images/logos/git.svg'
import logoHeroku from '@/images/logos/heroku-icon.svg'
import logoGoogleDev from '@/images/logos/google-developers-icon.svg'
import html5 from '@/images/logos/html-5.svg'
import css3 from '@/images/logos/css-3.svg'

const skills = [
  {
    name: 'JavaScript',
    logo: logoJavascript,
  },
  {
    name: 'Node.js',
    logo: logoNodejs,
  },
  {
    name: 'Express',
    logo: logoExpress,
  },
  {
    name: 'MongoDB & Mongoose',
    logo: logoMongoDB,
  },
  {
    name: 'Python',
    logo: logoPython,
  },
  {
    name: 'Django',
    logo: logoDjango,
  },
  {
    name: 'PgAdmin & SQL',
    logo: logoPostgreSQL,
  },
  {
    name: 'RESTful APIs',
    logo: logoREST,
  },
  {
    name: 'React',
    logo: logoReact,
  },
  {
    name: 'Git & Github',
    logo: logoGit,
  },
  {
    name: 'Google Dev',
    logo: logoGoogleDev,
  },
  {
    name: 'Heroku',
    logo: logoHeroku,
  },
  {
    name: 'HTML-5',
    logo:  html5,
  },
  {
    name: 'CSS',
    logo: css3,
  },
]


export default function Projects() {
  return (
    <>
      <Head>
        <title>Skills - Ellie Eadington</title>
        <meta
          name="description"
          content="Technical Skills"
        />
      </Head>
      <SimpleLayout
        title="Technical Skills"
        intro="During the intensive GA course I rapidly developed a range of skills, programming languages and frameworks to develop MERN full-stack applications and Django apps with Python. My favourite part of the course has been has been programming backend APIs, writing authentication & authorization and consuming third-party APIs. My relevant core hard skills include:"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => (
            <Card as="li" key={skill.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-300 dark:ring-0">
                <Image
                  src={skill.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Title>{skill.name}</Card.Title>
              </h2>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
