'use client'

import { useState, FormEvent } from 'react'
import { toast } from '@/components/ui/use-toast'

export function Contact() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      })

      if (!response.ok) {
        console.log('falling over')
        throw new Error(`response status: ${response.status}`)
      }

      setNome('')
      setEmail('')
      setPhone('')
      setMessage('')

      toast({
        title: 'Enviado com sucesso!',
        description: 'Agradecemos pelo contato. Em breve retornaremos.',
        color: 'success',
      })
    } catch (err) {
      toast({
        title: 'Erro ao enviar!',
        description: 'Por favor, tente novamente mais tarde.',
      })
    }
  }

  return (
    <section className="flex flex-col items-center justify-center px-3 py-6">
      <h1 className="text-2xl font-bold mb-8 lg:text-4xl">Contato</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col gap-4"
      >
        <input
          className="px-4 py-2 rounded-full text-zinc-3 shadow-xl bg-zinc-700 border border-zinc-600 focus:outline-none"
          type="text"
          name="name"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="px-4 py-2 rounded-full text-zinc-3 shadow-xl bg-zinc-700 border border-zinc-600 focus:outline-none"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-4 py-2 rounded-full text-zinc-3 shadow-xl bg-zinc-700 border border-zinc-600 focus:outline-none"
          name="phone"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
        />
        <textarea
          className="px-4 py-2 rounded-full text-zinc-3 shadow-xl bg-zinc-700 border border-zinc-600 focus:outline-none"
          placeholder="Mensagem"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="mt-4 px-8 py-3 text-xl text-white rounded-full bg-gradient-to-t from-red-500 to-red-800"
          type="submit"
          disabled={isSubmitting}
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
