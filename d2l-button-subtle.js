/**
`d2l-button-subtle`
Polymer-based web component for subtle buttons

@demo demo/button-subtle.html d2l-button-subtle
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import 'd2l-icons/d2l-icons.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import './d2l-button-shared-styles.js';
import './d2l-button-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-button-subtle">
	<template strip-whitespace="">
		<style>
			:host {
				display: inline-block;

				--button-rtl: {
					left: 0;
					right: -0.6rem;
				};

				--content-icon-rtl: {
					padding-left: 0;
					padding-right: 1.2rem;
				};

				--content-icon-right-rtl: {
					padding-left: 1.2rem;
					padding-right: 0;
				};

				--icon-right-rtl: {
					left: 0.6rem;
					right: auto;
				};
			}
			button {
				background-color: transparent;
				border-color: transparent;
				font-family: inherit;
				padding: 0.5rem 0.6rem;
				position: relative;
				@apply --d2l-button-clear-focus;
				@apply --d2l-button-shared;
				@apply --d2l-label-text;
			}

			:host([h-align="text"]) button {
				left: -0.6rem;
			}
			:host-context([dir="rtl"])[h-align="text"] button {
				@apply --button-rtl;
			}
			:host-context([dir="rtl"]):host([h-align="text"]) button {
				@apply --button-rtl;
			}
			:host(:dir(rtl)):host([h-align="text"]) button {
				@apply --button-rtl;
			}
			:host(:dir(rtl))[h-align="text"] button {
				@apply --button-rtl;
			}

			/* Firefox includes a hidden border which messes up button dimensions */
			button::-moz-focus-inner {
				border: 0;
			}
			button[disabled]:hover,
			button[disabled]:focus,
			:host([active]) button[disabled] {
				background-color: transparent;
			}
			button:hover,
			button:focus,
			:host([active]) button,
			:host(.d2l-button-subtle-hover) button,
			:host(.d2l-button-subtle-focus) button {
				background-color: var(--d2l-color-gypsum);
			}
			button:focus, :host(.d2l-button-subtle-focus) button {
				@apply --d2l-button-focus-plus-border;
			}

			.d2l-button-subtle-content {
				color: var(--d2l-color-celestine);
				vertical-align: middle;
			}
			:host([icon]) .d2l-button-subtle-content {
				padding-left: 1.2rem;
			}
			:host([icon][icon-right]) .d2l-button-subtle-content {
				padding-left: 0;
				padding-right: 1.2rem;
			}

			:host-context([dir="rtl"]):host([icon]) .d2l-button-subtle-content {
				@apply --content-icon-rtl;
			}
			:host(:dir(rtl)):host([icon]) .d2l-button-subtle-content {
				@apply --content-icon-rtl;
			}
			:host(:dir(rtl))[icon] .d2l-button-subtle-content {
				@apply --content-icon-rtl;
			}

			:host-context([dir="rtl"]):host([icon]):host([icon-right]) .d2l-button-subtle-content {
				@apply --content-icon-right-rtl;
			}
			:host(:dir(rtl)):host([icon]):host([icon-right]) .d2l-button-subtle-content {
				@apply --content-icon-right-rtl;
			}
			:host(:dir(rtl))[icon][icon-right] .d2l-button-subtle-content {
				@apply --content-icon-right-rtl;
			}

			d2l-icon.d2l-button-subtle-icon {
				color: var(--d2l-color-celestine);
				display: none;
				height: 0.9rem;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: 0.9rem;
			}
			:host([icon]) d2l-icon.d2l-button-subtle-icon {
				display: inline-block;
			}
			:host([icon][icon-right]) d2l-icon.d2l-button-subtle-icon {
				right: 0.6rem;
			}
			:host([dir="rtl"][icon][icon-right]) d2l-icon.d2l-button-subtle-icon {
				@apply --icon-right-rtl;
			}
			:host(:dir(rtl))[icon][icon-right] d2l-icon.d2l-button-subtle-icon {
				@apply --icon-right-rtl;
			}
			button[disabled] {
				cursor: default;
				opacity: 0.5;
			}
		</style>
		<button
			aria-expanded$="[[ariaExpanded]]"
			aria-haspopup$="[[ariaHaspopup]]"
			aria-label$="[[ariaLabel]]"
			class="d2l-focusable"
			disabled$="[[disabled]]"
			autofocus$="[[autofocus]]"
			form$="[[form]]"
			formaction$="[[formaction]]"
			formenctype$="[[formenctype]]"
			formmethod$="[[formmethod]]"
			formnovalidate$="[[formnovalidate]]"
			formtarget$="[[formtarget]]"
			name$="[[name]]"
			type$="[[type]]">
			<d2l-icon icon="[[icon]]" class="d2l-button-subtle-icon"></d2l-icon>
			<span class="d2l-button-subtle-content">[[text]]</span>
			<slot></slot>
		</button>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-button-subtle',

	properties: {

		/**
		 * Name of icon (ex. [iconset-name:icon-id]) for underlying [Polymer iron-iconset-svg](https://github.com/PolymerElements/iron-iconset-svg) (optional).
		 */
		icon: {
			type: String,
			value: null,
			reflectToAttribute: true
		},

		/**
		 * Display the icon to the right of text when true
		 */
		iconRight: {
			type: Boolean,
			value: false,
			reflectToAttribute: true
		},

		/**
		 * Text to display in the button (required)
		 */
		text: {
			type: String,
			reflectToAttribute: true
		},

		/**
		 * Horizontal alignment of button. Options:
		 *	 "text" -  The button icon or text will left align with the page content
		 *	default - The button's edge (including padding) will left align with the page content
		*/
		hAlign: {
			type: String,
			reflectToAttribute: true
		}

	},

	behaviors: [
		D2L.PolymerBehaviors.Button.Behavior,
		D2L.PolymerBehaviors.FocusableBehavior
	]
});
