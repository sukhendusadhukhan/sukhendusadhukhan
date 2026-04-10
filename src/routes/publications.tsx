import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BookOpen, ExternalLink, FileText } from 'lucide-react'

export const Route = createFileRoute('/publications')({
  component: Publications,
})

interface Publication {
  authors: string
  title: string
  journal: string
  year: string
  volume?: string
  doi?: string
  if?: string
  firstAuthor?: boolean
  note?: string
}

const publications: Publication[] = [
  {
    authors: 'S. Sadhukhan, A. S. Mahapatra, A. Mitra, P. K. Chakrabarti',
    title: 'Multiferroic properties and magnetoelectric coupling observed in nanocrystalline HoFeO3',
    journal: 'Journal of Alloys and Compounds',
    year: '2022',
    volume: '907, 164443',
    doi: 'https://doi.org/10.1016/j.jallcom.2022.164443',
    if: '5.316',
    firstAuthor: true,
  },
  {
    authors: 'S. Sadhukhan, A. S. Mahapatra, A. Mitra, P. K. Chakrabarti',
    title: 'Enhanced multiferroicity of Ho0.95Co0.05Fe0.95Ti0.05O3 by co-doping in HoFeO3 nanoparticle system',
    journal: 'Journal of Magnetism and Magnetic Materials',
    year: '2023',
    volume: '170861',
    doi: 'https://doi.org/10.1016/j.jmmm.2023.170861',
    if: '2.993',
    firstAuthor: true,
  },
  {
    authors: 'S. Sadhukhan, A. Mitra, P. K. Chakrabarti',
    title: 'Strong modulation effects on magnetoelectric behavior of Co-ferrite nanoparticles incorporated in ZnO medium in nano-regime synthesized in chemical routes',
    journal: 'Applied Physics A',
    year: '2023',
    doi: 'https://doi.org/10.1007/s00339-022-06345-8',
    if: '2.792',
    firstAuthor: true,
  },
  {
    authors: 'S. Sadhukhan, A. Mondal, P. K. Chakrabarti, A. Mitra',
    title: 'Enhanced multiferroicity of LaFeO3 nanoparticle system in La0.9Er0.1FeO3',
    journal: 'Ceramics International',
    year: '2025',
    doi: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5159553',
    firstAuthor: true,
  },
  {
    authors: 'S. Sadhukhan, A. Mitra, P. K. Chakrabarti',
    title: 'Optical, magnetic and electrical properties of Zn-doped HoFeO3 nanoparticles synthesized by simple co-precipitation method',
    journal: 'Applied Physics A',
    year: '2025',
    doi: 'https://doi.org/10.1007/s00339-025-09080-y',
    firstAuthor: true,
  },
  {
    authors: 'S. Sadhukhan, A. Mitra, P. K. Chakrabarti',
    title: 'Synthesis, Structural, Dielectric, Electrical, and Magnetic Characterization of Dysprosium Orthoferrite Nanoparticles',
    journal: 'ACS Omega',
    year: '2024',
    doi: 'https://doi.org/10.1021/acsomega.4c10092',
    if: '4.132',
    firstAuthor: true,
  },
  {
    authors: 'S. Sadhukhan, A. Mitra, P. K. Chakrabarti',
    title: 'Origin of Semiconductor–Metal–Semiconductor-Like Transition in LaFeO3',
    journal: 'Journal of Inorganic and Organometallic Polymers and Materials',
    year: '2025',
    doi: 'https://doi.org/10.1007/s10904-025-04110-x',
    firstAuthor: true,
  },
  {
    authors: 'N. Bhakta, A. Mitra, A. Mallick, S. Sadhukhan, A. Bajorek',
    title: 'Rietveld analysis, enhanced magnetic, dielectric and ferroelectric properties of Gd3+ and Ti4+ co-doped LaFeO3 multiferroic',
    journal: 'Materials Science and Engineering: B',
    year: '2021',
    volume: '264, 114810',
    doi: 'https://doi.org/10.1016/j.mseb.2020.114810',
    if: '4.706',
  },
  {
    authors: 'N. Bhakta, S. Sadhukhan, C. C. Dey, A. Mitra, P. K. Chakrabarti',
    title: 'Investigation of magneto-electric properties of La0.85Nd0.15Fe0.9Ti0.1O3',
    journal: 'Journal of Magnetism and Magnetic Materials',
    year: '2022',
    volume: '564(2), 170208',
    doi: 'https://doi.org/10.1016/j.jmmm.2022.170208',
    if: '2.993',
  },
  {
    authors: 'A. Mitra, S. Sadhukhan, et al.',
    title: 'Simultaneous enhancement of magnetic and ferroelectric properties of LaFeO3 by co-doping with Dy3+ and Ti4+',
    journal: 'Journal of Physics: Condensed Matter',
    year: '2017',
    doi: 'https://www.researchgate.net/publication/319085343',
  },
  {
    authors: 'A. Mitra, S. Sadhukhan, et al.',
    title: 'Structural transformation induced enhanced multiferroicity in Al3+ and Ti4+ co-doped LaFeO3',
    journal: 'Journal of Alloys and Compounds',
    year: '2020',
    doi: 'https://www.researchgate.net/publication/340838954',
  },
  {
    authors: 'P. K. Chakrabarti, S. Sadhukhan, et al.',
    title: 'Mossbauer and Magnetization study of polycrystalline multiferroic SmFeO3',
    journal: 'Journal of Magnetism and Magnetic Materials',
    year: '2017',
    doi: 'https://www.researchgate.net/publication/316623202',
  },
  {
    authors: 'A. Mitra, S. Sadhukhan, et al.',
    title: 'Hopping conduction of localized polarons with scaling behaviour in ceramic composite (YCrO3)1-x-(CoFe1.6Cr0.4O4)x',
    journal: 'Materials Science and Engineering: B',
    year: '2023',
  },
  {
    authors: 'S. Sadhukhan, et al.',
    title: 'Nanoscience in Action: Unveiling Emerging Trends in Materials and Applications',
    journal: 'ACS Omega',
    year: '2024',
    doi: 'https://doi.org/10.1021/acsomega.4c10929',
    note: 'Review / Editorial',
  },
]

