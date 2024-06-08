var cusPrompt = {
    save: function(data) {
      var blob = new Blob([data], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
  
      var link = document.createElement('a');
      link.href = url;
      link.download = 'output.json';
      link.click();
  
      URL.revokeObjectURL(url);
    }
  };