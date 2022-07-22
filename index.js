const abaco = SVG().addTo('.app').size(300, 400)
// x, y
const frente = abaco.polyline([[10,10], [560,10], [560,350], [10, 350], [10, 10]]).fill('none').stroke({ color: '#957a56', width: 12, linecap: 'square', linejoin: 'miter'  });

const valorAbaco = abaco.text('0').font({ fill: '#000', family: 'Inconsolata' , size: 30, weight: 600}).move(20, 300)
// x, y, x, y
const gradeUnidade = abaco.line(16, 62, 554, 62).stroke({ color: '#d7d8d7', width: 6, linecap: 'miter' });
const gradeDezena = abaco.line(16, 148, 554, 148).stroke({ color: '#d7d8d7', width: 6, linecap: 'miter' });
const gradeCentena = abaco.line(16, 248, 554, 248).stroke({ color: '#d7d8d7', width: 6, linecap: 'miter' });

const bolaUnidade1 = abaco.circle(46).fill('#FC143C').move(20, 36);
const bolaUnidade2 = abaco.circle(46).fill('#FC143C').move(70, 36);
const bolaUnidade3 = abaco.circle(46).fill('#FC143C').move(120, 36);
const bolaUnidade4 = abaco.circle(46).fill('#FC143C').move(170, 36);
const bolaUnidade5 = abaco.circle(46).fill('#FC143C').move(220, 36);
const bolaUnidade6 = abaco.circle(46).fill('#FC143C').move(270, 36);
const bolaUnidade7 = abaco.circle(46).fill('#FC143C').move(320, 36);
const bolaUnidade8 = abaco.circle(46).fill('#FC143C').move(370, 36);
const bolaUnidade9 = abaco.circle(46).fill('#FC143C').move(420, 36);
const bolaUnidade10 = abaco.circle(46).fill('#FC143C').move(470, 36);

const bolaDezena1 = abaco.circle(46).fill('#ffd700').move(20, 124);
const bolaDezena2 = abaco.circle(46).fill('#ffd700').move(70, 124);
const bolaDezena3 = abaco.circle(46).fill('#ffd700').move(120, 124);
const bolaDezena4 = abaco.circle(46).fill('#ffd700').move(170, 124);
const bolaDezena5 = abaco.circle(46).fill('#ffd700').move(220, 124);
const bolaDezena6 = abaco.circle(46).fill('#ffd700').move(270, 124);
const bolaDezena7 = abaco.circle(46).fill('#ffd700').move(320, 124);
const bolaDezena8 = abaco.circle(46).fill('#ffd700').move(370, 124);
const bolaDezena9 = abaco.circle(46).fill('#ffd700').move(420, 124);
const bolaDezena10 = abaco.circle(46).fill('#ffd700').move(470, 124);

const bolaCentena1 = abaco.circle(46).fill('#4169e1').move(20,224);
const bolaCentena2 = abaco.circle(46).fill('#4169e1').move(70,224);
const bolaCentena3 = abaco.circle(46).fill('#4169e1').move(120,224);
const bolaCentena4 = abaco.circle(46).fill('#4169e1').move(170,224);
const bolaCentena5 = abaco.circle(46).fill('#4169e1').move(220,224);
const bolaCentena6 = abaco.circle(46).fill('#4169e1').move(270,224);
const bolaCentena7 = abaco.circle(46).fill('#4169e1').move(320,224);
const bolaCentena8 = abaco.circle(46).fill('#4169e1').move(370,224);
const bolaCentena9 = abaco.circle(46).fill('#4169e1').move(420,224);
const bolaCentena10 = abaco.circle(46).fill('#4169e1').move(470,224);



const unidades = [bolaUnidade1, bolaUnidade2, bolaUnidade3, bolaUnidade4, bolaUnidade5, bolaUnidade6, bolaUnidade7, bolaUnidade8, bolaUnidade9, bolaUnidade10];

const unidadesSelecionadas = [];

let valor = 0;

unidades.forEach(unidade =>{
    
    unidade.click(function() {

        if(unidade.fill() === '#fc143c'){
            const unidadeFastada = unidades[unidades.length-1]
            unidadeFastada.fill({ color: '#DC143C' });
            unidadeFastada.x(unidadeFastada.x()+18);
            const bolaUnidade = unidades.pop();
            unidadesSelecionadas.push(bolaUnidade); 
            valor++;
            valorAbaco.text(`${valor}`);
        }else {
            const unidadeFastada = unidadesSelecionadas[unidadesSelecionadas.length-1];
            unidadeFastada.fill({ color: '#fc143c' });
            unidadeFastada.x(unidadeFastada.x()-18);
            const bolaUnidade = unidadesSelecionadas.pop();
            unidades.push(bolaUnidade);
            valor--;
            valorAbaco.text(`${valor}`);
        }
        
        
    });
    
});