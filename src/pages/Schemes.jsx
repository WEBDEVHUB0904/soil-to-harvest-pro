import { useState } from "react";
import { Search, Calendar, IndianRupee, Clock, CheckCircle, AlertCircle, ArrowRight, Filter, Landmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const schemeFilters = ["All", "Ongoing", "Upcoming", "Central", "State", "Subsidy", "Insurance"];

const schemes = [
  {
    id: 1,
    name: "PM-KISAN",
    fullName: "Pradhan Mantri Kisan Samman Nidhi",
    status: "Ongoing",
    type: "Central",
    category: "Subsidy",
    amount: "₹6,000/year",
    deadline: null,
    launch: "Feb 2019",
    description: "Direct income support of ₹6,000 per year to small and marginal farmer families, paid in three equal installments of ₹2,000.",
    eligibility: "Landholding farmers with cultivable land up to 2 hectares",
    benefits: ["Direct bank transfer", "No middlemen", "Auto-renewal annually"],
    icon: "💰",
  },
  {
    id: 2,
    name: "PMFBY",
    fullName: "Pradhan Mantri Fasal Bima Yojana",
    status: "Ongoing",
    type: "Central",
    category: "Insurance",
    amount: "Coverage up to ₹2L",
    deadline: "Mar 31, 2025",
    launch: "Jan 2016",
    description: "Comprehensive crop insurance scheme providing financial support to farmers suffering crop loss/damage due to unforeseen events.",
    eligibility: "All farmers growing notified crops in notified areas",
    benefits: ["Low premium (2% kharif, 1.5% rabi)", "Full sum insured", "Use of technology for quick settlement"],
    icon: "🛡️",
  },
  {
    id: 3,
    name: "RKVY 2.0",
    fullName: "Rashtriya Krishi Vikas Yojana 2.0",
    status: "Ongoing",
    type: "Central",
    category: "Subsidy",
    amount: "₹10,433 Crore (2024-25)",
    deadline: null,
    launch: "Apr 2024",
    description: "Revamped scheme to incentivize states to increase investment in agriculture and allied sectors with a focus on sustainable farming.",
    eligibility: "State governments, farmer cooperatives, and FPOs",
    benefits: ["Infrastructure development", "Technology adoption support", "Agro-processing promotion"],
    icon: "🌱",
  },
  {
    id: 4,
    name: "PMKSY",
    fullName: "PM Krishi Sinchai Yojana",
    status: "Ongoing",
    type: "Central",
    category: "Subsidy",
    amount: "₹93,068 Crore (5 years)",
    deadline: null,
    launch: "Jul 2015",
    description: "Har Khet Ko Pani, More Crop Per Drop — expanding cultivable area under irrigation with assured supply and improved water use efficiency.",
    eligibility: "Farmers with land under irrigation, water user groups",
    benefits: ["Drip irrigation subsidy", "Micro irrigation support", "Watershed development"],
    icon: "💧",
  },
  {
    id: 5,
    name: "NMAET",
    fullName: "National Mission on Agricultural Extension & Technology",
    status: "Upcoming",
    type: "Central",
    category: "Subsidy",
    amount: "₹2,961 Crore",
    deadline: "Apr 1, 2025",
    launch: "Apr 2025 (Planned)",
    description: "Revamped mission to strengthen extension services and ICT-enabled farm advisory to 50 million farmers through digital platforms.",
    eligibility: "All registered farmers with Aadhaar-linked accounts",
    benefits: ["AI-based crop advisory", "Drone training", "Digital literacy"],
    icon: "📡",
  },
  {
    id: 6,
    name: "Agri Infrastructure Fund",
    fullName: "Agriculture Infrastructure Fund",
    status: "Ongoing",
    type: "Central",
    category: "Subsidy",
    amount: "₹1 Lakh Crore",
    deadline: "2032",
    launch: "Aug 2020",
    description: "Medium-long term debt financing facility for investment in viable projects for post-harvest management infrastructure and community farming assets.",
    eligibility: "FPOs, PACS, agri-entrepreneurs, startups",
    benefits: ["3% interest subvention", "Credit guarantee", "Long tenure loans"],
    icon: "🏗️",
  },
  {
    id: 7,
    name: "Kisan Credit Card",
    fullName: "Kisan Credit Card Scheme",
    status: "Ongoing",
    type: "Central",
    category: "Subsidy",
    amount: "Up to ₹3 Lakh @ 4%",
    deadline: null,
    launch: "1998 (Expanded 2020)",
    description: "Credit support for farmers for their cultivation and allied activities including short term credit requirements and maintenance of farm assets.",
    eligibility: "All farmers, SHGs, tenant farmers, oral lessees",
    benefits: ["Revolving credit", "Minimal paperwork", "ATM-enabled cards"],
    icon: "💳",
  },
  {
    id: 8,
    name: "eNAM",
    fullName: "National Agriculture Market",
    status: "Upcoming",
    type: "Central",
    category: "Subsidy",
    amount: "Phase 3 Expansion",
    deadline: "Jun 2025",
    launch: "Phase 3 — Jun 2025",
    description: "Unified online trading platform for agricultural commodities, connecting 1,361+ markets. Phase 3 expansion to add 200 new mandis with AI-based price discovery.",
    eligibility: "All registered farmers and traders",
    benefits: ["Better price discovery", "Transparent bidding", "Direct FPO access"],
    icon: "🏪",
  },
];

const statusColors = {
  Ongoing: "bg-primary/15 text-primary border-primary/30",
  Upcoming: "bg-gold/15 text-gold border-gold/30",
};

export default function Schemes() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = schemes.filter((s) => {
    const matchFilter =
      activeFilter === "All" ||
      s.status === activeFilter ||
      s.type === activeFilter ||
      s.category === activeFilter;
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.fullName.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Landmark className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide uppercase">Government Initiatives</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Agri <span className="text-gradient">Govt Schemes</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover central and state government schemes, subsidies, and insurance programs designed to support Indian farmers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Total Schemes", value: schemes.length, icon: "📋" },
              { label: "Ongoing", value: schemes.filter(s => s.status === "Ongoing").length, icon: "✅" },
              { label: "Upcoming", value: schemes.filter(s => s.status === "Upcoming").length, icon: "🔔" },
              { label: "Total Outlay", value: "₹1L+ Cr", icon: "💰" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-4 text-center border-glow">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-2xl font-display font-bold text-primary">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search schemes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-secondary/50 border-border/60 focus:border-primary/50"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {schemeFilters.map((f) => (
                <Button
                  key={f}
                  size="sm"
                  variant={activeFilter === f ? "default" : "outline"}
                  onClick={() => setActiveFilter(f)}
                  className={activeFilter === f ? "bg-gradient-primary text-primary-foreground" : "border-border/60 text-muted-foreground hover:text-foreground"}
                >
                  {f}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((scheme) => (
              <div key={scheme.id} className="group rounded-2xl bg-gradient-card border border-border/40 hover:border-primary/30 p-6 card-shadow hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{scheme.icon}</div>
                    <div>
                      <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">{scheme.name}</h3>
                      <p className="text-xs text-muted-foreground">{scheme.fullName}</p>
                    </div>
                  </div>
                  <span className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium ${statusColors[scheme.status]}`}>
                    {scheme.status === "Ongoing"
                      ? <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 inline" />{scheme.status}</span>
                      : <span className="flex items-center gap-1"><AlertCircle className="w-3 h-3 inline" />{scheme.status}</span>}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{scheme.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <IndianRupee className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-semibold text-gold">{scheme.amount}</span>
                  </div>
                  {scheme.deadline && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-semibold text-destructive">{scheme.deadline}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Launched:</span>
                    <span className="font-semibold">{scheme.launch}</span>
                  </div>
                </div>

                <div className="p-3 bg-secondary/40 rounded-xl mb-4">
                  <p className="text-xs text-muted-foreground mb-1 font-medium">Eligibility</p>
                  <p className="text-xs text-foreground/80">{scheme.eligibility}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Key Benefits</p>
                  <div className="flex flex-wrap gap-1.5">
                    {scheme.benefits.map((b) => (
                      <span key={b} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-lg border border-primary/20">{b}</span>
                    ))}
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full border-border/60 hover:border-primary/50 hover:bg-primary/5 gap-1.5 text-sm mt-auto group-hover:text-primary transition-colors">
                  Apply / Know More <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="font-display text-xl font-semibold mb-2">No schemes found</p>
              <p className="text-sm">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
