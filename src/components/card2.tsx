import React from 'react'
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'
import Link from 'next/link'

interface Card2Props {
  href: string
  title: string
  label: string
  img: string
  stacks: string
}

export function Card2({ href, title, label, img, stacks }: Card2Props) {
  return (
    <Card className="w-[300px] md:w-[320px] py-4 bg-zinc-800/90 border border-zinc-600 shadow-lg">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">
          {label.length > 20 ? `${label.substring(0, 35)}...` : label}
        </small>
        <h4 className="font-bold text-large">{stacks}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Link href={href} target="_blank">
          <Image
            isZoomed
            alt="Card background"
            className="object-cover rounded-xl"
            src={img}
            sizes="100vw"
          />
        </Link>
      </CardBody>
    </Card>
  )
}
