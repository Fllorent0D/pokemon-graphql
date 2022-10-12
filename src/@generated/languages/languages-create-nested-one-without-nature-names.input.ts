import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutNature_namesInput } from './languages-create-without-nature-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutNature_namesInput } from './languages-create-or-connect-without-nature-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutNature_namesInput {

    @Field(() => languagesCreateWithoutNature_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutNature_namesInput)
    create?: languagesCreateWithoutNature_namesInput;

    @Field(() => languagesCreateOrConnectWithoutNature_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutNature_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutNature_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
