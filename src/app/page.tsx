"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherLightbulb, FeatherBookOpenText, FeatherCompass, FeatherInfo, FeatherArrowRight, FeatherShoppingCart, FeatherStar, FeatherSend, FeatherFacebook, FeatherInstagram, FeatherTwitter, FeatherMail } from "@subframe/core";
import * as SubframeCore from "@subframe/core";
import { TextField } from "@/ui/components/TextField";
import { IconButton } from "@/ui/components/IconButton";

// DO NOT expose your Supabase secret key in production client-side code.
// Use an API route or serverless function to handle email submissions securely.
const supabaseUrl = "https://yrvhfolbguoebdcguptp.supabase.co";
const supabaseAnonKey = "YOUR_PUBLIC_ANON_KEY"; // Replace with your public anon key

function Home() {
  // Ref for the "Imagine That! Series" section
  const imagineThatRef = React.useRef<HTMLDivElement>(null);

  // Handler to scroll to the section
  const handleScrollToImagineThat = () => {
    imagineThatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState("");

  // Use fetch to call your own API route for production
  const handleEmailSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSuccess(true);
        setEmail("");
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex w-full flex-col items-start bg-warning-700">
      <div className="flex w-full flex-col items-center justify-center gap-8 bg-success-50 px-6 py-24 mobile:h-auto mobile:w-full mobile:flex-none">
        <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-16">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start justify-center gap-6">
            <span className="max-w-[576px] whitespace-pre-wrap font-['Inter'] text-[56px] font-[900] leading-[72px] text-brand-900 -tracking-[0.04em] mobile:font-['Rubik'] mobile:text-[40px] mobile:font-[800] mobile:leading-[56px] mobile:tracking-normal">
              {"Welcome to the Whimsical World of Milo Rivers"}
            </span>
            <span className="max-w-[448px] whitespace-pre-wrap text-body font-body text-brand-800">
              {
                "Heartwarming stories, curious characters, and colorful adventures — crafted to spark the imagination of little explorers aged 1–6."
              }
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="large"
                onClick={handleScrollToImagineThat}
              >
                Explore Our Books
              </Button>
              <Button
                variant="brand-tertiary"
                size="large"
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/stores/Milo-Rivers/author/B0DLC586BQ?maas=maas_adg_3148BF35775AC8D275DA494864F45B1E_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Visit Our Amazon Page
              </Button>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 overflow-hidden rounded-md relative">
            <div className="flex w-full grow shrink-0 basis-0 items-center justify-center gap-2 relative">
              <img
                className="h-96 grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1752687728/uploads/14723/sxsiwej5dotpbw6ghled.png"
                alt="Imagine That! children book series"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-12 border-b border-solid border-neutral-border bg-default-background px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center">
            <img
              className="h-72 w-full flex-none rounded-lg object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1752687400/uploads/14723/oiesvs4v4q2s1pgmzaij.png"
              alt="Vitaliy and Nadia, creators of Milo Rivers"
            />
          </div>
          <div className="flex min-w-[320px] flex-col items-start justify-center gap-6">
            <span className="text-heading-1 font-heading-1 text-default-font">
              About Milo Rivers
            </span>
            <span className="w-full max-w-[576px] whitespace-pre-wrap text-body font-body text-default-font">
              {
                "Milo Rivers is a creative duo — Nadia, a seasoned child psychologist, and Vitaliy, an experienced designer — on a mission to make learning joyful and meaningful for young children.\n\nTogether, we create beautifully illustrated books that spark curiosity, encourage critical thinking, and make every reading moment a chance to connect.\nNadia brings her deep understanding of early childhood development, while Vitaliy transforms those insights into playful, engaging visuals that kids love."
              }
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <IconWithBackground size="medium" icon={<FeatherLightbulb />} />
              <span className="text-body-bold font-body-bold text-default-font">
                Imagine
              </span>
              <IconWithBackground
                size="medium"
                icon={<FeatherBookOpenText />}
              />
              <span className="text-body-bold font-body-bold text-default-font">
                Learn
              </span>
              <IconWithBackground size="medium" icon={<FeatherCompass />} />
              <span className="text-body-bold font-body-bold text-default-font">
                Explore
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={imagineThatRef}
        className="flex w-full flex-col items-center justify-center gap-12 border-b border-solid border-neutral-border bg-neutral-50 px-6 py-24"
      >
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-8">
          <span className="text-heading-1 font-heading-1 text-default-font">
            Imagine That! Series
          </span>
          <span className="max-w-[576px] text-body font-body text-default-font text-center">
            The series combines captivating illustrations with developmentally
            enriched content to help children build essential skills as they
            grow.
          </span>
          <div className="w-full items-start gap-6 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <SubframeCore.HoverCard.Root>
                <SubframeCore.HoverCard.Trigger asChild={true}>
                  <img
                    className="w-full flex-none rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1752310546/uploads/14723/cfvjejo56fiptt9jkefv.png"
                    alt="Imagine That! Nature's Secrets"
                  />
                </SubframeCore.HoverCard.Trigger>
                <SubframeCore.HoverCard.Portal>
                  <SubframeCore.HoverCard.Content
                    side="right"
                    align="start"
                    sideOffset={0}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg">
                      <img
                        className="h-96 w-96 flex-none object-cover"
                        src="https://res.cloudinary.com/subframe/image/upload/v1752310546/uploads/14723/sfkwe2uzwc6p98fnsunt.png"
                        alt="Imagine That! Nature's Secrets look inside"
                      />
                    </div>
                  </SubframeCore.HoverCard.Content>
                </SubframeCore.HoverCard.Portal>
              </SubframeCore.HoverCard.Root>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Nature&#39;s Secrets
              </span>
              <span className="text-body font-body text-subtext-color">
                A magical journey through forests, fields, and skies. With each
                turn of the page, kids will discover fascinating animals,
                plants, and natural phenomena—all through imaginative
                illustrations and fun facts that spark curiosity.
              </span>
              <Button
                icon={<FeatherInfo />}
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/Imagine-That-Natures-Milo-Rivers/dp/B0DM26SK73?maas=maas_adg_A3BC83631C8B9F7478A8D4D0063FD4FE_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <SubframeCore.HoverCard.Root>
                <SubframeCore.HoverCard.Trigger asChild={true}>
                  <img
                    className="w-full flex-none rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1752310574/uploads/14723/o4tw8n2unrfhwtzxvx3m.png"
                    alt="Imagine That! Under The Sea"
                  />
                </SubframeCore.HoverCard.Trigger>
                <SubframeCore.HoverCard.Portal>
                  <SubframeCore.HoverCard.Content
                    side="right"
                    align="center"
                    sideOffset={4}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg">
                      <img
                        className="w-96 flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1752310574/uploads/14723/i0wytao9ydab0y79tztx.png"
                        alt="Imagine That! Under The Sea look inside"
                      />
                    </div>
                  </SubframeCore.HoverCard.Content>
                </SubframeCore.HoverCard.Portal>
              </SubframeCore.HoverCard.Root>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Under The Sea
              </span>
              <span className="text-body font-body text-subtext-color">
                From friendly dolphins to glowing jellyfish, this book takes
                young readers beneath the waves to explore the colorful and
                mysterious world of the ocean. A playful blend of learning and
                fantasy that makes marine life exciting for little minds.
              </span>
              <Button
                icon={<FeatherInfo />}
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/Imagine-That-Under-Milo-Rivers/dp/B0DMNDFDVY?maas=maas_adg_7B2C4453DE5EB7CC264D8533DAEF1C1E_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <SubframeCore.HoverCard.Root>
                <SubframeCore.HoverCard.Trigger asChild={true}>
                  <img
                    className="w-full flex-none rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1752310596/uploads/14723/hn4bkh5fprzudneafgtj.png"
                    alt="Imagine That! Amazing Animals"
                  />
                </SubframeCore.HoverCard.Trigger>
                <SubframeCore.HoverCard.Portal>
                  <SubframeCore.HoverCard.Content
                    side="left"
                    align="center"
                    sideOffset={4}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg">
                      <img
                        className="w-96 flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1752310597/uploads/14723/u7abttdogdyfqo0sq3fx.png"
                        alt="Imagine That! Amazing Animals look inside"
                      />
                    </div>
                  </SubframeCore.HoverCard.Content>
                </SubframeCore.HoverCard.Portal>
              </SubframeCore.HoverCard.Root>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Amazing Animals
              </span>
              <span className="text-body font-body text-subtext-color">
                From jungles to deserts, this book introduces kids to incredible
                creatures big and small—some real, some wonderfully imagined.
                With fun visuals and simple facts, it’s the perfect read to
                inspire awe and laughter in every animal lover.
              </span>
              <Button
                icon={<FeatherInfo />}
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/gp/product/B0DN69PV1B?maas=maas_adg_7ED8F599FC4806A486CB5A65E4661B5F_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <SubframeCore.HoverCard.Root>
                <SubframeCore.HoverCard.Trigger asChild={true}>
                  <img
                    className="w-full flex-none rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1752310675/uploads/14723/jvumkftijdyonjwco2st.png"
                    alt="The Secrets Of The Sky"
                  />
                </SubframeCore.HoverCard.Trigger>
                <SubframeCore.HoverCard.Portal>
                  <SubframeCore.HoverCard.Content
                    side="bottom"
                    align="center"
                    sideOffset={4}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg">
                      <img
                        className="w-96 flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1752310675/uploads/14723/x6mgprb3c6rw3usrwwru.png"
                        alt="The Secrets Of The Sky look inside"
                      />
                    </div>
                  </SubframeCore.HoverCard.Content>
                </SubframeCore.HoverCard.Portal>
              </SubframeCore.HoverCard.Root>
              <span className="text-heading-2 font-heading-2 text-default-font">
                The Secrets Of The Sky
              </span>
              <span className="text-body font-body text-subtext-color">
                Soar through fluffy clouds, dance with the stars, and meet sky
                creatures. This dreamy adventure invites young readers to
                explore the wonders of the sky—from birds and balloons to
                constellations and comets.
              </span>
              <Button
                icon={<FeatherInfo />}
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/gp/product/B0DNMKKD2N?maas=maas_adg_4F496DA4601846DF7414A0047DB88A17_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <SubframeCore.HoverCard.Root>
                <SubframeCore.HoverCard.Trigger asChild={true}>
                  <img
                    className="w-full flex-none rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1752310694/uploads/14723/ytwiwcegniwki1ctqopb.png"
                    alt="Journey Through The Jungle"
                  />
                </SubframeCore.HoverCard.Trigger>
                <SubframeCore.HoverCard.Portal>
                  <SubframeCore.HoverCard.Content
                    side="bottom"
                    align="center"
                    sideOffset={4}
                    asChild={true}
                  >
                    <div className="flex flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-3 py-3 shadow-lg">
                      <img
                        className="w-96 flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1752311541/uploads/14723/cqazdq0sgwicpopgjanz.png"
                        alt="Journey Through The Jungle look inside"
                      />
                    </div>
                  </SubframeCore.HoverCard.Content>
                </SubframeCore.HoverCard.Portal>
              </SubframeCore.HoverCard.Root>
              <span className="text-heading-2 font-heading-2 text-default-font">
                Journey Through The Jungle
              </span>
              <span className="text-body font-body text-subtext-color">
                Swing through the trees, tiptoe past tigers, and uncover hidden
                surprises in the heart of the rainforest. Brings the jungle to
                life in a way that’s fun and easy to explore.
              </span>
              <Button
                icon={<FeatherInfo />}
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/gp/product/B0DRNJ25DD?maas=maas_adg_31CD6D4E1ECE0FEAFF9D9991F9C17811_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-end justify-end gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-neutral-50 px-6 py-6 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.amazon.com/dp/B0CW19RFNM?maas=maas_adg_330C56B63378D5A1DDF0A462EF288B2A_afap_abs&ref_=aa_maas&tag=maas",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              <span className="text-body font-body text-subtext-color">
                View All
              </span>
              <FeatherArrowRight className="text-heading-2 font-heading-2 text-default-font" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-12 border-b border-solid border-neutral-border bg-white px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-8">
          <span className="text-heading-1 font-heading-1 text-default-font">
            The Art of Coloring
          </span>
          <span className="max-w-[576px] text-body font-body text-default-font text-center">
            Unleash creativity and curiosity for all ages with The Art of
            Coloring!
          </span>
          <div className="flex w-full flex-wrap items-center justify-center gap-6">
            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <img
                className="w-full grow shrink-0 basis-0 rounded-md object-contain"
                src="https://res.cloudinary.com/subframe/image/upload/v1752314088/uploads/14723/y02fhmnb6cmh9ldagf7a.png"
                alt="Coloring book - Fantasy Doors and Windows. Look inside"
              />
              <span className="text-heading-2 font-heading-2 text-default-font">
                Fantasy Doors and Windows: A Magical Coloring Adventure for All
                Ages
              </span>
              <Button
                icon={<FeatherInfo />}
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/Fantasy-Doors-Windows-Coloring-Adventure/dp/B0DWMMMLQX?maas=maas_adg_81B7F0F5AB4E2778B809EEB7E8322E5D_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Learn More
              </Button>
            </div>
            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-4 rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <img
                className="w-full flex-none rounded-md"
                src="https://res.cloudinary.com/subframe/image/upload/v1752314087/uploads/14723/g50fmos3dsi5mb5w4t4v.png"
                alt="Coloring book - Whiskers & Wonders. Look inside"
              />
              <span className="text-heading-2 font-heading-2 text-default-font">
                Whiskers &amp; Wonders: A Cat Coloring Book for Kids and Adults
              </span>
              <Button
                icon={<FeatherInfo />}
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/Whiskers-Wonders-Coloring-Book-Adults/dp/B0DTGCPKN2?maas=maas_adg_1E0B8C40F14513B43E0D70315D185F44_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-12 border-b border-solid border-neutral-border bg-warning-50 px-6 py-10">
        <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-12">
          <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start justify-center gap-6 py-14">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Lenny the Little Explorer
            </span>
            <span className="max-w-[576px] whitespace-pre-wrap text-body font-body text-default-font">
              {
                "Meet a lovable little fox on his exciting journey through the forest—a heartwarming adventure designed especially for toddlers and preschoolers. With gentle storytelling and soft pastel illustrations, this beautifully crafted tale sparks imagination, curiosity, and a sense of wonder.\n\nAlong the way, children are encouraged to be brave, kind, and adventurous while discovering the joys of friendship and exploration. Perfect for bedtime snuggles or quiet afternoons, this charming story is sure to become a treasured family favorite."
              }
            </span>
            <Button
              size="large"
              icon={<FeatherShoppingCart />}
                onClick={() => {
                  window.open(
                    "https://www.amazon.com/Lenny-Little-Explorer-Day-Adventure/dp/B0DLBP392P?maas=maas_adg_BC27954261EAB757AF4E08CB7821C46A_afap_abs&ref_=aa_maas&tag=maas",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
              Get Your Copy
            </Button>
          </div>
          <div className="flex h-144 grow shrink-0 basis-0 items-center">
            <img
              className="h-144 grow shrink-0 basis-0 rounded-lg object-contain"
              src="https://res.cloudinary.com/subframe/image/upload/v1754070229/uploads/14723/uer6ytkz1k5n512i32eg.png"
              alt="Lenny the Little Explorer book cover"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-12 bg-white px-6 py-24">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-8">
          <span className="text-heading-1 font-heading-1 text-default-font">
            What Parents Say
          </span>
          <div className="w-full items-start gap-6 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex items-center gap-2">
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
              </div>
              <span className="text-body font-body text-default-font">
                &quot;Such a cute coloring book! My little one loves cats, so
                we’re having the best time coloring it together. Fun, creative,
                and full of adorable pages!&quot;
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                - Victoria, Parent
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex items-center gap-2">
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
              </div>
              <span className="whitespace-pre-wrap text-body font-body text-default-font">
                {
                  '"The cute and lively pictures—wow, the expressions on faces are so clear—the innocent but brave Lenny, the silly squirrel, and the cute bunny. The illustrations and the pastel colors are a big plus for this book.\n\nI love that the story imbues the importance of making new relationships and helping strangers."'
                }
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                - Mahathi, Parent
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-lg border border-solid border-neutral-border bg-default-background px-6 py-6">
              <div className="flex items-center gap-2">
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
                <IconWithBackground variant="warning" icon={<FeatherStar />} />
              </div>
              <span className="text-body font-body text-default-font">
                &quot;Added another amazing book to my child’s growing
                collection — this one about wild animals! Beautiful
                illustrations and so much fun to read together.&quot;
              </span>
              <span className="text-caption-bold font-caption-bold text-subtext-color">
                - Victoria, Parent
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-8 bg-neutral-900 px-6 py-12">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <IconButton
            variant="inverse"
            icon={<FeatherFacebook />}
            onClick={() => {
              window.open(
                "https://www.facebook.com/profile.php?id=61574014714387",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />
          <IconButton
            variant="inverse"
            icon={<FeatherInstagram />}
            onClick={() => {
              window.open(
                "https://www.instagram.com/miloriversbooks/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />
          <IconButton
            variant="inverse"
            icon={<FeatherMail />}
            onClick={() => {
              window.open(
                "mailto:miloriversbooks@gmail.com",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />
        </div>
        <span className="text-caption font-caption text-white text-center">
          © 2025 Milo Rivers. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Home;
