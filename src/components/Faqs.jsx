import Image from 'next/image'

import {Container} from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
    [
        {
            question: 'What is nomadic gurukul ?',
            answer:
                'A unique camp (um, quite literally 🏕️) crafted for techies in Hyderabad',
        },
        {
            question: 'What is the cost of it?',
            answer: 'Its Absolutely free, paid by our sponsors AlgoUniversity.',
        },
        {
            question: 'How do I apply for a Nomadic Gurukul?',
            answer:
                'We only take selected few, follow the process mentioned above',
        },
    ],
    [
        {
            question: 'How long is the camp ? ',
            answer:
                'In the span of 22 hours over a weekend.',
        },
        {
            question:
                'Where is the location of camp?',
            answer:
                'In the outskirts of Hyderabad only nomads who are selected will get to know.',
        },
        {
            question:
                'How can i contact you?',
            answer:
                'You can also reach out to us at +91-7396660206.',
        },
    ],
    [
        {
            question: 'Where can we find you ?',
            answer:
                'We have regular physical booths set up in different areas, all around the Hyderabad.',
        },
        {
            question: 'How do I know your events?',
            answer: 'You can find updates about booth locations in the WhatsApp groups.',
        },
        {
            question: 'I lost my password, how do I get into my account?',
            answer:
                'Send us an email and we will send you a copy of our latest password, so you can find your information.',
        },
    ],
]

export function Faqs() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
        >
            <Image
                className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
                src={backgroundImage}
                alt=""
                width={1558}
                height={946}
                unoptimized
            />
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        If you can’t find what you’re looking for, email our support team
                        and if you’re lucky someone will get back to you.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
                >
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
