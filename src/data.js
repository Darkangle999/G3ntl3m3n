export const certInNote = 'https://www.cert-in.org.in/s2cMainServlet?pageid=PUBVLNOTES01&VLCODE=CIVN-2026-0200';

export const duplicates = [
  {
    id: '01',
    family: 'WEB',
    target: 'NEXT.JS',
    title: 'Image optimizer DNS rebinding',
    signal: 'A hostname can be resolved once for policy and again when the image is fetched.',
    detail: 'The report examined the gap between URL screening and the later fetch. Impact depends on deployment configuration and DNS behavior.',
    date: '11 MAY 2026',
  },
  {
    id: '02',
    family: 'AI SDK',
    target: 'VERCEL AI SDK',
    title: 'Reserved IP ranges in URL validation',
    signal: 'Special purpose IP ranges were absent from a hand-built address check.',
    detail: 'This report focused on literal IP addresses and separated that behavior from redirect and DNS rebinding paths.',
    date: '07 MAY 2026',
  },
  {
    id: '03',
    family: 'WEB',
    target: 'NEXT.JS',
    title: 'Server Actions host trust',
    signal: 'A forwarded host value could influence the origin comparison in some proxy setups.',
    detail: 'The write-up traced how request headers reached the Server Actions CSRF check and where a trusted proxy boundary mattered.',
    date: '05 MAY 2026',
  },
  {
    id: '04',
    family: 'WEB',
    target: 'NEXT.JS',
    title: 'Prefetch header and SSR response',
    signal: 'An internal routing header could change the response to a dynamic page request.',
    detail: 'The report followed header filtering into the rendering path and documented the response behavior for external requests.',
    date: '05 MAY 2026',
  },
  {
    id: '05',
    family: 'AI SDK',
    target: 'VERCEL AI SDK',
    title: 'Redirect path in server downloads',
    signal: 'The first URL passed validation while a later redirect changed the destination.',
    detail: 'A proof of concept documented the redirect behavior. The report was closed as duplicate #3586588.',
    date: '06 MAR 2026',
  },
  {
    id: '06',
    family: 'ARC',
    target: 'ARC REMOTE SIGNER',
    title: 'Signer RPC authentication boundary',
    signal: 'The signing endpoint accepted requests without authenticating the caller.',
    detail: 'The research examined the difference between protecting a validator key inside an enclave and controlling who may request signatures.',
    date: 'DATE NOT LISTED',
  },
  {
    id: '07',
    family: 'ARC',
    target: 'ARC CONSENSUS',
    title: 'Proposal stream eviction',
    signal: 'Untrusted proposal fragments could consume stream capacity before proposer validation.',
    detail: 'The analysis followed stream admission, eviction order, and the treatment of later authentic proposal parts.',
    date: 'DATE NOT LISTED',
  },
];

export const experience = [
  {
    period: '2026 / NOW',
    company: 'G3 CYBERSPACE',
    role: 'Security Intern',
    description: 'Building an agentless AWS cloud security posture product. Defining CIS and NIST mapping, compliance workflows, and risk reporting.',
    focus: 'CSPM / GRC / AWS',
  },
  {
    period: '2025',
    company: 'AURISEG',
    role: 'Project Intern',
    description: 'Built an LLM pipeline for vulnerability report generation, CVE analysis, impact assessment, and MITRE ATT&CK mapping.',
    focus: 'SECURITY AUTOMATION',
  },
  {
    period: '2024',
    company: 'HIAIDO CLOUD',
    role: 'Project Intern',
    description: 'Developed cloud monitoring for workload, traffic, and log anomalies, with misconfiguration alerts.',
    focus: 'CLOUD DETECTION',
  },
  {
    period: '2024',
    company: 'ROOTECSTAK',
    role: 'Web Application Pentesting Intern',
    description: 'Assessed web applications and networks; reproduced findings and wrote remediation guidance.',
    focus: 'PENTESTING',
  },
];

export const projects = [
  {
    id: '01',
    kind: 'CLOUD SECURITY / CNAPP',
    name: 'CNAPP Platform',
    origin: 'GRC Compliance RAG Agent',
    description: 'The GRC agent matured into a CNAPP project combining agentless AWS posture scanning, CSPM/CWPP findings, and CIS/NIST compliance mapping in unified risk views.',
    tags: ['CNAPP', 'CSPM / CWPP', 'CIS / NIST'],
  },
  {
    id: '02',
    kind: 'MALWARE / AWS',
    name: 'IoT Malware Detection',
    description: '1D-CNN on syscall sequences deployed as a live API with AWS SQS, Lambda, and CloudWatch.',
    tags: ['AWS', '1D-CNN', 'THREAT DETECTION'],
  },
  {
    id: '03',
    kind: 'DETECTION ENGINEERING',
    name: 'SIEM Home Lab',
    description: 'Wazuh lab ingesting Windows and Linux logs, with simulated attacks for detection practice.',
    tags: ['WAZUH', 'SIEM', 'LOG ANALYSIS'],
  },
];

export const credentials = [
  {
    issuer: 'INE',
    name: 'eJPT',
    fullName: 'Junior Penetration Tester',
    detail: 'Issued May 2025',
    url: 'https://certs.ine.com/c20f2184-c652-4814-81c5-bfd8c7ebf1cf',
  },
  {
    issuer: 'TRYHACKME',
    name: 'PT1',
    fullName: 'Junior Penetration Tester',
    detail: 'Issued August 2025',
    url: 'https://assets.tryhackme.com/certification-certificate/689c0efecb942f6adf5a9009.pdf',
  },
  {
    issuer: 'SECOPS GROUP',
    name: 'CNSP',
    fullName: 'Certified Network Security Practitioner',
    detail: 'Listed in résumé',
    url: '',
  },
  {
    issuer: 'CYBRARY',
    name: 'SECURITY+',
    fullName: 'CompTIA Security+ course',
    detail: 'Course completion',
    url: 'https://app.cybrary.it/courses/api/certificate/CC-b792d294-49b0-41c9-82e6-4b89f795ec8f/view',
  },
  {
    issuer: 'CISCO',
    name: 'NETWORK',
    fullName: 'Network Basics',
    detail: 'Listed in résumé',
    url: '',
  },
  {
    issuer: 'EC-COUNCIL',
    name: 'EHE',
    fullName: 'Ethical Hacking Essentials',
    detail: 'Listed in résumé',
    url: '',
  },
];

export const placements = [
  { rank: '01', event: 'CyberConverge CTF', place: '1st place', when: 'VIT Chennai / Aug 2025' },
  { rank: '02', event: 'Amrita Cyber Nation CTF', place: '2nd runner-up', when: 'Oct 2025' },
  { rank: '03', event: 'Tamil Nadu Police Hackathon', place: '6th runner-up', when: 'Feb 2025' },
];
