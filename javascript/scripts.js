/**
 * Created by Daniel on 10/27/2016.
 */
 numCourses = 1;

 function addClass()
 {
	numCourses = numCourses + 1;
	
	var coursesTable = document.getElementById("tblCourses");
	var newRow = coursesTable.insertRow(-1);
	var colSemester = newRow.insertCell(0);
	var colCourseId = newRow.insertCell(1);
	
	colSemester.innerHTML = "<input type='text' id='txtCourseSem" + numCourses + "'>";
	colCourseId.innerHTML = "<input type='text' id='txtCourseId" + numCourses + "'>";
 }
 
 function remClass()
 {
	if (numCourses > 0)
	{
		numCourses = numCourses - 1;
	
		document.getElementById("tblCourses").deleteRow(-1);
	}
	else
	{
		alert("Unable to delete row");
	}

 }
 
 function validate()
 {
	
 }
 
 function submitForm(name, email, stuId, )
 {
	
 }