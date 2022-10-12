import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { pokeathlon_statsUpdateOneRequiredWithoutNature_pokeathlon_statsNestedInput } from '../pokeathlon-stats/pokeathlon-stats-update-one-required-without-nature-pokeathlon-stats-nested.input';

@InputType()
export class nature_pokeathlon_statsUpdateWithoutNaturesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    max_change?: IntFieldUpdateOperationsInput;

    @Field(() => pokeathlon_statsUpdateOneRequiredWithoutNature_pokeathlon_statsNestedInput, {nullable:true})
    pokeathlon_stats?: pokeathlon_statsUpdateOneRequiredWithoutNature_pokeathlon_statsNestedInput;
}
