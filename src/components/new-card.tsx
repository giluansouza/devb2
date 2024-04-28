import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NewCardProps {
  href: string
  title: string
  label: string
  img: string
  stacks: string
}

export default function NewCard({
  href,
  title,
  label,
  img,
  stacks,
}: NewCardProps) {
  console.log(title, stacks)
  return (
    <Link href={href} target="_blank">
      <div className="max-w-[345px]">
        <Image src={img} alt={label} width={280} height={422} />
      </div>
    </Link>
  )
}
