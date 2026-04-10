import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Briefcase, GraduationCap, CalendarDays } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

const experience = [
  {
    title: 'Post-Doctoral Researcher',
    institution: 'SATIE, ENS Paris Saclay, University Paris Saclay',
    location: 'France',
    period: '01.10.2024 – Present',
    tags: ['Thermomagnetic Energy Generators', 'Nanomaterials', 'Device Fabrication', 'Research'],
    description:
      'Conducting post-doctoral research at the SATIE laboratory, focusing on thermomagnetic energy generators and advanced nanomaterial characterization. Working at the forefront of energy harvesting technology using magnetic materials.',
  },
  {
    title: 'Assistant Professor of Physics',
    institution: 'Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex',
    location: 'West Bengal, India',
    period: '22.08.2023 – 30.09.2024',
    tags: ['Teaching', 'Physics', 'Academia', 'Research Supervision'],
    description:
      'Taught undergraduate Physics courses, conducted laboratory sessions, and mentored students in research projects. Continued research on multiferroic materials alongside teaching duties.',
  },
  {
    title: 'Guest Lecturer',
    institution: 'Khalisani Mahavidyalaya',
    location: 'West Bengal, India',
    period: '01.06.2023 – 01.09.2023',
    tags: ['Teaching', 'Physics', 'Lectures'],
    description:
      'Delivered guest lectures in Physics for undergraduate students, covering topics in condensed matter physics and modern physics.',
  },
  {
    title: 'Research Fellow (JRF/SRF)',
    institution: 'Department of Physics, University of Burdwan',
    location: 'Burdwan, West Bengal, India',
    period: '07/2018 – 07/2023',
    tags: ['Research', 'Multiferroics', 'Nanomaterials', 'UGC-CSIR Fellowship', 'PhD Research'],
    description:
      'Conducted doctoral research on magneto-electric behavior of multiferroic materials at the Solid State Research Laboratory (SSRL). Synthesized and characterized rare-earth orthoferrite nanoparticles, investigated structural, magnetic, dielectric, and ferroelectric properties, and explored magnetoelectric coupling mechanisms.',
  },
]

const education = [
  {
    degree: 'Doctor of Philosophy (Ph.D.) in Physics',
    institution: 'University of Burdwan',
    location: 'Burdwan, West Bengal, India',
    period: 'Awarded: 04.09.2023',
    thesis: 'Magneto-Electric Behavior of Some Multiferroics Belonging to Different Structural Families',
    supervisor: 'Prof. Pabitra Kumar Chakrabarti',
    tags: ['Multiferroics', 'Nanomaterials', 'Magnetoelectric Coupling', 'X-ray Crystallography'],
  },
  {
    degree: 'Master of Science (M.Sc.) in Physics',
    institution: 'University of Burdwan',
    location: 'Burdwan, West Bengal, India',
    period: '2016 – 2018',
    grade: '8.16 CGPA',
    tags: ['Condensed Matter Physics', 'Quantum Mechanics', 'Electrodynamics'],
  },
  {
    degree: 'Bachelor of Science (B.Sc.) Physics Honours',
    institution: 'Hooghly Mohsin College (University of Burdwan)',
    location: 'West Bengal, India',
    period: '2013 – 2016',
    grade: 'College Topper',
    tags: ['Physics', 'Mathematics', 'Honours'],
  },
  {
    degree: 'Higher Secondary (H.S.) — Science',
    institution: 'West Bengal Council of Higher Secondary Education (WBCHSE)',
    period: '2013',
    tags: ['Science', 'Physics', 'Mathematics', 'Chemistry'],
  },
  {
    degree: 'Madhyamik (Secondary)',
    institution: 'West Bengal Board of Secondary Education (WBBSE)',
    period: '2011',
    grade: 'School Topper',
    tags: ['Secondary Education'],
  },
]

function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Professional Experience & Education</h1>
        <p className="text-gray-500 mt-2">Academic career and research positions of Dr. Sukhendu Sadhukhan</p>
        <Separator className="mt-6" />
      </div>

      {/* Work Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <Briefcase className="text-blue-600" size={22} /> Professional Experience
        </h2>
        <div className="space-y-5">
          {experience.map((job, i) => (
            <Card key={i} className="bg-white border border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg text-gray-900">{job.title}</CardTitle>
                    <p className="text-blue-700 font-medium text-sm mt-0.5">{job.institution}</p>
                    <p className="text-gray-500 text-sm">{job.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm shrink-0">
                    <CalendarDays size={14} />
                    <span className="whitespace-nowrap">{job.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <GraduationCap className="text-blue-600" size={22} /> Education
        </h2>
        <div className="space-y-5">
          {education.map((edu, i) => (
            <Card key={i} className="bg-white border border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg text-gray-900">{edu.degree}</CardTitle>
                    <p className="text-blue-700 font-medium text-sm mt-0.5">{edu.institution}</p>
                    {edu.location && <p className="text-gray-500 text-sm">{edu.location}</p>}
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <CalendarDays size={14} />{edu.period}
                    </span>
                    {edu.grade && (
                      <Badge className="bg-green-100 text-green-800 text-xs">{edu.grade}</Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {edu.thesis && (
                  <p className="text-gray-700 text-sm mb-2">
                    <span className="font-medium">Thesis:</span> {edu.thesis}
                  </p>
                )}
                {edu.supervisor && (
                  <p className="text-gray-700 text-sm mb-3">
                    <span className="font-medium">Supervisor:</span> {edu.supervisor}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
