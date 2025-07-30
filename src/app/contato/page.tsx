import ContactForm from './ContactForm'
import { generateMetadata } from '../seo-config'

export const metadata = generateMetadata('contact');

export default function ContactPage() {
  return <ContactForm />
}
