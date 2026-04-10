import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Mic, Pin, BookOpen, Users } from 'lucide-react'

export const Route = createFileRoute('/conferences')({
  component: Conferences,
})

const oralPresentations = [
  {
    title: 'Multiferroic properties and magnetoelectric coupling in HoFeO3 nanoparticles',
    event: 'International Conference on Condensed Matter Physics',
    year: '2022',
    location: 'India',
  },
  {
    title: 'Enhanced multiferroicity in co-doped HoFeO3 nanoparticle system',
    event: 'National Conference on Advanced Materials',
    year: '2022',
    location: 'India',
  },
  {
    title: 'Structural and magneto-electric study of LaFeO3-based nanoferrites',
    event: 'International Symposium on Magnetic Materials',
    year: '2021',
    location: 'India',
  },
  {
    title: 'Rietveld analysis and multiferroic properties of rare-earth orthoferrites',
    event: 'National Seminar on Nanoscience and Nanotechnology',
    year: '2020',
    location: 'West Bengal, India',
  },
]

const posterPresentations = [
  {
    title: 'Magnetoelectric coupling in ZnO/CoFe2O4 nanocomposites',
    event: 'Indian Science Congress',
    year: '2021',
    location: 'India',
  },
  {
    title: 'Dielectric and ferroelectric properties of Dy3+ and Ti4+ co-doped LaFeO3',
    event: 'National Workshop on Functional Materials',
    year: '2019',
    location: 'Burdwan, India',
  },
  {
    title: 'Structural analysis and multiferroic characterization of SmFeO3 nanoparticles',
    event: 'Annual Physics Conference, University of Burdwan',
    year: '2018',
    location: 'Burdwan, India',
  },
]

const workshopsAttended = [
  {
    title: 'Workshop on X-ray Diffraction and Rietveld Refinement',
    organizer: 'UGC-DAE Consortium for Scientific Research',
    year: '2019',
    location: 'Indore, India',
  },
  {
    title: 'Summer School on Magnetism and Magnetic Materials',
    organizer: 'IACS Kolkata',
    year: '2018',
    location: 'Kolkata, India',
  },
  {
    title: 'Workshop on PPMS and VSM Measurements',
    organizer: 'Quantum Design India / University of Burdwan',
    year: '2019',
    location: 'Burdwan, India',
  },
  {
    title: 'National Workshop on Nanomaterials: Synthesis & Characterization',
    organizer: 'DST-Sponsored Workshop',
    year: '2020',
    location: 'India',
  },
]

const workshopsOrganized = [
  {
    title: 'Faculty Development Program (FDP) on Modern Physics and Condensed Matter',
    role: 'Organizer / Resource Person',
    year: '2023–2024',
    institution: 'Dr. Sudhir Chandra Sur Institute of Technology',
  },
]

const fdpPrograms = [
  {
    title: 'FDP on Research Methodology and Scientific Writing',
    year: '2022',
    organizer: 'AICTE / University of Burdwan',
  },
  {
    title: 'FDP on Machine Learning for Materials Science',
    year: '2023',
    organizer: 'NPTEL / IIT',
  },
]

function Conferences() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Conferences & Workshops</h1>
        <p className="text-gray-500 mt-2">
          Oral & poster presentations, workshops attended, workshops organized, and FDP programs
        </p>
        <Separator className="mt-6" />
      </div>

      {/* Oral Presentations */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Mic className="text-blue-600" size={22} /> Oral Presentations
        </h2>
        <div className="space-y-4">
          {oralPresentations.map((p, i) => (
            <Card key={i} className="bg-white border border-gray-100 shadow-sm">
              <CardContent className="p-5">
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold text-sm shrink-0 mt-0.5">[O{i + 1}]</span>
                  <div>
                    <p className="text-gray-900 font-medium text-sm">{p.title}</p>
                    <p className="text-blue-700 text-sm mt-1">{p.event}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">{p.year}</Badge>
                      <Badge variant="outline" className="text-xs">{p.location}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Poster Presentations */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Pin className="text-purple-600" size={22} /> Poster Presentations
        </h2>
        <div className="space-y-4">
          {posterPresentations.map((p, i) => (
            <Card key={i} className="bg-white border border-gray-100 shadow-sm">
              <CardContent className="p-5">
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold text-sm shrink-0 mt-0.5">[P{i + 1}]</span>
                  <div>
                    <p className="text-gray-900 font-medium text-sm">{p.title}</p>
                    <p className="text-purple-700 text-sm mt-1">{p.event}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">{p.year}</Badge>
                      <Badge variant="outline" className="text-xs">{p.location}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Workshops Attended */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <BookOpen className="text-green-600" size={22} /> Workshops Attended
        </h2>
        <div className="space-y-4">
          {workshopsAttended.map((w, i) => (
            <Card key={i} className="bg-white border border-gray-100 shadow-sm">
              <CardHeader className="pb-1">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-sm text-gray-900">{w.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs shrink-0 ml-2">{w.year}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{w.organizer} · {w.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Workshops Organized */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Users className="text-orange-600" size={22} /> Workshops & FDPs Organized
        </h2>
        <div className="space-y-4">
          {workshopsOrganized.map((w, i) => (
            <Card key={i} className="bg-white border border-orange-100 shadow-sm">
              <CardHeader className="pb-1">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-sm text-gray-900">{w.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs shrink-0 ml-2">{w.year}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Role: <span className="font-medium text-orange-700">{w.role}</span> · {w.institution}
                </p>
              </CardContent>
            </Card>
          ))}
          {fdpPrograms.map((f, i) => (
            <Card key={i} className="bg-white border border-gray-100 shadow-sm">
              <CardHeader className="pb-1">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-sm text-gray-900">{f.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs shrink-0 ml-2">{f.year}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{f.organizer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
