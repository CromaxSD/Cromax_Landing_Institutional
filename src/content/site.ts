import { Instagram } from 'lucide-react';
import type { SiteInfo } from '../types';

export const siteInfo: SiteInfo = {
  legalName: 'Cromax Soluções Diagnósticas',
  cnpj: '66.356.852/0001-24', // TODO: número do CNPJ pendente com o founder.
  email: 'contato@cromaxsd.com.br',
  whatsapp: '5551999999999', // TODO: placeholder — número definitivo pendente.
  address: 'Avenida Bento Gonçalves, 9500 - Agronomia, Porto Alegre/RS Incubadora Empresarial de Biotecnologia da UFRGS · Porto Alegre/RS',
  tagline: 'A inovação que responde à realidade',
  social: [{ label: 'Instagram', href: 'https://instagram.com/cromaxsd', icon: Instagram }],
};

export const whatsappUrl = `https://wa.me/${siteInfo.whatsapp}`;
