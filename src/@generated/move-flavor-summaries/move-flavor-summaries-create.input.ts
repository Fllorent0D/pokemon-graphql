import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutMove_flavor_summariesInput } from '../languages/languages-create-nested-one-without-move-flavor-summaries.input';
import { movesCreateNestedOneWithoutMove_flavor_summariesInput } from '../moves/moves-create-nested-one-without-move-flavor-summaries.input';

@InputType()
export class move_flavor_summariesCreateInput {

    @Field(() => String, {nullable:true})
    flavor_summary?: string;

    @Field(() => languagesCreateNestedOneWithoutMove_flavor_summariesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutMove_flavor_summariesInput;

    @Field(() => movesCreateNestedOneWithoutMove_flavor_summariesInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMove_flavor_summariesInput;
}
