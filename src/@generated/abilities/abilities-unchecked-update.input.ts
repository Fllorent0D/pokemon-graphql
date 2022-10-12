import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ability_changelogUncheckedUpdateManyWithoutAbilitiesNestedInput } from '../ability-changelog/ability-changelog-unchecked-update-many-without-abilities-nested.input';
import { ability_flavor_textUncheckedUpdateManyWithoutAbilitiesNestedInput } from '../ability-flavor-text/ability-flavor-text-unchecked-update-many-without-abilities-nested.input';
import { ability_namesUncheckedUpdateManyWithoutAbilitiesNestedInput } from '../ability-names/ability-names-unchecked-update-many-without-abilities-nested.input';
import { ability_proseUncheckedUpdateManyWithoutAbilitiesNestedInput } from '../ability-prose/ability-prose-unchecked-update-many-without-abilities-nested.input';
import { pokemon_abilitiesUncheckedUpdateManyWithoutAbilitiesNestedInput } from '../pokemon-abilities/pokemon-abilities-unchecked-update-many-without-abilities-nested.input';

@InputType()
export class abilitiesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    generation_id?: IntFieldUpdateOperationsInput;

    @Field(() => ability_changelogUncheckedUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    ability_changelog?: ability_changelogUncheckedUpdateManyWithoutAbilitiesNestedInput;

    @Field(() => ability_flavor_textUncheckedUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUncheckedUpdateManyWithoutAbilitiesNestedInput;

    @Field(() => ability_namesUncheckedUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    ability_names?: ability_namesUncheckedUpdateManyWithoutAbilitiesNestedInput;

    @Field(() => ability_proseUncheckedUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    ability_prose?: ability_proseUncheckedUpdateManyWithoutAbilitiesNestedInput;

    @Field(() => pokemon_abilitiesUncheckedUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesUncheckedUpdateManyWithoutAbilitiesNestedInput;
}
