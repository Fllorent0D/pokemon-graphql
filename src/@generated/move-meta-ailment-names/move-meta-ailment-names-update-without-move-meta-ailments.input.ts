import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { languagesUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput } from '../languages/languages-update-one-required-without-move-meta-ailment-names-nested.input';

@InputType()
export class move_meta_ailment_namesUpdateWithoutMove_meta_ailmentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => languagesUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput, {nullable:true})
    languages?: languagesUpdateOneRequiredWithoutMove_meta_ailment_namesNestedInput;
}
