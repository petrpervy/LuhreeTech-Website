"use server"

type ContactPayload = {
  name: string
  email: string
  company?: string
  size?: string
  goal?: string
  message: string
}

// Placeholder adapter: writes JSON artifact to ./public/artifacts/contact-*.json
import { writeFile } from 'fs/promises'
import { randomUUID } from 'crypto'
import path from 'path'
import { insertContact } from '@/lib/db'

function ts() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}_${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`
}

async function persistArtifact(payload: ContactPayload) {
  const id = randomUUID()
  const dir = path.join(process.cwd(), 'public', 'artifacts', 'forms')
  const file = path.join(dir, `${ts()}.json`)
  await writeFile(file, JSON.stringify({ id, receivedAt: new Date().toISOString(), ...payload }, null, 2), { flag: 'w' }).catch(async (e) => {
    // ensure directory exists on first write
    if ((e as any).code === 'ENOENT') {
      const { mkdir } = await import('fs/promises')
      await mkdir(dir, { recursive: true })
      await writeFile(file, JSON.stringify({ id, receivedAt: new Date().toISOString(), ...payload }, null, 2), { flag: 'w' })
    } else {
      throw e
    }
  })
}

export async function submitContactForm(formData: FormData) {
  const name = String(formData.get('name') || '')
  const email = String(formData.get('email') || '')
  const company = String(formData.get('company') || '')
  const size = String(formData.get('size') || '')
  const goal = String(formData.get('goal') || '')
  const message = String(formData.get('message') || '')

  if (!name || !email || !message) {
    return { ok: false, error: 'All fields are required.' }
  }

  try {
    await persistArtifact({ name, email, company, size, goal, message })
    if (process.env.POSTGRES_URL) {
      await insertContact(name, email, message)
    }
    return { ok: true }
  } catch (error) {
    return { ok: false, error: 'Failed to send. Please try again.' }
  }
}


