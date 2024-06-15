<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $accessKey = $_POST['accessKey']; // Chave de acesso
    $redirectTo = $_POST['unitechsolution.co.mz']; // Página para redirecionar após o envio do formulário
    $nome = $_POST['name']; // Nome do remetente
    $email = $_POST['email']; // Email do remetente
    $empresa = $_POST['empresa']; // Empresa do remetente
    $mensagem = $_POST['messagem']; // Mensagem do remetente

    // Configuração do email
    $to = "edsoncome81@gmail.com"; // Seu endereço de email
    $subject = "Novo contato recebido"; // Assunto do email
    $message = "Nome: $nome\nEmail: $email\nEmpresa: $empresa\nMensagem: $mensagem"; // Corpo do email

    // Enviando o email
    mail($to, $subject, $message);

    // Redirecionando após o envio do formulário
    header("Location: $redirectTo");
    exit;
}
?>
