// Espera a que la pala suba completamente
// Ejecutar el ciclo continuamente
basic.forever(function () {
    // 1. Ir hacia el objeto (avanzar por 2 segundos)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(2000)
    // Avanza durante 2 segundos
    // 2. Parar al llegar al objeto
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
    // Pausa breve
    // 3. Bajar la pala para recoger el objeto
    maqueen.servoRun(maqueen.Servos.S1, 120)
    // Baja la pala
    basic.pause(1000)
    // Espera a que la pala baje completamente
    // 4. Retroceder al punto de partida
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    basic.pause(2000)
    // Retrocede durante 2 segundos
    // 5. Parar al llegar al punto de partida
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(500)
    // 6. Levantar la pala para soltar el objeto
    maqueen.servoRun(maqueen.Servos.S1, 60)
    // Sube la pala
    basic.pause(1000)
})
