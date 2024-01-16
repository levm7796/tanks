function init() {
				gameZone.innerHTML += `<div class="player" style="left: ${player.x}px; top: ${player.y}px"></div>`
				gameZone.innerHTML += `<div class="player2" style="left: ${player.x}px; top: ${player.y}px"></div>`
}
function MathMul (num,mul) {
				return Math.round(num/mul)*mul
}
let map = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,1,1,0,0,1,1,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0],
				[0,0,0,0,1,1,0,0,0,0],
				[0,0,1,1,1,1,1,1,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
]
// const map = [
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[0,0,0,0,0,0,0,0,0,0],
// 				[1,1,1,1,1,1,1,1,1,0]
// ]

function intervals() {
				ints.run = setInterval(() => {
								if (player.run) {

												switch (player.side) {
																case 1: //top
																				if (player.y > 0) {
																								player.f = true
																								if (player.y % 80 == 0) {
																												console.log('нажали кнопку вверх, деление на 80 равно 0')
																												if (player.y == 0) {
																																player.f = false

																												} else if (player.x == 0) {
																																let arrCoordY2 = player.y / 80 - 2
																																if (arrCoordY2 < 0) {
																																				arrCoordY2 = 0
																																}
																																if (player.map[arrCoordY2][Math.round(player.x)] == 1||player.map[arrCoordY2][Math.round(player.x)] == 2) {
																																				player.f = false
																																				console.log('направление вверх - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.y / 80 == 1) {
																																if (player.map[player.y / 80 - 1][Math.round(player.x / 80 - 1)] == 1||player.map[player.y / 80 - 1][Math.round(player.x / 80 - 1)] == 2) {
																																				player.f = false
																																				console.log('направление вверх - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[player.y / 80 - 1][Math.round(player.x / 80)] == 1||player.map[player.y / 80 - 1][Math.round(player.x / 80)] == 2) {
																																				player.f = false
																																				console.log('направление вверх - ВРЕЗАЛСЯ!!!')
																																				console.log(player.y / 80 - 1 + ' ' + Math.round(player.x / 80))
																																}
																												}
																								}
																								if (!player.f) {
																												break
																								}
																								player.y -= player.step
																								player.el.style.top = `${player.y}px`

																				}
																				break
																case 3: //bottom
																				if (player.y < 800 - player.h) {
																								player.f = true
																								if (player.y % 80 == 0) {
																												console.log('нажали кнопку вниз, деление на 80 равно 0')
																												if (player.y == 0 && player.x == 0) {
																																if (player.map[1][0] == 1||player.map[1][0] == 2) {
																																				player.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.y == 0) {
																																if (player.map[player.y / 80][Math.round(player.x / 80)] == 1||player.map[player.y / 80][Math.round(player.x / 80)] == 2) {
																																				player.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.x == 0) {
																																if (player.map[player.y / 80][Math.round(player.x)] == 1||player.map[player.y / 80][Math.round(player.x)] == 2) {
																																				player.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[Number(player.y / 80 + 1)][Math.round(player.x / 80)] == 1||player.map[Number(player.y / 80 + 1)][Math.round(player.x / 80)] == 2) {
																																				player.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																				console.log(Math.round(player.x / 80), Number(player.y / 80) + 1)
																																}
																												}
																								}
																								if (!player.f) {
																												break
																								}
																								player.y += player.step
																								player.el.style.top = `${player.y}px`
																				}
																				break
																case 2: //left
																				if (player.x > 0) {
																								player.f = true
																								if (player.x % 80 == 0) {
																												console.log('нажали кнопку влево, деление на 80 равно 0')
																												if (player.x == 0) {
																																if (player.map[Math.round(player.y / 80 - 1)][player.x] == 1||player.map[Math.round(player.y / 80 - 1)][player.x] == 2) {
																																				player.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.y == 0) {
																																if (player.map[Math.round(player.y)][player.x / 80 - 1] == 1||player.map[Math.round(player.y)][player.x / 80 - 1] == 2) {
																																				player.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[Math.round(player.y / 80)][player.x  / 80 - 1] == 1||player.map[Math.round(player.y / 80)][player.x  / 80 - 1] == 2) {
																																				player.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																				console.log(Math.round(player.y / 80),player.x / 80 - 1)
																																}
																												}
																								}
																								if (!player.f) {
																												break
																								}
																								player.x -= player.step
																								player.el.style.left = `${player.x}px`
																				}
																				break
																case 4: //right
																				if (player.x < gameZone.getBoundingClientRect().right - player.w - 6) {
																								player.f = true
																								if (player.x % 80 == 0) {
																												console.log('нажали кнопку вправо, деление на 80 равно 0')
																												if (player.x == 0) {
																																let arrCoordY = player.y / 80 - 1
																																if (arrCoordY < 0) {
																																				arrCoordY = 0
																																}
																																if (player.map[Math.round(arrCoordY)][Number(player.x / 80) + 1] == 1||player.map[Math.round(arrCoordY)][Number(player.x / 80) + 1] == 2) {
																																				player.f = false
																																				console.log('направление вправо - ВРЕЗАЛСЯ!!!')
																																}
																												}
																												if (player.y == 0 && player.x == 0) {
																																if (player.map[0][1] == 1) {
																																				player.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.y == 0) {
																																if (player.map[Math.round(player.y)][player.x / 80 + 1] == 1||player.map[Math.round(player.y)][player.x / 80 + 1] == 2) {
																																				player.f = false
																																				console.log('направление вправо - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																// console.log('x:'+player.x/ 80 -3)
																																// console.log('y:'+Math.round(player.y / 80 - 1))
																																if (player.map[Math.round(player.y / 80)][player.x / 80 + 1] == 1||player.map[Math.round(player.y / 80)][player.x / 80 + 1] == 2) {
																																				player.f = false
																																				console.log('направление вправо - ВРЕЗАЛСЯ!!!')
																																				console.log(Math.round(player.y / 80),player.x / 80 + 1)
																																}
																												}
																								}
																								if (!player.f) {
																												break
																								}
																								player.x += player.step
																								player.el.style.left = `${player.x}px`
																				}
																				break
												}
								}

				}, fps)
				ints.shot = setInterval(() =>{
								let shots = document.querySelectorAll('.shot')
								shots.forEach((shot) => {
												let direstion = shot.getAttribute('direction')
												switch (direstion) {
																case 'top':
																				// debugger
																				if (Math.round(shot.getBoundingClientRect().top) < 0) {
																								shot.parentNode.removeChild(shot)
																				}else{
																								shotEl.f = true
																								let ay = (MathMul(shot.getBoundingClientRect().top-48.5,80) / 80)+1
																								if(MathMul(shot.getBoundingClientRect().top,80)%80==0) {
																												if (ay == 0) {shotEl.f = false} else {ay = ay - 1}
																												console.log(ay)
																												exam(ay, MathMul(shot.getBoundingClientRect().left-40,80)/80)
																								}
																								if (shotEl.f) {
																												shot.style.top = MathMul(shot.getBoundingClientRect().top,10) - (shotEl.speed) + 'px'
																												console.log(ay,MathMul(shot.getBoundingClientRect().left,80)/80)
																												// console.log('wall: '+player.map[ay][MathMul(shot.getBoundingClientRect().left,80)/80])
																								}else{
																												// let timerId = setInterval(()=> shot.style.top = MathMul(shot.getBoundingClientRect().top,10) - (shotEl.speed + 5) + 'px',1000)
																												// setTimeout(() => { clearInterval(timerId)}, 10000)
																												// console.log('wall: '+player.map[ay][MathMul(shot.getBoundingClientRect().left,80)/80])
																												if (player.map[ay][MathMul(shot.getBoundingClientRect().left-40,80)/80] == 1) {
																																if(ay!==0) {
																																				wallinv(String(ay) + MathMul(shot.getBoundingClientRect().left - 40, 80) / 80,ay,MathMul(shot.getBoundingClientRect().left-40,80)/80)
																																}
																												} else if(player.map[ay][MathMul(shot.getBoundingClientRect().left-40,80)/80] == 2) {
																																walldel(String(ay) + MathMul(shot.getBoundingClientRect().left - 40, 80) / 80,ay,MathMul(shot.getBoundingClientRect().left-40,80)/80)
																												}
																												shot.parentNode.removeChild(shot)
																												console.log('пуля врезалась')
																								}
																				}
																				break

																case 'right':
																				// debugger
																				if (shot.getBoundingClientRect().right > gameZone.getBoundingClientRect().width) {
																								shot.parentNode.removeChild(shot)
																				}else {
																								shotEl.f = true
																								let ax = (MathMul(shot.getBoundingClientRect().left,80) / 80)-1
																								if(MathMul(shot.getBoundingClientRect().left,20)%80==0) {
																												if (ax == 9) {shotEl.f = false}
																												console.log(ax)
																												exam(MathMul(shot.getBoundingClientRect().top-40,80)/80, ax+1)
																								}
																								if (shotEl.f) {
																												shot.style.left = shot.getBoundingClientRect().right - (shotEl.speed-1) + 'px'
																												console.log('shot y: ' + shot.getBoundingClientRect().top)
																												// console.log('shot x: ' + MathMul(shot.getBoundingClientRect().left,10))
																								}else{
																												if (player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax + 1] == 1) {
																																console.log(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax + 1)
																																wallinv(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax+1),MathMul(shot.getBoundingClientRect().top-40,80)/80, ax+1)
																																console.log('inv')
																																console.log('invmap'+player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax + 1])
																												} else if (player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax + 1] == 2) {
																																walldel(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax + 1),MathMul(shot.getBoundingClientRect().top-40,80)/80, ax+1)
																																console.log(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax + 1),MathMul(shot.getBoundingClientRect().top-40,80)/80, ax+1)
																																console.log('del')
																												}
																												// console.log('wall: '+player.map[ay][MathMul(shot.getBoundingClientRect().left,80)/80])
																												shot.parentNode.removeChild(shot)
																												console.log('пуля врезалась')
																								}
																				}

																				break

																case 'bottom':
																				if (shot.getBoundingClientRect().bottom > gameZone.getBoundingClientRect().height) {
																								shot.parentNode.removeChild(shot)
																								console.log('пуля вниз врезалась')
																				}else{
																								shotEl.f = true
																								let ay = (MathMul(shot.getBoundingClientRect().top+60,80) / 80)-2
																								if(MathMul(shot.getBoundingClientRect().top,80)%80==0) {
																												if (ay == 9) {
																																shotEl.f = false
																												} else {
																																ay = ay + 1
																																console.log(ay)
																																exam(ay, MathMul(shot.getBoundingClientRect().left-40, 80) / 80)
																												}
																								}
																								if (shotEl.f) {
																												shot.style.top = shot.getBoundingClientRect().top + (shotEl.speed) + 'px'

																								}else{
																												// player.map[ay][MathMul(shot.getBoundingClientRect().left-40,80)/80] = 0
																												// console.log(ay,MathMul(shot.getBoundingClientRect().left-40,80)/80)
																												// console.log('wall: '+player.map[ay][MathMul(shot.getBoundingClientRect().left,80)/80])
																												if(player.map[ay][MathMul(shot.getBoundingClientRect().left-40, 80) / 80]==1) {
																																if (ay !== 9) {
																																				wallinv(String(ay) + MathMul(shot.getBoundingClientRect().left - 40, 80) / 80,ay,MathMul(shot.getBoundingClientRect().left-40, 80) / 80)
																																}
																												}else if(player.map[ay][MathMul(shot.getBoundingClientRect().left-40, 80) / 80]==2) {
																																walldel(String(ay) + MathMul(shot.getBoundingClientRect().left - 40, 80) / 80,ay,MathMul(shot.getBoundingClientRect().left-40, 80) / 80)
																												}
																												shot.parentNode.removeChild(shot)
																												console.log('пуля врезалась')
																								}
																				}
																				break
																case 'left':
																				// debugger
																				if (shot.getBoundingClientRect().left < 0) {
																								shot.parentNode.removeChild(shot)
																				}else{
																								shotEl.f = true
																								let ax = (MathMul(shot.getBoundingClientRect().left,80) / 80)
																								if(MathMul(shot.getBoundingClientRect().left+5,20)%80==0) {
																												// if (ax == 0) {shotEl.f = false}
																												ax = ax - 1
																												console.log(ax)
																												exam(MathMul(shot.getBoundingClientRect().top-40,80)/80, ax)
																								}
																								if (shotEl.f) {
																												shot.style.left = shot.getBoundingClientRect().left - (shotEl.speed) + 'px'
																								}else {
																												if (player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax] == 1) {
																																wallinv(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax),MathMul(shot.getBoundingClientRect().top-40,80)/80, ax)
																												}else if(player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax] == 2) {
																																walldel(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax),MathMul(shot.getBoundingClientRect().top-40,80)/80, ax)
																												}
																												shot.parentNode.removeChild(shot)
																												console.log('пуля врезалась')
																								}
																				}
																				break
												}
								})
				},fps)
				function wallinv(walla,y,x) {
								let currentwall = document.getElementById(walla)
								console.log(walla)
								currentwall.style.backgroundImage = "url('invalidWall.png')"
								player.map[y][x] = 2
								console.log('map:'+player.map[y][x])
								console.log(map)
								console.log(y,x)
				}
				function walldel(walla,y,x) {
								let currentwall = document.getElementById(walla)
								console.log(walla)
								currentwall.parentNode.removeChild(currentwall)
								player.map[y][x] = 0
				}
				function exam(y,x) {
								console.log('функция (exam) сработала')
								// console.log(MathMul(shot.getBoundingClientRect().top))
								if (player.map[y][x] == 1 ||player.map[y][x] == 2) {
												shotEl.f = false
								}
				}
}
function addshot() {

				switch (player.side) {
								case 1:
												gameZone.innerHTML += `<div class="shot" direction="top" style="left: ${(player.x + (player.w/2)) - 8}px; top: ${player.y - 16}px"></div>`
												break
								case 2:
												gameZone.innerHTML += `<div class="shot" direction="left" style="left: ${player.x + player.w - 95}px; top: ${player.y + 34}px"></div>`
												break
								case 3:
												gameZone.innerHTML += `<div class="shot" direction="bottom" style="left: ${(player.x + (player.w/2)) - 8}px; top: ${player.y + 83}px"></div>`
												break
								case 4:
												gameZone.innerHTML += `<div class="shot" direction="right" style="left: ${player.x + player.w}px; top: ${player.y + 33}px"></div>`
												break
				}

				player.el = document.querySelector('.player')
}

