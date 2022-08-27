         // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAGUU5OEvKOKig2s_q_P8RF-f4marXSFds",
        authDomain: "student-profiling-system.firebaseapp.com",
        databaseURL: "https://student-profiling-system-default-rtdb.firebaseio.com",
        projectId: "student-profiling-system",
        storageBucket: "student-profiling-system.appspot.com",
        messagingSenderId: "1029258543682",
        appId: "1:1029258543682:web:79e78b6cf4daefd041a3db"
      };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    import {
        getFirestore , doc , getDoc , setDoc , collection , addDoc , updateDoc , deleteDoc , deleteField
    }
    from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
    
    export{};
    const db = getFirestore();

    // .......................................................................................

    // references

    let selBtn = document.getElementById("show");
    let updBtn = document.getElementById("update");
    let delBtn = document.getElementById("delete");
    
    // getting a document 
    
    async function GetDoc(){
        var ref =doc(db,"TheStudentslist",usn.value);

        const docSnap = await getDoc(ref);

        if(docSnap.exists()){
                    fname.value = docSnap.data().FnameOfStd;
                    lname.value = docSnap.data().LnameOfStd;
                    dob.value = docSnap.data().DobOfStd;
                    email.value = docSnap.data().EmailOfStd;
                    phone.value = docSnap.data().PhoneOfStd;
                    gender.value = docSnap.data().GenderOfStd;
                }
        else{
            alert("No such document");
        }
    }      
    
    // updating  a document

    async function UpdatingFields(){
        var ref=doc(db,"TheStudentslist",usn.value);

        await updateDoc(
            ref,{
                FnameOfStd: fname.value,
                LnameOfStd: lname.value,
                EmailOfStd: email.value,
                PhoneOfStd: phone.value,
                DobOfStd: dob.value,
                GenderOfStd : gender.value  
            }
        )
        .then(()=>{
            alert("Data added succesfully");
        })
        .catch((error)=>{
            alert("error :"+error);
        });
    }   

    //-------------------------Deleting a document------------------

    async function DeletingDoc(){
        var ref =doc(db,"TheStudentslist",usn.value);
        const docSnap = await getDoc(ref);
    
        if(!docSnap.exists()){
            alert("No such document");
            return;
        }
        await deleteDoc(ref)
        .then(()=>{
            alert("Data deleted succesfully");
        })
        .catch((error)=>{
            alert("Unsucesseful operation error :"+error);
        });
    } 
 
    // test function

    function g(){
        alert("akfjb");
    }
    
    // assign events to buttons

    selBtn.addEventListener("click",GetDoc);
    updBtn.addEventListener("click",UpdatingFields);
    delBtn.addEventListener("click", DeletingDoc);
    
