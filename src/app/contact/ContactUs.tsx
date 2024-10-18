"use client"

import { useState, FormEvent } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function ContactUs() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitStatus("ההודעה נשלחה בהצלחה!")
    setName("")
    setEmail("")
    setMessage("")
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">צרו קשר</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                שם
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                אימייל
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                הודעה
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[100px]"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isSubmitting ? "שולח..." : "שלח הודעה"}
            </button>
          </form>
          {submitStatus && (
            <div className="mt-4 text-center text-green-600 font-semibold">
              {submitStatus}
            </div>
          )}
        </div>
        <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-r border-gray-200 pt-8 md:pt-0">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">צור איתנו קשר</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-600 ml-2" />
              <a href="mailto:contact@example.com" className="text-gray-700 hover:text-blue-600">contact@example.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-600 ml-2" />
              <span className="text-gray-700">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-600 ml-2" />
              <span className="text-gray-700">רחוב ראשי 123, עיר, מדינה</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold my-6 text-gray-800">עקבו אחרינו</h3>
          <div className="flex space-x-reverse space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">פייסבוק</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">טוויטר</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">אינסטגרם</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">לינקדאין</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}