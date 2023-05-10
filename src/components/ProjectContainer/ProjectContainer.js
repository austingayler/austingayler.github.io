import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import ModalImage from 'react-modal-image'
import './ProjectContainer.css'

const prefix = process.env.PUBLIC_URL
const url = `${prefix}/gan.png`

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.img && (
      <ModalImage
        className='project__img'
        hideDownload
        hideZoom
        showRotate={false}
        small={prefix + project.img}
        large={prefix + project.img}
        alt={project.name}
      />
    )}

    <p className='project__description'>{project.description}</p>

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
