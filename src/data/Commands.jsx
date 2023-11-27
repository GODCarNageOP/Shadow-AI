const contacts = [
  {
    name: "sakshi",
    number: "9468781700",
  },
  {
    name: "arunendra",
    number: "9372594793",
  },
];

export const commands = [
  // OPEN ANY WEBSITE //
  {
    command: "open *",
    callback: (site) => {
      window.open("http://" + site + ".com");
    },
  },

  // SEARCH ANYTHING

  {
    command: "wikipedia *",
    callback: (message) => {
      window.open("https://en.wikipedia.org/wiki/" + message);
    },
  },

  {
    command: "search *",
    callback: (query) => {
      window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(query)
      );
    },
  },

  {
    command: "play *",
    callback: (query) => {
      window.open(
        "https://www.youtube.com/results?search_query=" + encodeURIComponent(query)
      );
    },
  },

  {
    command: "find *",
    callback: (location) => {
      window.open(
        "https://www.google.com/maps/search/" + encodeURIComponent(location)
      );
    },
  },

  // PERSONAL INFO

  {
    command: "take me home",
    callback: () => {
      window.open(
        "https://www.google.com/maps/dir//6RJQ%2BGHR+Swanand+Sadan+-10A,+MHB+Colony,+Mhada+Colony,+Borivali+West,+Mumbai,+Maharashtra+400091/@19.2313942,72.8387221,20.65z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7b1739555e979:0xed6ea1511b8b0b5f!2m2!1d72.8388868!2d19.2313851?entry=ttu"
      );
    },
  },

  {
    command: "text * *",
    callback: function (name, message) {
      const contact = contacts.find(
        (c) => c.name.toLowerCase() === name.toLowerCase()
      );

      if (contact) {
        window.open(`https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`);
      } else {
        console.log(`Contact not found for ${name}`);
      }
    },
  },

  {
    command: "call *",
    callback: function (name) {
      const contact = contacts.find(
        (c) => c.name.toLowerCase() === name.toLowerCase()
      );

      if (contact) {
        window.open(`tel:/${contact.number}`);
      } else {
        console.log(`Contact not found for ${name}`);
      }
    },
  }
];
