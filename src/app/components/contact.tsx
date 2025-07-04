"use client";

import type React from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto px-4 py-12" id="contact">
        <div className="w-full overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 p-8">
          <div className="text-center pb-6">
            <h3 className="text-2xl text-gray-700">Connect with me</h3>
            <h2 className="text-5xl font-bold mt-2 mb-4">{`Let's connect`}</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Feel free to reach out for collaboration, inquiries, or just to
              say hello!
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6 pt-4 pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl align-center">
              <a
                href="https://www.instagram.com/sanjay_rd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-24 w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all hover:shadow-md p-4"
              >
                <Instagram className="h-5 w-5 mb-2" />
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sanjay-rd-68881b1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-24 w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all hover:shadow-md p-4"
              >
                <Linkedin className="h-5 w-5 mb-2" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Sanjay-RD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-24 w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all hover:shadow-md p-4"
              >
                <Github className="h-5 w-5 mb-2" />
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="mailto:rishidevsanjay21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-24 w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all hover:shadow-md p-4"
              >
                <Mail className="h-5 w-5 mb-2" />
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              Looking forward to connecting with you!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
