const studentList = document.querySelector(".student-list");
const students = [
  {
    studentName: "Mark💍💍💍💍💍💍👑👑👑👑👑👑",
    photo: "./img/mark.jpeg",
    age: "12",
    hobby: "Drone, bicycle",
  },
  {
    studentName: "Artem👽👤👤",
    photo: "./img/artem.jpg",
    age: "16",
    hobby: "Singing, dancing",
  },
  {
    studentName: "Vagus🥞🧇🥞🧇🧇🧇🧇🥞",
    photo: "./img/vagus.jpg",
    age: "13",
    hobby: "3D model, cooking",
  },
  {
    studentName: "Dima🦃🦃🦃",
    photo: "./img/dima.jpg",
    age: "13",
    hobby: "biking, like turkeys",
  },
  {
    studentName: "Olha🧹🧷🧹🧺🧹🧺🧹🧹🧹",
    photo: "./img/olha.jpg",
    age: "15",
    hobby: "fishing, guitar",
  },
  {
    studentName: "Max🥽🥽🗻🌋",
    photo: "./img/max.jpg",
    age: "14",
    hobby: "football, swimming",
  },
  {
    studentName: "TIMOHA🔞🔞",
    photo: "./img/timoha.jpg",
    age: "15",
    hobby: "venam",
  },
  {
    studentName: "KIRYSHA🤑😍🥰",
    photo: "./img/kirilovich.jpg",
    age: "15",
    hobby: "DOTA 2☢",
  },
];

const studentsList = students
  .map((student) => {
    const saveStudent = `<li class="student-item">
        <h2 class="student-title">${student.studentName}</h2>
        <img class="student-img" src="${student.photo}" alt="${student.studentName}" />
        <p class="student-age">${student.age}</p>
        <p class="student-hobby">${student.hobby}</p>
      </li>`;
    return saveStudent;
  })
  .join("");
studentList.innerHTML = studentsList;
console.log(studentsList);
