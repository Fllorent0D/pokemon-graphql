import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { regionsUpdateOneWithoutPokedexesNestedInput } from '../regions/regions-update-one-without-pokedexes-nested.input';
import { generationsUpdateManyWithoutPokedexesNestedInput } from '../generations/generations-update-many-without-pokedexes-nested.input';
import { pokemon_dex_numbersUpdateManyWithoutPokedexesNestedInput } from '../pokemon-dex-numbers/pokemon-dex-numbers-update-many-without-pokedexes-nested.input';
import { version_groupsUpdateManyWithoutPokedexesNestedInput } from '../version-groups/version-groups-update-many-without-pokedexes-nested.input';

@InputType()
export class pokedexesUpdateWithoutPokedex_proseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => regionsUpdateOneWithoutPokedexesNestedInput, {nullable:true})
    regions?: regionsUpdateOneWithoutPokedexesNestedInput;

    @Field(() => generationsUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    generations?: generationsUpdateManyWithoutPokedexesNestedInput;

    @Field(() => pokemon_dex_numbersUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    pokemon_dex_numbers?: pokemon_dex_numbersUpdateManyWithoutPokedexesNestedInput;

    @Field(() => version_groupsUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    version_groups?: version_groupsUpdateManyWithoutPokedexesNestedInput;
}
