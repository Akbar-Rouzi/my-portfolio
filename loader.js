'use client'

export default function myImageLoader({ src, width, quality }) {
	if (src.startsWith('https://images.pexels.com')) return src
	return `https://bluewolfdev.com//${src}?w=${width}&q=${quality || 75}`
}