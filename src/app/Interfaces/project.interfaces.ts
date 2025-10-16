export interface Project {
    title: string;
    img: string;
    descriptionKey: any;
    technologies: string[];
    links: { title: string; url: string; }[];
    // WCAG 2.1 AA - Optional accessibility enhancements
    altText?: string;  // Optional: Custom alt text for project image
    category?: string; // Optional: Project category for better organization
}