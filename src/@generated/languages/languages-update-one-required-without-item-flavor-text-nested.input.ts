import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_flavor_textInput } from './languages-create-without-item-flavor-text.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_flavor_textInput } from './languages-create-or-connect-without-item-flavor-text.input';
import { languagesUpsertWithoutItem_flavor_textInput } from './languages-upsert-without-item-flavor-text.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutItem_flavor_textInput } from './languages-update-without-item-flavor-text.input';

@InputType()
export class languagesUpdateOneRequiredWithoutItem_flavor_textNestedInput {

    @Field(() => languagesCreateWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_flavor_textInput)
    create?: languagesCreateWithoutItem_flavor_textInput;

    @Field(() => languagesCreateOrConnectWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_flavor_textInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_flavor_textInput;

    @Field(() => languagesUpsertWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => languagesUpsertWithoutItem_flavor_textInput)
    upsert?: languagesUpsertWithoutItem_flavor_textInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutItem_flavor_textInput, {nullable:true})
    @Type(() => languagesUpdateWithoutItem_flavor_textInput)
    update?: languagesUpdateWithoutItem_flavor_textInput;
}