const patent = {
  title: 'A field-based kit and method for screening of hemoglobinopathy condition from normal',
  number: '202031035590',
  published: '25th February 2022',
  inventors: 'Sukhendu Sadhukhan et al.',
}

function Publications() {
  const firstAuthorPapers = publications.filter((p) => p.firstAuthor)
  const coAuthorPapers = publications.filter((p) => !p.firstAuthor)

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Publications & Patent</h1>
        <p className="text-gray-500 mt-2">
          24 papers in peer-reviewed international journals · h-index: 10 · i-10 index: 10
        </p>
        <Separator className="mt-6" />
      </div>

      {/* First Author Papers */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <BookOpen className="text-blue-600" size={22} /> First-Authored Publications
        </h2>
        <div className="space-y-4">
          {firstAuthorPapers.map((pub, i) => (
            <PublicationCard key={i} pub={pub} index={i + 1} />
          ))}
        </div>
      </section>

      <Separator />

      {/* Co-Author Papers */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <BookOpen className="text-gray-600" size={22} /> Co-Authored Publications
        </h2>
        <div className="space-y-4">
          {coAuthorPapers.map((pub, i) => (
            <PublicationCard key={i} pub={pub} index={i + 1} />
          ))}
        </div>
        <p className="text-sm text-gray-500 italic">
          * Complete list of all 24 publications available on{' '}
          <a
            href="https://scholar.google.co.in/citations?user=sVA_-JwAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google Scholar
          </a>{' '}
          and{' '}
          <a
            href="https://orcid.org/0000-0003-2391-2507"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            ORCID
          </a>.
        </p>
      </section>

      <Separator />

      {/* Patent */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <FileText className="text-green-600" size={22} /> Patent
        </h2>
        <Card className="bg-white border border-green-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base text-gray-900 leading-snug">{patent.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Patent No.:</span> {patent.number}</p>
            <p><span className="font-medium">Published:</span> {patent.published}</p>
            <p><span className="font-medium">Inventors:</span> {patent.inventors}</p>
            <Badge className="bg-green-100 text-green-800 mt-2">Published Patent</Badge>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  return (
    <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex gap-3">
          <span className="text-blue-600 font-bold text-sm shrink-0 mt-0.5">[{index}]</span>
          <div className="flex-1 min-w-0">
            <p className="text-gray-900 font-medium text-sm leading-snug mb-1">{pub.title}</p>
            <p className="text-gray-600 text-xs mb-2">{pub.authors}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="text-xs text-blue-700 border-blue-200">{pub.journal}</Badge>
              <Badge variant="secondary" className="text-xs">{pub.year}</Badge>
              {pub.volume && <span className="text-xs text-gray-500">Vol. {pub.volume}</span>}
              {pub.if && (
                <span className="text-xs text-gray-500">IF: {pub.if}</span>
              )}
              {pub.note && (
                <Badge className="text-xs bg-purple-100 text-purple-800">{pub.note}</Badge>
              )}
            </div>
            {pub.doi && (
              <a
                href={pub.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline mt-2"
              >
                <ExternalLink size={11} /> View Article
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
