export function Partners() {
  const partners = [
    { name: "QuickBooks", logo: "https://imgs.search.brave.com/heDy_9SSwDj28YdQ3aiIbC2SMX6aCk2hOsHrI4J2MW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/YXBwLXN0b3JlL2xp/c3RpbmdfaW1hZ2Vz/L2QwMmZlODg2M2E0/YjNhZDgzMThmNDYz/YjFjYzkwMzdmL3By/b21vdGlvbmFsX2lt/YWdlL0NOYUd0THYz/NHZzQ0VBRT0uanBl/Zz9oZWlnaHQ9NzIw/JnF1YWxpdHk9OTAm/d2lkdGg9MTI4MA" },
    { name: "PhonePe", logo: "https://imgs.search.brave.com/_dFQa1_-Es8OFDyAzfpahewzqmUnsPJxNAj3IB0ec2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zMy1y/ZWNydWl0aW5nLmNk/bi5ncmVlbmhvdXNl/LmlvL2V4dGVybmFs/X2dyZWVuaG91c2Vf/am9iX2JvYXJkcy9s/b2dvcy80MDAvNTQ3/LzMwMC9vcmlnaW5h/bC9sb2dvX3ZlcnNp/b25fUGUtMDEucG5n/PzE2MTc2MTE2NzM" },
    { name: "ICICI Bank", logo: "https://imgs.search.brave.com/ZeY51wd5KFSLJYdfZOenCCNGLPW3rZhh1ZJFwd_89-U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ha20t/aW1nLWEtaW4udG9z/c2h1Yi5jb20vYnVz/aW5lc3N0b2RheS9j/b21wYW55LWltZy9p/Y2ljaWJhbmtfOTM3/ODY0NTc2MThfNTQx/OC5wbmc" },
    { name: "GoDaddy", logo: "https://imgs.search.brave.com/yT82wOOAuJXUMIpr_beptGORZIBveVeECYWUZmqFgSg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Hb0RhZGR5/L0dvRGFkZHktTG9n/by1Mb2dvLndpbmUu/c3Zn" },
    { name: "Pantasign", logo: "https://imgs.search.brave.com/OTq__n-gRrpihsBW7hfiBPDTeBsyA8-HBbgHxBUEvBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MjFLM01vR3JJdkwu/anBn" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">We Associated With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow transform hover:scale-105 duration-300 flex items-center justify-center">
              <img src={partner.logo} alt={partner.name} className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
