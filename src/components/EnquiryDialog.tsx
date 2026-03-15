import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface EnquiryDialogProps {
  children: React.ReactNode;
}

const EnquiryDialog = ({ children }: EnquiryDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/918303361848?text=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`)}`, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background p-0 overflow-hidden">
        <div className="bg-primary px-6 py-5">
          <DialogHeader>
            <DialogTitle className="text-primary-foreground font-heading text-xl">
              Send Us An Enquiry
            </DialogTitle>
            <p className="text-primary-foreground/70 text-sm mt-1">
              Fill the form below and we'll get back to you shortly.
            </p>
          </DialogHeader>
        </div>

        <div className="px-6 pb-6 pt-4">
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <a href="tel:+918303361848" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone size={14} className="text-secondary" />
              <span>(+91) 83033 61848</span>
            </a>
            <a href="mailto:khanshoaib38989@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={14} className="text-secondary" />
              <span>khanshoaib38989@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} className="text-secondary" />
              <span>Lucknow, Uttar Pradesh</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={255}
              className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={15}
              className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={1000}
              rows={3}
              className="w-full px-4 py-2.5 border border-border rounded-md text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary resize-none"
            />
            <div className="flex gap-3 pt-1">
              <button
                type="submit"
                className="flex-1 btn-primary bg-secondary hover:bg-secondary/90 text-sm py-2.5 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryDialog;
