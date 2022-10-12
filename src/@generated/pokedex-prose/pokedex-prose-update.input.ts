import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutPokedex_proseNestedInput } from '../languages/languages-update-one-required-without-pokedex-prose-nested.input';
import { pokedexesUpdateOneRequiredWithoutPokedex_proseNestedInput } from '../pokedexes/pokedexes-update-one-required-without-pokedex-prose-nested.input';

@InputType()
export class pokedex_proseUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutPokedex_proseNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutPokedex_proseNestedInput;

    @Field(() => pokedexesUpdateOneRequiredWithoutPokedex_proseNestedInput, {nullable:true})
    pokedexes?: pokedexesUpdateOneRequiredWithoutPokedex_proseNestedInput;
}
