import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { regionsUpdateOneWithoutPokedexesNestedInput } from '../regions/regions-update-one-without-pokedexes-nested.input';
import { generationsUpdateManyWithoutPokedexesNestedInput } from '../generations/generations-update-many-without-pokedexes-nested.input';
import { pokedex_proseUpdateManyWithoutPokedexesNestedInput } from '../pokedex-prose/pokedex-prose-update-many-without-pokedexes-nested.input';
import { pokemon_dex_numbersUpdateManyWithoutPokedexesNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update-many-without-pokedexes-nested.input';
import { version_groupsUpdateManyWithoutPokedexesNestedInput } from '../version-groups/version-groups-update-many-without-pokedexes-nested.input';

@InputType()
export class pokedexesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => regionsUpdateOneWithoutPokedexesNestedInput, {nullable:true})
    regions?: regionsUpdateOneWithoutPokedexesNestedInput;

    @Field(() => generationsUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    generations?: generationsUpdateManyWithoutPokedexesNestedInput;

    @Field(() => pokedex_proseUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    pokedex_prose?: pokedex_proseUpdateManyWithoutPokedexesNestedInput;

    @Field(() => pokemon_dex_numbersUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersUpdateManyWithoutPokedexesNestedInput;

    @Field(() => version_groupsUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateManyWithoutPokedexesNestedInput;
}
