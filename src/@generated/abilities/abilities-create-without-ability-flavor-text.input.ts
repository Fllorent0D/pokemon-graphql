import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateNestedOneWithoutAbilitiesInput } from '../generations/generations-create-nested-one-without-abilities.input';
import { ability_changelogCreateNestedManyWithoutAbilitiesInput } from '../ability-changelog/ability-changelog-create-nested-many-without-abilities.input';
import { ability_namesCreateNestedManyWithoutAbilitiesInput } from '../ability-names/ability-names-create-nested-many-without-abilities.input';
import { ability_proseCreateNestedManyWithoutAbilitiesInput } from '../ability-prose/ability-prose-create-nested-many-without-abilities.input';
import { pokemon_abilitiesCreateNestedManyWithoutAbilitiesInput } from '../pokemon-abilities/pokemon-abilities-create-nested-many-without-abilities.input';

@InputType()
export class abilitiesCreateWithoutAbility_flavor_textInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => generationsCreateNestedOneWithoutAbilitiesInput, {nullable:false})
    generations!: generationsCreateNestedOneWithoutAbilitiesInput;

    @Field(() => ability_changelogCreateNestedManyWithoutAbilitiesInput, {nullable:true})
    ability_changelog?: ability_changelogCreateNestedManyWithoutAbilitiesInput;

    @Field(() => ability_namesCreateNestedManyWithoutAbilitiesInput, {nullable:true})
    ability_names?: ability_namesCreateNestedManyWithoutAbilitiesInput;

    @Field(() => ability_proseCreateNestedManyWithoutAbilitiesInput, {nullable:true})
    ability_prose?: ability_proseCreateNestedManyWithoutAbilitiesInput;

    @Field(() => pokemon_abilitiesCreateNestedManyWithoutAbilitiesInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesCreateNestedManyWithoutAbilitiesInput;
}
