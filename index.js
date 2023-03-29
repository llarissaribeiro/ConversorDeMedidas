const valor = prompt("Digite o valor em metros a ser convertido")

const medidas = prompt(
  "Qual unidade de medida você deseja?" + 
  "\na) milímetro (mm)" +
  "\nb) centímetro (cm)" +
  "\nc) decímetro (dm)" +
  "\nd) decâmetro (dam)" +
  "\ne) hectômetro (hm)" +
  "\nf) quilômetro (km)"
)

switch(medidas){
  case "a":
    alert("O resultado é: " + valor * 1000 + "mm")
    break
  case "b":
    alert("O resultado é: " + valor * 100 + "cm")
    break
  case "c":
    alert("O resultado é: " + valor * 10 + "dm")
    break
  case "d":
    alert("O resultado é: " + valor / 10 + "dam")
    break
  case "e":
    alert("O resultado é: " + valor / 100 + "hm")
    break
  case "f":
    alert("O resultado é: " + valor / 1000 + "km")
    break
    
  default:
    alert("Opção Inválida")

}