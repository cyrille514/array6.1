// Guardar los meses en un array de objetos
        const meses = [
            { numeroMes: 1, mesLetra: 'enero', numeroDias: 31 },
            { numeroMes: 2, mesLetra: 'febrero', numeroDias: 28 },
            { numeroMes: 3, mesLetra: 'marzo', numeroDias: 31 },
            { numeroMes: 4, mesLetra: 'abril', numeroDias: 30 },
            { numeroMes: 5, mesLetra: 'mayo', numeroDias: 31 },
            { numeroMes: 6, mesLetra: 'junio', numeroDias: 30 },
            { numeroMes: 7, mesLetra: 'julio', numeroDias: 31 },
            { numeroMes: 8, mesLetra: 'agosto', numeroDias: 31 },
            { numeroMes: 9, mesLetra: 'septiembre', numeroDias: 30 },
            { numeroMes: 10, mesLetra: 'octubre', numeroDias: 31 },
            { numeroMes: 11, mesLetra: 'noviembre', numeroDias: 30 },
            { numeroMes: 12, mesLetra: 'diciembre', numeroDias: 31 }
        ];
        function consultarMes() {
            //  Guardar el valor del usuario en la variable mesNumero
            const mesNumero = parseInt(document.getElementById('mesInput').value);
            const display = document.getElementById('resultado');

            //  Buscar el índice según las instrucciones
            const indice = meses.findIndex(mes => mes.numeroMes === mesNumero);

            //  Mostrar el mensaje
            if (indice !== -1) {
                const mesEncontrado = meses[indice];
                display.innerHTML = `El mes <strong>${mesEncontrado.numeroMes}</strong> se corresponde con <strong>${mesEncontrado.mesLetra}</strong> y tiene <strong>${mesEncontrado.numeroDias} días</strong>.`;
                display.classList.remove('hidden');
            } else {
                display.innerHTML = "Por favor, introduce un número válido entre 1 y 12.";
                display.classList.remove('hidden');
            }
        }