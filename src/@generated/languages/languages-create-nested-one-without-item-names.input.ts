import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_namesInput } from './languages-create-without-item-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_namesInput } from './languages-create-or-connect-without-item-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutItem_namesInput {

    @Field(() => languagesCreateWithoutItem_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_namesInput)
    create?: languagesCreateWithoutItem_namesInput;

    @Field(() => languagesCreateOrConnectWithoutItem_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
