<script lang="ts">
  import type { Role, SocialLink } from '$lib/types';
  import ProfileHeader from '$lib/components/ProfileHeader.svelte';
  import RoleCard from '$lib/components/RoleCard.svelte';
  import SocialLinkButton from '$lib/components/SocialLinkButton.svelte';

  const currentRole: Role = {
    icon: "/images/justwatch.png",
    title: 'Head of Infrastructure',
    company: 'JustWatch',
    bgColor: "rgba(29, 40, 46, 1)",
    textClass: "text-[rgba(55,154,211,1)]",
    url: "https://www.justwatch.com"
  };

  const previousRoles: Role[] = [
    {
      icon: "/images/taxfix.png",
      title: 'DevOps Technical Lead',
      company: 'Taxfix',
      bgColor: "rgba(34, 43, 38, 1)",
      textClass: "text-[rgba(82,158,113,1)]",
      url: "https://www.taxfix.com"
    },
    {
      icon: "/images/donut.svg",
      title: 'Software Engineer Lead - DevOps & Security',
      company: 'Donut',
      bgColor: "rgba(57, 46, 30, 1)",
      textClass: "text-[rgba(202,152,77,1)]",
      url: "https://www.donut.app"
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: "/images/linkedin.svg",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gabileibo"
    },
    {
      icon: "/images/code_icon.svg",
      name: "Github",
      url: "https://github.com/gabileibo"
    },
    {
      icon: "/images/telegram.svg",
      name: "Telegram",
      url: "https://t.me/gabileibo"
    }
  ];
</script>

<main
  class="flex overflow-hidden flex-col justify-center items-center px-20 py-28 text-xs font-medium tracking-tight bg-zinc-900 max-md:px-5 max-md:pt-24"
>
  <div class="flex flex-col max-w-full w-[371px]">
    <ProfileHeader />

    <section>
      <h2 class="self-start mt-14 tracking-tight text-neutral-400 max-md:mt-10 max-md:ml-1">
        Currently
      </h2>
      <RoleCard {...currentRole} />
    </section>

    <section>
      <h2 class="self-start mt-7 tracking-tight text-neutral-400 max-md:ml-1">
        Previously
      </h2>
      {#each previousRoles as role}
        <RoleCard {...role} />
      {/each}
    </section>

    <section>
      <h2 class="self-start mt-7 tracking-tight text-neutral-400 max-md:ml-1">
        Connect with me
      </h2>
      {#each socialLinks as link}
        <SocialLinkButton {...link} />
      {/each}
    </section>
  </div>
</main>