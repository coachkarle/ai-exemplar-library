/*
 * Script for the AI Exemplar Library.  This file contains a small client‑side
 * application that loads exemplar data, populates filters, handles user
 * interaction and renders exemplar cards.  When a card is clicked, a
 * detailed modal with all of the exemplar information is shown.  The
 * filtering system supports grade level, subject area and keyword search.
 */

// Dataset: generated from the provided spreadsheet.  Each record
// represents one exemplar and contains parsed arrays for grade levels,
// subject areas, AI tools and alternative tools.  StudentFacing is a
// boolean indicating whether the activity is student facing.
// The full exemplar list is defined below.  Each entry is an object with the
// properties documented at the top of this file.  This array was
// auto‑generated from the provided CSV and inlined into the script so
// the application can run entirely client side without additional
// network requests.
const EXEMPLARS = [
  {
    "Title": "AI-Powered Book Suggestions for Students",
    "Description": "In this ELA/Social Studies exemplar across grades 6\u201312, a SchoolAI chatbot acts as a digital librarian. Teachers upload their library\u2019s book catalog so students can ask questions about interests and genres, and the AI recommends suitable titles.\n\nThe AI conversation fosters student agency and curiosity, while teachers can review chat histories to learn about students\u2019 reading preferences and guide them. The tool saves time and compensates for limited library staff, making book selection more personalized and engaging.",
    "TeacherBenefits": "- An assistant to help point students in a direction of what might be a good read for them",
    "StudentBenefits": "- Allows the students a space to ask questions and explore their interests to help find appropriate reading material",
    "InstructionalStrategy": "Student Engagement, Writing Support, Reading Support",
    "GradeLevels": ["6th", "7th", "8th", "9th", "10th", "11th", "12th"],
    "SubjectArea": ["ELA", "Social Studies"],
    "StudentFacing": true,
    "AITools": ["SchoolAI"],
    "AlternativeTools": ["MagicSchool", "Brisk"],
    "TeacherAmbassador": "Peter Milne",
    "ResourceItemNames": ["Video", "Image"],
    "ResourceLinks": ["https://drive.google.com/open?id=1zxCrACTtG26T4flocevVdrEZx6omy7srld8JvmJj11E"]
  },
  {
    "Title": "AI-Driven Feedback for Student Essays",
    "Description": "In this 9th grade ELA exemplar, the teacher used Fobizz\u2019s AI feedback tool to support students writing essays for the World Food Prize competition. Students drafted their essays in Google Docs and submitted them for AI-generated feedback aligned to rubric criteria.\n\nThe AI provided immediate, criterion\u2011referenced comments so students could revise before meeting with the teacher. During conferences, the teacher discussed both the students\u2019 writing and the AI\u2019s suggestions, helping learners critically evaluate AI feedback and improve their work.",
    "TeacherBenefits": "- The teacher had complete control of the criteria the AI was generating feedback on\n- She was able to meet with each student to evaluate the quality of the AI feedback and offer her own feedback",
    "StudentBenefits": "- Students received immediate feedback from AI and could move along in the assignment at their own pace without having to wait for teacher feedback before advancing\n- When they did have a turn with their teacher, it was not only to improve their writing, but to think critically about the AI feedback they received",
    "InstructionalStrategy": "Formative Assessment, Writing Support, Reading Support, Creative Arts",
    "GradeLevels": ["9th"],
    "SubjectArea": ["ELA"],
    "StudentFacing": true,
    "AITools": ["Fobizz"],
    "AlternativeTools": ["MagicSchool", "Brisk", "SchoolAI"],
    "TeacherAmbassador": "AI Ambassador: Jarrah Latz, Teacher Contributor: Dana B. 9th Grade ELA, Ovid Elsie Area Schools",
    "ResourceItemNames": ["Video"],
    "ResourceLinks": ["https://drive.google.com/open?id=12LBJun9NNQkiAzIOiXCk8ih5nF0QKorA"]
  },
  {
    "Title": "AI-Assisted Differentiation for High School ELA Reading",
    "Description": "This high school co\u2011taught ELA class leverages Notebook LM to differentiate a reading and analysis task across multiple ability levels. The teacher uploads grade\u2011level texts and uses AI to generate scaffolded materials such as summaries, guiding questions and modified assignments.\n\nBy instantly creating adapted resources, the teacher can meet diverse needs within a single classroom, freeing time for individualized support. Although the AI produced materials for teacher use, students benefit through accessible content and increased independence.",
    "TeacherBenefits": "- Saves time, creates differentiated resources with the click of a button",
    "StudentBenefits": "- This lesson was teacher focused, but the same AI could be used by students who learn to accommodate their own needs",
    "InstructionalStrategy": "Differentiation, Formative Assessment, Reading Support, Creative Arts",
    "GradeLevels": ["9th", "10th", "11th"],
    "SubjectArea": ["ELA"],
    "StudentFacing": true,
    "AITools": ["Notebook LM"],
    "AlternativeTools": [],
    "TeacherAmbassador": "Jill Soper",
    "ResourceItemNames": ["Image"],
    "ResourceLinks": ["https://drive.google.com/open?id=1xB4-bRNPCI-Dn_-l5l2TvLmWjZXMlJXL6m5PU93dSDI", "https://drive.google.com/open?id=1iRS-W83uZIRjZ3kigD7ySnr56MhabpOV"]
  },
  {
    "Title": "AI-Powered Text Leveling for Differentiated Reading",
    "Description": "This tutorial demonstrates how teachers can use AI tools like MagicSchool, Brisk and ChatGPT to adapt challenging texts for students with diverse reading levels. After checking a text\u2019s readability, the teacher prompts AI to rewrite the passage at appropriate levels and generate comprehension questions.\n\nThe process saves time and supports differentiation by producing multiple versions of the same content. Teachers can also use the tools to create audio, translation or vocabulary supports so all students can access grade\u2011level material.",
    "TeacherBenefits": "- Saving time, differentiation, supporting diverse learners",
    "StudentBenefits": "- accessible content both in comprehension and availability",
    "InstructionalStrategy": "Differentiation, Student Engagement, Reading Support, Creative Arts",
    "GradeLevels": ["3rd"],
    "SubjectArea": ["ELA"],
    "StudentFacing": false,
    "AITools": ["MagicSchool", "Brisk", "ChatGPT"],
    "AlternativeTools": ["SchoolAI", "MagicSchool", "Gemini", "Claude"],
    "TeacherAmbassador": "Betsy Springer",
    "ResourceItemNames": ["Video", "Image", "Written Reflection"],
    "ResourceLinks": ["https://drive.google.com/open?id=1JyVA4Ng5syTmV2T2q_ovZbbT-SpptMdnBCHgdHZ3HdQ"]
  },
  {
    "Title": "Using ChatGPT as a Lesson-Planning Thought Partner",
    "Description": "An elementary teacher used ChatGPT as a collaborative brainstorming partner to design engaging lesson plans for grades 3\u20135 science and social studies. Starting with a simple prompt about teaching Oklahoma history, she iteratively refined the prompt based on ChatGPT\u2019s suggestions.\n\nThrough this back\u2011and\u2011forth, the AI generated differentiated activities, behavior management ideas and scaffolds for diverse learners. The process streamlined planning while sparking new instructional strategies that the teacher adapted and implemented in class.",
    "TeacherBenefits": "- Thought Partner, differentiation, lesson planning",
    "StudentBenefits": "- Support for diverse learners, exciting lessons",
    "InstructionalStrategy": "Differentiation, Student Engagement, Idea Generation, Creative Arts",
    "GradeLevels": ["3rd", "4th", "5th"],
    "SubjectArea": ["Science", "Social Studies"],
    "StudentFacing": false,
    "AITools": ["ChatGPT"],
    "AlternativeTools": ["Gemini", "Claude"],
    "TeacherAmbassador": "Betsy Springer",
    "ResourceItemNames": ["Lesson Plan Document", "Video"],
    "ResourceLinks": ["https://drive.google.com/open?id=1goqx_VOiKhldP_fkVb6tHqlmCzaPvAS1pIeu9mkquDU"]
  },
  {
    "Title": "Integrating AI into Art Projects",
    "Description": "This lesson invites secondary art students to explore various applications of AI in creative projects. Students examine how tools like Adobe Firefly, Quillbot and Ask AI can support idea generation, image creation and editing.\n\nBy experimenting with AI and reflecting on its benefits and limitations, learners develop digital art skills and critical thinking. Teachers guide discussions around ethical use and creative control, positioning AI as a tool rather than a replacement for human creativity.",
    "TeacherBenefits": "- This teacher is teaching students about the uses and limitations of ai",
    "StudentBenefits": "- Students learn about the benefits and limitations of AI",
    "InstructionalStrategy": "Student Engagement, Creative Arts",
    "GradeLevels": ["9th", "10th", "11th", "12th"],
    "SubjectArea": ["Music or Arts"],
    "StudentFacing": true,
    "AITools": ["Adobe Firefly"],
    "AlternativeTools": ["Canva Magic Studio", "MagicSchool"],
    "TeacherAmbassador": "Betsy Springer",
    "ResourceItemNames": ["Lesson Plan Document", "Image"],
    "ResourceLinks": ["https://drive.google.com/open?id=1gmB19UmxJ96sonvUyrIavy65BH4jZPqEwyk9WXjaXlY"]
  },
  {
    "Title": "AI-Generated Backdrops for Theater Productions",
    "Description": "Middle and high school performing arts students use Fobizz AI image generators to create custom digital backdrops for their theatre productions. By crafting detailed text prompts, students generate scenes such as forests, cityscapes and fantasy settings.\n\nThe class then imports the images into Canva\u2019s Magic Studio for finishing touches and projection. This approach eliminates the cost of purchasing slide decks and teaches students how to collaborate with AI to realize artistic visions.",
    "TeacherBenefits": "- The biggest benefit for the teacher is not having to purchase the projection slides for each production",
    "StudentBenefits": "- The students learned how to prompt with detail to get the images they wanted and then learned how to edit them to get a perfect backdrop",
    "InstructionalStrategy": "Differentiation, PBL, Idea Generation, Writing Support, Reading Support, Creative Arts",
    "GradeLevels": ["6th", "7th", "8th", "9th", "10th", "11th", "12th"],
    "SubjectArea": ["Performing Arts"],
    "StudentFacing": true,
    "AITools": ["Fobizz Image Generators", "Canva Magic Studio"],
    "AlternativeTools": ["Adobe Firefly", "MagicSchool"],
    "TeacherAmbassador": "AI Ambassador: Jarrah Latz, Teacher Contributor: Mandy B.; Middle School and High School Performing Arts Teacher, Ovid Elsie Area Schools;",
    "ResourceItemNames": ["Video"],
    "ResourceLinks": ["https://drive.google.com/open?id=1EwxpJU5KkJN9aonmnCVD2PWuX70Ew_YO"]
  },
  {
    "Title": "Exploring Schoolyard Biodiversity with Google Lens",
    "Description": "In this cross\u2011curricular science and ELA lesson, students use the Google Lens app to investigate biodiversity on their school grounds. Working from a choice board, they identify plants, insects, rocks and small animals, then research their ecological roles.\n\nThe activity combines hands\u2011on exploration with digital research, fostering observation skills and curiosity. Teachers can adapt the choice board to other subjects and grades, using AI to support data collection and analysis.",
    "TeacherBenefits": "- Teachers can reuse the structure for various subjects\n- Encourages curiosity and observation skills without extensive prep",
    "StudentBenefits": "- Students explore and collect real data\n- Digital tools support research and identification",
    "InstructionalStrategy": "Project Based Learning, Student Engagement, Creative Arts",
    "GradeLevels": ["5th", "6th"],
    "SubjectArea": ["Science", "ELA"],
    "StudentFacing": true,
    "AITools": ["Google Lens"],
    "AlternativeTools": ["Curipod"],
    "TeacherAmbassador": "Laura Smith",
    "ResourceItemNames": ["Choice Board", "Image"],
    "ResourceLinks": ["https://drive.google.com/open?id=1QacwNSsxh14OvppMv311_f9ReBzsE7Zr"]
  },
  {
    "Title": "AI-Guided Feedback for Digital Storytelling Drafts",
    "Description": "In a 12th‑grade narrative writing unit, the teacher used Magic School AI’s writing feedback tool to create customizable bots that give targeted feedback. Students drafted digital stories and uploaded them to the AI tool for comments on organization, voice and mechanics.\n\nImmediate, personalized feedback kept students moving through the drafting process without waiting for teacher input. During conferences, the teacher reviewed the AI comments with students, emphasizing that AI is a supportive tool rather than the final authority.",
    "TeacherBenefits": "- AI allowed the teacher to customize the type of feedback and guidance that his students receive and to target specific focus areas that will be assessed in terms of their writing\n- It also gave him a baseline he can build upon with his own ideas or suggestions for their writing",
    "StudentBenefits": "- AI provided the teacher\u2019s students with timely feedback rather than having to wait for individual written feedback/ in\n- person advising from him\n- The feedback they receive points out the strengths of their writing as well as areas that need improvement, and can give them specific guidance and suggestions for how to proceed or revise their current drafts",
    "InstructionalStrategy": "Formative Assessment, Writing Support, Creative Arts",
    "GradeLevels": ["12th"],
    "SubjectArea": ["ELA"],
    "StudentFacing": true,
    "AITools": ["Magic School AI"],
    "AlternativeTools": ["Brisk", "SchoolAI"],
    "TeacherAmbassador": "AI Ambassador: Judy Bowling, The teacher that facilitated this lesson was Mike Gearns, English 12 Instructor, from Belleville High School.",
    "ResourceItemNames": ["Video"],
    "ResourceLinks": ["https://drive.google.com/open?id=16z1ysxHQIzad7-TBHEXDbW2c4ntl656z"]
  },
  {
    "Title": "AI-Generated Informational Writing and Feedback",
    "Description": "This lesson uses Curipod to generate an informational passage on a class\u2011relevant topic and a slide deck guiding students through reading, discussing and writing about the text. After writing a response, students receive AI \u201cglow and grow\u201d feedback with a score.\n\nThe AI\u2011generated content allows the teacher to customize topics and provides immediate feedback so students can revise. Tailoring the passage to student interests boosts engagement while integrating reading and writing skills in a single lesson.",
    "TeacherBenefits": "- The passage can be on any topic\n- The teacher can tailor the topic to something relevant from class\n- Then the AI creates a slide deck to guide the lesson",
    "StudentBenefits": "- Since the teacher can prompt the AI to generate an informational passage tailored to the class, he\u2019s able to choose topics that genuinely interest students\n- After reading the passage, students brainstormed together and voted through an interactive slide deck\n- At the end, they had the opportunity to write authentic responses and receive immediate AI feedback",
    "InstructionalStrategy": "Student Engagement, Formative Assessment, Idea Generation, Writing Support, Reading Support, Creative Arts",
    "GradeLevels": ["4th"],
    "SubjectArea": ["ELA"],
    "StudentFacing": true,
    "AITools": ["Curipod"],
    "AlternativeTools": ["MagicSchool", "Brisk"],
    "TeacherAmbassador": "AI Ambassador: Judy Bowling, The teacher that facilitated this lesson was Aaron Huntington, 4th grade teacher, Arno Elementary, Allen Park.",
    "ResourceItemNames": ["Image"],
    "ResourceLinks": ["https://drive.google.com/open?id=1MaC9JDgbkrLG9mYsMeJbhnm4nmM9vfMj"]
  },
  {
    "Title": "Chatting with Book Characters via AI",
    "Description": "Fourth\u2011grade students engage in authentic writing by chatting with a character from a book using Brisk. Students craft messages to the character, and the AI responds in the character\u2019s voice, steering the conversation based on comprehension.\n\nThe activity requires minimal setup and offers the teacher insight into student understanding while motivating students to write more. Many students continued conversations independently, making it both engaging and informative.",
    "TeacherBenefits": "- One of the benefits as a teacher was how easy it was to create an engaging lesson with little effort\n- The second benefit was checking the comprehension of students while watching them chat with the main character\n- Their dialogue provided valuable insights into their understanding",
    "StudentBenefits": "- Students had time to write in a more authentic way and get immediate feedback from the AI\n- They genuinely enjoyed the activity\n- Many students went back and continued the chat during their own free time",
    "InstructionalStrategy": "Student Engagement, Writing Support, Reading Support",
    "GradeLevels": ["4th"],
    "SubjectArea": ["ELA"],
    "StudentFacing": true,
    "AITools": ["Brisk"],
    "AlternativeTools": ["MagicSchool", "SchoolAI"],
    "TeacherAmbassador": "AI Ambassador: Judy Bowling, The teacher that facilitated this lesson was Aaron Huntington, 4th grade teacher, Arno Elementary, Allen Park.",
    "ResourceItemNames": ["Image"],
    "ResourceLinks": ["https://drive.google.com/open?id=1MiTDncu_9FvC7xQ3Us0OWIRmrHylbdqt"]
  },
  {
    "Title": "AI-Generated 3D Designs with ChatGPT and Bambu Studio",
    "Description": "Junior high STEM students combine ChatGPT with Bambu Studio to create AI\u2011generated images for 3D printing projects. Students write prompts to generate designs, then bring them into the 3D printing software for fabrication.\n\nThe lesson introduces students to prompt engineering and demonstrates real\u2011world applications of AI in design and manufacturing. It provides an accessible entry point to AI while encouraging creativity and hands\u2011on learning.",
    "TeacherBenefits": "- Students could take images of interest and be introduced to how AI can create images with a well written prompt",
    "StudentBenefits": "- Students could use AI under the guidance of the teacher\n- The also see application of AI tools for creating and learning",
    "InstructionalStrategy": "Student Engagement, Idea Generation, Creative Arts",
    "GradeLevels": ["7th", "8th"],
    "SubjectArea": ["Stem - PLTW"],
    "StudentFacing": true,
    "AITools": ["ChatGPT", "Bambu Studio"],
    "AlternativeTools": [],
    "TeacherAmbassador": "Tom Durbin",
    "ResourceItemNames": ["Lesson Plan Document"],
    "ResourceLinks": ["https://drive.google.com/open?id=16XjiVy2eplIKbM0eHy4QUSRBHnFr9WTk"]
  },
  {
    "Title": "AI-Generated Entrance Ticket Quizzes for Lecture Review",
    "Description": "In this science class, the teacher records lectures and posts them to YouTube. Before the next lesson, they use Brisk to automatically generate a three\u2011question quiz from the video as an entrance ticket.\n\nThe quick quiz reactivates prior knowledge and provides immediate formative data without significant teacher effort. Students benefit from a structured review that bridges lessons and keeps them accountable for video content.",
    "TeacherBenefits": "- Quickly create and distribute a quiz for students without a lot of teacher effort",
    "StudentBenefits": "- Fast way to re\n- engage with previous material",
    "InstructionalStrategy": "Formative Assessment, Creative Arts",
    "GradeLevels": ["11th", "12th"],
    "SubjectArea": ["Science"],
    "StudentFacing": false,
    "AITools": ["Brisk"],
    "AlternativeTools": ["MagicSchool", "SchoolAI"],
    "TeacherAmbassador": "Keith Mclaughlin",
    "ResourceItemNames": ["Video"],
    "ResourceLinks": ["https://drive.google.com/open?id=1glMINmKwq40LbowVsUKfjb2READcyu-o"]
  },
  {
    "Title": "AI-Assisted Brainstorming and Prewriting on Heroism",
    "Description": "For an 8th\u2011grade Language & Literature unit on heroism, students use MagicStudentAI and SchoolAI to brainstorm and organize ideas before writing. AI tools prompt students with questions and graphic organizers to deepen their thinking.\n\nBy modeling ethical and effective AI use, the teacher supports differentiation and digital literacy. Students receive personalized guidance that boosts engagement and helps them generate richer ideas for their essays.",
    "TeacherBenefits": "- Differentiation, increased engagement, time efficiency, ethical AI modeling",
    "StudentBenefits": "- Idea generation support, personalized guidance, improved pre\n- writing, digital literacy skills",
    "InstructionalStrategy": "Student Engagement, Idea Generation, Writing Support, Creative Arts",
    "GradeLevels": ["8th"],
    "SubjectArea": ["ELA"],
    "StudentFacing": false,
    "AITools": ["MagicStudentAI", "SchoolAI"],
    "AlternativeTools": ["SchoolAI", "MagicSchool", "Brisk", "Fobizz"],
    "TeacherAmbassador": "Jill Hill",
    "ResourceItemNames": ["Lesson Plan Document"],
    "ResourceLinks": ["https://drive.google.com/open?id=1tY0z0MhmhVWuac_LI5owxgWFgkLvj8cWlBh9TQhArdo"]
  },
  {
    "Title": "AI-Supported Reading Fluency Practice",
    "Description": "In a first\u2011grade ELA classroom, the teacher uses Snorkl to generate leveled fluency passages and provide instant feedback on students\u2019 oral reading. Students read AI\u2011generated passages aloud, receiving gamified scores and suggestions for improvement.\n\nThe tool saves planning time and delivers individualized data, allowing the teacher to adjust instruction and groupings. Students are motivated by immediate feedback and progress tracking, making fluency practice more engaging and effective.",
    "TeacherBenefits": "- The teacher was able to generate leveled, engaging fluency passages within seconds, saving valuable planning time\n- AI feedback tools provided performance insights for each student, allowing the teacher to adjust instruction and groupings based on real\n- time data",
    "StudentBenefits": "- Students received immediate, personalized feedback on their reading fluency\n- The gamified interface increased motivation, and students were able to track their progress and set goals\n- The tool promoted independent practice while still aligning with teacher",
    "InstructionalStrategy": "Differentiation, Student Engagement, Formative Assessment, Reading Support",
    "GradeLevels": ["1st"],
    "SubjectArea": ["ELA"],
    "StudentFacing": true,
    "AITools": ["Snorkl"],
    "AlternativeTools": [],
    "TeacherAmbassador": "Jennifer Lawson",
    "ResourceItemNames": ["Lesson Plan Document"],
    "ResourceLinks": ["https://docs.google.com/document/d/1NmMg-8lEJjZhvNiwSah62AL_MV4YeRSjduHjXl_uaAw/edit?usp=sharing"]
  },
  {
    "Title": "AI-Enhanced I, Robot Cybersecurity Lesson",
    "Description": "In a high school cybersecurity course, students examine ethical and security issues related to artificial intelligence and robotics using the film I, Robot. The teacher employs ChatGPT and Brisk to develop detailed lesson plans, worksheets and scene‑specific discussion prompts.\n\nStudents watch film clips, analyze the Three Laws of Robotics and debate the societal implications of AI. The AI tools save planning time by generating resources and quizzes, though timestamps needed minor adjustments.",
    "TeacherBenefits": "- Time saving\\n- developed details, worksheets, lesson plans, etc",
    "StudentBenefits": "- They used a Bot to learn about the 3 Laws of Robotics",
    "InstructionalStrategy": "Student Engagement, PBL, Formative Assessment, Reading Support, Creative Arts",
    "GradeLevels": ["9th", "10th", "11th", "12th"],
    "SubjectArea": ["Computer Science-AI"],
    "StudentFacing": false,
    "AITools": ["ChatGPT", "Brisk"],
    "AlternativeTools": ["Gemini", "Claude", "MagicSchool", "SchoolAI"],
    "TeacherAmbassador": "Randi Watts",
    "ResourceItemNames": ["Lesson Plan Document"],
    "ResourceLinks": ["https://drive.google.com/open?id=1sblc6_mJx_nhp01BtVgBgxYzPRxBEGI_", "https://drive.google.com/open?id=1I0Zk9fIRv-sRgbEePG4KSVn9shumr8qG", "https://drive.google.com/open?id=1vbN2CrcfwsNyCk11aOk-fBSgn-dNl50M", "https://drive.google.com/open?id=16nOnsPdqi8S9_51OcewlGNbJF-m8_RpD", "https://drive.google.com/open?id=1w7rTJFescV3uY3ygn378ckuxXctVwx-l", "https://drive.google.com/open?id=1vlkV37BZdaNfU0DT169EdcGNkGacgo-R"]
  },
  {
    "Title": "AI-Enhanced Grammar Lesson: Mastering Colons",
    "Description": "This exemplar features a concise AI‑generated presentation that teaches students how to use colons correctly. Using Brisk, the teacher quickly created slides explaining how colons introduce clarifications and lists, complete with examples and interactive practice.\n\nThe clear visuals and guided practice engage students in a traditionally dry grammar topic. The AI‑assisted process ensures accuracy and allows the teacher to focus on facilitation while students benefit from accessible explanations.",
    "TeacherBenefits": "- The benefit of using Brisk (AI tool) for the teacher in creating the Colons presentation was primarily efficiency, accuracy, and instructional support\\n- Brisk helped the teacher quickly generate clear, standards\\n- aligned content with examples, explanations, and practice questions that reinforce correct grammar usage",
    "StudentBenefits": "- The benefit of using AI (via Brisk) for the students was improved clarity, engagement, and accessibility\\n- The presentation included clear explanations, visual examples, and interactive practice, helping students better understand and apply grammar rules\\n- Brisk also supported different learning styles and allowed for content to be tailored to student needs, making the lesson more effective and student",
    "InstructionalStrategy": "Differentiation, Student Engagement, PBL, Writing Support, Reading Support, Creative Arts",
    "GradeLevels": ["9th", "10th", "11th", "12th"],
    "SubjectArea": ["ELA"],
    "StudentFacing": true,
    "AITools": ["Brisk"],
    "AlternativeTools": ["MagicSchool", "SchoolAI"],
    "TeacherAmbassador": "AI Ambassador: Randi Watts, Teacher Contributor: ELA teacher Rebecca Bortnichak",
    "ResourceItemNames": ["Presentation"],
    "ResourceLinks": ["https://drive.google.com/open?id=1vryIeFjO9QY243xT9Tieck_3F5lt7duS"]
  },
  {
    "Title": "AI-Driven Book Selection for 6th Grade Readers",
    "Description": "In this sixth‑grade ELA class, Magicschool AI provides personalized book recommendations as an early-finisher activity. Students enter interests, genres and Lexile ranges into a chat interface, and the AI suggests titles from the classroom library.\n\nThe tool keeps students engaged while they practice digital literacy skills and choose texts that match their preferences. The teacher can review recommendations and monitor students’ selections without sacrificing instructional time.",
    "TeacherBenefits": "- The teacher is able to build a room for students to access to help suggest book title in genre's of interest\\n- Benefits to the teacher include students highly engaged in the activity of choosing a book, and lexile scores can be added to help students choose books in their reading range",
    "StudentBenefits": "- Students responded incredibly to this\\n- Students were able to use AI tools in a safe scenario and work on digital literacy skills\\n- It also allowed the teacher to be able to gauge student interest in  class selected texts",
    "InstructionalStrategy": "Student Engagement, Reading Support",
    "GradeLevels": ["6th"],
    "SubjectArea": ["ELA"],
    "StudentFacing": true,
    "AITools": ["MagicSchool"],
    "AlternativeTools": ["SchoolAI"],
    "TeacherAmbassador": "Tom Durbin",
    "ResourceItemNames": ["Lesson Plan Document", "Written Reflection"],
    "ResourceLinks": ["https://drive.google.com/open?id=1etZygb6yhbWjnUJ4NGd24rF0BtfbT2c4ahtv2dCt7EM"]
  },
  {
    "Title": "Physics Escape Room: Impulse-Momentum with AI",
    "Description": "To make impulse and momentum practice more engaging, a high school physics teacher used ChatGPT to help design a digital escape room. The AI generated a narrative scenario, clues and questions that students solve through a Google Form.\n\nAs learners answer conceptual and mathematical problems, they uncover codes to advance through the “lab”. The gamified format motivates reluctant students and reveals misconceptions, while the AI streamlines the creation of puzzles and storylines.",
    "TeacherBenefits": "- Quickly come up with a scenario, questions, and formatting help for a digital escape room",
    "StudentBenefits": "- Students are presented with an engaging lesson to practice their skills and identify knowledge gaps",
    "InstructionalStrategy": "Student Engagement",
    "GradeLevels": ["9th", "10th", "11th", "12th"],
    "SubjectArea": ["Science"],
    "StudentFacing": true,
    "AITools": ["ChatGPT"],
    "AlternativeTools": ["Gemini", "Claude"],
    "TeacherAmbassador": "Keith Mclaughlin",
    "ResourceItemNames": ["Lesson Plan Document"],
    "ResourceLinks": ["https://drive.google.com/open?id=1PsM6LHX_9smbrAHmEGtFiyAqeuGHa6TuICnc_5oMPZE", "https://drive.google.com/open?id=1vReJ5DjGcgcUUqtT1Ct5qHZy4dgwe5izzS-5MYs7buk"]
  },
  {
    "Title": "AI-Assisted Water Cycle Review with Visual Notes",
    "Description": "To review the water cycle, a teacher leveraged Napkin AI to generate key terms and visuals for each stage. Students worked in groups to prompt the AI for images and notes, then compiled them into a collective visual study guide.\n\nThe activity increased engagement, reduced behavior issues and allowed students at different levels to contribute through text and images. AI‑supported visuals shifted the focus from memorization to discussion and conceptual understanding.",
    "TeacherBenefits": "- Class is engaged, fewer behavior disruptions, Easy prep once the AI literacy skill have been taught, Differentiation  for diverse learning needs by giving text and visuals",
    "StudentBenefits": "- High engagement with choice and structure, focus was not on memorizing facts but on the discussion after learning",
    "InstructionalStrategy": "Differentiation, Student Engagement, Idea Generation, Creative Arts",
    "GradeLevels": ["4th"],
    "SubjectArea": ["Science"],
    "StudentFacing": false,
    "AITools": ["Napkin AI"],
    "AlternativeTools": ["Canva Magic Studio", "MagicSchool"],
    "TeacherAmbassador": "Jill Soper",
    "ResourceItemNames": ["Lesson Plan Document"],
    "ResourceLinks": ["https://drive.google.com/open?id=10IVaAAmvPIyqyDbcgt_PRLDhG8dYUtf5"]
  }
];

