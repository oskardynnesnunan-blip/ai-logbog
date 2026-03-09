function submitForm(){

const data = {
name: document.getElementById("name").value,
class: document.getElementById("class").value,
assignment: document.getElementById("assignment").value,
prompt: document.getElementById("prompt").value,
answer: document.getElementById("answer").value,
usage: document.getElementById("usage").value,
own: document.getElementById("own").value,
reflection: document.getElementById("reflection").value
}

let reports = JSON.parse(localStorage.getItem("reports") || "[]")

reports.push(data)

localStorage.setItem("reports", JSON.stringify(reports))

document.getElementById("msg").innerText="Opgave afleveret"
}

function loadReports(){

let reports = JSON.parse(localStorage.getItem("reports") || "[]")

let output=""

reports.forEach(r=>{

output += `
<hr>
<b>Navn:</b> ${r.name}<br>
<b>Klasse:</b> ${r.class}<br><br>

<b>Opgave</b><br>
${r.assignment}<br><br>

<b>AI Prompt</b><br>
${r.prompt}<br><br>

<b>AI svar</b><br>
${r.answer}<br><br>

<b>Hvordan brugt</b><br>
${r.usage}<br><br>

<b>Eget arbejde</b><br>
${r.own}<br><br>

<b>Refleksion</b><br>
${r.reflection}<br>
`
})

document.getElementById("reports").innerHTML=output
}