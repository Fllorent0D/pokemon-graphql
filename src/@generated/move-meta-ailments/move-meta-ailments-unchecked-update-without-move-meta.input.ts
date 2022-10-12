import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_meta_ailment_namesUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput } from '../move-meta-ailment-names/move-meta-ailment-names-unchecked-update-many-without-move-meta-ailments-nested.input';

@InputType()
export class move_meta_ailmentsUncheckedUpdateWithoutMove_metaInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_meta_ailment_namesUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput;
}
