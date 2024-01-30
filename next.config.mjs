import million from 'million/compiler';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default million.next(
  nextConfig
, { auto: { rsc: true } }
)