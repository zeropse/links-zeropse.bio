"use client";

import { buttonVariants, Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import { IconLoader, IconShare } from "@tabler/icons-react";
import { toast } from "sonner";

export default function Page() {
  const { profile, socials, links, theme, footer } = siteConfig;

  return (
    <main
      className={cn(
        "min-h-svh w-full flex flex-col items-center selection:bg-primary/30",
        theme?.background,
      )}>
      <div className="w-full max-w-xl px-4 py-8 sm:py-12 sm:px-6">
        {/* Header */}
        <header className="flex w-full items-center justify-between mb-8 sm:mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
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
                toast.success("Page link copied to clipboard!");
              }
            }}
            aria-label="Copy page link">
            <IconShare stroke={1.5} />
          </Button>
        </header>

        {/* Profile Section */}
        <section className="flex flex-col items-center text-center w-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
          <Avatar className="h-24 w-24 sm:h-28 sm:w-28 mb-4 border border-border shadow-sm hover:scale-105 transition-transform duration-300">
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
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
                    buttonVariants({ variant: "outline" }),
                    "rounded-full bg-background hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-110 h-12 w-12 p-0 flex items-center justify-center",
                  )}>
                  <Icon stroke={1.5} className="w-10 h-10" />
                </a>
              );
            })}
          </div>
        </section>

        {/* Links Stack */}
        <section className="flex flex-col w-full gap-5">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${300 + index * 100}ms` }}
                className={cn(
                  buttonVariants({
                    variant: link.highlight ? "default" : "outline",
                    size: "lg",
                  }),
                  "group relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl h-auto py-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-in fade-in slide-in-from-bottom-4 fill-mode-both",
                )}>
                {Icon && (
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <Icon className="w-5 h-5 opacity-80" stroke={1.5} />
                  </div>
                )}
                <span className="font-semibold text-[15px]">{link.label}</span>
                {link.description && (
                  <span
                    className={cn(
                      "text-xs mt-0.5 transition-colors px-10 text-center",
                      link.highlight
                        ? "text-primary-foreground/70 group-hover:text-primary-foreground/90"
                        : "text-muted-foreground group-hover:text-foreground/70",
                    )}>
                    {link.description}
                  </span>
                )}
              </a>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="mt-16 w-full text-center pb-6 animate-in fade-in duration-1000 delay-700 fill-mode-both">
          <p className="text-sm text-muted-foreground font-medium tracking-wide">
            ©{new Date().getFullYear()} {footer.text}
          </p>
        </footer>
      </div>
    </main>
  );
}
