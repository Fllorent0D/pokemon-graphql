import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesCreateNestedOneWithoutMove_flavor_summariesInput } from '../moves/moves-create-nested-one-without-move-flavor-summaries.input';

@InputType()
export class move_flavor_summariesCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    flavor_summary?: string;

    @Field(() => movesCreateNestedOneWithoutMove_flavor_summariesInput, {nullable:false})
    moves!: movesCreateNestedOneWithoutMove_flavor_summariesInput;
}
