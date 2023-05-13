/* eslint-disable react/no-unescaped-entities */
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CodeIcon from '@material-ui/icons/Code'
import { about } from '../../portfolio'
import './About.css'

const desc1 =
  "I'm a software engineer with a focus on the front-end. I've worked across numerous business domains, and have an eye for responsive, pixel-perfect design in websites that are a pleasure to use. My background is in computer science (though my interest in technology began far before that), and my experience across the whole software stack allow me to work with everything from websites for smaller business to complex web applications."
const desc2 =
  "I have been programming for about 13 years, personal and professional. Here are some of the projects I've worked on and technologies I've used in that time!"

const About = () => {
  const { name, role, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I'm <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{desc1}</p>
      <p className='about__desc'>{desc2}</p>

      <div className='about__contact center'>
        {resume && (
          <a target='_blank' href={resume} rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}

            <a
              href='https://stackoverflow.com/users/419194/austin-gayler'
              aria-label='StackOverflow'
              className='link link--icon'
              target='_blank'
              rel='noreferrer'
            >
              <CodeIcon />
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default About
