// Update this page (the content is just a fallback if you fail to update the page)

import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">Welcome to Penguin Paradise</h1>
      <p className="text-xl md:text-2xl text-blue-800 mb-8 text-center max-w-2xl">
        Discover the fascinating world of penguins and their icy habitats.
      </p>
      <img src="/placeholder.svg" alt="Cute penguin" className="mx-auto object-cover w-64 h-64 rounded-full shadow-lg mb-8" />
      <div className="space-x-4">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">Learn More</Button>
        <Button variant="outline" className="bg-white hover:bg-blue-50 text-blue-500 border-blue-500">
          Adopt a Penguin
        </Button>
      </div>
    </div>
  );
};

export default Index;
