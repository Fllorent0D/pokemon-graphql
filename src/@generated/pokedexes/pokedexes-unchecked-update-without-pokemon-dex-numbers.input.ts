import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { generationsUncheckedUpdateManyWithoutPokedexesNestedInput } from '../generations/generations-unchecked-update-many-without-pokedexes-nested.input';
import { pokedex_proseUncheckedUpdateManyWithoutPokedexesNestedInput } from '../pokedex-prose/pokedex-prose-unchecked-update-many-without-pokedexes-nested.input';
import { version_groupsUncheckedUpdateManyWithoutPokedexesNestedInput } from '../version-groups/version-groups-unchecked-update-many-without-pokedexes-nested.input';

@InputType()
export class pokedexesUncheckedUpdateWithoutPokemon_dex_numbersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    region_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => generationsUncheckedUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    generations?: generationsUncheckedUpdateManyWithoutPokedexesNestedInput;

    @Field(() => pokedex_proseUncheckedUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    pokedex_prose?: pokedex_proseUncheckedUpdateManyWithoutPokedexesNestedInput;

    @Field(() => version_groupsUncheckedUpdateManyWithoutPokedexesNestedInput, {nullable:true})
    version_groups?: version_groupsUncheckedUpdateManyWithoutPokedexesNestedInput;
}
