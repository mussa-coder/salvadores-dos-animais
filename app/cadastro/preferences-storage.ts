import {
  type FormState,
  initialFormState,
  validAvailability,
  validInterests,
} from './form-model';

const storageKey = 'salvadores-animais:preferencias-voluntariado';

type StoredPreferences = Pick<FormState, 'interesse' | 'disponibilidade'>;

export function loadFormWithStoredPreferences(): FormState {
  if (typeof window === 'undefined') return initialFormState;

  try {
    const storedValue = localStorage.getItem(storageKey);
    if (!storedValue) return initialFormState;

    const stored = JSON.parse(storedValue) as Partial<StoredPreferences>;
    return {
      ...initialFormState,
      interesse:
        typeof stored.interesse === 'string' && validInterests.includes(stored.interesse)
          ? stored.interesse
          : '',
      disponibilidade:
        typeof stored.disponibilidade === 'string' &&
        validAvailability.includes(stored.disponibilidade)
          ? stored.disponibilidade
          : '',
    };
  } catch {
    return initialFormState;
  }
}

export function saveVolunteerPreferences(preferences: StoredPreferences) {
  localStorage.setItem(storageKey, JSON.stringify(preferences));
}
