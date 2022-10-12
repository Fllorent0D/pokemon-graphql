import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { naturesUpdateOneRequiredWithoutNature_pokeathlon_statsNestedInput } from '../natures/natures-update-one-required-without-nature-pokeathlon-stats-nested.input';

@InputType()
export class nature_pokeathlon_statsUpdateWithoutPokeathlon_statsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    max_change?: IntFieldUpdateOperationsInput;

    @Field(() => naturesUpdateOneRequiredWithoutNature_pokeathlon_statsNestedInput, {nullable:true})
    natures?: naturesUpdateOneRequiredWithoutNature_pokeathlon_statsNestedInput;
}
