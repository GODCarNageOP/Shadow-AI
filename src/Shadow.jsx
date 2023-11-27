import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadLightInteraction } from 'tsparticles-interaction-light';

const Shadow = () => {
  async function LoadParticles(main) {
    await loadFull(main);
      loadLightInteraction(main);
  }

  useEffect(() => {
    LoadParticles('tsparticles');
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={LoadParticles}
      options={
      
        {
            "autoPlay": true,
            "background": {
              "color": {
                "value": "#000"
              },
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover",
              "opacity": 1
            },
            "backgroundMask": {
              "composite": "destination-out",
              "cover": {
                "color": {
                  "value": "#fff"
                },
                "opacity": 1
              },
              "enable": false
            },
            "defaultThemes": {},
            "delay": 0,
            "fullScreen": {
              "enable": true,
              "zIndex": -1
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 120,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": false,
                  "mode": "push"
                },
                "onHover": {
                  "enable": true,
                  "mode": "attract",
                  "parallax": {
                    "enable": false,
                    "force": 60,
                    "smooth": 10
                  }
                },
                "resize": {
                  "enable": true
                }
              },
              "modes": {
                "attract": {
                  "distance": 200,
                  "duration": 0.4,
                  "easing": "ease-out-quad",
                  "factor": 5,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "push": {
                  "default": true,
                  "quantity": 4
                },
                "light": {
                  "area": {
                    "gradient": {
                      "start": {
                        "value": "#ffffff"
                      },
                      "stop": {
                        "value": "#000000"
                      }
                    },
                    "radius": 1000
                  },
                  "shadow": {
                    "color": {
                      "value": "#000000"
                    },
                    "length": 2000
                  }
                }
              }
            },
            "manualParticles": [],
            "particles": {
              "bounce": {
                "horizontal": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                },
                "vertical": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                }
              },
              "collisions": {
                "absorb": {
                  "speed": 2
                },
                "bounce": {
                  "horizontal": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  },
                  "vertical": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0.1
                    },
                    "value": 1
                  }
                },
                "enable": false,
                "maxSpeed": 50,
                "mode": "bounce",
                "overlap": {
                  "enable": true,
                  "retries": 0
                }
              },
              "color": {
                "value": "#0080ff",
              },
              
              "groups": {},
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 90
                },
                "attract": {
                  "distance": 150,
                  "enable": false,
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "center": {
                  "x": 50,
                  "y": 50,
                  "mode": "percent",
                  "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 50
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "out",
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 2,
                "spin": {
                  "acceleration": 0,
                  "enable": false
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fill": {}
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": true,
                  "width": 1920,
                  "height": 1080
                },
                "limit": 0,
                "value": 230
              },
              "opacity": {
                "random": {
                  "enable": false,
                  "minimumValue": 1
                },
                "value": {
                  "min": 1,
                  "max": 1
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 3,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none",
                  "minimumValue": 0.1
                }
              },
              "reduceDuplicates": false,
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "close": true,
                "fill": true,
                "options": {},
                "type": "circle"
              },
              "size": {
                "random": {
                  "enable": true,
                  "minimumValue": 5
                },
                "value": {
                  "min": 5,
                  "max": 5
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 20,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none",
                  "minimumValue": 0.1
                }
              },
              "stroke": {
                "width": 0
              },
              "zIndex": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
              },
              "destroy": {
                "bounds": {},
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": 3
                  },
                  "rate": {
                    "random": {
                      "enable": false,
                      "minimumValue": 0
                    },
                    "value": {
                      "min": 4,
                      "max": 9
                    }
                  },
                  "sizeOffset": true,
                  "particles": {}
                }
              },
              "roll": {
                "darken": {
                  "enable": false,
                  "value": 0
                },
                "enable": false,
                "enlighten": {
                  "enable": false,
                  "value": 0
                },
                "mode": "vertical",
                "speed": 25
              },
              "tilt": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "enable": false
              },
              "twinkle": {
                "lines": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                },
                "particles": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                }
              },
              "wobble": {
                "distance": 5,
                "enable": false,
                "speed": {
                  "angle": 50,
                  "move": 10
                }
              },
              "life": {
                "count": 0,
                "delay": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0,
                  "sync": false
                },
                "duration": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.0001
                  },
                  "value": 0,
                  "sync": false
                }
              },
              "rotate": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "path": false
              },
              "orbit": {
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 45
                },
                "width": 1
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "#0080ff"
                },
                "consent": false,
                "distance": 150,
                "enable": true,
                "frequency": 1,
                "opacity": 1.5,
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 1.5,
                "warp": false
              },
              "repulse": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
              }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "smooth": false,
            "style": {},
            "themes": [],
            "zLayers": 100,
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            }
          }
      }
    />
  );
};

export default Shadow;
