# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from plone import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from genweb6.theme.testing import GENWEB6_THEME_INTEGRATION_TESTING  # noqa: E501

import unittest


try:
    from Products.CMFPlone.utils import get_installer
except ImportError:
    get_installer = None


class TestSetup(unittest.TestCase):
    """Test that genweb6.theme is properly installed."""

    layer = GENWEB6_THEME_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        if get_installer:
            self.installer = get_installer(self.portal, self.layer['request'])
        else:
            self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if genweb6.theme is installed."""
        self.assertTrue(self.installer.is_product_installed(
            'genweb6.theme'))

    def test_browserlayer(self):
        """Test that IGenweb6ThemeLayer is registered."""
        from genweb6.theme.interfaces import (
            IGenweb6ThemeLayer)
        from plone.browserlayer import utils
        self.assertIn(
            IGenweb6ThemeLayer,
            utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = GENWEB6_THEME_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        if get_installer:
            self.installer = get_installer(self.portal, self.layer['request'])
        else:
            self.installer = api.portal.get_tool('portal_quickinstaller')
        roles_before = api.user.get_roles(TEST_USER_ID)
        setRoles(self.portal, TEST_USER_ID, ['Manager'])
        self.installer.uninstall_product('genweb6.theme')
        setRoles(self.portal, TEST_USER_ID, roles_before)

    def test_product_uninstalled(self):
        """Test if genweb6.theme is cleanly uninstalled."""
        self.assertFalse(self.installer.is_product_installed(
            'genweb6.theme'))

    def test_browserlayer_removed(self):
        """Test that IGenweb6ThemeLayer is removed."""
        from genweb6.theme.interfaces import \
            IGenweb6ThemeLayer
        from plone.browserlayer import utils
        self.assertNotIn(IGenweb6ThemeLayer, utils.registered_layers())
