import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsUncheckedCreateNestedManyWithoutPokedexesInput } from '../generations/generations-unchecked-create-nested-many-without-pokedexes.input';
import { pokedex_proseUncheckedCreateNestedManyWithoutPokedexesInput } from '../pokedex-prose/pokedex-prose-unchecked-create-nested-many-without-pokedexes.input';
import { version_groupsUncheckedCreateNestedManyWithoutPokedexesInput } from '../version-groups/version-groups-unchecked-create-nested-many-without-pokedexes.input';

@InputType()
export class pokedexesUncheckedCreateWithoutPokemon_dex_numbersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => generationsUncheckedCreateNestedManyWithoutPokedexesInput, {nullable:true})
    generations?: generationsUncheckedCreateNestedManyWithoutPokedexesInput;

    @Field(() => pokedex_proseUncheckedCreateNestedManyWithoutPokedexesInput, {nullable:true})
    pokedex_prose?: pokedex_proseUncheckedCreateNestedManyWithoutPokedexesInput;

    @Field(() => version_groupsUncheckedCreateNestedManyWithoutPokedexesInput, {nullable:true})
    version_groups?: version_groupsUncheckedCreateNestedManyWithoutPokedexesInput;
}
