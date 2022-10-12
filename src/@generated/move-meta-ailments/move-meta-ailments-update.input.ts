import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { move_metaUpdateManyWithoutMove_meta_ailmentsNestedInput } from '../move-meta/move-meta-update-many-without-move-meta-ailments-nested.input';
import { move_meta_ailment_namesUpdateManyWithoutMove_meta_ailmentsNestedInput } from '../move-meta-ailment-names/move-meta-ailment-names-update-many-without-move-meta-ailments-nested.input';

@InputType()
export class move_meta_ailmentsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => move_metaUpdateManyWithoutMove_meta_ailmentsNestedInput, {nullable:true})
    move_meta?: move_metaUpdateManyWithoutMove_meta_ailmentsNestedInput;

    @Field(() => move_meta_ailment_namesUpdateManyWithoutMove_meta_ailmentsNestedInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesUpdateManyWithoutMove_meta_ailmentsNestedInput;
}
