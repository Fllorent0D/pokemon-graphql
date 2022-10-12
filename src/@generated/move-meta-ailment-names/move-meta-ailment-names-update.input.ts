import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput } from '../languages/languages-update-one-required-without-move-meta-ailment-names-nested.input';
import { move_meta_ailmentsUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput } from '../move-meta-ailments/move-meta-ailments-update-one-required-without-move-meta-ailment-names-nested.input';

@InputType()
export class move_meta_ailment_namesUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput;

    @Field(() => move_meta_ailmentsUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput, {nullable:true})
    move_meta_ailments?: move_meta_ailmentsUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput;
}
