<script lang="ts">
  let {
    icon,
    title,
    company,
    bgColor,
    textClass,
    url
  } = $props<{
    icon: string;
    title: string;
    company: string;
    bgColor: string;
    textClass: string;
    url: string;
  }>();
</script>

<div class="flex gap-3 px-3 py-3.5 mt-1.5 rounded" style={`background-color: ${bgColor};`}>
  <div class="flex gap-3 items-center">
    <img 
      loading="lazy" 
      src={icon} 
      class="w-[23px] aspect-square object-contain self-start rounded" 
      alt="" 
    />
    <div class={textClass}>
      <span class="text-bold">{title}</span>
      <span>@ <a class="underline" href={url} target="_blank">{company}</a></span>
    </div>
  </div>
</div>