import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_meta_ailment_namesInput } from '../languages/languages-create-nested-one-without-move-meta-ailment-names.input';

@InputType()
export class move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutMove_meta_ailment_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_meta_ailment_namesInput;
}
