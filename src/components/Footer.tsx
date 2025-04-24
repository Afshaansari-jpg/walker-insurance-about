
import { Mail, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0047AB] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Walker Insurance</h3>
            <p className="text-gray-200">
              Protecting Your Income.<br />
              Preserving Your Legacy.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>info@walkerinsurance.ca</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Monday - Friday: 9am - 5pm</span>
              </div>
              <p>Weekends: By appointment</p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-300 text-sm border-t border-white/20 pt-8">
          © 2025 Walker Insurance & Estate Planning Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
