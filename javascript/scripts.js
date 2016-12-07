/**
 * Created by Daniel on 10/27/2016.
 */
numCourses = 1;
numStudents = 0;

function $(id)
{
	return document.getElementById(id);
}

function addClass()
{
	numCourses = numCourses + 1;

	var coursesTable = $("tblCourses");
	var newRow = coursesTable.insertRow(-1);
	var colSemester = newRow.insertCell(0);
	var colCourseId = newRow.insertCell(1);

	colSemester.innerHTML = "<input type='text' class=\"form-control input-sm\" placeholder=\"Semester\" id='txtCourseSem" + numCourses + "'>";
	colCourseId.innerHTML = "<input type='text' class=\"form-control input-sm\" placeholder=\"Course ID\" id='txtCourseId" + numCourses + "'>";
}

function remClass()
{
	if (numCourses > 1)
	{
		numCourses = numCourses - 1;

		$("tblCourses").deleteRow(-1);
	}
	else
	{
		alert("Unable to delete row");
	}
}

function validate()
{
	var name = $("txtName").value;
	var email = $("txtEmail").value;
	var stuId = $("txtStuId").value;

	if (name == "")
	{
		alert("Please enter your name");
		return;
	}
	else if (email == "" || email.indexOf("@students.ipfw.edu") == -1)
	{
		alert("Please enter a valid IPFW student email");
		return;
	}
	else if (stuId == "" || !stuId.match(/^\d{3}-\d{2}-\d{4}$/))
	{
		alert("Please enter a valid student ID (with dashes)");
		return;
	}
	else if (numCourses == 1 && ($("txtCourseSem1").value == "" || $("txtCourseId1").value == ""))
	{
		alert("Please enter at least one course");
		return;
	}

	var courseArray = [];

	for (var i = 1; i <= numCourses; i++)
	{
		courseArray.push($("txtCourseSem"+i).value);
		courseArray.push($("txtCourseId"+(i)).value);
	}

	submitForm(name, email, stuId, courseArray);
}

function submitForm(name, email, stuId, courses)
{
	var toStore = [stuId, name, email, courses];

	numStudents = localStorage.getItem("numStudents");

	localStorage.setItem(numStudents.toString(), toStore);
	numStudents++;

	localStorage.setItem("numStudents", numStudents);

	alert("Submission successful");
	clearInput();
}

function getStorage()
{
	var numStudents = localStorage.getItem("numStudents");

	for (var i = 0; i < numStudents; i++)
	{

		var student = localStorage.getItem(i.toString());
		var studentArray = student.split(",");
		var courses = "";

		for (var j = 3; i < studentArray.length; i++)
		{
			courses += studentArray[j] + "<br>";
		}

		$("tblStorage").innerHTML += "<tr><td>" + studentArray[0] + "</td><td>" + studentArray[1] + "</td><td>" + studentArray[2] + "</td><td>" + courses + "</td></tr>"
	}
}

function clearInput()
{
	$("txtName").value = "";
	$("txtEmail").value = "";
	$("txtStuId").value = "";

	while (numCourses > 1)
	{
		remClass();
	}

	$("txtCourseSem1").value = "";
	$("txtCourseId1").value = "";
}

function clearStorage()
{
	var numStudents = localStorage.getItem("numStudents");

	for (var i = 0; i < numStudents; i++)
	{
		localStorage.removeItem(i.toString());
	}

	localStorage.setItem("numStudents", 0);

	location.reload();
}