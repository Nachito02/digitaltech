import Image from "next/image";

const stats = [
  { label: "Active device inventory", value: "62 equipos" },
  { label: "Models available", value: "6 modelos" },
];

export function CatalogHero() {
  return (
    <section className="px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex shrink-0 items-center justify-center lg:w-[44%] lg:justify-start">
          <Image
            src="/images/logodigitaltech.png"
            alt="Digital Tech"
            width={900}
            height={900}
            priority
            className="h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] lg:max-w-[520px] xl:max-w-[620px]"
          />
        </div>

        <div className="flex max-w-2xl flex-1 flex-col gap-6 lg:w-[56%]">
          <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
            Explorá una colección curada de iPhones premium diseñada para una
            experiencia de compra sobria, ordenada y enfocada en producto.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="min-w-0 flex-1 rounded-[1.4rem] border border-[var(--line)] bg-[var(--card-soft)] px-5 py-4"
              >
                <p className="max-w-[11rem] text-[11px] font-semibold tracking-[0.18em] text-[var(--text-subtle)] uppercase">
                  {stat.label}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {stat.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
