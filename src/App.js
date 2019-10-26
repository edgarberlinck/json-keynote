import React, { useState, useEffect } from 'react'
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Author from './components/Author'
import Topics from './components/Topics'
import CenteredContainer from './components/CenteredContainer'
import SlideContainer from './components/SlideContainer'
import Contacts from './components/Contacts'

const SLIDE_THANKS = -1
const SLIDE_WELCOME = null
const SLIDE_ABOUT = -2
const SLIDE_CONTACTS = -3

const renderSlide = (currentSlide, keynote) => {
  let content = null
  switch (currentSlide) {
    case SLIDE_WELCOME:
      content = (
        <SlideContainer>
          <Title text={keynote.title} />
          <Subtitle text={keynote.subtitle} />
          <Author name={keynote.author} />
        </SlideContainer>
      )
      break
    case SLIDE_THANKS:
      content = (
        <CenteredContainer>
          <Title text={keynote.thanksMessage} />
        </CenteredContainer>
      )
      break
    case SLIDE_ABOUT:
      content = (
        <SlideContainer>
          <Title text={keynote.author} />
          <Topics items={keynote.about} />
        </SlideContainer>
      )
      break
    case SLIDE_CONTACTS:
      content = (
        <SlideContainer>
          <Title text='Contacts' />
          <Contacts contact={keynote.contacts} />
        </SlideContainer>
      )
      break
    default:
      const slide = keynote.slides.find(slide => slide.id === currentSlide)
      if (slide.topics) {
        content = (
          <SlideContainer>
            <Title text={slide.title} />
            <Topics items={slide.topics} />
          </SlideContainer>
        )
      } else {
        content = (
          <CenteredContainer>
            <Title text={slide.title} />
          </CenteredContainer>
        )
      }
      break
  }

  return (
    <h1>
      {currentSlide} {content}
    </h1>
  )
}

const App = props => {
  // Declarar uma nova variável de state, na qual chamaremos de "currentSlide"
  const [currentSlide, setCurrentSlide] = useState(SLIDE_WELCOME)
  const [keynote, setKeyNote] = useState({
    title: 'Inteligência Emocional',
    subtitle: 'Não leve uma rasteira das suas emoções',
    author: 'Edgar Muniz Berlinck',
    thanksMessage: 'Obrigado',
    about: [
      'Fullstack Dev.',
      'Mais de 10 anos de TI',
      'Atualmente servidor Público - MPES'
    ],
    contacts: {
      twitter: '@edgarberlinck',
      github: '@edgarberlinck',
      telegram: '@edgarberlinck',
      instagram: '@edzaum',
      linkedin: '@edgarberlinck'
    },
    slides: [
      {
        id: 0,
        title: 'Emoções'
      },
      {
        id: 1,
        title: 'Sentimentos'
      },
      {
        id: 2,
        title: 'Inteligência Emocional',
        topics: [
          'Presente no campo da Psicologia e criada por Daniel Goleman',
          'Não significa ter o control das emoções',
          'Significa que o sujeito é capaz de identificar suas emoções com mais facilidade'
        ]
      },
      {
        id: 3,
        title: 'Habilidades Específicas',
        topics: [
          'Autoconhecimento emocional',
          'Controle emocional',
          'Automoticação',
          'Empatia',
          'Desenvolver Habilidades Interpessoais'
        ]
      },
      {
        id: 4,
        title: 'Exemplos'
      }
    ]
  })

  useEffect(
    () => {
      document.addEventListener('keydown', handleKeyDown.bind(this))

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    },
    [currentSlide, keynote]
  )

  const handleKeyDown = e => {
    const { code } = e
    switch (code) {
      case 'KeyB':
        startKeynote()
        break
      case 'KeyN':
        renderNextSlide()
        break
      case 'KeyP':
        renderPreviousSlide()
        break
      case 'KeyA':
        showAboutMeSlide()
        break
      case 'KeyC':
        showContactsSlide()
        break
      case 'KeyE':
        endKeynote()
        break
      default:
    }
  }

  const startKeynote = () => {
    setCurrentSlide(SLIDE_WELCOME)
    renderSlide(currentSlide, keynote)
  }

  const renderNextSlide = () => {
    if (currentSlide === SLIDE_CONTACTS) {
      endKeynote()
    } else {
      const numberOfSlides = keynote.slides.length
      const desiredNextSlide = currentSlide + 1
      let slideId = 0

      if (currentSlide !== null) {
        slideId =
          desiredNextSlide < numberOfSlides ? desiredNextSlide : SLIDE_THANKS
      }
      setCurrentSlide(slideId)
      renderSlide(currentSlide, keynote)
    }
  }

  const renderPreviousSlide = () => {
    // const { keynote, currentSlide } = this.state

    if (currentSlide === SLIDE_THANKS) {
      showAboutMeSlide()
    } else if (currentSlide === SLIDE_ABOUT) {
      showContactsSlide()
    } else if (currentSlide === SLIDE_CONTACTS) {
      startKeynote()
    } else {
      const numberOfSlides = keynote.slides.length
      const desiredNextSlide = currentSlide - 1
      let slideId = numberOfSlides - 1

      if (currentSlide !== null) {
        if (desiredNextSlide >= 0) {
          slideId = desiredNextSlide
        }
      }
      setCurrentSlide(slideId)
      renderSlide(currentSlide, keynote)
    }
  }

  const showAboutMeSlide = () => {
    setCurrentSlide(SLIDE_ABOUT)
  }

  const showContactsSlide = () => {
    setCurrentSlide(SLIDE_CONTACTS)
  }

  const endKeynote = () => {
    setCurrentSlide(SLIDE_THANKS)
  }

  return renderSlide(currentSlide, keynote)
}

export default App
