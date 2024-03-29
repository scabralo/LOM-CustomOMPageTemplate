<?php
/**
 * Template Name: Custom OM Builder
 * The Template for the Custom OM Builder page
 *
 * @package Betheme
 * @author Sergio Cabral
 * @link http://sergiocabral.io
 */

get_header();
?>

<div id="Content">
	<div class="content_wrapper clearfix custom-om-template">
		<div class="sections_group">
      <div class="section">
        <div class="section_wrapper clearfix">
          <h1>Custom OM Builder</h1>
          <div class="custom-om__section-wrapper">
            <div class="custom-om__left-column">
              <div class="custom-om__om-type-container">
                <h2>OM Type</h2>
                <div id="custom-om__om-type-wrapper">
                </div>
              </div>
              <div class="custom-om__preview-container"></div>
            </div>
            <div class="custom-om__right-column">
              <h2>Customizations</h2>
              <div id="custom-om__customizations-container">
              </div>
            </div>
          </div>
        </div>
      </div>	
		</div>
	</div>
</div>

<?php get_footer();

// Omit Closing PHP Tags
