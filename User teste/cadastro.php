<?php
    include("conexao.php");

    //recebe o formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $telefone = $_POST['telefone'];

    //Comando SQL
    $sql = "INSERT INTO usuario (nome, email, senha, telefone)
            VALUES (?, ?, ?, ?)";
    
    //statement
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("sssi", $nome, $email, $senha, $telefone);

    if ($stmt->execute()) {
        echo "Usuário cadastrado com sucesso!";
    } else {
        echo "Erro!" , $stmt->error;
    }

    $stmt->close();
    $conexao->close();
?>