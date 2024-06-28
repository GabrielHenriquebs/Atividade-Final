document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.height = "100vh";
    body.style.justifyContent = "space-between";
    body.style.margin = 0;
    body.style.overflow = "hidden";

    const header = document.createElement("header");
    header.style.width = "100%";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.padding = "20px";
    header.style.backgroundColor = "black";

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.style.color = "white";
    resetBtn.style.padding = "10px 20px";
    resetBtn.style.backgroundColor = "black";
    resetBtn.style.cursor = "pointer";
    resetBtn.style.border = "none";
    resetBtn.style.marginLeft = `300px`;
    header.appendChild(resetBtn);

    const gitBtn = document.createElement("button");
    gitBtn.textContent = "Git";
    gitBtn.style.color = "white";
    gitBtn.style.padding = "10px 20px";
    gitBtn.style.backgroundColor = "black";
    gitBtn.style.cursor = "pointer";
    gitBtn.style.border = "none";
    gitBtn.style.marginRight = `300px`;
    header.appendChild(gitBtn);

    body.appendChild(header);

    const main = document.createElement("main");
    main.style.textAlign = "center";
    main.style.flexGrow = "1";
    main.style.display = "flex";
    main.style.flexDirection = "column";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";

    const form = document.createElement("form");
    form.style.padding = "30px";
    form.style.backgroundColor = "#D3D3D3";
    form.style.width = "calc(100% - 350px)";
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.alignItems = "center";
    form.style.margin = "0 auto";

    const textoPrincipal = document.createElement("h1");
    textoPrincipal.textContent = "Atividade de Programação Web";
    form.appendChild(textoPrincipal);

    const inputNome = document.createElement("input");
    inputNome.style.display = "block";
    inputNome.style.width = "calc(100% - 750px)";
    inputNome.style.margin = "20px auto";
    inputNome.type = "text";
    inputNome.placeholder = "Digite seu nome";
    form.appendChild(inputNome);

    const inputNota1 = document.createElement("input");
    inputNota1.style.display = "block";
    inputNota1.style.width = "calc(100% - 750px)";
    inputNota1.style.margin = "20px auto";
    inputNota1.type = "number";
    inputNota1.placeholder = "Digite a primeira nota";
    form.appendChild(inputNota1);

    const inputNota2 = document.createElement("input");
    inputNota2.style.display = "block";
    inputNota2.style.width = "calc(100% - 750px)";
    inputNota2.style.margin = "20px auto";
    inputNota2.type = "number";
    inputNota2.placeholder = "Digite a segunda nota";
    form.appendChild(inputNota2);

    const inputNota3 = document.createElement("input");
    inputNota3.style.display = "block";
    inputNota3.style.width = "calc(100% - 750px)";
    inputNota3.style.margin = "20px auto";
    inputNota3.type = "number";
    inputNota3.placeholder = "Digite a terceira nota";
    form.appendChild(inputNota3);

    const calculeBtn = document.createElement("button");
    calculeBtn.textContent = "Calcular Média";
    calculeBtn.type = "button";
    calculeBtn.style.backgroundColor = "black";
    calculeBtn.style.color = "white";
    calculeBtn.style.cursor = "pointer";
    calculeBtn.style.width = "calc(100% - 750px)";
    calculeBtn.style.margin = "20px auto";
    calculeBtn.style.display = "block";
    form.appendChild(calculeBtn);

    const result = document.createElement(`div`);
    form.appendChild(result);

    calculeBtn.addEventListener(`click`,() => {

        const nota1 = parseFloat(inputNota1.value);
        const nota2 = parseFloat(inputNota2.value);
        const nota3 = parseFloat(inputNota3.value);
        if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ){
            result.textContent = `Por favor insira todas as notas ! `;

        } else{
            const media = (nota1+nota2+nota3)/3;
            result.textContent = `${inputNome.value}, sua média é: ${media.toFixed(2)}`;
            result.style.color = `black`;
        }
    })

    main.appendChild(form);
    body.appendChild(main);

    const footer = document.createElement("footer");
    footer.style.backgroundColor = "black";
    footer.style.width = "100%";
    footer.style.textAlign = "center";
    footer.style.padding = "20px";
    footer.style.color = "white";

    const p = document.createElement("p");
    p.textContent = "Esse é o exemplo da atividade que vale a nota para a disciplina de Programação Web";
    footer.appendChild(p);

    body.appendChild(footer);
});