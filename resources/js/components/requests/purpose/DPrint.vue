<template>
<div class="inner">
    <input type="checkbox" v-model="dprint" name="dprint" id="dprint">
    <label for="dprint">
        <svg viewBox="0 0 13.93 25.99">
            <title>Gamma_3DPrinting</title>
                    <polygon class="cls-1" points="8.51 13.98 5.07 13.98 5.07 5.5 5.82 5.5 5.82 13.23 7.75 13.23 7.75 5.5 8.51 5.5 8.51 13.98"/><rect class="cls-1" x="7.76" y="0.73" width="0.75" height="3.4"/>
                    <rect class="cls-1" x="5.07" y="0.73" width="0.75" height="3.4"/>
                    <path class="cls-1" d="M11.15,5.87H2.64V3.67h8.51ZM3.39,5.12h7v-.7h-7Z"/>
                    <rect class="cls-1" x="0.37" y="15.1" width="13.18" height="0.75"/>
                    <path class="cls-1" d="M12.14,15.85H1.66V13.23H12.14ZM2.41,15.1h9V14h-9Z"/>
                    <path class="cls-1" d="M9.13,21.82H4.82A1.23,1.23,0,0,1,3.59,20.6V18.37a1.23,1.23,0,0,1,1.23-1.23H9.13a1.23,1.23,0,0,1,1.23,1.23V20.6a1.23,1.23,0,0,1-1.23,1.22M4.82,17.89a.48.48,0,0,0-.48.48V20.6a.48.48,0,0,0,.48.47H9.13a.47.47,0,0,0,.48-.47V18.37a.47.47,0,0,0-.48-.48Z"/>
                    <polygon class="cls-1" points="12.71 25.99 1.28 25.99 1.28 23.55 2.03 23.55 2.03 25.24 11.96 25.24 11.96 23.55 12.71 23.55 12.71 25.99"/>
                    <path class="cls-1" d="M12.2,23.94H1.73A1.72,1.72,0,0,1,0,22.22V2.83A1.71,1.71,0,0,1,1,1.26a14.55,14.55,0,0,1,11.57-.12l.29.12a1.72,1.72,0,0,1,1,1.59V22.22a1.72,1.72,0,0,1-1.73,1.72M6.94.75A13.82,13.82,0,0,0,1.33,1.94a1,1,0,0,0-.58.89V22.22a1,1,0,0,0,1,1H12.2a1,1,0,0,0,1-1V2.85a1,1,0,0,0-.6-.9l-.28-.12A13.8,13.8,0,0,0,6.94.75"/>
        </svg>
        <svg  viewBox="0 0 44.01 40.8">
            <circle class="cls-1 circle" cx="19.07" cy="19.07" r="18.57"/>
            <g class="check">
                <line class="cls-2" x1="31.98" y1="36.3" x2="35.54" y2="39.86"/>
                <line class="cls-2" x1="34.33" y1="40.1" x2="43.3" y2="31.12"/>
            </g>
        </svg>

        <span>3D Printing</span>
    </label>


</div>

</template>

<script>
    export default {
        props:{
            dprint:{
                type:Boolean,
                default:false
            },

        }

    }
</script>

<style lang="scss" scoped>
.inner{

}
.inner:hover{
    // padding:.5em;
    // border-radius: .3em;

    // box-shadow:
    // 7px 7px 5px rgba($color: #000000, $alpha: .04),
    // 7px 7px 5px rgba($color: #FFFFFF, $alpha: .8);
    // border: 1px solid rgb(235, 235, 235);
}
input[type=checkbox]{
    display: none;
    pointer-events: none;

    &+label {
        cursor: pointer;
        font-size:.8em;
        display:grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;

        svg:nth-child(1){
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
            height: 55px;
    width: auto;
    fill:#07d4bbf5;
   transform: scale(0.9);
        }
        svg:nth-child(2){
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 2;
            width: 2em;
            stroke: green;
            stroke-width: 5;
            fill: white;
            circle{
                stroke-dasharray: 116;
                stroke-dashoffset: 0;
            }
            .check{
                fill: none;
                transform-origin: bottom;
                transform: translateX(-32px) translateY(-10px) scale(1.8);
            }
            .check:first-child{
                stroke-width: 3px;
                stroke-dasharray: 5;
                stroke-dashoffset: 5;
            }
            .check:nth-child(2){

                stroke-width: 3px;
                stroke-dasharray: 12.6;
                stroke-dashoffset: 12.6;
                fill: none;
            }

        }
        span{
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;
            grid-row-end: 3;
           padding-top: .3em;
           margin-left: .3em;

        }
    }
    &:checked + label{
        svg:nth-child(2){

            circle{
                stroke-dashoffset: 116;
                transition: stroke-dashoffset .3s linear;
            }
            g.check{
                transform: translateX(-32px) translateY(-25px) scale(1.8);

                transition: stroke-dashoffset .3s linear;

            }
            .check:first-child{

                stroke-dashoffset: 0;
            }
            .check:nth-child(2){
                // transform: translateX(-1px) translateY(-8px) scaleY(1.5);
                transform-origin: center;
                stroke-dashoffset: 0;
                fill: none;
            }

        }

    }
}

</style>
