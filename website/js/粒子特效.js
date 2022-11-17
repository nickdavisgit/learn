$(function() {
	class Particle {
		constructor(x, y) {
			this.x = x
			this.y = y
			this.radius = 0.8
			this.speedX = this._getRandomRange(-1, 1)
			this.speedY = this._getRandomRange(-1, 1)
		}

		draw(ctx) {
			ctx.moveTo(this.x, this.y)
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
		}

		updateCoordinate(x, y) {
			this.x = x
			this.y = y
			return this
		}

		_getRandomRange(min, max) {
			return Math.random() * (max - min) + min
		}
	}

	//获取窗口大小
	let window_width = $(window).innerWidth();
	let window_height = $(window).innerHeight();
	// 粒子集合
	let particles = []
	// 粒子数量
	const particleCount = 200
	// 鼠标位置对象
	let mouseOffset = null
	// 粒子画线的最小距离
	const minDistance = 100
	// 边界碰撞检测
	const collideDetect = true
	// 是否有鼠标交互
	const hasInteractMouse = true
	const canvas = document.querySelector('canvas')
	//设置canvas铺满屏幕
	canvas.setAttribute('width',window_width);
	canvas.setAttribute('height',window_height);
	const ctx = canvas.getContext('2d')
	createParticles()
	draw()
	handleCanvasEvent()

	function draw() {
		// 清空画布
		canvas.width = canvas.width
		drawParticles(ctx)
		ctx.lineWidth = 0.1
		drawLines(ctx)

		requestAnimationFrame(draw)
	}

	// 创建粒子对象
	function createParticles() {
		for (let index = 0; index < particleCount; index++) {
			particles.push(
				new Particle(
					getRandomRange(0, canvas.width),
					getRandomRange(0, canvas.height)
				)
			)
		}
	}

	// 将粒子对象画到画布上
	function drawParticles(ctx) {
		ctx.fillStyle = "green";
		ctx.beginPath()
		for (let index = 0; index < particles.length; index++) {
			const particle = particles[index]

			particle.draw(ctx)

			// 没有开启边界碰撞检测，越界的粒子,更新位置并保证其新位置不越界
			if (!collideDetect) {
				if (
					particle.x > canvas.width ||
					particle.x < 0 ||
					particle.y > canvas.height ||
			  particle.y < 0
				) {
					// 粒子直径
					const diameter = particle.radius * 2
					particle.updateCoordinate(
						getRandomRange(diameter, canvas.width - diameter),
						getRandomRange(diameter, canvas.height - diameter)
					)
				}
			} else {
				handleCollide(particle)
			}

			particle.x += particle.speedX
			particle.y += particle.speedY
		}
		ctx.stroke();
	}

	// 绘制粒子连线
	function drawLines(ctx) {
		ctx.strokeStyle = "aqua";
		ctx.beginPath()
		let arr = [...particles]
		mouseOffset && (arr = [mouseOffset].concat(arr))
		for (let index = 0; index < particles.length; index++) {
			const particle = particles[index]

			for (let j = arr.length - 1; j >= 0; j--) {
				const particle2 = arr[j]
				if (particle === particle2) {
					continue
				}
				const distance = calDistance(
					particle.x,
					particle2.x,
					particle.y,
			  particle2.y
				)
				if (distance < minDistance) {
					// 如果是鼠标，则让粒子向鼠标的位置移动,距离-10 保证粒子与鼠标之间的最小间距
					if (particle2 === mouseOffset && distance > minDistance - 10) {
						const xc = particle.x - particle2.x
						const yc = particle.y - particle2.y

						// 0.03 向鼠标坐标移动的速率
						particle.x -= xc * 0.03
						particle.y -= yc * 0.03
					}
					ctx.moveTo(particle.x, particle.y)
			 	ctx.lineTo(particle2.x, particle2.y)
				}
			}

			// 去掉重复比较
			arr.splice(arr.indexOf(particle), 1)
		}

		ctx.stroke()
	}

	// 粒子边界碰撞检测
	function handleCollide(particle) {
		if (
			(particle.speedX && particle.x + particle.radius > canvas.width) ||
			(particle.speedX < 0 && particle.x < particle.radius)
		) {
			particle.speedX *= -1
		}
		if (
			(particle.speedY > 0 &&
				particle.y + particle.radius >= canvas.height) ||
			(particle.speedY < 0 && particle.y <= particle.radius)
		) {
			particle.speedY *= -1
		}
	}

	// 处理canvas的事件
	function handleCanvasEvent() {
		if (hasInteractMouse) {
			canvas.onmousemove = function(e) {
				if (!mouseOffset) {
			  mouseOffset = {}
				}
				mouseOffset.x = e.offsetX
				mouseOffset.y = e.offsetY
			}
		}
	}

	function calDistance(x1, x2, y1, y2) {
		return Math.hypot(x1 - x2, y1 - y2)
	}

	function getRandomRange(min, max) {
		return Math.random() * (max - min) + min
	}
	
	
	
	
});
