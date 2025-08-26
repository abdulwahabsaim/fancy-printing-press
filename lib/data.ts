// lib/data.ts
import {
  CreditCard,
  Heart,
  User,
  GalleryHorizontal,
  Box,
  FileText,
  ShoppingBag,
  Sticker,
  Newspaper,
  BookOpen,
  Stamp,
  LucideIcon,
  MonitorPlay,
  Presentation,
  BookUser,
} from "lucide-react";

export type SubService = {
  title: string;
  description: string;
  image: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  subServices: SubService[];
};

export const services: Service[] = [
  {
    slug: "business-id-cards",
    title: "Business & ID Cards",
    icon: CreditCard,
    shortDescription: "Professional business cards and durable PVC ID cards for your brand.",
    longDescription: "Make a lasting first impression with our premium business cards and secure, high-quality PVC ID cards. We offer both high-volume offset printing and flexible digital options.",
    image: "/professional-business-cards-printing-showcase.png",
    subServices: [
      {
        title: "Digital Business Cards",
        description: "Fast, flexible, and perfect for smaller quantities with vibrant, crisp colors.",
        image: "/digital-business-cards-modern-design.png",
      },
      {
        title: "Offset Business Cards",
        description: "Superior quality and color consistency, ideal for large quantities and professional branding.",
        image: "/offset-business-cards-premium-quality.png",
      },
      {
        title: "PVC ID Cards",
        description: "Durable, waterproof plastic cards for employees, members, or students.",
        image: "/pvc-id-cards-employee-badges.png",
      },
    ],
  },
  {
    slug: "greeting-wedding-cards",
    title: "Greeting & Wedding Cards",
    icon: Heart,
    shortDescription: "Elegant and custom-designed cards for weddings and all special occasions.",
    longDescription: "Celebrate life's most important moments with beautifully crafted greeting and wedding cards. Our design and printing services ensure your invitations are as special as the day itself.",
    image: "/elegant-wedding-invitation-cards-printing.png",
    subServices: [
      {
        title: "Wedding Cards",
        description: "Exquisite designs on premium cardstock to announce your special day in style.",
        image: "/elegant-wedding-invitations-premium-design.png",
      },
      {
        title: "Greeting Cards",
        description: "Custom cards for holidays, birthdays, and corporate events.",
        image: "/special-occasion-cards-celebrations.png",
      },
    ],
  },
  {
    slug: "marketing-materials",
    title: "Marketing Materials",
    icon: Newspaper,
    shortDescription: "High-impact flyers, posters, and stickers to effectively promote your business.",
    longDescription: "From promotional flyers to eye-catching posters and versatile stickers, we provide all the materials you need to market your brand effectively. Available in both digital and offset print options.",
    image: "/posters-and-flyers-promotional-materials.png",
    subServices: [
      {
        title: "Flyers (Digital)",
        description: "Ideal for short runs and quick turnarounds with sharp, vibrant printing.",
        image: "/flyer-printing-digital-offset.png",
      },
      {
        title: "Flyers (Offset)",
        description: "Cost-effective for large-scale distribution with consistent, high-quality results.",
        image: "/flyer-printing-large-quantity.png",
      },
      {
        title: "Posters",
        description: "Large format prints perfect for events, advertisements, and informational displays.",
        image: "/posters-and-flyers-promotional-materials.png",
      },
      {
        title: "Sticker Labels",
        description: "Professional, die-cut labels for your products and packaging.",
        image: "/sticker-label-product-packaging.png",
      },
      {
        title: "Stickers by A3 Sheet",
        description: "A cost-effective solution for printing multiple sticker designs on a single sheet.",
        image: "/sticker-sheet-a3-printing.png",
      },
      {
        title: "Birthday Stickers",
        description: "Fun, personalized stickers to make birthday celebrations even more special.",
        image: "/birthday-party-stickers.png",
      },
    ],
  },
  {
    slug: "banners-displays",
    title: "Banners & Displays",
    icon: Presentation,
    shortDescription: "Durable flex banners, roll-up stands, and display accessories for maximum visibility.",
    longDescription: "From storefronts to trade shows, our banners and displays are designed to make a big impact. We offer durable materials and a range of hardware to create professional and portable advertising solutions.",
    image: "/professional-banner-and-display-printing.png",
    subServices: [
      {
        title: "Flex Banner",
        description: "Weather-resistant vinyl banners for indoor or outdoor use, complete with finishing options.",
        image: "/professional-banner-and-display-printing.png",
      },
      {
        title: "Flex with Stand (X-Stand)",
        description: "Lightweight and portable banner stands, perfect for events and retail displays.",
        image: "/flex-banner-with-x-stand.png",
      },
      {
        title: "Flex Roll Up Banner",
        description: "Professional retractable banner stands for easy transport and setup at trade shows.",
        image: "/flex-rollup-banner-stand.png",
      },
      {
        title: "Display Accessories",
        description: "A range of stands and accessories to complement your promotional materials.",
        image: "/display-accessories-and-stands.png",
      },
    ],
  },
  {
    slug: "book-thesis-printing",
    title: "Book & Thesis Printing",
    icon: BookOpen,
    shortDescription: "Comprehensive book printing, binding, and thesis services for authors and students.",
    longDescription: "We provide a complete range of book and document services, from hardcover thesis binding to booklet printing. Our various binding methods ensure a professional finish for any project.",
    image: "/book-binding-and-thesis-printing-services.png",
    subServices: [
      {
        title: "Thesis Hard Cover",
        description: "Premium hard cover binding to professionally present your academic research.",
        image: "/thesis-hardcover-binding.png",
      },
      {
        title: "Hard Cover Book Binding",
        description: "Durable and elegant hard cover binding for books, reports, and portfolios.",
        image: "/book-binding-and-thesis-printing-services.png",
      },
      {
        title: "Booklet Printing",
        description: "High-quality saddle-stitched booklets for programs, catalogs, and manuals.",
        image: "/booklet-printing-saddle-stitch.png",
      },
      {
        title: "Tape Bind Notebook",
        description: "A simple and effective binding method for reports and notebooks.",
        image: "/tape-binding-notebooks.png",
      },
      {
        title: "Press Bind Note Book",
        description: "A secure binding option for documents that need to be sturdy and long-lasting.",
        image: "/press-binding-notebooks.png",
      },
    ],
  },
  {
    slug: "rubber-stamps",
    title: "Rubber Stamps",
    icon: Stamp,
    shortDescription: "High-quality, self-inking Shinny stamps and personal seals for all your office needs.",
    longDescription: "Streamline your office workflow with our reliable and clear-impression rubber stamps. We are proud suppliers of the Shinny brand, known for its durability and ease of use. Perfect for official documents and branding.",
    image: "/shinny-rubber-stamps-collection.png",
    subServices: [
      {
        title: "Shinny Handy Stamp S-724",
        description: "A compact and portable stamp, perfect for on-the-go professionals.",
        image: "/shinny-s724-handy-stamp.png",
      },
      {
        title: "Shinny Printer S-824",
        description: "A versatile office stamp for clear and consistent impressions.",
        image: "/shinny-s824-printer-stamp.png",
      },
      {
        title: "Shinny Printer S-844",
        description: "A larger printer stamp for more detailed information or logos.",
        image: "/shinny-s844-printer-stamp.png",
      },
      {
        title: "Shinny E-916",
        description: "An efficient and ergonomic stamp designed for heavy-duty use.",
        image: "/shinny-e916-stamp.png",
      },
      {
        title: "Shinny H-6109",
        description: "A robust stamp ideal for official seals and larger graphics.",
        image: "/shinny-h6109-stamp.png",
      },
      {
        title: "Personal Seal Stamp",
        description: "Custom-made personal and company seals for official documentation.",
        image: "/personal-seal-embosser-stamp.png",
      },
    ],
  },
  {
    slug: "office-stationery",
    title: "Office Stationery",
    icon: FileText,
    shortDescription: "Custom letterheads to elevate your brand's professionalism.",
    longDescription: "Maintain a consistent and professional brand image with our custom office stationery. We offer high-quality printing for letterheads, available in both digital and offset options to suit your needs.",
    image: "/professional-office-stationery-letterhead-printing.png",
    subServices: [
      {
        title: "Letterhead (Digital)",
        description: "Perfect for smaller quantities, offering vibrant colors and a quick turnaround.",
        image: "/letterhead-digital-printing.png",
      },
      {
        title: "Letterhead (Offset)",
        description: "The ideal choice for large corporations requiring bulk orders with precise color matching.",
        image: "/professional-office-stationery-letterhead-printing.png",
      },
    ],
  },
  {
    slug: "specialty-items",
    title: "Specialty & Promotional",
    icon: Box,
    shortDescription: "Custom-printed mugs and eco-friendly bags for memorable branding.",
    longDescription: "Expand your brand's reach with high-quality promotional items. From magic heat-reveal mugs to eco-friendly non-woven bags, we provide memorable products for your marketing campaigns or as personal gifts.",
    image: "/promotional-items-mugs-bags.png",
    subServices: [
      {
        title: "Normal Mug Printing",
        description: "High-quality, full-color printing on ceramic mugs. Perfect for logos and photos.",
        image: "/standard-custom-mug-printing.png",
      },
      {
        title: "Invisible (Magic) Mug Printing",
        description: "A heat-sensitive coating hides your design until a hot liquid is poured in.",
        image: "/magic-heat-reveal-mug.png",
      },
      {
        title: "Non-Woven Bags",
        description: "Durable and eco-friendly reusable bags custom-printed with your logo.",
        image: "/specialty-printing-non-woven-bags.png",
      },
    ],
  },
];