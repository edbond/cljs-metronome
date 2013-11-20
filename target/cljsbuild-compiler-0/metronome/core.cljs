(ns metronome.core
  (:require [goog.dom.forms :as forms]
            [goog.dom :as dom])
  (:import [createjs Sound]))

(def assetsPath "assets/")
(def manifest [{:src "Click1.ogg|Click1.mp3" :id 1}
               {:src "Click2.ogg|Click2.mp3" :id 2}])

(.registerManifest Sound manifest assetsPath)

;; storage for playing sound instances and intervals
(def sounds (atom {}))

;; bpm element
(def bpm-el (dom/getElement "bpm"))

(def not-interrupt (.-INTERRUPT_NONE Sound))

;; (defn playSound [target]
;;   (def instance (.play snd [target.id (.INTERRUPT_NONE createjs/Sound []) 0 0 false 1]))
;;   (or (== instance nil) (== instance.playState (.PLAY_FAILED createjs/Sound)) nil)
;;   (.log js/console ["Played sound ID:" target.id]))

(add-watch sounds :sounds-watcher
           #(.log js/console (clj->js %3) (clj->js %4)))

(defn play
  [id]
  (.log js/console "Playing sound" id)
  (let [s (.play Sound id not-interrupt)]
    (swap! sounds #(update-in % [id :sound] s))))

(defn stop-sound
  "Stop sound, clear interval"
  [m id]
  (update-in m [(str id)]
             (fn [v]
               (when-let [i (:interval v)]
                 (js/clearInterval i))
               (when-let [s (:sound v)]
                 (.stop s))
               (dissoc v :interval))))

(defn ^:export stop
  [id]
  (swap! sounds stop-sound id))

(defn stop-all
  "Stop all intervals and sounds"
  []
  (doseq [id (keys @sounds)]
    (stop id)))

(defn ^:export soundLoop [btn]
  (let [bpm (js/parseInt (forms/getValue bpm-el))
        id (str (.-id btn))
        bpm-interval (/ 60000 bpm)]
    #_(stop-all)
    (swap! sounds assoc-in [id :interval]
           (js/setInterval #(play id) bpm-interval))))
