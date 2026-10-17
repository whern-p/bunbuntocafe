import {
  Bun,
  Croissant,
  Danish,
  IconLine,
  IconPlus,
  IconReturn,
  IconSliders,
  IconSunrise,
  Leaf,
  Loaf,
} from "./illustrations";

const LINE_ID = "bunbun";
// LINE ID ส่วนตัวใช้ "~" นำหน้า (ถ้าเป็นบัญชีร้านค้า LINE OA ให้เปลี่ยนเป็น "@")
const LINE_URL = `https://line.me/R/ti/p/~${LINE_ID}`;
const CTA_TEXT = "ทักไลน์เลย";

const features = [
  {
    icon: IconSunrise,
    title: "อบสดใหม่ทุกวัน",
    text: "อบใหม่ทุกวัน ไม่ค้างคืน ลูกค้าของคุณได้ขนมหอมกรุ่น ชั้นกรอบ เนื้อนุ่ม เหมือนอบเองหลังร้าน",
  },
  {
    icon: IconReturn,
    title: "ขายไม่หมด คืนได้",
    text: "คืนขนมได้ก่อน 16.00 น. สูงสุด 20% ของจำนวนที่สั่ง รับเงินคืน 50% ของขนมที่คืน ลดความเสี่ยงของร้าน",
  },
  {
    icon: IconSliders,
    title: "เลือกรสและความหวานได้",
    text: "ปรับรสชาติและระดับความหวานได้หลายระดับ ให้เข้ากับเมนูกาแฟและลูกค้าประจำของร้านคุณ",
  },
];

const products = [
  {
    art: Croissant,
    name: "ครัวซองต์เนยสด",
    text: "ชั้นบางกรอบ หอมเนยแท้ ทานคู่กาแฟได้ทุกแก้ว",
    bg: "bg-butter-soft",
  },
  {
    art: Danish,
    name: "เดนิชผลไม้",
    text: "แป้งพัฟเนย ท็อปคัสตาร์ดและผลไม้ สีสวยน่าวางตู้",
    bg: "bg-leaf-soft",
  },
  {
    art: Loaf,
    name: "ขนมปังโชกุปัง",
    text: "เนื้อนุ่มฉีกเป็นริ้ว เหมาะทำโทสต์และแซนด์วิช",
    bg: "bg-butter-soft",
  },
  {
    art: Bun,
    name: "บันไส้ต่าง ๆ",
    text: "บันนุ่มฟู ไส้คัสตาร์ด ชีส หรือรสที่ร้านอยากได้",
    bg: "bg-leaf-soft",
  },
];

const sweetness = ["หวานน้อย", "หวานกลาง", "หวานปกติ", "หวานมาก"];

const steps = [
  { title: "ทักไลน์", text: `แอดไลน์ ${LINE_ID} บอกชื่อร้านและที่ตั้ง` },
  { title: "เลือกเมนู", text: "เลือกขนม จำนวน รสชาติ และระดับความหวาน" },
  { title: "รับขนมสด", text: "รับขนมอบสดใหม่ไปวางขายหน้าร้านได้เลย" },
];

