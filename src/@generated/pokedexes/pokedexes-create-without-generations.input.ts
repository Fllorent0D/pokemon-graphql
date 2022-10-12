import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateNestedOneWithoutPokedexesInput } from '../regions/regions-create-nested-one-without-pokedexes.input';
import { pokedex_proseCreateNestedManyWithoutPokedexesInput } from '../pokedex-prose/pokedex-prose-create-nested-many-without-pokedexes.input';
import { pokemon_dex_numbersCreateNestedManyWithoutPokedexesInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-create-nested-many-without-pokedexes.input';
import { version_groupsCreateNestedManyWithoutPokedexesInput } from '../version-groups/version-groups-create-nested-many-without-pokedexes.input';

@InputType()
export class pokedexesCreateWithoutGenerationsInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => regionsCreateNestedOneWithoutPokedexesInput, {nullable:true})
    regions?: regionsCreateNestedOneWithoutPokedexesInput;

    @Field(() => pokedex_proseCreateNestedManyWithoutPokedexesInput, {nullable:true})
    pokedex_prose?: pokedex_proseCreateNestedManyWithoutPokedexesInput;

    @Field(() => pokemon_dex_numbersCreateNestedManyWithoutPokedexesInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersCreateNestedManyWithoutPokedexesInput;

    @Field(() => version_groupsCreateNestedManyWithoutPokedexesInput, {nullable:true})
    version_groups?: version_groupsCreateNestedManyWithoutPokedexesInput;
}
