$(':checkbox.radiocheckbox').click(function() {
    this.checked
        && $(this).siblings('input[name="' + this.name + '"]:checked.' + this.className)
                  .prop('checked', false);
});​