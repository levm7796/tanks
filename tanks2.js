function init() {
				gameZone.innerHTML += `<div class="player" style="left: ${player.x}px; top: ${player.y}px"></div>`
				gameZone.innerHTML += `<div class="player2" style="left: ${player2.x}px; top: ${player2.y}px"></div>`
				shot = document.querySelector('.shot')
				// shot.forEach(elem => {
				// 				shot2.forEach(elem2=>{
				// 								console.log(elem2)
				// 								console.log(elem)
				// 				})
				// })
}
function MathMul (num,mul) {
				return Math.round(num/mul)*mul
}
function MathMulFloor (num,mul) {
				return Math.floor(num/mul)*mul
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
// 				[0,0,0,0,0,0,0,0,0,0]
// ]

function intervals() {
				console.log(player2.run)
				ints.run = setInterval(() => {
								if (player2.run) {
												switch (player2.side) {
																case 6: //top
																				// debugger
																				if (player2.y > 0) {
																								player2.f = true
																								if (player2.y % 80 == 0) {
																												console.log('нажали кнопку вверх, деление на 80 равно 0')
																												if (player2.y == 0) {
																																player2.f = false

																												} else if (player2.x == 0) {
																																let arrCoordY2 = player2.y / 80 - 2
																																if (arrCoordY2 < 0) {
																																				arrCoordY2 = 0
																																}
																																if (player.map[arrCoordY2][Math.round(player2.x)] == 1 || player.map[arrCoordY2][Math.round(player2.x)] == 2) {
																																				player.f = false
																																				console.log('направление вверх - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player2.y / 80 == 1) {
																																if (player.map[player2.y / 80 - 1][Math.round(player2.x / 80 - 1)] == 1 || player.map[player2.y / 80 - 1][Math.round(player2.x / 80 - 1)] == 2) {
																																				player2.f = false
																																				console.log('направление вверх - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[player2.y / 80 - 1][Math.round(player2.x / 80)] == 1 || player.map[player2.y / 80 - 1][Math.round(player2.x / 80)] == 2) {
																																				player2.f = false
																																				console.log('направление вверх - ВРЕЗАЛСЯ!!!')
																																				console.log(player2.y / 80 - 1 + ' ' + Math.round(player2.x / 80))
																																}
																												}
																								}
																								if (!player2.f) {
																												break
																								}
																								player2.y -= player.step
																								player2.el.style.top = `${player2.y}px`

																				}
																				break
																case 8: //bottom
																				if (player2.y < 800 - player.h) {
																								player2.f = true
																								if (player2.y % 80 == 0) {
																												console.log('нажали кнопку вниз, деление на 80 равно 0')
																												if (player2.y == 0 && player2.x == 0) {
																																if (player.map[1][0] == 1 || player.map[1][0] == 2) {
																																				player2.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player2.y == 0) {
																																if (player.map[player2.y / 80][Math.round(player2.x / 80)] == 1 || player.map[player2.y / 80][Math.round(player2.x / 80)] == 2) {
																																				player2.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player2.x == 0) {
																																if (player.map[player2.y / 80][Math.round(player2.x)] == 1 || player.map[player2.y / 80][Math.round(player2.x)] == 2) {
																																				player2.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[Number(player2.y / 80 + 1)][Math.round(player2.x / 80)] == 1 || player.map[Number(player2.y / 80 + 1)][Math.round(player2.x / 80)] == 2) {
																																				player2.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																				console.log(Math.round(player2.x / 80), Number(player2.y / 80) + 1)
																																}
																												}
																								}
																								if (!player2.f) {
																												break
																								}
																								player2.y += player.step
																								player2.el.style.top = `${player2.y}px`
																				}
																				break
																case 5: //left
																				if (player2.x > 0) {
																								player2.f = true
																								if (player2.x % 80 == 0) {
																												console.log('нажали кнопку влево, деление на 80 равно 0')
																												if (player2.x == 0) {
																																if (player.map[Math.round(player2.y / 80 - 1)][player2.x] == 1 || player.map[Math.round(player2.y / 80 - 1)][player2.x] == 2) {
																																				player2.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player2.y == 0) {
																																if (player.map[Math.round(player2.y)][player2.x / 80 - 1] == 1 || player.map[Math.round(player2.y)][player2.x / 80 - 1] == 2) {
																																				player2.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[Math.round(player2.y / 80)][player2.x / 80 - 1] == 1 || player.map[Math.round(player2.y / 80)][player2.x / 80 - 1] == 2) {
																																				player2.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																				console.log(Math.round(player.y / 80), player.x / 80 - 1)
																																}
																												}
																								}
																								if (!player2.f) {
																												break
																								}
																								player2.x -= player.step
																								player2.el.style.left = `${player2.x}px`
																				}
																				break
																case 7: //right
																				// debugger
																				if (player2.x < gameZone.getBoundingClientRect().right - player.w - 6) {
																								player2.f = true
																								if (player2.x % 80 == 0) {
																												console.log('нажали кнопку вправо, деление на 80 равно 0')
																												if (player2.x == 0) {
																																let arrCoordY = player2.y / 80 - 1
																																if (arrCoordY < 0) {
																																				arrCoordY = 0
																																}
																																if (player.map[Math.round(arrCoordY)][Number(player2.x / 80) + 1] == 1 || player.map[Math.round(arrCoordY)][Number(player2.x / 80) + 1] == 2) {
																																				player2.f = false
																																				console.log('направление вправо - ВРЕЗАЛСЯ!!!')
																																}
																												}
																												if (player2.y == 0 && player2.x == 0) {
																																if (player.map[0][1] == 1) {
																																				player2.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player2.y == 0) {
																																if (player.map[Math.round(player2.y)][player2.x / 80 + 1] == 1 || player.map[Math.round(player2.y)][player2.x / 80 + 1] == 2) {
																																				player2.f = false
																																				console.log('направление вправо - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																// console.log('x:'+player.x/ 80 -3)
																																// console.log('y:'+Math.round(player.y / 80 - 1))
																																if (player.map[Math.round(player2.y / 80)][player2.x / 80 + 1] == 1 || player.map[Math.round(player2.y / 80)][player2.x / 80 + 1] == 2) {
																																				player2.f = false
																																				console.log('направление вправо - ВРЕЗАЛСЯ!!!')
																																				console.log(Math.round(player2.y / 80), player2.x / 80 + 1)
																																}
																												}
																								}
																								if (!player2.f) {
																												break
																								}
																								player2.x += player.step
																								player2.el.style.left = `${player2.x}px`
																				}
																				break
												}
								}

				}, fps)
				console.log(player.run)
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
																																if (player.map[arrCoordY2][Math.round(player.x)] == 1 || player.map[arrCoordY2][Math.round(player.x)] == 2) {
																																				player.f = false
																																				console.log('направление вверх - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.y / 80 == 1) {
																																if (player.map[player.y / 80 - 1][Math.round(player.x / 80 - 1)] == 1 || player.map[player.y / 80 - 1][Math.round(player.x / 80 - 1)] == 2) {
																																				player.f = false
																																				console.log('направление вверх - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[player.y / 80 - 1][Math.round(player.x / 80)] == 1 || player.map[player.y / 80 - 1][Math.round(player.x / 80)] == 2) {
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
																																if (player.map[1][0] == 1 || player.map[1][0] == 2) {
																																				player.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.y == 0) {
																																if (player.map[player.y / 80][Math.round(player.x / 80)] == 1 || player.map[player.y / 80][Math.round(player.x / 80)] == 2) {
																																				player.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.x == 0) {
																																if (player.map[player.y / 80][Math.round(player.x)] == 1 || player.map[player.y / 80][Math.round(player.x)] == 2) {
																																				player.f = false
																																				console.log('направление вниз - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[Number(player.y / 80 + 1)][Math.round(player.x / 80)] == 1 || player.map[Number(player.y / 80 + 1)][Math.round(player.x / 80)] == 2) {
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
																																if (player.map[Math.round(player.y / 80 - 1)][player.x] == 1 || player.map[Math.round(player.y / 80 - 1)][player.x] == 2) {
																																				player.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																}
																												} else if (player.y == 0) {
																																if (player.map[Math.round(player.y)][player.x / 80 - 1] == 1 || player.map[Math.round(player.y)][player.x / 80 - 1] == 2) {
																																				player.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																if (player.map[Math.round(player.y / 80)][player.x / 80 - 1] == 1 || player.map[Math.round(player.y / 80)][player.x / 80 - 1] == 2) {
																																				player.f = false
																																				console.log('направление лево - ВРЕЗАЛСЯ!!!')
																																				console.log(Math.round(player.y / 80), player.x / 80 - 1)
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
																				// debugger
																				if (player.x < gameZone.getBoundingClientRect().right - player.w - 6) {
																								player.f = true
																								if (player.x % 80 == 0) {
																												console.log('нажали кнопку вправо, деление на 80 равно 0')
																												if (player.x == 0) {
																																let arrCoordY = player.y / 80 - 1
																																if (arrCoordY < 0) {
																																				arrCoordY = 0
																																}
																																if (player.map[Math.round(arrCoordY)][Number(player.x / 80) + 1] == 1 || player.map[Math.round(arrCoordY)][Number(player.x / 80) + 1] == 2) {
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
																																if (player.map[Math.round(player.y)][player.x / 80 + 1] == 1 || player.map[Math.round(player.y)][player.x / 80 + 1] == 2) {
																																				player.f = false
																																				console.log('направление вправо - ВРЕЗАЛСЯ!!!')
																																}
																												} else {
																																// console.log('x:'+player.x/ 80 -3)
																																// console.log('y:'+Math.round(player.y / 80 - 1))
																																if (player.map[Math.round(player.y / 80)][player.x / 80 + 1] == 1 || player.map[Math.round(player.y / 80)][player.x / 80 + 1] == 2) {
																																				player.f = false
																																				console.log('направление вправо - ВРЕЗАЛСЯ!!!')
																																				console.log(Math.round(player.y / 80), player.x / 80 + 1)
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
				ints.shot = setInterval(() => {
								// console.log('ints shot')
								player.el = document.querySelector('.player')
								player2.el = document.querySelector('.player2')

								// if(
								// 				shots.forEach((shot1) => {})&&
								// 				shots2.forEach((shot2) => {})
								// ) {
								// 				shots.forEach((shot1) => {
								// 								shots2.forEach((shot3) => {
								// 												shotEl.DS = 1
								// 								shotTRBL2(shot1,shot3)
								// 								})
								// 				})
								// } else if (shots.forEach((shot1) => {})) {
								// 				shots.forEach((shot1) => {
								// 								shotEl.DS = 0
								// 												shotTRBL(shot1,shotEl.DS)
								// 								})
								// }

								// if(
								// 				shot &&
								// 				shot2
								// ) {
								// 												shotTRBL(shot)
								// 												shotTRBL(shot2)
								// 												doubleshot(shot,shot2)
								// 												console.log('shot 1,2')
								// }else if (shot) {
								// 								shotTRBL(shot)
								// 								console.log('shot 1')
								// }else if (shot2) {
								// 								shotTRBL(shot2)
								// 								console.log('shot 2')
								// }
								// 				function shotTRBL(shot) {
																// console.log('func shotTRBL')
					           function shotex(shot,shot2) {
																		let direstion = shot.getAttribute('direction')
																		switch (direstion) {
																			case 'top':
																				// debugger
																				if (shot) {
																					if (Math.round(shot.getBoundingClientRect().top) < 0) {
																						shot.parentNode.removeChild(shot)
																					} else {
																						shotEl.f = true
																						let ay = (MathMul(shot.getBoundingClientRect().top - 48.5, 80) / 80) + 1
																						if (MathMul(shot.getBoundingClientRect().top, 80) % 80 == 0) {
																							if (ay == 0) {
																								shotEl.f = false
																							} else {
																								ay = ay - 1
																							}
																							console.log(ay)
																							exam(ay, MathMul(shot.getBoundingClientRect().left - 40, 80) / 80)
																						}
																						console.log('shot y:' + MathMul(shot.getBoundingClientRect().top, 80), 'shot x:' + MathMul(shot.getBoundingClientRect().left, 80))
																						console.log('tank y:' + MathMul(player2.y, 80), 'tank x:' + MathMul(player2.x, 80))
																						if (shotEl.DS) {
																							doubleshot(shot, shot2, shot.getBoundingClientRect().left, shot.getBoundingClientRect().top,
																								shot2.getBoundingClientRect().left, shot2.getBoundingClientRect().top)
																						}
																						if (shot) {
																							kill(shot.getBoundingClientRect().top, shot.getBoundingClientRect().left, shot)
																							if (shotEl.f) {
																								shot.style.top = shot.getBoundingClientRect().top - (shotEl.speed + 5) + 'px'
																								console.log(ay, MathMul(shot.getBoundingClientRect().left, 80) / 80)
																								// console.log('wall: '+player.map[ay][MathMul(shot.getBoundingClientRect().left,80)/80])
																							} else {
																								// let timerId = setInterval(()=> shot.style.top = MathMul(shot.getBoundingClientRect().top,10) - (shotEl.speed + 5) + 'px',1000)
																								// setTimeout(() => { clearInterval(timerId)}, 10000)
																								// console.log('wall: '+player.map[ay][MathMul(shot.getBoundingClientRect().left,80)/80])
																								if (player.map[ay][MathMul(shot.getBoundingClientRect().left - 40, 80) / 80] == 1) {
																									if (ay !== 0) {
																										wallinv(String(ay) + MathMul(shot.getBoundingClientRect().left - 40, 80) / 80, ay, MathMul(shot.getBoundingClientRect().left - 40, 80) / 80)
																									}
																								} else if (player.map[ay][MathMul(shot.getBoundingClientRect().left - 40, 80) / 80] == 2) {
																									walldel(String(ay) + MathMul(shot.getBoundingClientRect().left - 40, 80) / 80, ay, MathMul(shot.getBoundingClientRect().left - 40, 80) / 80)
																								}
																								shot.parentNode.removeChild(shot)
																								console.log('пуля врезалась')
																							}
																						}
																					}
																				}
																				break
																			

																			case 'right':
																				// debugger
																				if (shot.getBoundingClientRect().right > gameZone.getBoundingClientRect().width) {
																					shot.parentNode.removeChild(shot)
																				} else {
																					shotEl.f = true
																					let ax = (MathMul(shot.getBoundingClientRect().left, 80) / 80) - 1
																					if (MathMul(shot.getBoundingClientRect().left, 20) % 80 == 0) {
																						if (ax == 9) {
																							shotEl.f = false
																						}
																						console.log(ax)
																						exam(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax + 1)
																					}
																					if (shotEl.DS) {
																						doubleshot(shot, shot2, shot.getBoundingClientRect().left, shot.getBoundingClientRect().top,
																							shot2.getBoundingClientRect().left, shot2.getBoundingClientRect().top)
																					}
																					if (shot) {
																						kill(shot.getBoundingClientRect().top, shot.getBoundingClientRect().left - 15, shot)
																						if (shotEl.f) {
																							shot.style.left = shot.getBoundingClientRect().right - (shotEl.speed) + 'px'
																							console.log('shot y: ' + MathMulFloor(shot.getBoundingClientRect().top, 80))
																							console.log('shot x: ' + MathMulFloor(shot.getBoundingClientRect().left, 80))

																							console.log('tank y: ' + MathMulFloor(player2.y, 80))
																							console.log('tank x: ' + MathMulFloor(player2.x, 80))
																							// console.log('shot x: ' + MathMul(shot.getBoundingClientRect().left,10))
																						} else {
																							if (player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax + 1] == 1) {
																								console.log(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax + 1)
																								wallinv(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax + 1), MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax + 1)
																								console.log('inv')
																								console.log('invmap' + player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax + 1])
																							} else if (player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax + 1] == 2) {
																								walldel(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax + 1), MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax + 1)
																								console.log(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax + 1), MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax + 1)
																								console.log('del')
																							}
																							// console.log('wall: '+player.map[ay][MathMul(shot.getBoundingClientRect().left,80)/80])
																							shot.parentNode.removeChild(shot)
																							console.log('пуля врезалась')
																						}
																					}
																				}

																				break

																			case 'bottom':
																				if (shot) {
																					if (shot.getBoundingClientRect().bottom > gameZone.getBoundingClientRect().height) {
																						shot.parentNode.removeChild(shot)
																						console.log('пуля вниз врезалась')
																					} else {
																						shotEl.f = true
																						let ay = (MathMul(shot.getBoundingClientRect().top + 60, 80) / 80) - 2
																						if (MathMul(shot.getBoundingClientRect().top, 80) % 80 == 0) {
																							if (ay == 9) {
																								shotEl.f = false
																							} else {
																								ay = ay + 1
																								console.log(ay)
																								exam(ay, MathMul(shot.getBoundingClientRect().left - 40, 80) / 80)
																							}
																							if (shotEl.DS) {
																								doubleshot(shot, shot2, shot.getBoundingClientRect().left, shot.getBoundingClientRect().top,
																									shot2.getBoundingClientRect().left, shot2.getBoundingClientRect().top)
																							}
																							if (shot) {
																								kill(shot.getBoundingClientRect().top - 15, shot.getBoundingClientRect().left, shot)
																								if (shotEl.f) {
																									shot.style.top = shot.getBoundingClientRect().top + (shotEl.speed) + 'px'

																								} else {
																									// player.map[ay][MathMul(shot.getBoundingClientRect().left-40,80)/80] = 0
																									// console.log(ay,MathMul(shot.getBoundingClientRect().left-40,80)/80)
																									// console.log('wall: '+player.map[ay][MathMul(shot.getBoundingClientRect().left,80)/80])
																									if (player.map[ay][MathMul(shot.getBoundingClientRect().left - 40, 80) / 80] == 1) {
																										if (ay !== 9) {
																											wallinv(String(ay) + MathMul(shot.getBoundingClientRect().left - 40, 80) / 80, ay, MathMul(shot.getBoundingClientRect().left - 40, 80) / 80)
																										}
																									} else if (player.map[ay][MathMul(shot.getBoundingClientRect().left - 40, 80) / 80] == 2) {
																										walldel(String(ay) + MathMul(shot.getBoundingClientRect().left - 40, 80) / 80, ay, MathMul(shot.getBoundingClientRect().left - 40, 80) / 80)
																									}
																									shot.parentNode.removeChild(shot)
																									console.log('пуля врезалась')
																								}
																							}
																						}
																					}
																				}
																				break
																			case 'left':
																				// debugger
																				if (shot.getBoundingClientRect().left < 0) {
																					shot.parentNode.removeChild(shot)
																				} else {
																					shotEl.f = true
																					let ax = (MathMul(shot.getBoundingClientRect().left, 80) / 80)
																					if (MathMul(shot.getBoundingClientRect().left + 5, 20) % 80 == 0) {
																						// if (ax == 0) {shotEl.f = false}
																						ax = ax - 1
																						console.log(ax)
																						exam(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax)
																					}
																					if (shotEl.DS) {
																						doubleshot(shot, shot2, shot.getBoundingClientRect().left, shot.getBoundingClientRect().top,
																							shot2.getBoundingClientRect().left, shot2.getBoundingClientRect().top)
																					}
																					if (shot) {
																						kill(shot.getBoundingClientRect().top, shot.getBoundingClientRect().left - 20, shot)
																						if (shotEl.f) {
																							shot.style.left = shot.getBoundingClientRect().left - (shotEl.speed + 5) + 'px'
																						} else {
																							if (player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax] == 1) {
																								wallinv(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax), MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax)
																							} else if (player.map[MathMul(shot.getBoundingClientRect().top - 40, 80) / 80][ax] == 2) {
																								walldel(MathMul(shot.getBoundingClientRect().top - 40, 80) / 80 + String(ax), MathMul(shot.getBoundingClientRect().top - 40, 80) / 80, ax)
																							}
																							shot.parentNode.removeChild(shot)
																							console.log('пуля врезалась')
																						}
																					}
																				}
																				break
																		}
																	}
				if (document.querySelector('.shot') && document.querySelector('.shottwo')) {
					let shot2 = document.querySelector('.shottwo')
		let shot = document.querySelector('.shot')
		shotEl.DS = true
		shotex(shot, shot2)
		shotex(shot2, shot)
		console.log('shot12')
	}  else if (document.querySelector('.shot')) {
						let shot = document.querySelector('.shot')
						shotEl.DS = false
						shotex(shot,1)
						console.log('shot')
					}
				else	if (document.querySelector('.shottwo')) {
						let shot2 = document.querySelector('.shottwo')
						shotEl.DS = false
						shotex(shot2)
						console.log('shot2')
					}

								function kill(y, x, shot) {
												if (shotEl.shotp == 1) {
																if (MathMulFloor(y, 80) == MathMulFloor(player2.y, 80) && MathMulFloor(x, 80) == MathMulFloor(player2.x, 80)) {
																				if (player2.el) {
																								player2.el.parentNode.removeChild(player2.el)
																								shot.parentNode.removeChild(shot)
																				}
																}
												}
												if (shotEl.shotp == 2) {
																if (MathMulFloor(y, 80) == MathMulFloor(player.y, 80) && MathMulFloor(x, 80) == MathMulFloor(player.x, 80)) {
																				if (player.el) {
																								player.el.parentNode.removeChild(player.el)
																								shot.parentNode.removeChild(shot)
																				}
																}
												}
								}
								function doubleshot(shot,shot2,x,y,x2,y2) {
												if (MathMulFloor(x, 10) == MathMulFloor(x2, 10)&&MathMulFloor(y, 10) == MathMulFloor(y2, 10)) {
													if (shot) {
														shot.parentNode.removeChild(shot)
													}
																if (shot2) {
																	shot2.parentNode.removeChild(shot2)
																}
												}
								}

								function wallinv(walla, y, x) {
												let currentwall = document.getElementById(walla)
												console.log(walla)
												currentwall.style.backgroundImage = "url('invalidWall.png')"
												player.map[y][x] = 2
												console.log('map:' + player.map[y][x])
												console.log(map)
												console.log(y, x)
								}

								function walldel(walla, y, x) {
												let currentwall = document.getElementById(walla)
												console.log(walla)
												currentwall.parentNode.removeChild(currentwall)
												player.map[y][x] = 0
								}

								function exam(y, x) {
												console.log('функция (exam) сработала')
												// console.log(MathMul(shot.getBoundingClientRect().top))
												if (player.map[y][x] == 1 || player.map[y][x] == 2) {
																shotEl.f = false
												}
								}
				},fps)
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


}

function addshot2() {
				switch (player2.side) {
								case 6:
												gameZone.innerHTML += `<div class="shottwo" direction="top" style="left: ${(player2.x + (player.w/2)) - 8}px; top: ${player2.y - 16}px"></div>`
												break
								case 5:
												gameZone.innerHTML += `<div class="shottwo" direction="left" style="left: ${player2.x + player.w - 95}px; top: ${player2.y + 34}px"></div>`
												break
								case 8:
												gameZone.innerHTML += `<div class="shottwo" direction="bottom" style="left: ${(player2.x + (player.w/2)) - 8}px; top: ${player2.y + 83}px"></div>`
												break
								case 7:
												gameZone.innerHTML += `<div class="shottwo" direction="right" style="left: ${player2.x + player.w}px; top: ${player2.y + 33}px"></div>`
												break
				}
}
function controllers() {

				document.addEventListener('keydown', (e) => {
								console.log(e.keyCode)

								switch (e.keyCode) {
												case 87: //top
																console.log(player.sprites.top)
																console.log(player.el)
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
																if (player.el) {
																	if(!document.querySelector('.shot')) {
																		shotEl.shotp = 1
																		addshot()
																	}
																}
																break

												case 37: //left2
																player2.el.style.backgroundImage = `url(${player2.sprites.left})`
																player2.run = true
																player2.side = 5
																break
												case 38: //top2
																player2.el.style.backgroundImage = `url(${player2.sprites.top})`
																player2.run = true
																player2.side = 6
																break
												case 39: //right2
																player2.el.style.backgroundImage = `url(${player2.sprites.right})`
																player2.run = true
																player2.side = 7
																break
												case 40: //bottom2
																player2.el.style.backgroundImage = `url(${player2.sprites.bottom})`
																player2.run = true
																player2.side = 8
																break
												case 45: //shot2
																if (player2.el) {
																	if(!document.querySelector('.shottwo')) {
																		shotEl.shotp = 2
																		addshot2()
																	}
																}
																break
								}

				})

				document.addEventListener('keyup', (e) => {

								if ([87,83,68,65].includes(e.keyCode))
												player.run = false

				})
				document.addEventListener('keyup', (e) => {

								if ([37,38,39,40].includes(e.keyCode))
												player2.run = false

				})
}
function game() {
				init()
				controllers()
				intervals()
}


				let fps = 1000/60,
					gameZone = document.querySelector('.game-zone'),
				player2 = {
								x: 10,
								y: 10,
								run: false,
								side: 8,
								f: true,
								el:false,
								sprites: {
												top: 'tank2.png',
												bottom: 'tank2B.png',
												left: 'tank2L.png',
												right: 'tank2R.png'
								}
				},
				player = {
								sprites: {
												top: 'tank.png',
												bottom: 'tankB.png',
												left: 'tankL.png',
												right: 'tankR.png'
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
								f: true
								// chekposition: function () {
								// 				console.log(this.x,this.y)
								// 				return true
								// },
				},
				shotEl = {
				    speed: 10,
								f: true,
								flag: 0,
								DS: false,
					   shotp: 0
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

