import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon
} from '@/components/SocialIcons'
import twinkl from '@/images/photos/twinkl.jpg'
import ga from '@/images/photos/ga.png'
import gooutdoors from '@/images/photos/gooutdoors.png'
import upwork from '@/images/photos/upwork.png'
import anixter from '@/images/photos/anixter.png'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllProjects } from '@/lib/getAllProjects'
import { formatDate } from '@/lib/formatDate'


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}


function Resume() {
  let resume = [
    {
      company: 'General Assembly',
      title: 'Software Engineering Immersive Student',
      logo:  ga,
      start: '2022',
      end: '2022',
    },
    {
      company: 'Twinkl',
      title: 'Operations Collective Analyst',
      logo:  twinkl,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Twinkl',
      title: 'Data Analyst - International Growth',
      logo: twinkl,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Upwork',
      title: 'Data Analyst',
      logo: upwork,
      start: '2020',
      end: '2020',
    },
    {
      company: 'Anixter',
      title: 'Supply Chain Analyst',
      logo: anixter,
      start: '2020',
      end: '2020',
    },
    {
      company: 'Go Outdoors',
      title: 'Operations Analyst',
      logo: gooutdoors,
      start: '2019',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7 rounded-full" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>
          Ellie Eadington - Software Engineer
        </title>
        <meta
          name="description"
          content="I’m Ellie, a junior Backend Software Engineer with a background in data analytics, process automation and operations management."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Ellie Eadington
          </h1>
          <h1 className="text-4xl tracking-tight text-zinc-800 dark:text-zinc-100 xs:text-5xl">
            Junior Backend Software Engineer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
           with a background in data analytics, process automation and operations management.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
             <SocialLink
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=ellieeadington5@gmail.com&tf=1"
              aria-label="Email me"
              icon={MailIcon}
            />
           
          </div>
        </div>
      </Container>

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Over the last few years, I’ve built a successful career in tech from the ground up. After a year of relevant experience and self-studying through online courses in Data Science, SQL and Python, I landed the role of Data Analyst for International Growth at ed-tech start-up, Twinkl, where I used data to help guide and grow our international markets. After sparking a passion for coding, I moved into the role of Operations Collective Analyst for 43 departments using data to generate continuous process improvements, and carving my own path by writing lightweight programs to automate large-scale business processes.
              </p>
              <p>
              Once I knew my passion lay in programming, I enrolled in a Software Engineering Immersive program where I have since been diving deep into the languages, frameworks, environments, concepts and skills to become a fully-fledged junior software engineer. I hope to now marry the skills I’ve developed in my previous roles and break into the industry with a focus on backend engineering/development.
              </p>
             <p>
              When I'm not programming, I love to spend my time bouldering and walking in the Peaks, socialising with friends, going to gigs and creating digital art.
             </p>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      projects: (await getAllProjects())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
