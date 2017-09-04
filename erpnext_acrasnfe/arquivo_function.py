from __future__ import unicode_leterals
import frappe
from frappe import _
import request.exceptions

@frappe.whitelist()
def teste_function(doc_name):
    teste = "chamou a funcao"
    return teste
