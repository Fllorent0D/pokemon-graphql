import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsCreateNestedOneWithoutMove_meta_ailment_namesInput } from '../move-meta-ailments/move-meta-ailments-create-nested-one-without-move-meta-ailment-names.input';

@InputType()
export class move_meta_ailment_namesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => move_meta_ailmentsCreateNestedOneWithoutMove_meta_ailment_namesInput, {nullable:false})
    move_meta_ailments!: move_meta_ailmentsCreateNestedOneWithoutMove_meta_ailment_namesInput;
}
