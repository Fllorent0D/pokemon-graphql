import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_metaUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-move-meta-ailments-nested.input';
import { move_meta_ailment_namesUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput } from '../move-meta-ailment-names/move-meta-ailment-names-unchecked-update-many-without-move-meta-ailments-nested.input';

@InputType()
export class move_meta_ailmentsUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_metaUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput, {nullable:true})
    move_meta?: move_metaUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput;

    @Field(() => move_meta_ailment_namesUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput;
}
