<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Alura MIDI</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap" rel="stylesheet">

    <link rel="icon" type="image/png" href="images/bateria.png">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/estilos.css">

</head>
<body>

    <h1>Alura Midi</h1>

    <section class="teclado">
        <button class="tecla tecla_pom">Pom</button>
        <button class="tecla tecla_clap">Clap</button>
        <button class="tecla tecla_tim">Tim</button>

        <button class="tecla tecla_puff">Puff</button>
        <button class="tecla tecla_splash">Splash</button>
        <button class="tecla tecla_toim">Toim</button>

        <button class="tecla tecla_psh">Psh</button>
        <button class="tecla tecla_tic">Tic</button>
        <button class="tecla tecla_tom">Tom</button>
    </section>

    <audio src="sounds/keyq.wav" id="som_tecla_pom"></audio> controls
    <audio src="sounds/keyw.wav" id="som_tecla_clap"></audio> controls
    <audio src="sounds/keye.wav" id="som_tecla_tim"></audio> controls
    <audio src="sounds/keya.wav" id="som_tecla_puff"></audio> controls
    <audio src="sounds/keys.wav" id="som_tecla_splash"></audio> controls
    <audio src="sounds/keyd.wav" id="som_tecla_toim"></audio> controls
    <audio src="sounds/keyz.wav" id="som_tecla_psh"></audio> controls
    <audio src="sounds/keyx.wav" id="som_tecla_tic"></audio> controls
    <audio src="sounds/keyc.wav" id="som_tecla_tom"></audio> controls

</body>
</html>