// Mapping of AI tool names to their official websites.  When a tool
// appears in the data but isn’t present here, the link will fallback to a
// Google search for that tool.  These URLs were chosen based on
// publicly available information about each product or provider.
const TOOL_LINKS = {
  'SchoolAI': 'https://schoolai.com',
  'MagicSchool': 'https://www.magicschool.ai',
  'Magic School AI': 'https://www.magicschool.ai',
  'MagicStudentAI': 'https://magicstudent.ai',
  'Fobizz': 'https://fobizz.com',
  'Fobizz Image Generators': 'https://fobizz.com',
  'Brisk': 'https://briskteaching.com',
  'Notebook LM': 'https://notebooklm.google.com',
  'ChatGPT': 'https://chat.openai.com',
  'Claude': 'https://claude.ai',
  'Curipod': 'https://www.curipod.com',
  'Gemini': 'https://gemini.google.com',
  'Google Lens': 'https://lens.google',
  'Magic School AI': 'https://www.magicschool.ai',
  'MagicSchool AI': 'https://www.magicschool.ai',
  'Adobe Firefly': 'https://firefly.adobe.com',
  'Bambu Studio': 'https://bambulab.com',
  'Canva Magic Studio': 'https://www.canva.com/features/magic-studio',
  'Napkin AI': 'https://www.napkin.one',
  'Snorkl': 'https://snorkl.ai'
};

