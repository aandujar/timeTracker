
<template>
  <div class="user">
    <div class="user__name" @mouseenter="toogleMenu">
      {{ user ? user : "No hay usuario" }}<Icon icon="down" />
    </div>
    <div class="user__name__menus" @mouseleave="hideMenus">
      <!-- submenu -->
      <div
        class="user__name__menus__submenu"
        :class="{
          'user__name__menus__submenu--shown': showSubmenu,
          'user__name__menus__submenu--hided': !showSubmenu,
        }"
        @mouseleave="hideSubmenu"
      >
        <div
          class="
            user__name__menus__submenu__item
            user__name__menus__submenu__item--border
          "
        >
          <div class="user__name__menus__submenu__item__circle">S1</div>
          <div class="user__name__menus__submenu__item__content">
            <div class="user__name__menus__submenu__item__content__row">
              <div
                class="user__name__menus__submenu__item__content__row__text-big"
              >
                Sesame 1
              </div>
              <div
                class="
                  user__name__menus__submenu__item__content__row__text-medium
                "
              >
                Kelly Pierce
              </div>
            </div>
            <div class="user__name__menus__submenu__item__content__row">
              <div
                class="
                  user__name__menus__submenu__item__content__row__text-small
                "
              >
                Hoy llevas 00:00
              </div>
            </div>
          </div>
        </div>
        <div class="user__name__menus__submenu__item">
          <div class="user__name__menus__submenu__item__circle">S1</div>
          <div class="user__name__menus__submenu__item__content">
            <div class="user__name__menus__submenu__item__content__row">
              <div
                class="user__name__menus__submenu__item__content__row__text-big"
              >
                Sesame 1
              </div>
              <div
                class="
                  user__name__menus__submenu__item__content__row__text-medium
                "
              >
                Kelly Pierce
              </div>
            </div>
            <div class="user__name__menus__submenu__item__content__row">
              <div
                class="
                  user__name__menus__submenu__item__content__row__text-small
                "
              >
                Hoy llevas 00:00
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- menu -->
      <div
        class="user__name__menus__menu"
        :class="{
          'user__name__menus__menu--shown': showMenu,
          'user__name__menus__menu--hided': !showMenu,
        }"
      >
        <div
          class="
            user__name__menus__menu__item user__name__menus__menu__item--border
          "
          :class="{ 'user__name__menus__menu__item--hided': !showMenu }"
          @mouseenter="shownSubmenu"
        >
          <Icon icon="left" class="user__name__menus__menu__item__icon" />
          <div class="user__name__menus__menu__item__account">Mis cuentas</div>
        </div>
        <div
          class="
            user__name__menus__menu__item
            user__name__menus__menu__item--border
            user__name__menus__menu__item--center
          "
        >
          Vista empleado
        </div>
        <div
          class="
            user__name__menus__menu__item
            user__name__menus__menu__item--border
            user__name__menus__menu__item--center
          "
        >
          Mi perfil
        </div>
        <div
          class="
            user__name__menus__menu__item user__name__menus__menu__item--center
          "
        >
          Cerrar sesión
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  name: "User",
  components: { Icon },
  props: { user: { type: String, required: true } },
  data() {
    return {
      showMenu: false,
      showSubmenu: false,
    };
  },
  methods: {
    toogleMenu() {
      this.showMenu = !this.showMenu;
    },
    shownSubmenu() {
      this.showSubmenu = true;
    },
    hideSubmenu() {
      this.showSubmenu = false;
    },
    hideMenus() {
      this.showMenu = false;
      this.showSubmenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  position: relative;
  z-index: 5;

  &__name {
    font-size: 1.2em;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    position: relative;
    z-index: 5;

    &__menus {
      position: absolute;
      z-index: 15;
      display: flex;
      flex-direction: row;
      width: 460px;
      padding-top: 39px;
      margin-left: -235px;
      height: 220px;

      &__menu {
        position: absolute;
        z-index: 20;
        background-color: white;
        position: absolute;
        z-index: 10;
        width: 200px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        margin-left: 260px;

        &--shown {
          height: 200px;
          opacity: 1;
          transition: height 1s, opacity 2s;
          border: 1px solid grey;
        }

        &--hided {
          height: 0px;
          transition: opacity 0.5s, height 1s;
          border: none;
          opacity: 0;
        }

        &__item {
          height: 50px;
          width: 100%;
          font-size: 1.2em;
          display: flex;
          flex-direction: row;
          align-items: center;

          &--hided {
            display: none;
          }

          &:hover {
            background-color: #5ebea3;
          }

          &__account {
            display: flex;
            justify-content: center;
            width: 80%;
          }

          &--center {
            justify-content: center;
          }

          &--border {
            border-bottom: 1px solid grey;
          }

          &--shown {
            opacity: 1;
            transition: opacity 2s;
          }

          &--hided {
            opacity: 0;
            transition: opacity 0.5s;
          }
        }
      }

      &__submenu {
        position: absolute;
        z-index: 20;
        background-color: white;
        position: absolute;
        z-index: 10;
        width: 250px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: 1px solid grey;
        &--shown {
          height: 160px;
          opacity: 1;
          display: block;
          transition: display 0.5s, height 1s, opacity 2s;
          border: 1px solid grey;
        }

        &--hided {
          height: 0px;
          opacity: 0;
          display: none;
          transition: display 1.5s, opacity 0.5s, height 1s;
          border: none;
        }

        &__item {
          height: 80px;
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;

          &:hover {
            background-color: #5ebea3;
          }

          &--border {
            border-bottom: 1px solid grey;
          }

          &__circle {
            height: 30px;
            width: 30px;
            background-color: #e1dbda;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            border: 1px solid black;
            margin-left: 10px;
            margin-bottom: 10px;
          }

          &__content {
            display: flex;
            flex-direction: column;
            padding: 10px;

            &__row {
              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 10px;

              &__text-big {
                font-weight: bold;
                font-size: 1.2em;
                margin-right: 5px;
              }
              &__text-medium {
                font-size: 1.1em;
              }
              &__text-small {
                font-size: 1em;
              }
            }
          }
        }
      }
    }
    @media (max-width: 700px) {
      &__menus {
        position: absolute;
        z-index: 15;
        display: flex;
        flex-direction: row;
        width: 460px;
        padding-top: 39px;
        margin-left: -325px;
        height: 220px;
      }
    }
  }
}
</style>