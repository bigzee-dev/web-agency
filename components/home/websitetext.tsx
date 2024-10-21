import { Smartphone } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { LaptopMinimal } from 'lucide-react';

export default function WebsiteText() {
  return (
    <div className="w-full bg-neutral-900 py-12">
      <div className="container flex flex-col items-center text-lg font-bold italic bg-neutral-100 max-w-2xl mx-auto px-8 py-10 rounded-3xl">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nisi at massa facilisis tempor non et libero.   Praesent malesuada, nisl vel ullamcorper facilisis, dui ex aliquet eros, eget facilisis felis lacus sit amet odio. 
            Lorem ipsum lorem ipsum
        </p>
        <div className="flex gap-8 max-w-[75%] mx-auto text-gray-700 pt-6">
          <Monitor  size="1.6em"/>
          <Smartphone size="1.6em" />          
          <LaptopMinimal  size="1.6em"/>
        </div>
      </div>
    </div>
  )
}