<?php
    //Conexão com o SQL
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $banco = "cadastro_usuario"; //Nome do BD

    //Conexão
    $conexao = new mysqli(hostname: $servidor, username: $usuario, password: $senha, database: $banco);

    //verficando conexão
    if ($conexao->connect_error) {
        die("Erro na conexão: " . $conexao->connect_error);
    }
?>