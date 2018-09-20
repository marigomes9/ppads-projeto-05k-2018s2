# Casos de uso

## CDU001 - Criar Nova Lista de Tarefas
Fluxo Principal
  1. usuario pressiona o botão "criar nova lista" em seu perfil
  2. sistema solicita o nome que o usuario deseja dar a lista e o tempo de duração.
  3. sistema cria a lista, e apresenta para o usuario.
  4. usuario insere uma tarefa por vez, e apos inserir cada tarefa define um tempo limite para finaliza-la.
  5. apos o usuario inserir todas as tarefas, ele deve confirmar a lista.
  6. apos a confirmação do usuario, o sistema exibe a lista com todas as tarefas registradas pelo usuario e o tempo de cada tarefa começa a ser decrementado.
  
Fluxo Alternativo 3b

  1. usuario clica no botão 'cancelar criação de lista'
  2. sistema exibe janela para confirmação do cancelamento
  3. usuario confirma a opção 'cancelar'
  4. sistema exibe tela inicial
  
Fluxo Alternativo 4b

  1. usuario insere uma tarefa por vez, e inativa a opção de definição de tempo limite para finaliza-la
  2. apos o usuario inserir todas as tarefas, ele deve confirmar a lista.
  3. retorna ao passo 6 do fluxo principal. 
  
## CDU002 - Alterar Lista
Fluxo Principal
  1. apos a criação da lista (CDU002), o sistema apresentara a lista com a opção de "editar lista"
  2. usario pressiona o botão "editar lista".
  3. sistema mostra a lista para ser editada como por exemplo, alteração de tarefas ou tempo, e adição de novas tarefas.
  4. usuario realiza todas as alterações que deseja e pressiona o botão "confirmar".
  5. sistema valida as informações e apresenta a nova lista.


## CDU003 - Remover Lista
 Fluxo Principal
  1. apos o termino da lista (todas as tarefas concluidas/ tempo da lista esgotado), o sistema finaliza a lista.
  2. depois de finalizar a lista, o sistema manda o usuario para a pagina inicial (perfil do usuario), e la estara a lista que ja foi 
  finalizada pelo usuario, com a mensagem "a lista foi finalizada as (horario e data)".
  3. o usuario tera a opção de remover a lista ou deixar ela em seu perfil.
  4. caso o usuario queira deixar em seu perfil, ele deve pressionar a opção 'salvar', caso queira remover ele deve pressionar a opção 
  'remover'.
  5. depois de escolher a opção 'remover' o sistema apaga a lista do perfil, e exibe um botão '+ criar nova lista' (CDU001)