// Once the DOM is ready, initialise the page.
document.addEventListener('DOMContentLoaded', () => {
  populateFilters();
  updateCards();
  // Attach listeners for filter changes and search input
  document.getElementById('gradeFilter').addEventListener('change', updateCards);
  document.getElementById('subjectFilter').addEventListener('change', updateCards);
  document.getElementById('searchInput').addEventListener('input', updateCards);
  // Close modal when the close button or outside of content is clicked
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (ev) => {
    if (ev.target === document.getElementById('modal')) {
      closeModal();
    }
  });
});

// Populate grade and subject filters based on the dataset
function populateFilters() {
  const gradeSet = new Set();
  const subjectSet = new Set();
  EXEMPLARS.forEach(rec => {
    rec.GradeLevels.forEach(g => gradeSet.add(g));
    rec.SubjectArea.forEach(s => subjectSet.add(s));
  });
  const gradeFilter = document.getElementById('gradeFilter');
  const subjectFilter = document.getElementById('subjectFilter');
  // Sort grades by numeric order where possible
  const gradeArray = Array.from(gradeSet);
  gradeArray.sort((a, b) => {
    const aNum = parseInt(a);
    const bNum = parseInt(b);
    if (isNaN(aNum) && isNaN(bNum)) return a.localeCompare(b);
    if (isNaN(aNum)) return 1;
    if (isNaN(bNum)) return -1;
    return aNum - bNum;
  });
  gradeArray.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = g;
    gradeFilter.appendChild(opt);
  });
  // Sort subjects alphabetically
  const subjectArray = Array.from(subjectSet).sort((a, b) => a.localeCompare(b));
  subjectArray.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    subjectFilter.appendChild(opt);
  });
}

