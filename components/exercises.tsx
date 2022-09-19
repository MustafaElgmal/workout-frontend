
const exercises = [
    {
      id: 1,
      name: 'Knee High Jumps',
      href: '#',
      description: '3 sets x 20 reps',
      imageSrc: './assets/exercises-1.jpeg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 2,
      name: 'Ab Smasher',
      href: '#',
      description: '5 sets x 15 reps',
      imageSrc: './assets/exercises-2.jpeg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Soccer Jumps',
      href: '#',
      description: '5 sets x 15 reps',
      imageSrc: './assets/exercises-3.jpeg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },{
      id: 4,
      name: 'Yoga',
      href: '#',
      description: 'Relax for 40 mins',
      imageSrc: './assets/exercises-4.jpeg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
  ]
  
  export default function Exercises() {
    return (
      <div >
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {exercises.map((ex) => (
              <a key={ex.id} href={ex.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                  <img
                    src={ex.imageSrc}
                    alt={ex.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{ex.name}</h3>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">{ex.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }