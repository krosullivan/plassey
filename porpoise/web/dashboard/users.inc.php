<?php

/*
 * PorPOISe
 * Copyright 2009 SURFnet BV
 * Released under a permissive license (see LICENSE)
 */

/**
 * PorPOISe Dashboard access definition file
 *
 * Format of the _access table:
 * Keys map to user names, values map to hashed passwords. To generate
 * a password, simply call crypt("<password>") or execute "crypt.php".
 *
 * @package PorPOISe
 * @subpackage Dashboard
 */
$_access = array();
$_access["admin"] = '$1$H9cR062Z$vF3FkDxqlgP02Jcom4YME0';//admin

