import { Post } from "../shared/types";
import { v4 as uuidv4 } from "uuid";

const populatePostsData = (): void => {
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

  if (!localStorage.getItem("posts")) {
    localStorage.setItem("posts", JSON.stringify({ postList }));
  }
};

export default populatePostsData;
