$(function() {
	class Particle {
		constructor(x, y) {
			this.x = x
			this.y = y
			this.radius = 3
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
	
	let box_login_width = $('#box-login').width();
	let box_login_height = $('#box-login').height();
	
	$('#box-login').css({
		'top':((window_height/2)-(box_login_height/2))+'px',
		'left':((window_width/2)-(box_login_width/2))+'px'
	});
	
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
	const hasInteractMouse = false
	const canvas = document.getElementById("canvas-bg");
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
		ctx.fillStyle = "lightyellow";
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
		ctx.fill();
	}

	// 绘制粒子连线
	function drawLines(ctx) {
		ctx.strokeStyle = "blue";
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
	
	//通知画布
	const canvas_nt = document.getElementById("canvas-nt");
	//设置canvas铺满屏幕
	canvas_nt.setAttribute('width',($('form').innerWidth()));
	canvas_nt.setAttribute('height',($('form').innerHeight()));
	const ctx_nt = canvas_nt.getContext("2d");
	//定义通知
	const font_size_h = 25;//通知标题字体大小
	const font_size_w = 20;//通知内容字体大小
	const world_width = 20;
	const world_height = 20;
	writeMain();
	async function writeMain(){
		let texts = "您好!欢迎使用本公司智能云系统!请注意,系统将定期于每周日晚上午10:00-下午11:30进行更新维护,对此带来的不便希望您能谅解！";
		let x = 0;
		let y = 50;
		let n = Math.floor(canvas_nt.width/20)-1;
		console.log(n);
		while(true){
			ctx_nt.font = font_size_h+"px sans-serif";
			ctx_nt.save();
			ctx_nt.fillText("通知",(canvas_nt.width/2)-25,font_size_h);
			ctx_nt.restore();
			for(let i=0;i<texts.length;i++){
				await writeWorld(ctx_nt,x,y,texts[i],150);
				x+=20;
				if(i%n==0 && i!=0){
					x=0;
					y+=25;
				}
			}
			x=0;
			y=50;
			await sleep(5*1000);
			canvas_nt.width = canvas_nt.width;
		}
	}
	async function writeWorld(ctx_nt,x,y,text,duration){
		ctx_nt.font = font_size_w+"px sans-serif";
		ctx_nt.save();
		ctx_nt.fillText(text,x,y);
		ctx_nt.restore();
		await sleep(duration);
	}
	function sleep(duration){
		return new Promise(function(resolve,reject){
			setTimeout(resolve,duration);
		});
	}
	
});
