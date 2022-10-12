import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ability_flavor_textUncheckedCreateNestedManyWithoutAbilitiesInput } from '../ability-flavor-text/ability-flavor-text-unchecked-create-nested-many-without-abilities.input';
import { ability_namesUncheckedCreateNestedManyWithoutAbilitiesInput } from '../ability-names/ability-names-unchecked-create-nested-many-without-abilities.input';
import { ability_proseUncheckedCreateNestedManyWithoutAbilitiesInput } from '../ability-prose/ability-prose-unchecked-create-nested-many-without-abilities.input';
import { pokemon_abilitiesUncheckedCreateNestedManyWithoutAbilitiesInput } from '../pokemon-abilities/pokemon-abilities-unchecked-create-nested-many-without-abilities.input';

@InputType()
export class abilitiesUncheckedCreateWithoutAbility_changelogInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => ability_flavor_textUncheckedCreateNestedManyWithoutAbilitiesInput, {nullable:true})
    ability_flavor_text?: ability_flavor_textUncheckedCreateNestedManyWithoutAbilitiesInput;

    @Field(() => ability_namesUncheckedCreateNestedManyWithoutAbilitiesInput, {nullable:true})
    ability_names?: ability_namesUncheckedCreateNestedManyWithoutAbilitiesInput;

    @Field(() => ability_proseUncheckedCreateNestedManyWithoutAbilitiesInput, {nullable:true})
    ability_prose?: ability_proseUncheckedCreateNestedManyWithoutAbilitiesInput;

    @Field(() => pokemon_abilitiesUncheckedCreateNestedManyWithoutAbilitiesInput, {nullable:true})
    pokemon_abilities?: pokemon_abilitiesUncheckedCreateNestedManyWithoutAbilitiesInput;
}
