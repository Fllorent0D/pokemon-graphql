import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_flag_proseInput } from './languages-create-without-item-flag-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_flag_proseInput } from './languages-create-or-connect-without-item-flag-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutItem_flag_proseInput {

    @Field(() => languagesCreateWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_flag_proseInput)
    create?: languagesCreateWithoutItem_flag_proseInput;

    @Field(() => languagesCreateOrConnectWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_flag_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_flag_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
