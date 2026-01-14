# -*- coding: utf-8 -*-
"""Init and utils."""
from zope.i18nmessageid import MessageFactory


_ = MessageFactory('genweb')


# Apply patches to fix theme resource access in protected contexts
def initialize(context):
    """Initializer called when used as a Zope 2 product."""
    from genweb6.theme.patches import apply_patches
    apply_patches()


# Apply patches immediately on import
try:
    from genweb6.theme.patches import apply_patches
    apply_patches()
except Exception:
    # If patches fail to apply, log but don't break the import
    import logging
    logger = logging.getLogger('genweb6.theme')
    logger.exception("Failed to apply genweb6.theme patches")
