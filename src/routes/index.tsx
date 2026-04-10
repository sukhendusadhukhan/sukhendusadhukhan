import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Mail, Phone, MapPin, ExternalLink, Award, BookOpen,
  FlaskConical, Star, Globe, FileText, Smartphone
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const highlights = [
  { icon: FileText, text: 'Patent Published (No. 202031035590)' },
  { icon: BookOpen, text: 'Editor of International Publication' },
  { icon: Award, text: 'Qualified NET with JRF — AIR 163 (2016) & AIR 63 (2017)' },
  { icon: Smartphone, text: 'Android & Web App Developer' },
  { icon: BookOpen, text: '24 Papers in International Journals' },
  { icon: Star, text: 'h-index: 10 · i-10 index: 10' },
  { icon: Award, text: 'Young Researcher Award 2022 (InSc)' },
  { icon: Award, text: 'Young Scientist Award (ScienceFather)' },
]

const researchInterests = [
  'Multiferroics',
  'Condensed Matter Physics',
  'Nanomaterials & Nanocomposites',
  'X-ray Crystallography',
  'Structural & Microstructural Characterizations',
  'Magnetic Properties',
  'Dielectric & Ferroelectric Properties',
  'Magnetoelectric Coupling',
  'Thermomagnetic Energy Generators',
]

const academicProfiles = [
  { label: 'ORCID', id: '0000-0003-2391-2507', url: 'https://orcid.org/0000-0003-2391-2507', color: 'text-green-700' },
  { label: 'Google Scholar', id: 'sVA_-JwAAAAJ', url: 'https://scholar.google.co.in/citations?user=sVA_-JwAAAAJ', color: 'text-blue-700' },
  { label: 'ResearchGate', id: 'Sukhendu-Sadhukhan', url: 'https://www.researchgate.net/profile/Sukhendu-Sadhukhan', color: 'text-teal-700' },
  { label: 'Scopus', id: '57220383531', url: 'https://www.scopus.com/authid/detail.uri?authorId=57220383531', color: 'text-orange-700' },
  { label: 'Web of Science', id: 'ABF-8944-2021', url: 'https://www.webofscience.com/wos/author/record/ABF-8944-2021', color: 'text-purple-700' },
  { label: 'LinkedIn', id: 'sukhendusadhukhan', url: 'https://www.linkedin.com/in/sukhendusadhukhan', color: 'text-blue-800' },
]

function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      {/* Hero / About */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">Dr. Sukhendu Sadhukhan</h1>
              <p className="text-blue-200 text-lg font-medium mb-4">
                Post-Doctoral Researcher · SATIE, ENS Paris Saclay<br />
                University Paris Saclay, France
              </p>
              <div className="flex flex-col gap-2 text-sm text-blue-100">
                <a href="mailto:sukhendusadhukhan@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={15} /> sukhendusadhukhan@gmail.com
                </a>
                <a href="tel:+919230125070" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={15} /> +91 9230125070
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={15} /> Noapara, Chandannagar, Hooghly, West Bengal, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Sukhendu Sadhukhan is a dedicated physicist and researcher with expertise in thermomagnetic energy
            generators, multiferroics, nanomaterials, and nanocomposites. He is currently pursuing post-doctoral
            research at SATIE Laboratory, ENS Paris Saclay, University Paris Saclay, France. With a strong
            background in condensed matter physics, device fabrication, and advanced characterization techniques
            (XRD, FESEM, VSM, PPMS), he has published 24 research papers in peer-reviewed international journals
            (h-index: 10, i-10 index: 10). Beyond fundamental research, he has demonstrated skills in LabView
            programming, Android development, and web application development — bridging the gap between
            experimental physics and applied technology.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Multiferroics', 'Nanomaterials', 'Thermomagnetic Generators', 'Condensed Matter Physics', 'Android Development'].map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Star className="text-yellow-500" size={22} /> Key Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <Card key={i} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex items-start gap-3">
                <div className="mt-0.5 text-blue-600 shrink-0">
                  <h.icon size={18} />
                </div>
                <p className="text-sm text-gray-700 leading-snug">{h.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FlaskConical className="text-blue-600" size={22} /> Research Interests
        </h2>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-wrap gap-3">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium border border-blue-100"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '24', label: 'Journal Publications' },
            { value: '10', label: 'h-index' },
            { value: '10', label: 'i-10 index' },
            { value: '1', label: 'Patent Published' },
          ].map((stat) => (
            <div key={stat.label} className="bg-blue-900 text-white rounded-xl p-5 text-center shadow">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Academic Profiles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Globe className="text-blue-600" size={22} /> Academic Profiles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {academicProfiles.map((profile) => (
            <a
              key={profile.label}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div>
                <p className="font-semibold text-gray-900 text-sm">{profile.label}</p>
                <p className={`text-xs mt-0.5 font-mono ${profile.color}`}>{profile.id}</p>
              </div>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">Interested in collaboration or research enquiries?</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/publications"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium text-sm"
          >
            View Publications
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
