import { Card, CardFooter, Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

interface PropsWithChildren {
  icon: string
  href: string
  title: string
  label: string
  handle: string
  img: string
}

export const Card2: React.FC<PropsWithChildren> = ({
  icon,
  href,
  title,
  label,
  handle,
  img,
}) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="w-[320px] h-[213px] border-none"
    >
      <Image
        alt={title}
        src={img}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
      <CardFooter className="justify-between before:bg-black/40 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="font-bold text-lg text-black/80">{title}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          App
        </Button>
      </CardFooter>
    </Card>
  )
}
