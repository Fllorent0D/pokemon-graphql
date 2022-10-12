import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaCreateNestedManyWithoutMove_meta_ailmentsInput } from '../move-meta/move-meta-create-nested-many-without-move-meta-ailments.input';

@InputType()
export class move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_metaCreateNestedManyWithoutMove_meta_ailmentsInput, {nullable:true})
    move_meta?: move_metaCreateNestedManyWithoutMove_meta_ailmentsInput;
}
