import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'

interface Card2Props {
  href: string
  title: string
  label: string
  img: string
  stacks: string
}

export default function ProjectCard({
  href,
  title,
  label,
  img,
  stacks,
}: Card2Props) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="bg-zinc-800/90 border border-zinc-600 shadow-lg rounded-xl text-white"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={<IconButton aria-label="settings">A</IconButton>}
        title={title}
        subheader={stacks}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
        className="rounded-b-xl"
      />
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent> */}
    </Card>
  )
}
