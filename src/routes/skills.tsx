import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Cpu, Beaker, Monitor, Code } from 'lucide-react'

export const Route = createFileRoute('/skills')({
  component: Skills,
})

const skillSections = [
  {
    icon: Beaker,
    title: 'Nanomaterial Synthesis & Device Fabrication',
    color: 'text-blue-600',
    skills: [
      'Sol-gel synthesis',
      'Co-precipitation method',
      'Hydrothermal synthesis',
      'Solid-state reaction',
      'Thin film deposition',
      'Device fabrication for magnetoelectric measurements',
      'GPIB/RS232 instrument interfacing',
      'LabView programming for instrument control',
    ],
  },
  {
    icon: Cpu,
    title: 'Characterization Instruments',
    color: 'text-green-600',
    skills: [
      'X-ray Diffractometer (XRD)',
      'Field Emission Scanning Electron Microscope (FESEM)',
      'Vibrating Sample Magnetometer (VSM)',
      'Physical Property Measurement System (PPMS)',
      'PE Loop Tracer (Ferroelectric Tester)',
      'Impedance Analyzer / LCR Meter',
      'UV-Vis Spectrophotometer',
      'Fourier Transform Infrared (FTIR) Spectroscopy',
      'Mössbauer Spectrometer',
      'Thermogravimetric Analysis (TGA)',
      'Differential Thermal Analysis (DTA)',
    ],
  },
  {
    icon: Monitor,
    title: 'Software & Computational Tools',
    color: 'text-purple-600',
    skills: [
      'Origin (data analysis & plotting)',
      'MAUD (Rietveld refinement)',
      'VESTA (crystal structure visualization)',
      'ImageJ (image analysis)',
      'FullProf Suite',
      'CrystalDiffract',
      'MATLAB',
      'SciLab',
      'MS Office Suite',
      'LaTeX',
    ],
  },
  {
    icon: Code,
    title: 'Programming & Development',
    color: 'text-orange-600',
    skills: [
      'LabView (instrument automation)',
      'C / C++',
      'Java',
      'JavaScript',
      'Python',
      'MATLAB',
      'SciLab',
      'Android App Development (Java/Kotlin)',
      'Web Application Development',
      'HTML / CSS',
    ],
  },
]

const languageSkills = [
  { lang: 'Bengali', level: 'Native' },
  { lang: 'Hindi', level: 'Proficient' },
  { lang: 'English', level: 'Proficient (Academic)' },
  { lang: 'French', level: 'Basic (Learning)' },
]

function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Skills & Expertise</h1>
        <p className="text-gray-500 mt-2">
          Technical skills spanning experimental physics, instrumentation, software tools, and development
        </p>
        <Separator className="mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillSections.map((section, i) => (
          <Card key={i} className="bg-white border border-gray-100 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-gray-900 flex items-center gap-2">
                <section.icon size={18} className={section.color} />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Language Proficiency</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languageSkills.map((l) => (
            <div key={l.lang} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
              <p className="font-semibold text-gray-900">{l.lang}</p>
              <p className="text-sm text-gray-500 mt-1">{l.level}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
