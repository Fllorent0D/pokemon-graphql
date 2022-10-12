import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesCreateNestedManyWithoutMove_meta_ailmentsInput } from '../move-meta-ailment-names/move-meta-ailment-names-create-nested-many-without-move-meta-ailments.input';

@InputType()
export class move_meta_ailmentsCreateWithoutMove_metaInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_meta_ailment_namesCreateNestedManyWithoutMove_meta_ailmentsInput, {nullable:true})
    move_meta_ailment_names?: move_meta_ailment_namesCreateNestedManyWithoutMove_meta_ailmentsInput;
}