// Update the displayed cards based on current filters
function updateCards() {
  const grade = document.getElementById('gradeFilter').value;
  const subject = document.getElementById('subjectFilter').value;
  const search = document.getElementById('searchInput').value.trim().toLowerCase();
  const cardsContainer = document.getElementById('cardsContainer');
  cardsContainer.innerHTML = '';
  let count = 0;
  EXEMPLARS.forEach(rec => {
    // Filter by grade
    if (grade && !rec.GradeLevels.includes(grade)) return;
    // Filter by subject
    if (subject && !rec.SubjectArea.includes(subject)) return;
    // Keyword search across multiple fields
    if (search) {
      const haystack = [rec.Title, rec.Description, rec.TeacherBenefits, rec.StudentBenefits, rec.InstructionalStrategy, rec.TeacherAmbassador, rec.ResourceItemNames.join(', '), rec.AITools.join(', '), rec.AlternativeTools.join(', ')].join(' ').toLowerCase();
      if (!haystack.includes(search)) return;
    }
    // If passed filters, create card
    const card = createCard(rec);
    cardsContainer.appendChild(card);
    count++;
  });
  // Show message if no results
  if (count === 0) {
    const msg = document.createElement('p');
    msg.textContent = 'No exemplars found. Try adjusting your filters or search terms.';
    msg.style.gridColumn = '1 / -1';
    msg.style.textAlign = 'center';
    cardsContainer.appendChild(msg);
  }
}

