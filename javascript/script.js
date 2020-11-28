function myfunction(event){
        event.preventDefault();
        let fname= document.getElementById("fname").value;
        let mname= document.getElementById("mname").value;
        let lname= document.getElementById("lname").value;
        let course= document.getElementById("course").value;
        let genderselector = document.querySelector("input[name='gender']:checked").value;
        // console.log(fname, mname, lname, course, genderselector);

        const myobject = {fname, mname, lname, course, genderselector};
        const myarray = [];
        myarray.push(myobject);
        localStorage.setItem("browser_Data", JSON.stringify(myarray));




}