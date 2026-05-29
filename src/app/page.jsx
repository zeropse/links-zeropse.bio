"use client";

import { buttonVariants, Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import { IconLoader, IconShare } from "@tabler/icons-react";

export default function Page() {
  const { profile, socials, links } = siteConfig;

  return (
    <main className="min-h-svh w-full flex flex-col items-center selection:bg-primary/30">
      <div className="w-full max-w-xl px-4 py-8 sm:py-12 sm:px-6">
        {/* Header */}
        <header className="flex w-full items-center justify-between mb-8 sm:mb-12">
          <div className="flex items-center gap-2 select-none">
            <img
              src="/favicon.ico"
              alt="Links Logo"
              className="w-5 h-5 rounded-sm"
            />
            <span className="font-semibold text-foreground tracking-tight">
              Links
            </span>
          </div>

          <Button
            className="sm:flex rounded-full [&_svg]:size-4 transition-transform active:scale-90"
            variant="secondary"
            size="icon"
            onClick={() => {
              if (typeof window !== "undefined") {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            aria-label="Copy page link">
            <IconShare stroke={1.5} />
          </Button>
        </header>

        {/* Profile Section */}
        <section className="flex flex-col items-center text-center w-full mb-8">
          <Avatar className="h-24 w-24 sm:h-28 sm:w-28 mb-4 border border-border shadow-sm">
            <AvatarImage
              src={profile.avatar}
              alt={profile.name}
              className="object-cover"
            />
            <AvatarFallback>
              <IconLoader className="animate-spin text-muted-foreground" />
            </AvatarFallback>
          </Avatar>

          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground font-medium">
            {profile.bio}
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "rounded-full bg-background hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-105",
                  )}>
                  <Icon stroke={1.5} className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </section>

        {/* Links Stack */}
        <section className="flex flex-col w-full gap-3.5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: link.highlight ? "default" : "outline",
                  size: "lg",
                }),
                "group relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl h-auto py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
              )}>
              <span className="font-semibold text-[15px]">{link.label}</span>
              {link.description && (
                <span
                  className={cn(
                    "text-xs mt-0.5 transition-colors",
                    link.highlight
                      ? "text-primary-foreground/70 group-hover:text-primary-foreground/90"
                      : "text-muted-foreground group-hover:text-foreground/70",
                  )}>
                  {link.description}
                </span>
              )}
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-16 w-full text-center pb-6">
          <p className="text-sm text-muted-foreground font-medium tracking-wide">
            ©{new Date().getFullYear()} zeropse | Srijit Dey. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