function controllers() {
				document.addEventListener('keydown', (e) => {
								// console.log(e.keyCode)

								switch (e.keyCode) {
												case 87: //top
																player.el.style.backgroundImage = `url(${player.sprites.top})`
																player.run = true
																player.side = 1
																break
												case 83: //bottom
																player.el.style.backgroundImage = `url(${player.sprites.bottom})`
																player.run = true
																player.side = 3
																break
												case 68: //right
																player.el.style.backgroundImage = `url(${player.sprites.right})`
																player.run = true
																player.side = 4
																break
												case 65: //left
																player.el.style.backgroundImage = `url(${player.sprites.left})`
																player.run = true
																player.side = 2
																break
												case 32: //shot
																addshot()
																break
								}

				})

				document.addEventListener('keyup', (e) => {

								if ([87,83,68,65].includes(e.keyCode))
												player.run = false

				})
}
function game() {
				init()
				controllers()
				intervals()
}
let gameZone = document.querySelector('.game-zone'),
				fps = 1000/60,
				player = {
								sprites: {
												top: 'tank.png',
												bottom: 'tankB.png',
												left: 'tankL.png',
												right: 'tankR.png',
								},
								x: 10,
								y: 10,
								el: false,
								step: 10,
								run: false,
								side: 4,
								w: 80,
								h: 80,
								map: map,
								f: true,
								player2: {
												x: 10,
												y: 10,
												run: false,
												side: 4
								},
								// chekposition: function () {
								// 				console.log(this.x,this.y)
								// 				return true
								// },
				},
				shotEl = {
								speed: 10,
								f: true,
								flag: 0
				},
				ints = {
								run: false,
								shot: false,
				}
game()
// if (palyer.x == 0) {
// // 				map[player.x + 1][player.y/80-1] right
// } else if(player.y == 0) {
// 				map[player.x/80][player.y] right
// } else{
// map[player.x/80][player.y/80-1] right
// }

// if (player.x == 0){
// 				map[player.x][player.y/80-1] left
// } else if (player.y == 0){
// 				map[player.x/80-2][player.y] left
// } else {
// 				map[player.x / 80 - 2][player.y / 80 - 1] left
// }

// if player.y == 0 {
// 				map[player.x/80-1][player.y/80 + 1] bottom
// } else if(player.x == 0) {
// 				map[player.x][player.y/80] bottom
// } else {
// 				map[player.x/80-1][player.y/80] bottom
// }

// if (player.y == 0) {
// 				true
// } else if (player.x == 0) {
// 				map[player.x][player.y/80-2] top
// } else {
// 				map[player.x/80-1][player.y/80-2] top
// }

