"""Bajas en español: Jarvis escribe a prospectos hispanohablantes."""
import pytest

from harvey.agents.handler import _opt_out_reason
from harvey.config import ComplianceConfig


@pytest.mark.parametrize("reply", [
    "No gracias",
    "no, gracias",
    "Por favor denme de baja de su lista",
    "No me escriba más",
    "No nos interesa, saludos",
    "baja",
    "Dejen de escribirme",
])
def test_spanish_opt_outs_are_honoured(reply):
    assert _opt_out_reason(reply, reply) is not None


@pytest.mark.parametrize("reply", [
    "Gracias, ¿cuánto cuesta?",
    "Sí, me interesa. ¿Podemos hablar el jueves?",
])
def test_spanish_interest_is_not_an_opt_out(reply):
    assert _opt_out_reason(reply, reply) is None


def test_spanish_opt_out_line_is_accepted():
    ComplianceConfig(opt_out_line='Si no le interesa, responda "no gracias" y no le vuelvo a escribir.')
