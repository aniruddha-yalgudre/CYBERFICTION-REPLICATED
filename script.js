function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();




function canvas(){
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
canvas/0001.png 
canvas/0002.png 
canvas/0003.png 
canvas/0004.png 
canvas/0005.png 
canvas/0006.png 
canvas/0007.png 
canvas/0008.png 
canvas/0009.png 
canvas/0010.png 
canvas/0011.png 
canvas/0012.png 
canvas/0013.png 
canvas/0014.png 
canvas/0015.png 
canvas/0016.png 
canvas/0017.png 
canvas/0018.png 
canvas/0019.png 
canvas/0020.png 
canvas/0021.png 
canvas/0022.png 
canvas/0023.png 
canvas/0024.png 
canvas/0025.png 
canvas/0026.png 
canvas/0027.png 
canvas/0028.png 
canvas/0029.png 
canvas/0030.png 
canvas/0031.png 
canvas/0032.png 
canvas/0033.png 
canvas/0034.png 
canvas/0035.png 
canvas/0036.png 
canvas/0037.png 
canvas/0038.png 
canvas/0039.png 
canvas/0040.png 
canvas/0041.png 
canvas/0042.png 
canvas/0043.png 
canvas/0044.png 
canvas/0045.png 
canvas/0046.png 
canvas/0047.png 
canvas/0048.png 
canvas/0049.png 
canvas/0050.png 
canvas/0051.png 
canvas/0052.png 
canvas/0053.png 
canvas/0054.png 
canvas/0055.png 
canvas/0056.png 
canvas/0057.png 
canvas/0058.png 
canvas/0059.png 
canvas/0060.png 
canvas/0061.png 
canvas/0062.png 
canvas/0063.png 
canvas/0064.png 
canvas/0065.png 
canvas/0066.png 
canvas/0067.png 
canvas/0068.png 
canvas/0069.png 
canvas/0070.png 
canvas/0071.png 
canvas/0072.png 
canvas/0073.png 
canvas/0074.png 
canvas/0075.png 
canvas/0076.png 
canvas/0077.png 
canvas/0078.png 
canvas/0079.png 
canvas/0080.png 
canvas/0081.png 
canvas/0082.png 
canvas/0083.png 
canvas/0084.png 
canvas/0085.png 
canvas/0086.png 
canvas/0087.png 
canvas/0088.png 
canvas/0089.png 
canvas/0090.png 
canvas/0091.png 
canvas/0092.png 
canvas/0093.png 
canvas/0094.png 
canvas/0095.png 
canvas/0096.png 
canvas/0097.png 
canvas/0098.png 
canvas/0099.png 
canvas/0100.png 
canvas/0101.png 
canvas/0102.png 
canvas/0103.png 
canvas/0104.png 
canvas/0105.png 
canvas/0106.png 
canvas/0107.png 
canvas/0108.png 
canvas/0109.png 
canvas/0110.png 
canvas/0111.png 
canvas/0112.png 
canvas/0113.png 
canvas/0114.png 
canvas/0115.png 
canvas/0116.png 
canvas/0117.png 
canvas/0118.png 
canvas/0119.png 
canvas/0120.png 
canvas/0121.png 
canvas/0122.png 
canvas/0123.png 
canvas/0124.png 
canvas/0125.png 
canvas/0126.png 
canvas/0127.png 
canvas/0128.png 
canvas/0129.png 
canvas/0130.png 
canvas/0131.png 
canvas/0132.png 
canvas/0133.png 
canvas/0134.png 
canvas/0135.png 
canvas/0136.png 
canvas/0137.png 
canvas/0138.png 
canvas/0139.png 
canvas/0140.png 
canvas/0141.png 
canvas/0142.png 
canvas/0143.png 
canvas/0144.png 
canvas/0145.png 
canvas/0146.png 
canvas/0147.png 
canvas/0148.png 
canvas/0149.png 
canvas/0150.png 
canvas/0151.png 
canvas/0152.png 
canvas/0153.png 
canvas/0154.png 
canvas/0155.png 
canvas/0156.png 
canvas/0157.png 
canvas/0158.png 
canvas/0159.png 
canvas/0160.png 
canvas/0161.png 
canvas/0162.png 
canvas/0163.png 
canvas/0164.png 
canvas/0165.png 
canvas/0166.png 
canvas/0167.png 
canvas/0168.png 
canvas/0169.png 
canvas/0170.png 
canvas/0171.png 
canvas/0172.png 
canvas/0173.png 
canvas/0174.png 
canvas/0175.png 
canvas/0176.png 
canvas/0177.png 
canvas/0178.png 
canvas/0179.png 
canvas/0180.png 
canvas/0181.png 
canvas/0182.png 
canvas/0183.png 
canvas/0184.png 
canvas/0185.png 
canvas/0186.png 
canvas/0187.png 
canvas/0188.png 
canvas/0189.png 
canvas/0190.png 
canvas/0191.png 
canvas/0192.png 
canvas/0193.png 
canvas/0194.png 
canvas/0195.png 
canvas/0196.png 
canvas/0197.png 
canvas/0198.png 
canvas/0199.png 
canvas/0200.png 
canvas/0201.png 
canvas/0202.png 
canvas/0203.png 
canvas/0204.png 
canvas/0205.png 
canvas/0206.png 
canvas/0207.png 
canvas/0208.png 
canvas/0209.png 
canvas/0210.png 
canvas/0211.png 
canvas/0212.png 
canvas/0213.png 
canvas/0214.png 
canvas/0215.png 
canvas/0216.png 
canvas/0217.png 
canvas/0218.png 
canvas/0219.png 
canvas/0220.png 
canvas/0221.png 
canvas/0222.png 
canvas/0223.png 
canvas/0224.png 
canvas/0225.png 
canvas/0226.png 
canvas/0227.png 
canvas/0228.png 
canvas/0229.png 
canvas/0230.png 
canvas/0231.png 
canvas/0232.png 
canvas/0233.png 
canvas/0234.png 
canvas/0235.png 
canvas/0236.png 
canvas/0237.png 
canvas/0238.png 
canvas/0239.png 
canvas/0240.png 
canvas/0241.png 
canvas/0242.png 
canvas/0243.png 
canvas/0244.png 
canvas/0245.png 
canvas/0246.png 
canvas/0247.png 
canvas/0248.png 
canvas/0249.png 
canvas/0250.png 
canvas/0251.png 
canvas/0252.png 
canvas/0253.png 
canvas/0254.png 
canvas/0255.png 
canvas/0256.png 
canvas/0257.png 
canvas/0258.png 
canvas/0259.png 
canvas/0260.png 
canvas/0261.png 
canvas/0262.png 
canvas/0263.png 
canvas/0264.png 
canvas/0265.png 
canvas/0266.png 
canvas/0267.png 
canvas/0268.png 
canvas/0269.png 
canvas/0270.png 
canvas/0271.png 
canvas/0272.png 
canvas/0273.png 
canvas/0274.png 
canvas/0275.png 
canvas/0276.png 
canvas/0277.png 
canvas/0278.png 
canvas/0279.png 
canvas/0280.png 
canvas/0281.png 
canvas/0282.png 
canvas/0283.png 
canvas/0284.png 
canvas/0285.png 
canvas/0286.png 
canvas/0287.png 
canvas/0288.png 
canvas/0289.png 
canvas/0290.png 
canvas/0291.png 
canvas/0292.png 
canvas/0293.png 
canvas/0294.png 
canvas/0295.png 
canvas/0296.png 
canvas/0297.png 
canvas/0298.png 
canvas/0299.png 
canvas/0300.png 
canvas/0301.png 
canvas/0302.png 
canvas/0303.png 
canvas/0304.png 
canvas/0305.png 
canvas/0306.png 
canvas/0307.png 
canvas/0308.png 
canvas/0309.png 
canvas/0310.png 
canvas/0311.png 
canvas/0312.png 
canvas/0313.png 
canvas/0314.png 
canvas/0315.png 
canvas/0316.png 
canvas/0317.png 
canvas/0318.png 
canvas/0319.png 
canvas/0320.png 
canvas/0321.png 
canvas/0322.png 
canvas/0323.png 
canvas/0324.png 
canvas/0325.png
canvas/0326.png 
canvas/0327.png 
canvas/0328.png 
canvas/0329.png 
canvas/0330.png 
canvas/0331.png 
canvas/0332.png 
canvas/0333.png 
canvas/0334.png 
canvas/0335.png 
canvas/0336.png 
canvas/0337.png 
canvas/0338.png 
canvas/0339.png 
canvas/0340.png 
canvas/0341.png 
canvas/0342.png 
canvas/0343.png 
canvas/0344.png 
canvas/0345.png 
canvas/0346.png 
canvas/0347.png 
canvas/0348.png 
canvas/0349.png 
canvas/0350.png 
canvas/0351.png 
canvas/0352.png 
canvas/0353.png 
canvas/0354.png 
canvas/0355.png 
canvas/0356.png 
canvas/0357.png 
canvas/0358.png 
canvas/0359.png 
canvas/0360.png 
canvas/0361.png 
canvas/0362.png 
canvas/0363.png 
canvas/0364.png 
canvas/0365.png 
canvas/0366.png 
canvas/0367.png 
canvas/0368.png 
canvas/0369.png 
canvas/0370.png 
canvas/0371.png 
canvas/0372.png 
canvas/0373.png 
canvas/0374.png 
canvas/0375.png 
canvas/0376.png 
canvas/0377.png 
canvas/0378.png 
canvas/0379.png 
canvas/0380.png 
canvas/0381.png 
canvas/0382.png 
canvas/0383.png 
canvas/0384.png 
canvas/0385.png 
canvas/0386.png 
canvas/0387.png 
canvas/0388.png 
canvas/0389.png 
canvas/0390.png 
canvas/0391.png 
canvas/0392.png 
canvas/0393.png 
canvas/0394.png 
canvas/0395.png 
canvas/0396.png 
canvas/0397.png 
canvas/0398.png 
canvas/0399.png 
canvas/0400.png 
canvas/0401.png 
canvas/0402.png 
canvas/0403.png 
canvas/0404.png 
canvas/0405.png 
canvas/0406.png 
canvas/0407.png 
canvas/0408.png 
canvas/0409.png 
canvas/0410.png 
canvas/0411.png 
canvas/0412.png 
canvas/0413.png 
canvas/0414.png 
canvas/0415.png 
canvas/0416.png 
canvas/0417.png 
canvas/0418.png 
canvas/0419.png 
canvas/0420.png 
canvas/0421.png 
canvas/0422.png 
canvas/0423.png 
canvas/0424.png 
canvas/0425.png 
canvas/0426.png 
canvas/0427.png 
canvas/0428.png 
canvas/0429.png 
canvas/0430.png 
canvas/0431.png 
canvas/0432.png 
canvas/0433.png 
canvas/0434.png 
canvas/0435.png 
canvas/0436.png 
canvas/0437.png 
canvas/0438.png 
canvas/0439.png 
canvas/0440.png 
canvas/0441.png 
canvas/0442.png 
canvas/0443.png 
canvas/0444.png 
canvas/0445.png 
canvas/0446.png 
canvas/0447.png 
canvas/0448.png 
canvas/0449.png 
canvas/0450.png 
canvas/0451.png 
canvas/0452.png 
canvas/0453.png 
canvas/0454.png 
canvas/0455.png 
canvas/0456.png 
canvas/0457.png 
canvas/0458.png 
canvas/0459.png 
canvas/0460.png 
canvas/0461.png 
canvas/0462.png 
canvas/0463.png 
canvas/0464.png 
canvas/0465.png 
canvas/0466.png 
canvas/0467.png 
canvas/0468.png 
canvas/0469.png


  `;
  return data.split("\n")[index];
}

const frameCount = 469;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.35,
    trigger: `#page1`,
    //   set start end according to preference
    start: `top top`,
    end: `340% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page1>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `400% top`,
});

}

canvas();