import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { generationsUpdateOneRequiredWithoutAbilitiesNestedInput } from '../generations/generations-update-one-required-without-abilities-nested.input';
import { ability_changelogUpdateManyWithoutAbilitiesNestedInput } from '../ability-changelog/ability-changelog-update-many-without-abilities-nested.input';
import { ability_flavor_textUpdateManyWithoutAbilitiesNestedInput } from '../ability-flavor-text/ability-flavor-text-update-many-without-abilities-nested.input';
import { ability_proseUpdateManyWithoutAbilitiesNestedInput } from '../ability-prose/ability-prose-update-many-without-abilities-nested.input';
import { pokemon_abilitiesUpdateManyWithoutAbilitiesNestedInput } from '../pokemon-abilities/pokemon-abilities-update-many-without-abilities-nested.input';

@InputType()
export class abilitiesUpdateWithoutAbility_namesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => generationsUpdateOneRequiredWithoutAbilitiesNestedInput, {nullable:true})
    generations?: generationsUpdateOneRequiredWithoutAbilitiesNestedInput;

    @Field(() => ability_changelogUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    ability_changelog?: ability_changelogUpdateManyWithoutAbilitiesNestedInput;

    @Field(() => ability_flavor_textUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUpdateManyWithoutAbilitiesNestedInput;

    @Field(() => ability_proseUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    ability_prose?: ability_proseUpdateManyWithoutAbilitiesNestedInput;

    @Field(() => pokemon_abilitiesUpdateManyWithoutAbilitiesNestedInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesUpdateManyWithoutAbilitiesNestedInput;
}
