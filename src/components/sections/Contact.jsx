import { useState } from "react"
import RevealOnScroll from "../RevealOnScroll"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [notification, setNotification] = useState({ show: false, type: '', message: '' })
    
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY 

    const showNotification = (type, message) => {
        setNotification({ show: true, type, message })
        setTimeout(() => {
            setNotification({ show: false, type: '', message: '' })
        }, 3000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                showNotification('success', 'Message sent successfully!')
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            }, (error) => {
                console.log(error.text);
                showNotification('error', 'Failed to send message. Please try again.')
            })
            .finally(() => {
                setIsSubmitting(false)
            });   
    }
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-[95%] sm:w-[600px] mx-auto">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>

                {notification.show && (
                    <div className={`mb-4 p-4 rounded-lg ${
                        notification.type === 'success' 
                            ? 'bg-green-500/20 border border-green-500/50 text-green-300' 
                            : 'bg-red-500/20 border border-red-500/50 text-red-300'
                    }`}>
                        {notification.message}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" 
                                id="name" 
                                name="name" 
                                required 
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 [&:-webkit-autofill]:bg-white/5 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_rgba(255,255,255,0.05)_inset]"
                                placeholder="Name" 
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="relative">
                        <input type="email" 
                                id="email" 
                                name="email" 
                                required 
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 [&:-webkit-autofill]:bg-white/5 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_rgba(255,255,255,0.05)_inset]"
                                placeholder="name@domain.com" 
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="relative">
                        <textarea 
                                id="message" 
                                name="message" 
                                required 
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 [&:-webkit-autofill]:bg-white/5 [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_rgba(255,255,255,0.05)_inset]"
                                placeholder="Your message here..."
                                rows="5" 
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full bg-blue-500 text-white py-3 px-7 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)] ${
                            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>

        </RevealOnScroll>
    </section>
  )
}

export default Contact