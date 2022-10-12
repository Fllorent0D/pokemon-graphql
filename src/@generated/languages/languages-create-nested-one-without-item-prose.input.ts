import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_proseInput } from './languages-create-without-item-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_proseInput } from './languages-create-or-connect-without-item-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutItem_proseInput {

    @Field(() => languagesCreateWithoutItem_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_proseInput)
    create?: languagesCreateWithoutItem_proseInput;

    @Field(() => languagesCreateOrConnectWithoutItem_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
