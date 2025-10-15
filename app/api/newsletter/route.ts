import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json')

interface Subscriber {
  email: string
  subscribedAt: string
  ip?: string
}

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true })
  }
}

async function getSubscribers(): Promise<Subscriber[]> {
  try {
    await ensureDataDirectory()
    if (existsSync(SUBSCRIBERS_FILE)) {
      const data = await readFile(SUBSCRIBERS_FILE, 'utf-8')
      return JSON.parse(data)
    }
    return []
  } catch (error) {
    console.error('Error reading subscribers:', error)
    return []
  }
}

async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  await ensureDataDirectory()
  await writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email este necesar.' },
        { status: 400 }
      )
    }

    const trimmedEmail = email.trim().toLowerCase()

    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Adresa de email nu este validă.' },
        { status: 400 }
      )
    }

    // Get existing subscribers
    const subscribers = await getSubscribers()

    // Check if already subscribed
    const existingSubscriber = subscribers.find(
      (sub) => sub.email === trimmedEmail
    )

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'Această adresă de email este deja înregistrată.' },
        { status: 409 }
      )
    }

    // Get IP for basic rate limiting (optional)
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Add new subscriber
    const newSubscriber: Subscriber = {
      email: trimmedEmail,
      subscribedAt: new Date().toISOString(),
      ip: ip,
    }

    subscribers.push(newSubscriber)
    await saveSubscribers(subscribers)

    console.log(`New subscriber: ${trimmedEmail}`)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Te-ai abonat cu succes!' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json(
      { error: 'A apărut o eroare la server. Te rugăm încearcă din nou.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to view subscribers count (admin only in production)
export async function GET() {
  try {
    const subscribers = await getSubscribers()
    return NextResponse.json(
      { 
        count: subscribers.length,
        message: 'Subscriber count retrieved successfully'
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Error retrieving subscriber count' },
      { status: 500 }
    )
  }
}