// Create a card element for a given exemplar record
function createCard(rec) {
  const card = document.createElement('div');
  card.className = 'card';
  const title = document.createElement('h2');
  title.textContent = rec.Title;
  card.appendChild(title);
  // Meta information: grade levels and subjects
  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = `${rec.GradeLevels.join(', ')} \u2013 ${rec.SubjectArea.join(', ')}`;
  card.appendChild(meta);
  // Tags
  const tags = document.createElement('div');
  tags.className = 'tags';
  const tag = document.createElement('span');
  tag.className = 'tag' + (rec.StudentFacing ? '' : ' no');
  tag.textContent = rec.StudentFacing ? 'Student Facing' : 'Teacher Only';
  tags.appendChild(tag);
  card.appendChild(tags);
  // Description (truncated)
  const desc = document.createElement('div');
  desc.className = 'description';
  desc.textContent = truncate(rec.Description, 200);
  card.appendChild(desc);
  // CTA button
  const btn = document.createElement('button');
  btn.className = 'cta';
  btn.type = 'button';
  btn.textContent = 'View details';
  btn.addEventListener('click', () => openModal(rec));
  card.appendChild(btn);
  return card;
}

// Truncate text to a given length, adding an ellipsis if necessary
function truncate(text, maxLength) {
  if (!text) return '';
  const clean = text.replace(/\n+/g, ' ');
  if (clean.length <= maxLength) return clean;
  return clean.slice(0, maxLength).trim() + '…';
}

