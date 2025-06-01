import awsLogo from "../assets/amazon_web_services_logo.jpeg";

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  expires: string;
  imageSrc: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "May 2025",
    expires: "May 2028",
    imageSrc: awsLogo,
    url: "https://www.credly.com/badges/fe93ce91-3100-4b44-9263-860ea11fe45b",
  },
  {
    title: "AWS Certified Security – Specialty",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jan 2025",
    expires: "Jan 2028",
    imageSrc: awsLogo,
    url: "https://www.credly.com/badges/9f238c5b-20d6-4ae4-a661-bb5a528dc38d",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Oct 2024",
    expires: "Oct 2027",
    imageSrc: awsLogo,
    url: "https://www.credly.com/badges/de10d62a-024e-4b91-be5c-382c00f9e099",
  },
];
