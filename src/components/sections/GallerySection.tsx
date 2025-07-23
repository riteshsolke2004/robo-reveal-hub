import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import teamPhotoImage from '@/assets/team-photo.jpg';
import roboticsLabImage from '@/assets/robotics-lab.jpg';
import aiHeroImage from '@/assets/ai-hero.jpg';
import neuralNetworkImage from '@/assets/neural-network.jpg';

const initialImages = [
  {
    src: teamPhotoImage,
    alt: 'Team working on a project',
    title: 'Collaborative Session',
  },
  {
    src: roboticsLabImage,
    alt: 'Robotics lab with advanced equipment',
    title: 'Our Innovation Lab',
  },
  {
    src: aiHeroImage,
    alt: 'AI powered robot',
    title: 'AI Hero',
  },
  {
    src: neuralNetworkImage,
    alt: 'Neural network visualization',
    title: 'Neural Network Research',
  },
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState(initialImages);
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.imageUrl && formData.title) {
      setImages(prev => [...prev, { src: formData.imageUrl, alt: formData.title, title: formData.title }]);
      setFormData({ title: '', imageUrl: '' });
      setOpen(false); // Close the modal on submit
    }
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 neural-bg opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ScrollReveal animation="fadeUp" className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-glow bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A glimpse into our club's activities, projects, and events.
          </p>
        </ScrollReveal>

        <div className="text-right mb-8">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="neural" size="lg">
                <Plus className="mr-2 h-5 w-5" />
                Add Image
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Image</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-1">Image Title</label>
                  <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
                </div>
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">Image URL</label>
                  <Input id="imageUrl" name="imageUrl" type="url" value={formData.imageUrl} onChange={handleInputChange} required />
                </div>
                <Button type="submit">Add to Gallery</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <ScrollReveal key={index} animation="zoomIn" delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}