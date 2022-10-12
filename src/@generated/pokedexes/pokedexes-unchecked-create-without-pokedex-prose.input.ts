import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { generationsUncheckedCreateNestedManyWithoutPokedexesInput } from '../generations/generations-unchecked-create-nested-many-without-pokedexes.input';
import { pokemon_dex_numbersUncheckedCreateNestedManyWithoutPokedexesInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-unchecked-create-nested-many-without-pokedexes.input';
import { version_groupsUncheckedCreateNestedManyWithoutPokedexesInput } from '../version-groups/version-groups-unchecked-create-nested-many-without-pokedexes.input';

@InputType()
export class pokedexesUncheckedCreateWithoutPokedex_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    region_id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => generationsUncheckedCreateNestedManyWithoutPokedexesInput, {nullable:true})
    generations?: generationsUncheckedCreateNestedManyWithoutPokedexesInput;

    @Field(() => pokemon_dex_numbersUncheckedCreateNestedManyWithoutPokedexesInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersUncheckedCreateNestedManyWithoutPokedexesInput;

    @Field(() => version_groupsUncheckedCreateNestedManyWithoutPokedexesInput, {nullable:true})
    version_groups?: version_groupsUncheckedCreateNestedManyWithoutPokedexesInput;
}
