# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from genweb6.theme.setuphandlers import HiddenProfiles
from genweb6.theme.testing import GENWEB6_THEME_INTEGRATION_TESTING  # noqa: E501

import unittest


class TestSetupHandlers(unittest.TestCase):

    layer = GENWEB6_THEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']

    def test_getNonInstallableProfiles(self):
        hp = HiddenProfiles()
        result = hp.getNonInstallableProfiles()
        # Comprueba si el resultado es el esperado
        expected = ["genweb6.theme:uninstall"]
        self.assertEqual(result, expected)

    def test_getNonInstallableProducts(self):
        hp = HiddenProfiles()
        result = hp.getNonInstallableProducts()
        # Comprueba si el resultado es el esperado
        expected = ["genweb6.theme.upgrades"]
        self.assertEqual(result, expected)
