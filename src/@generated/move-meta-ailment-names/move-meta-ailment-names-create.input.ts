import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_meta_ailment_namesInput } from '../languages/languages-create-nested-one-without-move-meta-ailment-names.input';
import { move_meta_ailmentsCreateNestedOneWithoutMove_meta_ailment_namesInput } from '../move-meta-ailments/move-meta-ailments-create-nested-one-without-move-meta-ailment-names.input';

@InputType()
export class move_meta_ailment_namesCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_meta_ailment_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_meta_ailment_namesInput;

    @Field(() => move_meta_ailmentsCreateNestedOneWithoutMove_meta_ailment_namesInput, {nullable:false})
    move_meta_ailments!: move_meta_ailmentsCreateNestedOneWithoutMove_meta_ailment_namesInput;
}
