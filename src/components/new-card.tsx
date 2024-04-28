import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
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
  return (
    <Link href={href} target="_blank">
      <div className="max-w-[345px]">
        <Image src={img} alt={label} width={280} height={422} />
      </div>
    </Link>
  )
}
