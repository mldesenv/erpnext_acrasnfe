frappe.ui.form.on("Purchase Invoice", "refresh", function(frm){
 frappe.call({
   method: "erpnext_acrasnfe.arquivo_function.teste_function",
   args:{
     doc_name: frm.doc.name,
   },
   callback:function(r){
     console.log(r);
   }
 });
});
