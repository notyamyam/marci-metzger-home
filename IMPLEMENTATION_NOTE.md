# Implementation Note

## Tools and frameworks used

I built the homepage with **React** and **JavaScript**, used **Vite** for local development and the production build, and styled the page with **Tailwind CSS v4**. I downloaded the property, landscape, portrait, and brand images from the reference website and kept them as local assets. The finished page is deployed on **Vercel**.

I used native browser features for the main interactions. The gallery uses the seven photos from the reference homepage and supports touch swiping, mouse dragging, trackpad scrolling, and arrow buttons. Clicking a photo opens the original image in a modal on the same page. The contact and search forms prepare an email with the visitor's details; this static project does not use a backend. The social links and office map remain available, and the map opens the supplied Google Maps location.

## Design decision and improvement

My main design decision was to rebuild the opening section as a **split hero**. It places the Pahrump landscape photo beside a short introduction and a prominent **“Find your dream home”** button. The reference homepage presents several messages close together at the top; the split layout gives the location image and primary action a clearer order. Visitors can understand where Marci works and what to do next without scanning a crowded first screen.

On smaller screens, the hero stacks into a single column and keeps the text and action readable before the image. The rest of the page follows a simple sequence—about, buying and selling, home search, gallery, services, and contact—so visitors can move from an introduction to a specific next step. I checked the mobile layout for unintended horizontal scrolling and verified that the gallery, modal, map pin, and production build work.
