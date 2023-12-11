import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Who is this quiz for?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your Destiny. This quiz is for anyone with basic exposure to the tech space. This means that anyone belonging to the field of SWE, Data Science, AI, Testing, etc., is a great fit for this quiz.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Give the quiz
          </Button>
        </div>
      </Container>
    </section>
  )
}
