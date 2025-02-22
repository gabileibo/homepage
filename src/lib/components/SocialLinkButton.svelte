<script lang="ts">
  let { icon, name, url } = $props<{
    icon: string;
    name: string;
    url: string;
  }>();
</script>

<a
  href={url}
  target="_blank"
  class="flex gap-3.5 px-3 py-4 mt-2 font-semibold text-[rgba(160,72,120,1)] underline whitespace-nowrap rounded"
  style={`background-color: rgba(43, 36, 49, 1);`}
>
  <img
    loading="lazy"
    src={icon}
    alt=""
    class="object-contain shrink-0 self-start aspect-square w-[15px]"
  />
  <span class="flex-auto">{name}</span>
</a>