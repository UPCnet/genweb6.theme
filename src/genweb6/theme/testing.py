# -*- coding: utf-8 -*-
from plone.app.robotframework.testing import REMOTE_LIBRARY_BUNDLE_FIXTURE
from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PloneSandboxLayer
from plone.testing import z2

import genweb6.theme


class Genweb6ThemeLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        import plone.app.dexterity
        self.loadZCML(package=plone.app.dexterity)
        import plone.restapi
        self.loadZCML(package=plone.restapi)
        self.loadZCML(package=genweb6.theme)

    def setUpPloneSite(self, portal):
        applyProfile(portal, 'genweb6.theme:default')


GENWEB6_THEME_FIXTURE = Genweb6ThemeLayer()


GENWEB6_THEME_INTEGRATION_TESTING = IntegrationTesting(
    bases=(GENWEB6_THEME_FIXTURE,),
    name='Genweb6ThemeLayer:IntegrationTesting',
)


GENWEB6_THEME_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(GENWEB6_THEME_FIXTURE,),
    name='Genweb6ThemeLayer:FunctionalTesting',
)


GENWEB6_THEME_ACCEPTANCE_TESTING = FunctionalTesting(
    bases=(
        GENWEB6_THEME_FIXTURE,
        REMOTE_LIBRARY_BUNDLE_FIXTURE,
        z2.ZSERVER_FIXTURE,
    ),
    name='Genweb6ThemeLayer:AcceptanceTesting',
)
