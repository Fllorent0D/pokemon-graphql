import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutType_namesInput } from './languages-create-without-type-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutType_namesInput } from './languages-create-or-connect-without-type-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutType_namesInput {

    @Field(() => languagesCreateWithoutType_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutType_namesInput)
    create?: languagesCreateWithoutType_namesInput;

    @Field(() => languagesCreateOrConnectWithoutType_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutType_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutType_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
