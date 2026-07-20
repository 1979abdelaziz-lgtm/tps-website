import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#061B3A] via-[#0A2E63] to-[#114A9F] text-white">

      {/* Background Effects */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div>

            <span className="inline-flex items-center rounded-full bg-green-600 px-5 py-2 text-sm font-semibold shadow-lg">

              SMART ENERGY SOLUTIONS

            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">

              Engineering
              <br />

              Solutions
              <br />

              <span className="text-green-400">

                for Every
                <br />
                Energy Challenge

              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">

              TPS delivers integrated engineering solutions
              for Power Generation,
              CHP & Cogeneration,
              Renewable Energy,
              Electrical Engineering,
              Industrial Automation,
              Battery Energy Storage Systems,
              and long-term Operation & Maintenance services.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="rounded-xl bg-green-600 px-8 py-4 font-semibold transition duration-300 hover:bg-green-700">

                Explore Solutions

              </button>

              <button className="rounded-xl border border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-[#061B3A]">

                Talk to an Engineer

              </button>

            </div>

            {/* Feature List */}

            <div className="mt-14 grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-green-500"></div>

                <span className="text-slate-300">

                  Integrated Engineering

                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-green-500"></div>

                <span className="text-slate-300">

                  Customized Solutions

                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-green-500"></div>

                <span className="text-slate-300">

                  Reliable Technical Support

                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-green-500"></div>

                <span className="text-slate-300">

                  Sustainable Energy

                </span>

              </div>

            </div>

          </div>          {/* ========================= */}
          {/* RIGHT IMAGE */}
          {/* ========================= */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">

              <Image
                src="/images/hero-energy.png"
                alt="TPS Energy Solutions"
                width={900}
                height={700}
                priority
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-6 rounded-2xl bg-white p-6 shadow-2xl">

              <p className="text-sm font-medium text-slate-500">
                TETRA POWER SOLUTIONS
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Integrated Energy
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Power Generation • CHP • Solar Energy •
                BESS • Automation • O&M
              </p>

            </div>

            {/* Top Badge */}

            <div className="absolute right-6 top-6 rounded-xl bg-green-600 px-5 py-3 shadow-xl">

              <p className="text-xs uppercase tracking-wider text-white/80">
                TPS
              </p>

              <p className="text-lg font-bold">
                Reliable Energy
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-xl font-bold">
              Integrated Solutions
            </h3>

            <p className="mt-3 text-slate-300">
              Complete engineering solutions from concept to commissioning.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-xl font-bold">
              Customer Focus
            </h3>

            <p className="mt-3 text-slate-300">
              Every project is tailored to meet the client's operational goals.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-xl font-bold">
              Reliable Support
            </h3>

            <p className="mt-3 text-slate-300">
              Commissioning, maintenance and long-term technical support.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-xl font-bold">
              Smart Energy
            </h3>

            <p className="mt-3 text-slate-300">
              Efficient, sustainable and future-ready energy technologies.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}