// Open modal with all details of a record
function openModal(rec) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modalBody');
  body.innerHTML = '';
  // Title
  const title = document.createElement('h2');
  title.textContent = rec.Title;
  body.appendChild(title);
  // Tags
  const tagContainer = document.createElement('div');
  tagContainer.className = 'modal-tags';
  const sfTag = document.createElement('span');
  sfTag.className = 'tag' + (rec.StudentFacing ? '' : ' no');
  sfTag.textContent = rec.StudentFacing ? 'Student Facing' : 'Teacher Only';
  tagContainer.appendChild(sfTag);
  body.appendChild(tagContainer);

  // Description: display the first one or two paragraphs in the modal.  Many
  // description fields in the dataset contain multiple paragraphs separated
  // by blank lines.  Showing only the first two paragraphs keeps the
  // modal concise while providing enough context.  If the description
  // contains fewer than two paragraphs, we show all available text.
  if (rec.Description) {
    const paragraphs = rec.Description.split(/\n+/).filter(p => p.trim());
    if (paragraphs.length) {
      const descSection = document.createElement('div');
      descSection.className = 'modal-section';
      const descHeader = document.createElement('h3');
      descHeader.textContent = 'Description';
      descSection.appendChild(descHeader);
      paragraphs.slice(0, 2).forEach(paragraph => {
        const pElem = document.createElement('p');
        pElem.textContent = paragraph.trim();
        descSection.appendChild(pElem);
      });
      body.appendChild(descSection);
    }
  }
  // Sections
  body.appendChild(createSection('Grade Levels', rec.GradeLevels.join(', ')));
  body.appendChild(createSection('Subject Area', rec.SubjectArea.join(', ')));
  body.appendChild(createSection('Instructional Strategy', rec.InstructionalStrategy));
  body.appendChild(createListSection('Teacher Benefits', rec.TeacherBenefits));
  body.appendChild(createListSection('Student Benefits', rec.StudentBenefits));
  // AI Tools used
  if (rec.AITools.length) {
    const toolsContent = rec.AITools.map(tool => createToolLink(tool)).join(', ');
    body.appendChild(createSection('AI Tool(s) Used', toolsContent, true));
  }
  // Alternative tools
  if (rec.AlternativeTools.length) {
    const altContent = rec.AlternativeTools.map(tool => createToolLink(tool)).join(', ');
    body.appendChild(createSection('Alternative Tools', altContent, true));
  }
  // Teacher / AI Ambassador
  if (rec.TeacherAmbassador) {
    body.appendChild(createSection('Teacher / AI Ambassador', rec.TeacherAmbassador));
  }
  // Resource items with links
  if (rec.ResourceItemNames.length) {
    const resourceList = document.createElement('ul');
    rec.ResourceItemNames.forEach((name, idx) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = name;
      // Use corresponding link if present, else fallback to first link
      let url = rec.ResourceLinks[idx] || rec.ResourceLinks[0] || '#';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      li.appendChild(link);
      resourceList.appendChild(li);
    });
    const section = document.createElement('div');
    section.className = 'modal-section';
    const h3 = document.createElement('h3');
    h3.textContent = 'Resource Items';
    section.appendChild(h3);
    section.appendChild(resourceList);
    body.appendChild(section);
  }
  // Show modal
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

