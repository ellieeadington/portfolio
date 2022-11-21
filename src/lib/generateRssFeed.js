import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'

import { getAllProjects } from './getAllProjects'

export async function generateRssFeed() {
  let projects = await getAllProjects()
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let author = {
    name: 'Ellie Eadington',
    email: 'ellieeadington5@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Ellie Eadington',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let project of projects) {
    let url = `${siteUrl}/projects/${project.slug}`
    let html = ReactDOMServer.renderToStaticMarkup(
      <project.component isRssFeed />
    )

    feed.addItem({
      title: project.title,
      id: url,
      link: url,
      description: project.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(project.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
