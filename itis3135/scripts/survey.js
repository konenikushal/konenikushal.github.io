document.getElementById('introForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm()) {
        alert("Please fill in all required fields.");
        return;
    }

    var imageInput = document.getElementById('introImage');
    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var imageDisplay = document.getElementById('imageDisplay');
            imageDisplay.innerHTML = '';
            var img = new Image();
            img.src = e.target.result;
            img.alt = 'Uploaded Image';
            imageDisplay.appendChild(img);
        };

        reader.readAsDataURL(imageInput.files[0]);
    }

    var formData = {
        name: document.getElementById('name').value,
        mascot: document.getElementById('mascot').value,
        imageCaption: document.getElementById('imageCaption').value,
        personalBackground: document.getElementById('personalBackground').value,
        professionalBackground: document.getElementById('professionalBackground').value,
        academicBackground: document.getElementById('academicBackground').value,
        webDevBackground: document.getElementById('webDevBackground').value,
        primaryPlatform: document.getElementById('primaryPlatform').value,
        courses: [...document.getElementById('coursesContainer').querySelectorAll('input[name="course"]')].map(input => input.value),
        funnyThing: document.getElementById('funnyThing').value,
        anythingElse: document.getElementById('anythingElse').value
    };

    displayFormData(formData);
});

function loadImage() {
    var image = document.getElementById('introImage').files[0];
    const imageUrl = URL.createObjectURL(image);
    var text = "<img src=\"" + imageUrl + "\">";
    document.getElementById('loadImage').innerHTML = text;
  }

  function validateForm() {
    var isValid = true;
    var requiredFields = document.getElementById('introForm').querySelectorAll("[required]");

    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            isValid = false;
        }
    });

    return isValid;
}

function displayFormData(data) {
    var displayDiv = document.getElementById('formDataDisplay');
    displayDiv.innerHTML = '';

    for (var key in data) {
        var p = document.createElement('p');
        p.textContent = key + ": " + data[key];
        displayDiv.appendChild(p);
    }

    document.getElementById('introForm').style.display = 'none';
    displayDiv.style.display = 'block';

    var backToFormButton = document.getElementById('backToFormButton');
    backToFormButton.style.display = 'block';

    backToFormButton.addEventListener('click', function() {
        resetForm();
    });
}

function resetForm() {
    var form = document.getElementById('introForm');
    form.reset();
    document.getElementById('formDataDisplay').style.display = 'none';
    form.style.display = 'block';
    var backToFormButton = document.getElementById('backToFormButton');
    backToFormButton.style.display = 'none';

    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = '';
}

document.getElementById('addCourseButton').addEventListener('click', function() {
    addCourseField();
});

function addCourseField() {
    var coursesContainer = document.getElementById('coursesContainer');
    var courseDiv = document.createElement('div');
    courseDiv.classList.add('courseDiv');

    var courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.name = 'course';
    courseInput.placeholder = 'Enter course name';
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function() {
        courseDiv.remove();
    };

    courseDiv.appendChild(courseInput);
    courseDiv.appendChild(deleteButton);
    coursesContainer.appendChild(courseDiv);
}