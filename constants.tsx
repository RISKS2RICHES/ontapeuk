import React from 'react';
import { Camera, Mic2, Disc, Plane, Users, Sliders } from 'lucide-react';
import { Project, Service, Package } from './types.ts';

export const WHATSAPP_NUMBER = "447765747922";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    artist: '24Liz',
    song: '24 Style',
    youtubeId: 'amFusypLTY0',
  },
  {
    id: '2',
    artist: 'YTrizz',
    song: 'Demons',
    youtubeId: 'AtSQhxv_egc',
  }
];

export const PARTNERSHIP_TRACKS = [
  {
    title: "Fraud Prevention",
    artist: "wewantwraiths",
    role: "Producer",
    image: "https://i.scdn.co/image/ab67616d0000b273b0634628284568e3519c7205",
    spotifyUrl: "https://open.spotify.com/track/4e3Z5iZgKz7e3Z5iZgKz7e" // Search fallback usually better if ID unknown:
  },
  {
    title: "Trap Stuff",
    artist: "Paperboytripz",
    role: "Producer",
    image: "https://i.scdn.co/image/ab67616d0000b2735745e69e80e159a674726487",
    spotifyUrl: "https://open.spotify.com/search/Paperboytripz%20Trap%20Stuff"
  },
  {
    title: "Attached",
    artist: "Paperboytripz",
    role: "Producer",
    image: "https://i.scdn.co/image/ab67616d0000b2735745e69e80e159a674726487",
    spotifyUrl: "https://open.spotify.com/search/Paperboytripz%20Attached"
  },
  {
    title: "Love & War",
    artist: "wewantwraiths (ft. Nafe Smallz)",
    role: "Producer",
    image: "https://i.scdn.co/image/ab67616d0000b2733f11d137f8f972b254645229",
    spotifyUrl: "https://open.spotify.com/search/wewantwraiths%20Love%20%26%20War"
  },
  {
    title: "Sup Mate",
    artist: "GeeYou",
    role: "Producer",
    image: "https://i.scdn.co/image/ab67616d0000b273b8782a510534226f30a9169a",
    spotifyUrl: "https://open.spotify.com/search/GeeYou%20Sup%20Mate"
  },
  {
    title: "Blame It On You",
    artist: "Nafe Smallz",
    role: "Producer",
    image: "https://i.scdn.co/image/ab67616d0000b27308d2983794a3666d66e74431",
    spotifyUrl: "https://open.spotify.com/search/Nafe%20Smallz%20Blame%20It%20On%20You"
  },
  {
    title: "HONEY IM HOME",
    artist: "GeeYou",
    role: "Producer",
    image: "https://i.scdn.co/image/ab67616d0000b273934d4021272719416556e4c3",
    spotifyUrl: "https://open.spotify.com/search/GeeYou%20HONEY%20IM%20HOME"
  },
  {
    title: "First Take",
    artist: "Catch",
    role: "Producer",
    image: "https://i.scdn.co/image/ab67616d0000b273295963287137f1057475148f",
    spotifyUrl: "https://open.spotify.com/search/Catch%20First%20Take"
  }
].map(track => ({
    ...track,
    spotifyUrl: track.spotifyUrl || `https://open.spotify.com/search/${encodeURIComponent(track.artist + ' ' + track.title)}`
}));

export const PACKAGES: Package[] = [
  {
    name: "Single Package",
    price: "£300",
    features: [
      "3 Hours 4K Music Video Recording",
      "2 Hours Studio Session",
      "Base Mix",
      "Unlimited Locations",
      "1 Promo Vid",
      "Video Professionally Edited + VFX",
      "Partnered with @thisisbtg"
    ]
  },
  {
    name: "Single+ Package",
    price: "£500",
    features: [
      "Full Day 4K Music Video Recording",
      "4 Hours Studio Session",
      "Base Mix",
      "Unlimited Locations",
      "4 Promo Vid",
      "Video Professionally Edited + VFX",
      "Partnered with @thisisbtg"
    ],
    highlight: true
  },
  {
    name: "Basic Package",
    price: "£200",
    features: [
      "3 Hours 4K Music Video Recording",
      "Unlimited Locations",
      "1 Promo Vid",
      "Video Professionally Edited + VFX"
    ]
  },
  {
    name: "Basic+ Package",
    price: "£300",
    features: [
      "5 Hours 4K Music Video Recording",
      "Unlimited Locations",
      "4 Promo Vid",
      "Video Professionally Edited + VFX"
    ]
  },
  {
    name: "Pro Package",
    price: "£500",
    features: [
      "Full Day 4K Music Video Recording",
      "Unlimited Locations",
      "10 Promo Vid",
      "Video Professionally Edited + VFX"
    ]
  },
  {
    name: "Mix & Master",
    price: "Contact for Price",
    features: [
      "Professional Mix & Master",
      "Partnered with @thisisbtg",
      "Industry Standard Quality",
      "Quick Turnaround"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: '4K Cinematography',
    description: 'Industry-standard 4K visuals, direction, and post-production bringing your sonic vision to life.',
    details: 'We utilise high-end cinema cameras to capture your performance with exceptional dynamic range and clarity. This service includes lighting setup, direction, and full post-production (editing, colour grading, and VFX) to ensure broadcast-quality deliverables.',
    icon: <Camera className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Studio Facilities',
    description: 'Professional recording environments equipped with top-tier hardware for pristine audio capture.',
    details: 'Our treated recording spaces are designed for maximum isolation and clarity. We provide access to industry-standard microphones and preamps, ensuring that every vocal nuance is captured faithfully before it even hits the mix.',
    icon: <Mic2 className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Mix & Mastering',
    description: 'Sonic engineering ensuring your tracks resonate powerfully on every system.',
    details: 'In partnership with Bridge The Gap, we offer precision mixing to balance your track and professional mastering to achieve competitive loudness and clarity. We ensure your music translates perfectly from studio monitors to phone speakers.',
    icon: <Sliders className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Aerial Footage',
    description: 'Drone cinematography adding cinematic scale and high-production value.',
    details: 'Elevate your visual storytelling with 4K aerial shots. Whether establishing a location or capturing dynamic movement, our drone operations add a big-budget feel to any music video production.',
    icon: <Plane className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Artist Development',
    description: 'Strategic guidance to refine your brand, sound, and visual identity.',
    details: 'We work closely with artists to define their unique lane in the industry. This involves visual branding consultation, release strategy planning, and content creation advice to build a sustainable career.',
    icon: <Users className="w-8 h-8 text-blue-600" />
  },
  {
    title: 'Audio Engineering',
    description: 'Technical expertise ensuring flawless signal flow and recording quality.',
    details: 'Our engineers handle the technical heavy lifting during your sessions, managing signal flow, gain staging, and file management, so you can focus entirely on your performance and creativity.',
    icon: <Disc className="w-8 h-8 text-blue-600" />
  }
];

export const INSTAGRAM_LINK = "https://instagram.com/ontape.uk";
export const PARTNER_INSTAGRAM_LINK = "https://instagram.com/thisisbtg";
export const PARTNER_CREDITS_LINK = "https://credits.muso.ai/profile/e3dcf1e1-f7e2-4459-a0ac-66b8d69fd3c4/credits";
export const LOGO_IMAGE_URL = "https://i.postimg.cc/56DJ6dFk/c4dc16ae.jpg";