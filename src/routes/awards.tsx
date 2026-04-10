import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Trophy, Star } from 'lucide-react'

export const Route = createFileRoute('/awards')({
  component: Awards,
})

const awards = [
  {
    title: 'Young Researcher Award 2022',
    body: 'International Scientific Community (InSc)',
    year: '2022',
    description:
      'Awarded for outstanding contributions to research in multiferroic nanomaterials and condensed matter physics by the International Scientific Community.',
    highlight: true,
  },
  {
    title: 'Young Scientist Award',
    body: 'ScienceFather',
    year: '2022',
    description:
      'Recognized as a Young Scientist for innovative research in nanomaterials, multiferroics, and magnetoelectric coupling.',
    highlight: true,
  },
  {
    title: 'UGC-CSIR Junior Research Fellowship (JRF)',
    body: 'University Grants Commission – Council of Scientific & Industrial Research',
    year: '2016',
    description:
      'Qualified the National Eligibility Test (NET) with Junior Research Fellowship, securing All India Rank (AIR) 163 in Chemical Sciences / Physical Sciences.',
    highlight: false,
  },
  {
    title: 'UGC-CSIR Junior Research Fellowship (JRF)',
    body: 'University Grants Commission – Council of Scientific & Industrial Research',
    year: '2017',
    description:
      'Qualified NET-JRF again with an improved All India Rank (AIR) 63, demonstrating consistent academic excellence.',
    highlight: false,
  },
  {
    title: 'College Topper — B.Sc. Physics Honours',
    body: 'Hooghly Mohsin College, University of Burdwan',
    year: '2016',
    description: 'Topped the college in B.Sc. Physics Honours examination.',
    highlight: false,
  },
  {
    title: 'School Topper — Madhyamik (Secondary)',
    body: 'West Bengal Board of Secondary Education (WBBSE)',
    year: '2011',
    description: 'Achieved top position in the Madhyamik (Secondary School) board examination.',
    highlight: false,
  },
  {
    title: 'Editor — International Publication',
    body: 'International Scientific Journal',
    year: '2022–2023',
    description: 'Served as an Editor for an international scientific publication, contributing to peer review and editorial processes.',
    highlight: false,
  },
]

const netQualifications = [
  { year: '2016', rank: 'AIR 163', exam: 'CSIR-UGC NET with JRF' },
  { year: '2017', rank: 'AIR 63', exam: 'CSIR-UGC NET with JRF' },
]

function Awards() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Awards & Recognition</h1>
        <p className="text-gray-500 mt-2">Honors received for academic excellence and research contributions</p>
        <Separator className="mt-6" />
      </div>

      {/* Highlight Awards */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2 mb-6">
          <Trophy className="text-yellow-500" size={22} /> Awards & Honors
        </h2>
        <div className="space-y-4">
          {awards.map((award, i) => (
            <Card
              key={i}
              className={`bg-white border shadow-sm ${award.highlight ? 'border-yellow-200 bg-yellow-50/30' : 'border-gray-100'}`}
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex items-start gap-2">
                    {award.highlight && <Star size={16} className="text-yellow-500 mt-0.5 shrink-0" />}
                    <CardTitle className="text-base text-gray-900 leading-snug">{award.title}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0 self-start">{award.year}</Badge>
                </div>
                <p className="text-sm text-blue-700 font-medium ml-6">{award.body}</p>
              </CardHeader>
              <CardContent className="ml-6">
                <p className="text-sm text-gray-700">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* NET Qualifications */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">CSIR-UGC NET Qualifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {netQualifications.map((q, i) => (
            <div key={i} className="bg-blue-900 text-white rounded-xl p-6 shadow">
              <div className="text-3xl font-bold">{q.rank}</div>
              <div className="text-blue-200 font-medium mt-1">{q.exam}</div>
              <div className="text-blue-300 text-sm mt-2">Year: {q.year}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Qualified National Eligibility Test (NET) with Junior Research Fellowship (JRF) twice — a distinction that demonstrates sustained academic excellence in physical sciences.
        </p>
      </section>
    </div>
  )
}
