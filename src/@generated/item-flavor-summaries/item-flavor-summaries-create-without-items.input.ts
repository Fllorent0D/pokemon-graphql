import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_flavor_summariesInput } from '../languages/languages-create-nested-one-without-item-flavor-summaries.input';

@InputType()
export class item_flavor_summariesCreateWithoutItemsInput {

    @Field(() => String, {nullable:true})
    flavor_summary?: string;

    @Field(() => languagesCreateNestedOneWithoutItem_flavor_summariesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_flavor_summariesInput;
}
