<?php
function estadoElemento($estado, $elemento,$id)
{
  global $mysqli;
  echo $elemento;
  $stmt = $mysqli->prepare("SELECT id FROM $elemento WHERE estado = ? AND id = ? LIMIT 1");
  $stmt->bind_param('ii', $estado, $id);
  $stmt->execute();
  $stmt->store_result();
  $num = $stmt->num_rows;
  $stmt->close();

  if ($num > 0){
    return true;
    } else {
    return false;
  }
   if ($mysqli) {
       mysqli_close($mysqli);
}
}
