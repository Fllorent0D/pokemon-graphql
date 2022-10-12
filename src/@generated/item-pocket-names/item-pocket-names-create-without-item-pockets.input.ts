import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutItem_pocket_namesInput } from '../languages/languages-create-nested-one-without-item-pocket-names.input';

@InputType()
export class item_pocket_namesCreateWithoutItem_pocketsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutItem_pocket_namesInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutItem_pocket_namesInput;
}
