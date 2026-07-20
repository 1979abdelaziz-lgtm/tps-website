import {
  Cpu,
  Factory,
  BatteryCharging,
  Sun,
  Zap,
  Cog,
  Gauge,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Power Generation",
    description:
      "Gas engines, diesel generators, hybrid power plants, commissioning and troubleshooting.",
  },
  {
    icon: Factory,
    title: "CHP & CCHP",
    description:
      "Combined Heat & Power systems, trigeneration and waste heat recovery solutions.",
  },
  {
    icon: Sun,
    title: "Solar Energy",
    description:
      "Utility-scale, commercial rooftop and hybrid solar power solutions.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage",
    description:
      "BESS solutions for backup power, peak shaving and grid stability.",
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description:
      "LV & MV systems, power distribution, protection and power quality.",
  },
  {
    icon: Cpu,
    title: "Automation & SCADA",
    description:
      "PLC, SCADA, industrial control systems and digital automation.",
  },
  {
    icon: Gauge,
    title: "Energy Management",
    description:
      "Energy monitoring, EMS, smart metering and optimization.",
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    description:
      "Preventive maintenance, corrective maintenance, overhauls and technical support.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase tracking-wider">
            What We Do
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            Integrated Engineering Solutions
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            We provide comprehensive engineering solutions that improve
            reliability, efficiency and sustainability across multiple industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-green-600 transition">

                  <Icon
                    size={32}
                    className="text-blue-700 group-hover:text-white transition"
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 text-green-600 font-semibold hover:text-green-700">
                  Learn More →
                </button>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}