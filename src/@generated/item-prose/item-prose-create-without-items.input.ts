import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_proseInput } from '../languages/languages-create-nested-one-without-item-prose.input';

@InputType()
export class item_proseCreateWithoutItemsInput {

    @Field(() => String, {nullable:true})
    short_effect?: string;

    @Field(() => String, {nullable:true})
    effect?: string;

    @Field(() => languagesCreateNestedOneWithoutItem_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_proseInput;
}
