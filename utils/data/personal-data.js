import { contactEmail } from '../contact-email';

export const personalData = {
  name: "Hoang Quang Minh",
  profile: '/profile.png',
  designation: "Software Developer",
  description: "My name is Hoang Quang Minh. I am an enthusiastic programmer and data analyst in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on Java and PHP, and I love to do most of the things using Java and PHP. I am available for any kind of job opportunity that suits my skills and interests.",
  email: contactEmail,
  phone: '+84869223595',
  address: 'La Xuan Oai, Tang Nhon Phu A, Thu Duc, HCMC, Vietnam',
  github: 'https://github.com/minh7709',
  linkedIn: process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/minh-hoang-1ba906237/',
  leetcode: "https://leetcode.com/u/MdkgksszRo/",
  devUsername: "minh7709",
  resume: process.env.RESUME_URL || 'https://drive.google.com/file/d/1s6AxlQDOYPO4xUigdy8W17aJB8xzV2Am/view?usp=sharing'
}