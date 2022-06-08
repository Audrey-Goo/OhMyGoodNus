/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  build:{
    transpile: ['gsap']
  },
}

module.exports = nextConfig 

/*module.exports = {
  images: {
    domains: ['links.papareact.com'],
  },
}; */
