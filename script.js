let people = [
    {
        image: "https://i.pinimg.com/736x/6d/73/3a/6d733ab38b4028afe2b445a6b5c030dc.jpg",
        name: "Aanya Verma",
        profession: "Software Engineer",
        type: "Epic Coder",
        skills: ["Python", "Django", "PostgreSQL", "+4"],
        about: "Builds smart solutions with code, logic, and caffeine-fueled passion."
    },
    {
        image: "https://i.pinimg.com/736x/4b/fa/16/4bfa166c760e4ef7d83a244f4b26aac5.jpg",
        name: "Aanya Verma",
        name: "Rohan Mehta",
        profession: "Digital Marketer",
        type: "Creative Strategist",
        skills: ["SEO", "Google Ads", "Canva", "+4"],
        about: "Boosts brand visibility with creative and data-driven campaigns."
    },
    {
        image: "https://i.pinimg.com/736x/39/84/4b/39844beb11b853cac7d104cf41ab52a2.jpg",
        name: "Zara Khan",
        profession: "UX Designer",
        type: "Visual Thinker",
        skills: ["Figma", "Prototyping", "Wireframing", "+4"],
        about: "Designs user-friendly interfaces that speak louder than words."
    },
    {
        image: "https://i.pinimg.com/736x/17/1d/52/171d5237faa2aaeb520c95862b00bfe2.jpg",
        name: "Arjun Rao",
        profession: "Data Scientist",
        type: "Insight Seeker",
        skills: ["Python", "Pandas", "Machine Learning", "+4"],
        about: "Turns raw data into powerful insights and future decisions."
    },
    {
        image: "https://i.pinimg.com/736x/bb/5b/d3/bb5bd38cba930e6bd5fc14584395f397.jpg",
        name: "Meera Das",
        profession: "Content Writer",
        type: "Wordsmith",
        skills: ["Copywriting", "SEO Writing", "Editing", "+4"],
        about: "Crafts compelling stories that engage, inform, and convert readers."
    },
    {
        image: "https://i.pinimg.com/736x/db/3a/ac/db3aac373d0c816442b32330a30581b1.jpg",
        name: "Dev Sharma",
        profession: "Cloud Architect",
        type: "Tech Visionary",
        skills: ["AWS", "Docker", "Kubernetes", "+4"],
        about: "Designs scalable cloud solutions with precision and future foresight."
    },
    {
        image: "https://i.pinimg.com/736x/bb/70/74/bb7074f045f0ffcc32fd84617fb91cce.jpg",
        name: "Ishita Nair",
        profession: "Mobile App Developer",
        type: "Swift Ninja",
        skills: ["Flutter", "Firebase", "Dart", "+4"],
        about: "Creates fast, responsive apps that users love and trust."
    },
    {
        image: "https://i.pinimg.com/736x/4b/c5/89/4bc589764a17af3da16fea02a376c0ff.jpg",
        name: "Vikram Sen",
        profession: "Cybersecurity Analyst",
        type: "Threat Hunter",
        skills: ["Pen Testing", "Firewalls", "Linux", "+4"],
        about: "Protects digital ecosystems with proactive defense and expert analysis."
    },
    {
        image: "https://i.pinimg.com/736x/fd/ad/6f/fdad6f9ac98ba280ddfa534225153c1b.jpg",
        name: "Sneha Pillai",
        profession: "AI Researcher",
        type: "Deep Thinker",
        skills: ["TensorFlow", "NLP", "Python", "+4"],
        about: "Explores artificial intelligence to shape the world’s tomorrow."
    },
    {
        image: "https://i.pinimg.com/736x/41/ce/93/41ce935c93ae69ec11926c9ab6dae70c.jpg",
        name: "Kabir Kulkarni",
        profession: "DevOps Engineer",
        type: "CI/CD Wizard",
        skills: ["Jenkins", "Git", "Ansible", "+4"],
        about: "Automates workflows with efficiency and rock-solid pipeline management."
    },
    {
        image: "https://i.pinimg.com/736x/bb/70/74/bb7074f045f0ffcc32fd84617fb91cce.jpg",
        name: "Ishita Nair",
        profession: "Mobile App Developer",
        type: "Swift Ninja",
        skills: ["Flutter", "Firebase", "Dart", "+4"],
        about: "Creates fast, responsive apps that users love and trust."
    },
    {
        image: "https://i.pinimg.com/736x/4b/c5/89/4bc589764a17af3da16fea02a376c0ff.jpg",
        name: "Vikram Sen",
        profession: "Cybersecurity Analyst",
        type: "Threat Hunter",
        skills: ["Pen Testing", "Firewalls", "Linux", "+4"],
        about: "Protects digital ecosystems with proactive defense and expert analysis."
    }
];

sum = " "
people.forEach(function (ele) {
    sum = sum + `<div id="id" class=" w-100 bg-gray-100  flex flex-col gap-3 justify-center items-center p-5 shadow-md shadow-gray-300">
    <img class="size-40 bg-amber-100 rounded-full shadow-md shadow-gray-300 " src="${ele.image}" alt="">
    <h1 class="font-semibold text-2xl">${ele.name}</h1>
    <h3 class="text-gray-600">${ele.profession}</h3>
    <div class="text-blue-300 flex gap-2 hover:text-blue-400 "><i class="fa-solid fa-circle-user my-auto "></i>${ele.type}</div>
    <ul class="flex gap-2  ">
        <li class="components">${ele.skills[0]}</li>
        <li>${ele.skills[1]}</li>
        <li>${ele.skills[2]}</li>
        <li class="components bg-blue-300 hover:bg-blue-200">+4</li>
    </ul>
    <p class="text-center">${ele.about}</p>
    <button class="border-1 border-gray-300 px-3 py-2 rounded-4xl mt-5 shadow-xl hover:bg-blue-300 hover:scale-90 delay-70 duration-350">VIEW PROFILE</button>
  
</div>`;
})

let body = document.querySelector('body')
body.innerHTML = sum


