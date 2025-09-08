import { sql } from '@vercel/postgres'

export type ContactRow = {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export async function ensureSchema() {
  await sql`
    create table if not exists contacts (
      id uuid primary key default gen_random_uuid(),
      name text not null,
      email text not null,
      message text not null,
      created_at timestamptz not null default now()
    )
  `
}

export async function insertContact(name: string, email: string, message: string) {
  await ensureSchema()
  await sql`insert into contacts (name, email, message) values (${name}, ${email}, ${message})`
}