const faqs = [
  {
    q: "สั่งขั้นต่ำกี่ชิ้น?",
    a: "ทักไลน์บอกจำนวนที่ร้านต้องการได้เลย เราจะแจ้งจำนวนขั้นต่ำและราคาส่งที่เหมาะกับร้านของคุณ",
  },
  {
    q: "ขายไม่หมด คืนได้อย่างไร?",
    a: "คืนได้ภายในวันเดียวกันก่อน 16.00 น. ไม่เกิน 20% ของจำนวนที่สั่ง และรับเงินคืน 50% ของราคาขนมที่คืน เช่น สั่ง 50 ชิ้น คืนได้สูงสุด 10 ชิ้น",
  },
  {
    q: "ปรับรสชาติและความหวานได้แค่ไหน?",
    a: "เลือกความหวานได้หลายระดับ ตั้งแต่หวานน้อยจนถึงหวานมาก และเลือกรสไส้ได้ บอกความต้องการตอนสั่งทางไลน์ได้เลย",
  },
  {
    q: "ส่งถึงร้านไหม ส่งพื้นที่ไหนบ้าง?",
    a: "แจ้งที่ตั้งร้านทางไลน์ แล้วเราจะเช็ครอบส่งและพื้นที่ให้ว่าส่งถึงร้านคุณได้อย่างไร",
  },
];

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-autumn px-7 py-3.5 font-display text-subtitle font-medium text-cream shadow-[0_8px_24px_-8px_rgba(166,75,29,0.6)] transition hover:bg-autumn-dark focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-leaf active:scale-[0.98] ${className}`}
    >
      <IconLine className="h-6 w-6" />
      {CTA_TEXT}
    </a>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-display text-small font-medium tracking-wide text-leaf">{eyebrow}</p>
      <h2 className="mt-2 text-balance font-display text-title font-semibold text-bark">{title}</h2>
      {text && <p className="mt-3 text-body text-bark-soft">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ส่วนหัว */}
      <header className="sticky top-0 z-30 border-b border-butter/70 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold text-bark">
            <Croissant className="h-8 w-10" />
            Bunbun
          </a>
          <nav className="hidden items-center gap-7 text-small text-bark-soft md:flex">
            <a href="#features" className="hover:text-autumn">จุดเด่น</a>
            <a href="#menu" className="hover:text-autumn">เมนู</a>
            <a href="#faq" className="hover:text-autumn">คำถาม</a>
            <a href="#contact" className="hover:text-autumn">ติดต่อเรา</a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-line-green px-4 py-2 text-small font-medium text-white transition hover:brightness-95"
          >
            <IconLine className="h-5 w-5" />
            LINE
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <Leaf className="absolute -left-6 top-10 h-20 w-20 rotate-12 text-leaf/25 md:h-28 md:w-28" />
          <Leaf className="absolute right-4 top-4 h-12 w-12 -rotate-45 text-autumn/25" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-2 md:pb-24 md:pt-20">
            <div className="relative text-center md:text-left">
              <p className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-small font-medium text-leaf">
                <span className="h-2 w-2 rounded-full bg-leaf" />
                ขนมอบสำหรับร้านกาแฟและคาเฟ่
              </p>
              <h1 className="mt-5 font-display text-hero font-semibold text-bark">
                <span className="whitespace-nowrap">ครัวซองต์</span>และ
                <span className="whitespace-nowrap">ขนมปัง</span>
                <br />
                <span className="text-autumn">อบสดทุกวัน</span>{" "}
                <span className="inline-block">ส่งถึงคาเฟ่คุณ</span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-balance text-subtitle text-bark-soft md:mx-0">
                ร้านไม่ต้องมีครัวอบเองก็มีขนมอร่อยวางขาย เลือกรสชาติและความหวานได้ ขายไม่หมดก็คืนได้
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <LineButton className="w-full sm:w-auto" />
                <a
                  href="#menu"
                  className="inline-flex w-full items-center justify-center rounded-full border-2 border-bark/15 px-7 py-3 font-display text-body font-medium text-bark transition hover:border-autumn hover:text-autumn sm:w-auto"
                >
                  ดูเมนูขนม
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm md:max-w-md">
              <div className="aspect-square rounded-full bg-butter" />
              <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-crust/60" />
              <Croissant className="absolute left-[10%] top-[18%] w-[80%] drop-shadow-[0_12px_14px_rgba(74,47,29,0.18)]" />
              <Bun className="absolute bottom-[8%] left-[2%] w-[44%] drop-shadow-[0_10px_10px_rgba(74,47,29,0.15)]" />
              <Loaf className="absolute bottom-[6%] right-[0%] w-[48%] drop-shadow-[0_10px_10px_rgba(74,47,29,0.15)]" />
              <Leaf className="absolute right-[8%] top-[4%] h-12 w-12 rotate-[200deg] text-autumn" />
              <Leaf className="absolute left-[4%] top-[8%] h-9 w-9 rotate-[100deg] text-leaf" />
            </div>
          </div>
        </section>

        {/* จุดเด่น 3 ข้อ */}
        <section id="features" className="scroll-mt-20 bg-butter-soft py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="ทำไมคาเฟ่เลือก Bunbun" title="3 เหตุผลที่สั่งกับเราแล้วสบายใจ" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="rounded-3xl bg-cream p-6 shadow-[0_1px_0_rgba(74,47,29,0.06)] md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-autumn/10 text-autumn">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-3xl font-semibold text-butter">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-subtitle font-semibold text-bark">{title}</h3>
                  <p className="mt-2 text-body text-bark-soft">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* สินค้า / ราคา */}
        <section id="menu" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              eyebrow="เมนูขนมอบ"
              title="ขนมปังอบ & ครัวซองต์ สำหรับวางขายหน้าร้าน"
              text="ตัวอย่างเมนูยอดนิยม สั่งรวมหลายเมนูได้ในครั้งเดียว"
            />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {products.map(({ art: Art, name, text, bg }) => (
                <div key={name} className="overflow-hidden rounded-3xl border border-butter bg-white/60">
                  <div className={`flex h-28 items-center justify-center sm:h-40 ${bg}`}>
                    <Art className="h-20 w-28 sm:h-28 sm:w-40" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-body font-semibold text-bark sm:text-subtitle">{name}</h3>
                    <p className="mt-1 text-small text-bark-soft">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-leaf p-6 text-cream md:p-8">
                <h3 className="font-display text-subtitle font-semibold">เลือกระดับความหวานได้</h3>
                <p className="mt-1 text-small text-cream/80">ปรับให้เข้ากับลูกค้าของร้าน บอกได้ตอนสั่ง</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sweetness.map((level, i) => (
                    <span
                      key={level}
                      className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-2 text-small"
                    >
                      <span className="flex gap-0.5">
                        {sweetness.map((_, j) => (
                          <span
                            key={j}
                            className={`h-2 w-2 rounded-full ${j <= i ? "bg-butter" : "bg-cream/25"}`}
                          />
                        ))}
                      </span>
                      {level}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-5 rounded-3xl bg-butter p-6 md:p-8">
                <div>
                  <h3 className="font-display text-subtitle font-semibold text-bark">ราคาส่งสำหรับร้านค้า</h3>
                  <p className="mt-1 text-body text-bark-soft">
                    ราคาขึ้นอยู่กับเมนูและจำนวนที่สั่ง ทักไลน์เพื่อขอใบราคาส่งได้เลย
                  </p>
                </div>
                <LineButton className="self-start" />
              </div>
            </div>

            <div className="mt-14">
              <h3 className="text-center font-display text-subtitle font-semibold text-bark">สั่งง่าย 3 ขั้นตอน</h3>
              <ol className="mt-6 grid gap-4 md:grid-cols-3">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-4 rounded-2xl border border-butter p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-autumn font-display text-lg font-semibold text-cream">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-bark">{step.title}</p>
                      <p className="text-small text-bark-soft">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section id="faq" className="scroll-mt-20 bg-butter-soft py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHeading eyebrow="คำถามที่พบบ่อย" title="มีคำถาม? เราตอบให้" />
            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-2xl bg-cream px-5 py-4 md:px-6">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-body font-medium text-bark md:text-subtitle">
                    {faq.q}
                    <IconPlus className="faq-icon h-5 w-5 shrink-0 text-autumn transition-transform" />
                  </summary>
                  <p className="mt-3 text-body text-bark-soft">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="relative overflow-hidden rounded-[2rem] bg-bark px-6 py-12 text-center text-cream md:px-12 md:py-16">
              <Leaf className="absolute -right-4 -top-4 h-24 w-24 rotate-90 text-autumn/40" />
              <Leaf className="absolute -bottom-6 -left-4 h-28 w-28 text-leaf/50" />
              <div className="relative">
                <p className="font-display text-small font-medium tracking-wide text-crust">ติดต่อเรา</p>
                <h2 className="mt-2 text-balance font-display text-title font-semibold">
                  อยากให้ร้านมีขนมอบ<span className="whitespace-nowrap">สด ๆ ทุกวัน?</span>
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-body text-cream/80">
                  ทักมาคุยกันได้เลย บอกชื่อร้าน ที่ตั้ง และขนมที่อยากได้ เราจะส่งรายละเอียดและราคาส่งให้
                </p>
                <div className="mx-auto mt-8 inline-flex flex-col items-center gap-2 rounded-2xl bg-cream/10 px-6 py-4">
                  <span className="text-small text-cream/70">LINE ID</span>
                  <span className="font-display text-2xl font-semibold tracking-wide">{LINE_ID}</span>
                </div>
                <div className="mt-8">
                  <LineButton />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="border-t border-butter pb-28 pt-8 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-small text-bark-soft md:flex-row">
          <div className="flex items-center gap-2 font-display font-semibold text-bark">
            <Croissant className="h-6 w-8" />
            Bunbun
          </div>
          <p className="text-center">ขนมอบสดใหม่ทุกวัน สำหรับร้านกาแฟและคาเฟ่ · LINE: {LINE_ID}</p>
          <p>© 2026 Bunbun</p>
        </div>
      </footer>

      {/* ปุ่มลอยด้านล่าง เฉพาะมือถือ */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-butter bg-cream/95 p-3 backdrop-blur md:hidden">
        <LineButton className="w-full" />
      </div>
    </>
  );
}
