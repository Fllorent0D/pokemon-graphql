import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { move_metaUncheckedCreateNestedManyWithoutMove_meta_ailmentsInput } from '../move-meta/move-meta-unchecked-create-nested-many-without-move-meta-ailments.input';
import { move_meta_ailment_namesUncheckedCreateNestedManyWithoutMove_meta_ailmentsInput } from '../move-meta-ailment-names/move-meta-ailment-names-unchecked-create-nested-many-without-move-meta-ailments.input';

@InputType()
export class move_meta_ailmentsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_metaUncheckedCreateNestedManyWithoutMove_meta_ailmentsInput, {nullable:true})
    move_meta?: move_metaUncheckedCreateNestedManyWithoutMove_meta_ailmentsInput;

    @Field(() => move_meta_ailment_namesUncheckedCreateNestedManyWithoutMove_meta_ailmentsInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesUncheckedCreateNestedManyWithoutMove_meta_ailmentsInput;
}
