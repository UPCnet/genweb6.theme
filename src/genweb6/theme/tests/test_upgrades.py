# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from genweb6.theme.upgrades import upgrade_by_reinstall
from genweb6.theme.testing import GENWEB6_THEME_INTEGRATION_TESTING  # noqa: E501

import unittest


class TestUpgrades(unittest.TestCase):

    layer = GENWEB6_THEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']

    def test_upgrade_by_reinstall(self):
        result = upgrade_by_reinstall(self.portal)
        self.assertTrue(result)
