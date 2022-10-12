import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_meta_ailmentsUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput } from '../move-meta-ailments/move-meta-ailments-update-one-required-without-move-meta-ailment-names-nested.input';

@InputType()
export class move_meta_ailment_namesUpdateWithoutLanguagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => move_meta_ailmentsUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput, {nullable:true})
    move_meta_ailments?: move_meta_ailmentsUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput;
}
