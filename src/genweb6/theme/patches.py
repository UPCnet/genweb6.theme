# -*- coding: utf-8 -*-
"""Monkey patches for genweb6.theme to fix theme resource access in protected contexts."""
import logging
from plone.subrequest import subrequest as original_subrequest

logger = logging.getLogger('genweb6.theme')


def patched_subrequest(url, root=None, **kwargs):
    """Patched version of plone.subrequest.subrequest that handles theme resources.
    
    This patch ensures that subrequests for theme resources are always resolved
    from the portal root, not from the current context, preventing authorization
    errors when the current context is protected.
    """
    # Check if this is a request for theme resources
    if '++theme++genweb6.theme' in url and root is not None:
        # Import here to avoid circular dependencies at module load time
        from plone import api
        try:
            # Get the portal root to use as the context for theme resource requests
            portal = api.portal.get()
            # Make the subrequest from the portal root context
            return original_subrequest(url, root=portal, **kwargs)
        except Exception as e:
            logger.warning(
                f"Failed to get portal root for theme resource request to {url}: {e}"
            )
            # Fall back to original behavior
            pass
    
    # For all other requests, use the original implementation
    return original_subrequest(url, root=root, **kwargs)


def apply_patches():
    """Apply all monkey patches."""
    import plone.subrequest
    plone.subrequest.subrequest = patched_subrequest
    logger.info("Applied genweb6.theme patches for theme resource access")
