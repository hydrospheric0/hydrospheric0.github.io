import re

with open("index.html", "r") as f:
    content = f.read()

old_str = """        <div class="project-card position-card">
          <div class="project-header">
            <span class="project-summary-name">Co-founder / Science and Research Director &mdash; Earth Insight</span>
            <span class="position-date">Oct 2022 &ndash; Feb 2025</span>
          </div>
          <div class="project-body">
            <p class="position-desc">Led a team of spatial analysts in data collection, analysis, mapping, and tool development communicating threats posed by extractive industries to ecosystems and communities. Skills: Python, QGIS, GIS, conservation.</p>
          </div>
        </div>"""

new_str = """        <div class="project-card position-card">
          <div class="project-body project-body--thumb position-card-body">
              <img src="images/logos/earthinsight.png" alt="Earth Insight logo" class="position-logo position-logo--earthinsight" />
            <div class="project-body-text">
              <div class="project-header">
                <span class="project-summary-name">Co-founder / Science and Research Director &mdash; Earth Insight</span>
                <span class="position-date">Oct 2022 &ndash; Feb 2025</span>
              </div>
              <p class="position-desc">Led a team of spatial analysts in data collection, analysis, mapping, and tool development communicating threats posed by extractive industries to ecosystems and communities. Skills: Python, QGIS, GIS, conservation.</p>
            </div>
          </div>
        </div>"""

if old_str in content:
    with open("index.html", "w") as f:
        f.write(content.replace(old_str, new_str))
        print("Success")
else:
    print("Not found")
