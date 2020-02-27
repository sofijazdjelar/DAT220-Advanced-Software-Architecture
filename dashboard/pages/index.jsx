import Link from 'next/link'

export default function Index() {
    return (
      <div>
            <Link href="/health">
                <a>Health</a>
            </Link>
            <p>Hello Next.js</p>
      </div>
    );
  }