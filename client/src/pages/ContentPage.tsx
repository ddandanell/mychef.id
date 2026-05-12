import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { openWhatsApp, type BuildOptions } from '@/lib/whatsappCTA';
import { useLocation } from 'wouter';
import type { ReactNode } from 'react';

export interface ContentSection {
  heading: string;
  body?: string | ReactNode;
  bullets?: string[];
  steps?: Array<{ title: string; description: string }>;
}

export interface ContentPageProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  structuredData?: object | object[];
  /** Visible H1 — defaults to title. */
  h1: string;
  /** Lead paragraph displayed under H1. */
  lead: string;
  /** Body sections rendered in order. */
  sections: ContentSection[];
  /** WhatsApp preset source key. */
  ctaSource?: string;
  ctaPresetOpts?: BuildOptions;
  /** Final CTA button label. */
  ctaLabel?: string;
  /** Optional secondary CTA — goes to a route via wouter. */
  secondaryCta?: { label: string; href: string };
}

export default function ContentPage(props: ContentPageProps) {
  const [, setLocation] = useLocation();
  const ctaSource = props.ctaSource ?? 'hero';

  return (
    <div className="min-h-screen">
      <SEO
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        keywords={props.keywords}
        structuredData={props.structuredData}
      />
      <Header />

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {props.h1}
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-10">
            {props.lead}
          </p>

          {props.sections.map((s, i) => (
            <div key={i} className="mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">{s.heading}</h2>
              {s.body && (
                <div className="text-foreground/80 leading-relaxed mb-4 prose prose-lg max-w-none">
                  {typeof s.body === 'string' ? <p>{s.body}</p> : s.body}
                </div>
              )}
              {s.bullets && (
                <ul className="space-y-3 mb-4">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.steps && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {s.steps.map((step, j) => (
                    <Card key={j} className="hover-elevate">
                      <CardContent className="p-5">
                        <div className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">Step {j + 1}</div>
                        <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                        <p className="text-foreground/70 text-sm">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button size="lg" onClick={() => openWhatsApp(ctaSource, props.ctaPresetOpts)}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2">
              <MessageCircle className="w-5 h-5 mr-2" />{props.ctaLabel ?? 'WhatsApp myCHEF'}
            </Button>
            {props.secondaryCta && (
              <Button size="lg" variant="outline" onClick={() => setLocation(props.secondaryCta!.href)}
                className="w-full sm:w-auto px-8 py-6 text-lg font-semibold hover-elevate">
                <FileText className="w-5 h-5 mr-2" />{props.secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
