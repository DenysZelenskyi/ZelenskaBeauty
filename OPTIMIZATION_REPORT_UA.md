# Звіт про оптимізацію розміру бандлу у застосунку ZelenskaBeauty

## Аналіз та оптимізація

### 1. Початковий стан

- Для вибору дати використовувався компонент `react-native-calendars`.
- Розмір бандлу після збірки: **2.5 MB**

### 2. Оптимізація

- `react-native-calendars` був замінений на готовий компонент `CustomCalendar` (без сторонніх залежностей).
- Весь функціонал календаря збережено (вибір дати, підтримка теми, навігація по місяцях).

### 3. Результат після оптимізації

- Розмір бандлу після збірки: **2.1 MB**
- Економія: **0.4 MB** (~16%)

### 4. Порівняння

| Варіант                    | Розмір бандлу |
| -------------------------- | ------------- |
| З `react-native-calendars` | 2.5 MB        |
| З `CustomCalendar`         | 2.1 MB        |

### 5. Висновок

- Видалення важкої залежності (`react-native-calendars`) та заміна її на власний компонент дозволило зменшити розмір бандлу на 16%.
- Це позитивно вплине на швидкість завантаження застосунку та оновлень для користувачів.
