(defproject metronome "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2030"]]
  :plugins [[lein-cljsbuild "1.0.0"]]
  :source-paths ["src"]
  :cljsbuild {
    :builds [{:id "metronome"
              :source-paths ["src"]
              :compiler {
                :output-to "metronome.js"
                :optimizations :whitespace}}]})