// Close modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Helper to create a modal section with a heading and plain text
function createSection(title, content, isHTML = false) {
  const section = document.createElement('div');
  section.className = 'modal-section';
  const h3 = document.createElement('h3');
  h3.textContent = title;
  section.appendChild(h3);
  const p = document.createElement('p');
  if (isHTML) {
    p.innerHTML = content;
  } else {
    p.textContent = content;
  }
  section.appendChild(p);
  return section;
}

// Helper to create a section where benefits may be multiline or dash
function createListSection(title, text) {
  const section = document.createElement('div');
  section.className = 'modal-section';
  const h3 = document.createElement('h3');
  h3.textContent = title;
  section.appendChild(h3);
  // Split lines that start with '-' into bullet items
  const lines = text.split(/\n|,\s*-\s*/).map(l => l.trim()).filter(l => l);
  if (lines.length > 1) {
    const ul = document.createElement('ul');
    lines.forEach(l => {
      const li = document.createElement('li');
      li.textContent = l.replace(/^[-•]\s*/, '');
      ul.appendChild(li);
    });
    section.appendChild(ul);
  } else {
    const p = document.createElement('p');
    p.textContent = text;
    section.appendChild(p);
  }
  return section;
}

// Create an HTML anchor for a given AI tool using the TOOL_LINKS map.  If a
// link isn’t found, fall back to a Google search.  Returns an HTML
// string rather than a DOM node to allow concatenation.
function createToolLink(tool) {
  const url = TOOL_LINKS[tool] || `https://www.google.com/search?q=${encodeURIComponent(tool)}`;
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${tool}</a>`;
}

// Inject the dataset into the script at build time.  The placeholder
// /*@@DATA@@*/ is replaced by the JSON encoded data by the build script.