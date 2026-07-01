"use client";
import { Globe3D } from "@/components/ui/3d-globe";

const sampleMarkers = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "London",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "Tokyo",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Sydney",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Paris",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Moscow",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Dubai",
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    src: "https://assets.aceternity.com/avatars/11.webp",
    label: "Buenos Aires",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/12.webp",
    label: "Singapore",
  },
  {
    lat: 37.5665,
    lng: 126.978,
    src: "https://assets.aceternity.com/avatars/13.webp",
    label: "Seoul",
  },
];

export function Globe3DDemoThird() {
  return (
    <div
      className="relative h-[400px] w-full overflow-hidden bg-black shadow-sm">
      <div className="relative z-10 p-4 md:p-12 text-left">
        <h2
          className="mb-4 max-w-2xl text-2xl font-extrabold tracking-tight text-balance text-white md:text-5xl lg:text-6xl">
          Play all over the world with a click.
        </h2>
        <p
          className="mt-2 max-w-lg text-balance text-neutral-400 md:mt-8 md:text-lg">
          Sign up for an account and start posting all over the world with one
          click.
        </p>

        <div className="mt-4 flex gap-4 md:mt-8">
          <button
            className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-4 py-2 font-medium text-neutral-900 transition-all duration-200 hover:bg-neutral-200 active:scale-98">
            Get Started
          </button>
          <button
            className="flex cursor-pointer items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white ring ring-white/10 transition-all duration-200 hover:bg-neutral-800 active:scale-98">
            Learn More
          </button>
        </div>
      </div>
      {/* Globe container - sized and positioned just for the globe */}
      <div
        className="absolute -right-72 -bottom-96 z-10 size-160 md:-bottom-80 md:size-180">
        <Globe3D
          className="h-full w-full"
          markers={sampleMarkers}
          config={{
            atmosphereColor: "#4da6ff",
            atmosphereIntensity: 20,
            bumpScale: 5,
            autoRotateSpeed: 0.3,
          }}
          onMarkerClick={(marker) => {
            console.log("Clicked marker:", marker.label);
          }}
          onMarkerHover={(marker) => {
            if (marker) {
              console.log("Hovering:", marker.label);
            }
          }} />
      </div>
    </div>
  );
}

export default Globe3DDemoThird;
