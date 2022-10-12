import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_flavor_summariesInput } from '../languages/languages-create-nested-one-without-move-flavor-summaries.input';

@InputType()
export class move_flavor_summariesCreateWithoutMovesInput {

    @Field(() => String, {nullable:true})
    flavor_summary?: string;

    @Field(() => languagesCreateNestedOneWithoutMove_flavor_summariesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_flavor_summariesInput;
}
