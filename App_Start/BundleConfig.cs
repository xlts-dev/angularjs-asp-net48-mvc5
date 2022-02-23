using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

public class BundleConfig
{
  public static void RegisterBundles(BundleCollection bundles)
  {
    // Bundle JavaScript files.
    bundles.Add(new ScriptBundle("~/bundles/scripts")
      .Include("~/Scripts/jquery-{version}.js")
      .Include("~/Scripts/angular.min.js")
      .IncludeDirectory("~/WebApp", "*.js", false)
      .IncludeDirectory("~/WebApp/Components", "*.js", true)
      .IncludeDirectory("~/WebApp/Directives", "*.js", true));

    // Bundles CSS files
    bundles.Add(new StyleBundle("~/bundles/styles")
      .IncludeDirectory("~/Content", "*.css", true)
      .IncludeDirectory("~/WebApp", "*.css", true));
  }
}
