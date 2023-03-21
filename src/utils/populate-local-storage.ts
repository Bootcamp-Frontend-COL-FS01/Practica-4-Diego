import { User, Post } from "../shared/types";
import { v4 as uuidv4 } from "uuid";

const populateLocalStorage = (): void => {
  const userList: User[] = [
    {
      email: "jesselandreth@outlook.com",
      firstName: "Jesse",
      lastName: "Landreth",
      password: "5Aj74j#E",
    },
    {
      email: "dorabeaver@gmail.com",
      firstName: "Dora",
      lastName: " Beavers",
      password: "Ca@9664r",
    },
    {
      email: "johnaguilar@hotmail.com",
      firstName: "John",
      lastName: "Aguilar",
      password: "sP1z50@@",
    },
    {
      email: "willieramos@gmail.com",
      firstName: "Willie",
      lastName: "Ramos",
      password: "dN@5Q72#",
    },
    {
      email: "joanedgar@gmail.com",
      firstName: "Joan",
      lastName: "Edgar",
      password: "@rvxZ950",
    },
    {
      email: "jamesmccoy@hotmail.com",
      firstName: "James",
      lastName: "McCoy",
      password: "paP579*1",
    },
    {
      email: "thomaslefebre@jala.com",
      firstName: "Thomas",
      lastName: "Lefebre",
      password: "%52l6Y2c",
    },
    {
      email: "winfrednelson@jalasoft.com",
      firstName: "Winfred",
      lastName: "Nelson",
      password: "46$8E4s5",
    },
  ];

  const postList: Post[] = [
    {
      user: {
        email: "johnaguilar@hotmail.com",
        firstName: "John",
        lastName: "Aguilar",
      },
      title: "The Benefits of Practicing Mindfulness Every Day",
      text: "Mindfulness is a powerful tool for reducing stress and improving overall well-being. By practicing mindfulness regularly, you can cultivate a greater sense of calm, focus, and clarity. Whether you choose to meditate, practice yoga, or simply take a few deep breaths each day, incorporating mindfulness into your routine can have a significant impact on your physical and mental health.",
      id: uuidv4(),
    },
    {
      user: {
        email: "thomaslefebre@jala.com",
        firstName: "Thomas",
        lastName: "Lefebre",
      },
      title: "How to Build a Successful Remote Team",
      text: "In today's fast-paced business world, remote work is becoming increasingly common. But managing a remote team comes with its own unique challenges. To build a successful remote team, it's important to establish clear communication channels, set clear goals and expectations, and provide ample opportunities for collaboration and feedback. By taking these steps, you can help your team thrive no matter where they're located.",
      id: uuidv4(),
    },
    {
      user: {
        email: "thomaslefebre@jala.com",
        firstName: "Thomas",
        lastName: "Lefebre",
      },
      title:
        "The Power of Positive Thinking: How to Cultivate a Positive Mindset",
      text: "our thoughts and attitudes have a powerful impact on your life. By cultivating a positive mindset, you can attract more positivity and abundance into your life. To do this, focus on the things you're grateful for, visualize success and happiness, and surround yourself with supportive people who uplift and inspire you.",
      id: uuidv4(),
    },
    {
      user: {
        email: "joanedgar@gmail.com",
        firstName: "Joan",
        lastName: "Edgar",
      },
      title:
        "Top 10 Tips for Staying Productive and Focused While Working from Home",
      text: "Working from home can be a great way to boost productivity and work-life balance, but it also requires discipline and focus. To stay productive and on task while working from home, it's important to create a dedicated workspace, establish a routine, take regular breaks, and limit distractions. By following these tips, you can make the most of your time and achieve your goals.",
      id: uuidv4(),
    },
    {
      user: {
        email: "winfrednelson@jalasoft.com",
        firstName: "Winfred",
        lastName: "Nelson",
      },
      title: "Healthy Habits for a Happier Life",
      text: "Your daily habits can have a profound impact on your overall happiness and well-being. By cultivating healthy habits like getting enough sleep, eating well, exercising regularly, and practicing self-care, you can feel more energized, focused, and fulfilled. So start small and build up to bigger changes over time, and watch as your life transforms for the better.",
      id: uuidv4(),
    },
  ];
  localStorage.setItem("users", JSON.stringify({ userList }));
  localStorage.setItem("posts", JSON.stringify({ postList }));
  const data: User[] = JSON.parse(localStorage.getItem("users")!);
  const data2: Post[] = JSON.parse(localStorage.getItem("posts")!);
  console.log(data);
  console.log(data2);
};

export default populateLocalStorage;
