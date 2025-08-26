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
  } from "lucide-react"
  
  export type SubService = {
    title: string
    description: string
    image: string
  }
  
  export type Service = {
    slug: string
    title: string
    shortDescription: string
    longDescription: string
    icon: LucideIcon
    image: string
    subServices: SubService[]
  }
  
  export const services: Service[] = [
    {
      slug: "business-cards",
      title: "Business & ID Cards",
      shortDescription: "Professional business cards and durable PVC ID cards to represent your brand and team. Updated design.",
      longDescription:
        "Make a lasting first impression with our premium business cards and secure, high-quality PVC ID cards. We provide offset printing for production runs and offer design-only services with print-ready files when you just need digital deliverables.",
      icon: CreditCard,
      image: "/professional-business-cards-printing-showcase.png",
      subServices: [
        {
          title: "Business Card Design (Digital)",
          description: "Design-only service. Receive print-ready PDFs and source files for any printer.",
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
      slug: "greeting-cards",
      title: "Greeting & Wedding Cards",
      shortDescription: "Elegant and custom-designed cards for weddings, holidays, and all your special occasions.",
      longDescription:
        "Celebrate life's most important moments with beautifully crafted greeting and wedding cards. Our design and printing services ensure your invitations and announcements are as special as the day itself.",
      icon: Heart,
      image: "/elegant-wedding-invitation-cards-printing.png",
      subServices: [
        {
          title: "Wedding Invitations",
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
      slug: "posters-flyers",
      title: "Posters & Flyers",
      shortDescription: "High-impact posters and flyers to promote your events, products, and services effectively.",
      longDescription:
        "Capture attention and deliver your message with our high-quality posters and flyers. Available in various sizes and finishes. We provide offset printing for production and design-only files for digital use or external printing.",
      icon: GalleryHorizontal,
      image: "/posters-and-flyers-promotional-materials.png",
      subServices: [
        {
          title: "Posters",
          description: "Large format prints perfect for events, advertisements, and informational displays.",
          image: "/posters-and-flyers-promotional-materials.png",
        },
        {
          title: "Flyer Design (Digital)",
          description: "Design-only deliverables for online use or print-ready files for your preferred printer.",
          image: "/flyer-printing-digital-offset.png",
        },
        {
          title: "Flyers (Offset)",
          description: "Cost-effective for large-scale distribution with consistent, high-quality results.",
          image: "/flyer-printing-large-quantity.png",
        },
      ],
    },
    {
      slug: "banners",
      title: "Banners & Displays",
      shortDescription: "Durable flex banners, roll-up stands, and display accessories for maximum visibility.",
      longDescription:
        "From storefronts to trade shows, our banners and displays are designed to make a big impact. We offer durable materials and a range of hardware to create professional and portable advertising solutions.",
      icon: MonitorPlay,
      image: "/professional-banner-and-display-printing.png",
      subServices: [
        {
          title: "Flex Banners",
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
      slug: "book-printing",
      title: "Book & Thesis Printing",
      shortDescription: "Comprehensive book printing, binding, and thesis services for authors and students.",
      longDescription:
        "We provide a complete range of book and document services, from hardcover thesis binding to booklet printing. Our various binding methods ensure a professional finish for any project.",
      icon: BookOpen,
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
      shortDescription: "High-quality, self-inking Shinny stamps and personal seals for all your office needs.",
      longDescription:
        "Streamline your office workflow with our reliable and clear-impression rubber stamps. We are proud suppliers of the Shinny brand, known for its durability and ease of use. Perfect for official documents, branding, and personal use.",
      icon: Stamp,
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
      slug: "stationery",
      title: "Office Stationery",
      shortDescription: "Custom letterheads and other essential office stationery to elevate your brand's professionalism.",
      longDescription:
        "Maintain a consistent and professional brand image with our custom office stationery. We offer offset printing for bulk orders and a letterhead design-only service with print-ready files if you don't need printing.",
      icon: FileText,
      image: "/professional-office-stationery-letterhead-printing.png",
      subServices: [
        {
          title: "Letterhead Design (Digital)",
          description: "Design-only letterhead package with print-ready PDFs and editable files.",
          image: "/letterhead-digital-printing.png",
        },
        {
          title: "Letterhead (Offset)",
          description: "The perfect choice for large corporations requiring bulk orders with precise color matching.",
          image: "/professional-office-stationery-letterhead-printing.png",
        },
      ],
    },
    {
      slug: "stickers",
      title: "Stickers & Labels",
      shortDescription: "Custom stickers and labels in various shapes and sizes for branding, packaging, and events.",
      longDescription:
        "From product labels to promotional stickers, we offer versatile printing solutions on high-quality adhesive paper. For digital needs, we also provide sticker and label design-only packages with print-ready exports.",
      icon: Sticker,
      image: "/custom-sticker-label-printing.png",
      subServices: [
        {
          title: "Sticker Labels",
          description: "Professional, die-cut labels for your products and packaging.",
          image: "/sticker-label-product-packaging.png",
        },
        {
          title: "Stickers by A3 Sheet",
          description: "Multiple stickers on a single A3 sheet, a cost-effective solution for various designs.",
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
       slug: "promotional-items",
       title: "Mugs & Promotional Items",
       shortDescription: "Custom-printed mugs, reusable bags, and other items to promote your brand or event.",
       longDescription:
         "Expand your brand's reach with high-quality promotional items. From standard custom mugs to magical heat-reveal mugs and eco-friendly non-woven bags, we provide memorable products for your marketing campaigns or as personal gifts.",
       icon: Box,
       image: "/promotional-items-mugs-bags.png",
       subServices: [
         {
           title: "Standard Custom Mugs",
           description: "High-quality, full-color printing on ceramic mugs. Perfect for logos, photos, and corporate branding. This is our 'Normal Mug Printing' service.",
           image: "/standard-custom-mug-printing.png",
         },
         {
           title: "Magic / Heat-Reveal Mugs",
           description: "A heat-sensitive black coating hides your design. Pour in a hot liquid and watch your image magically appear! This is our 'Invisible Mug Printing' service.",
           image: "/magic-heat-reveal-mug.png",
         },
         {
           title: "Non-Woven Bags",
           description: "Durable and eco-friendly reusable bags custom-printed with your logo for events and retail.",
           image: "/specialty-printing-non-woven-bags.png",
         },
       ],
     },
   ]