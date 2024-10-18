import Image from "next/image"

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Director",
      description: "Award-winning director with over 15 years of experience in the film industry.",
      imageUrl: "https://picsum.photos/500/400",
    },
    {
      name: "Bob Smith",
      role: "Cinematographer",
      description: "Innovative cinematographer known for creating visually stunning and immersive scenes.",
      imageUrl: "https://picsum.photos/500/700",
    },
    {
      name: "Carol Williams",
      role: "Producer",
      description: "Experienced producer with a track record of bringing ambitious projects to life.",
      imageUrl: "https://picsum.photos/200/400",
    },
    {
      name: "David Brown",
      role: "Screenwriter",
      description: "Talented screenwriter with a knack for crafting compelling narratives and memorable characters.",
      imageUrl: "https://picsum.photos/200/300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">קולנוע משנה מציאות</h1>
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Cinematic Visions is a cutting-edge film production company dedicated to creating immersive and thought-provoking cinematic experiences. Our team of passionate professionals brings creativity and technical expertise to every project.
      </p>

      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">תכירו אותנו</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>
              <p className="text-sm text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}