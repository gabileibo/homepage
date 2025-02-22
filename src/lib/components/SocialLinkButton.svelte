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
  class="flex align-center gap-3.5 px-3 py-4 mt-2 font-semibold text-[rgb(255,113,179)] underline whitespace-nowrap rounded hover:bg-gray-800"
  style={`background-color: rgba(43, 36, 49, 0.9);`}
>
  <img
    loading="lazy"
    src={icon}
    alt=""
    class="object-contain shrink-0 self-start aspect-square w-[18px]"
  />
  <span class="flex-auto">{name}</span>
</a>