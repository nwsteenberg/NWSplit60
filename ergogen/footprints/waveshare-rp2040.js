module.exports = {
  params: {
    designator: 'WaveshareRP2040',
    side: 'F',
    P1: { type: 'net', value: "GP0" },
    P10: { type: 'net', value: "GP9" },
    P11: { type: 'net', value: "GP10" },
    P12: { type: 'net', value: "GP11" },
    P13: { type: 'net', value: "GP12" },
    P14: { type: 'net', value: "GP13" },
    P15: { type: 'net', value: "GP14" },
    P16: { type: 'net', value: "GP15" },
    P17: { type: 'net', value: "GP26" },
    P18: { type: 'net', value: "GP27" },
    P19: { type: 'net', value: "5V" },
    P2: { type: 'net', value: "GP1" },
    P20: { type: 'net', value: "GND" },
    P21: { type: 'net', value: "3V3" },
    P22: { type: 'net', value: "GP28" },
    P23: { type: 'net', value: "GP29" },
    P3: { type: 'net', value: "GP2" },
    P4: { type: 'net', value: "GP3" },
    P5: { type: 'net', value: "GP4" },
    P6: { type: 'net', value: "GP5" },
    P7: { type: 'net', value: "GP6" },
    P8: { type: 'net', value: "GP7" },
    P9: { type: 'net', value: "GP8" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "RP2040-Zero"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" thru_hole roundrect (at 17.78 ${flipN(flip, -22.86)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P1})`);
fp.push(`(pad "2" thru_hole roundrect (at 17.78 ${flipN(flip, -20.32)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P2})`);
fp.push(`(pad "3" thru_hole roundrect (at 17.78 ${flipN(flip, -17.78)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P3})`);
fp.push(`(pad "4" thru_hole roundrect (at 17.78 ${flipN(flip, -15.24)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P4})`);
fp.push(`(pad "5" thru_hole roundrect (at 17.78 ${flipN(flip, -12.7)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P5})`);
fp.push(`(pad "6" thru_hole roundrect (at 17.78 ${flipN(flip, -10.16)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P6})`);
fp.push(`(pad "7" thru_hole roundrect (at 17.78 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P7})`);
fp.push(`(pad "8" thru_hole roundrect (at 17.78 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P8})`);
fp.push(`(pad "9" thru_hole roundrect (at 17.78 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset 0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P9})`);
fp.push(`(pad "10" thru_hole roundrect (at 15.24 ${flipN(flip, -2.33)} ${flipR(flip, p.r + 0)}) (size 1.6 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P10})`);
fp.push(`(pad "11" thru_hole roundrect (at 12.7 ${flipN(flip, -2.33)} ${flipR(flip, p.r + 0)}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P11})`);
fp.push(`(pad "12" thru_hole roundrect (at 10.16 ${flipN(flip, -2.33)} ${flipR(flip, p.r + 0)}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P12})`);
fp.push(`(pad "13" thru_hole roundrect (at 7.62 ${flipN(flip, -2.33)} ${flipR(flip, p.r + 0)}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P13})`);
fp.push(`(pad "14" thru_hole roundrect (at 5.08 ${flipN(flip, -2.33)} ${flipR(flip, p.r + 0)}) (size 1.5748 2.6) (drill 0.8 (offset 0 0.6)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P14})`);
fp.push(`(pad "15" thru_hole roundrect (at 2.54 ${flipN(flip, -2.54)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P15})`);
fp.push(`(pad "16" thru_hole roundrect (at 2.54 ${flipN(flip, -5.08)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P16})`);
fp.push(`(pad "17" thru_hole roundrect (at 2.54 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P17})`);
fp.push(`(pad "18" thru_hole roundrect (at 2.54 ${flipN(flip, -10.16)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P18})`);
fp.push(`(pad "19" thru_hole roundrect (at 2.54 ${flipN(flip, -22.86)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P19})`);
fp.push(`(pad "20" thru_hole roundrect (at 2.54 ${flipN(flip, -20.32)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P20})`);
fp.push(`(pad "21" thru_hole roundrect (at 2.54 ${flipN(flip, -17.78)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P21})`);
fp.push(`(pad "22" thru_hole roundrect (at 2.54 ${flipN(flip, -12.7)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P22})`);
fp.push(`(pad "23" thru_hole roundrect (at 2.54 ${flipN(flip, -15.24)} ${flipR(flip, p.r + 0)}) (size 2.6 1.6002) (drill 0.8 (offset -0.6 0)) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.25)  ${p.P23})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start 1.16 ${flipN(flip, -24.45)}) (end 19.16 ${flipN(flip, -24.45)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05) )`);
fp.push(`(fp_line (start 19.16 ${flipN(flip, -24.45)}) (end 19.16 ${flipN(flip, -0.95)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05) )`);
fp.push(`(fp_line (start 19.16 ${flipN(flip, -0.95)}) (end 1.16 ${flipN(flip, -0.95)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05) )`);
fp.push(`(fp_line (start 1.16 ${flipN(flip, -0.95)}) (end 1.16 ${flipN(flip, -24.45)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05) )`);

// Drawings on F.Fab
fp.push(`(fp_text reference "REF**" (at 10.16 ${flipN(flip, -15.45)} ${flipR(flip, p.r) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 10.16 ${flipN(flip, -11.45)} ${flipR(flip, p.r) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start 5.83 ${flipN(flip, -25.45)}) (end 5.83 ${flipN(flip, -24.45)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);
fp.push(`(fp_line (start 14.46 ${flipN(flip, -25.45)}) (end 14.46 ${flipN(flip, -24.45)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);
fp.push(`(fp_line (start 5.83 ${flipN(flip, -25.45)}) (end 14.46 ${flipN(flip, -25.45)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.1) )`);

// Drawings on F.SilkS
fp.push(`(fp_text value "RP2040-Zero" (at 10.16 ${flipN(flip, -13.45)} ${flipR(flip, p.r) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start 19.16 ${flipN(flip, -24.45)}) (end 1.16 ${flipN(flip, -24.45)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 1.16 ${flipN(flip, -24.45)}) (end 1.16 ${flipN(flip, -0.95)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 1.16 ${flipN(flip, -0.95)}) (end 19.16 ${flipN(flip, -0.95)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 19.16 ${flipN(flip, -0.95)}) (end 19.16 ${flipN(flip, -24.45)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }


