function toggleEdit(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

const assessifyBtn = document.getElementById("assessifyBtn");
assessifyBtn.addEventListener("click",()=>{
  const assessifyDec = document.getElementById("assessifyDec");
  console.log(assessifyDec)
  if(assessifyDec.style.display==="none"){
    assessifyDec.style.display="block";
  }else{
    assessifyDec.style.display="none";
  }
});

const profilePictureUpload = document.getElementById("profile-picture-upload");
const profilePictureContainer = document.querySelector(
  ".profile-picture-container"
);
const profilePicture =
  profilePictureContainer.querySelector(".profile-picture");
const editIcon = profilePictureContainer.querySelector(".edit-icon");

profilePictureUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      profilePicture.setAttribute("src", event.target.result);
    };
    reader.readAsDataURL(file);
  }
});

editIcon.addEventListener("click", function () {
  profilePictureUpload.click();
});

const saveButtons = document.querySelectorAll(".save-button");
saveButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const parentSection = this.closest(".profile-edit-section");
    if (parentSection) {
      parentSection.style.display = "none";
    }
  });
});
