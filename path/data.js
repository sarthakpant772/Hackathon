const obj = [

    {title:"WEB DEVELOPMENT", title1:"Learn Basics", content1: "Learn the Basics of HTML, CSS, and Javascript",title2:"Learn Backend", content2:"Learn any backend services such as Node.js" ,title3:"Learn react", content3:"Learn some frameworks such as react.js", title4:"Learn databse" ,content4: "Learn some database softwares such as MongoDB "},
    {title:"ANDROID DEVELOPMENT",title1:"Learn Basics",content1:"1.Learn the basics of Java programming language. The basics of Java programming language is a must for Android Development. To get the most out of the Kotlin, Java knowledge is necessary.",title2:"Learn Kotlin/swift",content2:"Learn the basics of Kotlin programming language. As now, Kotlin is officially the first-class language for Android app development, learning Kotlin is very important.",title3:"Make mini-projects",content3: "Now, you are ready for starting the Android App Development. Start with Android Development.",title4:"Using API's",content4: "While learning Android development and building Android applications, you will learn using api's"},
    {title:"MACHINE LEARNING",title1:"Learn Basics" ,content1: "Learn Python, data science tools and machine learning concepts",title2:"Learn EDA/data manipulation", content2:"Learn data analysis, manipulation & visualization with Pandas, NumPy Matplotlib", title3:"Learn algorithm",content3: "Learn machine learning algorithm  with scikit-learn",title4:"Neural Network" ,content4:"Learn deep learning neural networks "},
    {title:"WEB DEVELOPMENT AND DATA STRUCTURES",title1:"Learn Data Structure and Algorithm",content1: "With basic knowledge about coding languages you can start with Learn about 1.what is a linked list, how do they work, how data is stored, how memory is managed, and all other things. 2.STACKS AND QUEUES 3.TREES AND GRAPHS 4.GREEDY METHODOLOGY 5.GREEDY METHODOLOGY 6.BACKTRACKING", title2:"Start Web Development",content2:"Learn the Basics of HTML, CSS, and Javascript ",content2:"Learn any backend services such as Node.js" ,title3:"Learn react", content3:"Learn some frameworks such as react.js", title4:"Learn databse" ,content4: "Learn some database softwares such as MongoDB "},
    {title:"ANDROID DEVELOPMENT AND DATA STRUCTURES",title1:"Learn Data Structure and Algorithm",content1: "With basic knowledge about coding languages you can start with Learn about 1.what is a linked list, how do they work, how data is stored, how memory is managed, and all other things. 2.STACKS AND QUEUES 3.TREES AND GRAPHS 4.GREEDY METHODOLOGY 5.GREEDY METHODOLOGY 6.BACKTRACKING",title2:"Learn Kotlin/swift",content2:"Learn the basics of Kotlin programming language. As now, Kotlin is officially the first-class language for Android app development, learning Kotlin is very important.",title3:"Make mini-projects",content3: "Now, you are ready for starting the Android App Development. Start with Android Development.",title4:"Using API's",content4: "While learning Android development and building Android applications, you will learn using api's"},
    {title:"MACHINE LEARNING AND DATA STRUCTURES", title1:"Learn Data Structure and Algorithm",content1: "With basic knowledge about coding languages you can start with Learn about 1.what is a linked list, how do they work, how data is stored, how memory is managed, and all other things. 2.STACKS AND QUEUES 3.TREES AND GRAPHS 4.GREEDY METHODOLOGY 5.GREEDY METHODOLOGY 6.BACKTRACKING",title2:"Learn EDA/data manipulation", content2:"Learn data analysis, manipulation & visualization with Pandas, NumPy Matplotlib", tiltle3:"Learn algorithm",content3: "Learn machine learning algorithm  with scikit-learn",title4:"Neural Network" ,content4:"Learn deep learning neural networks "},
    {title:"DATA STRUCTURES", title1:"Choose Language", content1: "Pick any programming language of your choice. If you want to build DSA from scratch, We'll suggest Java/C++.", title2:"Learn the basic",content2: "Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development. Some OOPs Concepts- Object,Class,Inheritance,Polymorphism,Abstraction,Encapsulation",title3:"Learn STL",content3:"Learn the use of stl and get comfortable with it.",title4:"Learn Data Structure and Algorithm",content4:"Start Learning Datastructure and Algorithm"},    
];

 //const data = JSON.parse(obj);
const path_id=localStorage.getItem("path_id");
document.getElementById("t1").innerHTML = obj[path_id].title1;
document.getElementById("t2").innerHTML = obj[path_id].title2;
document.getElementById("t3").innerHTML = obj[path_id].title3;
document.getElementById("t4").innerHTML = obj[path_id].title4;
document.getElementById("head1").innerHTML = obj[path_id].title1;
document.getElementById("head2").innerHTML = obj[path_id].title2;
document.getElementById("head3").innerHTML = obj[path_id].title3;
document.getElementById("head4").innerHTML = obj[path_id].title4;
document.getElementById("para1").innerHTML = obj[path_id].content1;
document.getElementById("para2").innerHTML = obj[path_id].content2;
document.getElementById("para3").innerHTML = obj[path_id].content3;
document.getElementById("para4").innerHTML = obj[path_id].content4;

// document.getElementById("cont").innerHTML = obj[0].content;
