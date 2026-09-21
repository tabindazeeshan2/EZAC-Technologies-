import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './config'

export interface ContactSubmission {
  name: string
  email: string
  company: string
  service: string
  details: string
  budget: string
}

export async function submitContactForm(data: ContactSubmission) {
  const docRef = await addDoc(collection(db, 'contacts'), {
    name: data.name,
    email: data.email,
    company: data.company,
    service: data.service,
    details: data.details,
    budget: data.budget,
    status: 'new',
    createdAt: serverTimestamp(),
  })

  return docRef.id
}

