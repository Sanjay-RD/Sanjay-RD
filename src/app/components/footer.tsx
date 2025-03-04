import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src="/images/port_logo.png"
          alt="Portfolio Logo"
          width={144}
          height={36}
          className="mx-auto mb-2 dark:hidden"
        />
        <Image
          src="/images/port_logo_dark.png"
          alt="Portfolio Logo"
          width={144}
          height={36}
          className="mx-auto mb-2 hidden dark:block"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src="/images/mail_icon.png"
            width={24}
            height={24}
            alt="Email"
            className="w-6 dark:hidden"
          />
          <Image
            src="/images/mail_icon_dark.png"
            width={24}
            height={24}
            alt="Email"
            className="w-6 hidden dark:block"
          />
          <a href="mailto:sanjay.rishidev@example.com">
            sanjay.rishidev@example.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>2024 © Sanjay Rishidev - All Rights Reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link
              href="https://www.instagram.com/official_anam_ali/"
              target="_blank"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link href="https://github.com/anamuddinahmad" target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/anamuddinahmad"
              target="_blank"
            >
              Linkedin
            </Link>
          </li>
          <li>
            <Link href="https://leetcode.com/u/anamuddinahmad/" target="_blank">
              LeetCode
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
